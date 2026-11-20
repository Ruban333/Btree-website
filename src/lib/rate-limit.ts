import "server-only";

/**
 * Sliding-window rate limiter (in memory).
 *
 * IMPORTANT LIMIT: the counters live in this server process. That is correct for one long-running Node server and
 * reduces abuse on serverless, but it does NOT share state between instances. For production traffic at scale,
 * swap `hit()` for a shared store (Upstash Redis / Vercel KV) behind the same signature; nothing else changes.
 */

type Result = { ok: boolean; remaining: number; retryAfterSeconds: number };

const buckets = new Map<string, number[]>();
const MAX_KEYS = 10_000; // hard cap so an attacker rotating IPs cannot grow memory without bound

export function rateLimit(key: string, limit: number, windowMs: number): Result {
  const now = Date.now();
  const cutoff = now - windowMs;

  if (buckets.size > MAX_KEYS) {
    for (const [k, hits] of buckets) if (hits.every((t) => t <= cutoff)) buckets.delete(k);
    if (buckets.size > MAX_KEYS) buckets.clear(); // still too big: fail open rather than leak memory
  }

  const hits = (buckets.get(key) ?? []).filter((t) => t > cutoff);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return { ok: false, remaining: 0, retryAfterSeconds: Math.max(1, Math.ceil((hits[0] + windowMs - now) / 1000)) };
  }
  hits.push(now);
  buckets.set(key, hits);
  return { ok: true, remaining: limit - hits.length, retryAfterSeconds: 0 };
}
