import { NextResponse } from "next/server";
import { getEnv } from "@/lib/env";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp, isSameOrigin } from "@/lib/security";
import { turnstileEnabled, verifyTurnstile } from "@/lib/turnstile";
import { enquirySchema, judge } from "@/lib/validation";

/**
 * Receives enquiry/lead forms. Defence in depth, cheapest check first:
 *  1. same-origin (CSRF)  2. JSON only  3. size cap  4. per-IP and global rate limits
 *  5. strict schema       6. too-fast submit (bot timing)  7. Turnstile (when enabled)
 *  8. honeypot + spam/link/script heuristics  9. must contain a reachable phone or email.
 *
 * Bots caught by steps 6 and 8 get a normal "ok" so they learn nothing and keep wasting effort.
 * Nothing personal is ever written to the logs. Leads go to ENQUIRY_WEBHOOK_URL; with none configured this returns
 * 503 so the form shows an error instead of silently losing a lead.
 */
const MAX_BODY = 10_000;
const MIN_FILL_MS = 1500; // browser autofill can finish a short form in about two seconds; bots take milliseconds

const reply = (body: Record<string, unknown>, status = 200, headers: Record<string, string> = {}) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });

export async function POST(request: Request) {
  const h = request.headers;

  if (!isSameOrigin(h)) return reply({ error: "forbidden" }, 403);
  if (!(h.get("content-type") ?? "").toLowerCase().startsWith("application/json")) return reply({ error: "unsupported_media_type" }, 415);
  if (Number(h.get("content-length") ?? "0") > MAX_BODY) return reply({ error: "too_large" }, 413);

  const ip = clientIp(h);
  const perIp = rateLimit(`enquiry:ip:${ip}`, 5, 10 * 60_000);
  const everyone = rateLimit("enquiry:all", 300, 60 * 60_000);
  if (!perIp.ok || !everyone.ok) {
    const wait = Math.max(perIp.retryAfterSeconds, everyone.retryAfterSeconds);
    return reply({ error: "rate_limited" }, 429, { "Retry-After": String(wait) });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return reply({ error: "too_large" }, 413);
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return reply({ error: "invalid" }, 400);
  }
  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) return reply({ error: "invalid" }, 400);
  const { source, page, fields, elapsedMs } = parsed.data;

  if (elapsedMs < MIN_FILL_MS) {
    console.warn(`[enquiry] dropped (too-fast) source=${source}`);
    return reply({ ok: true });
  }

  if (turnstileEnabled() && !(await verifyTurnstile(fields["cf-turnstile-response"], ip))) {
    return reply({ error: "challenge_failed" }, 400);
  }

  const verdict = judge(parsed.data);
  if (verdict.kind === "spam") {
    console.warn(`[enquiry] dropped (${verdict.reason}) source=${source}`);
    return reply({ ok: true });
  }
  if (verdict.kind === "reject") return reply({ error: "contact_required" }, 400);

  const hook = getEnv().ENQUIRY_WEBHOOK_URL;
  if (!hook) {
    console.warn("[enquiry] ENQUIRY_WEBHOOK_URL is not set; a valid lead was NOT stored");
    return reply({ error: "not_configured" }, 503);
  }

  const res = await fetch(hook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ source, page, receivedAt: new Date().toISOString(), fields: verdict.fields }),
    redirect: "error", // a webhook that redirects could be steered at an internal address
    signal: AbortSignal.timeout(8000),
  }).catch(() => null);

  if (!res?.ok) return reply({ error: "upstream_failed" }, 502);
  return reply({ ok: true });
}
