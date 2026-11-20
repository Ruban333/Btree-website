import "server-only";
import { getEnv } from "@/lib/env";

/**
 * Cloudflare Turnstile verification (free, privacy-friendly CAPTCHA alternative; no puzzles for most people).
 * Off by default: set TURNSTILE_SECRET_KEY on the server and NEXT_PUBLIC_TURNSTILE_SITE_KEY for the browser to turn it on.
 * When on, it FAILS CLOSED: no token, or Cloudflare unreachable, means the enquiry is refused (the form then shows
 * the phone number), because a spam flood costs more than a few lost web enquiries.
 */
export const turnstileEnabled = () => Boolean(getEnv().TURNSTILE_SECRET_KEY);

export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = getEnv().TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token || token.length > 2048) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "unknown") body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    signal: AbortSignal.timeout(5000),
  }).catch(() => null);
  if (!res?.ok) return false;

  const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
  return data?.success === true;
}
