/**
 * HTTP security headers for every response. Imported by next.config.ts, so this file must not use "@/" aliases.
 *
 * Why a header-based CSP and not a per-request "nonce" CSP: nonces force every page to render dynamically on every
 * request, which would throw away the static, CDN-cached pages that make this site fast (a ranking factor).
 * The trade-off is that script-src must allow 'unsafe-inline' (Next.js injects small inline bootstrap scripts).
 * The policy still blocks the dangerous parts: loading scripts from other origins, plugins, framing the site,
 * form hijacking and `<base>` tag tricks. See docs/SECURITY-AND-SEO.md.
 */
const isDev = process.env.NODE_ENV !== "production";
const TURNSTILE = "https://challenges.cloudflare.com";

// Third parties are listed only when the feature that needs them is switched on (least privilege).
const turnstile = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? [TURNSTILE] : [];

/**
 * When you add a feature that loads from another origin, add that origin here, in the matching directive:
 *   Google Analytics 4  -> script-src "https://www.googletagmanager.com", connect-src "https://*.google-analytics.com"
 *   Google Maps embed   -> frame-src "https://www.google.com"
 *   YouTube testimonials-> frame-src "https://www.youtube-nocookie.com"
 *   Remote images/CDN   -> img-src "https://your-cdn.example"
 */
const policy: Record<string, string[]> = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : []), ...turnstile],
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": ["'self'", "data:", "blob:"],
  "font-src": ["'self'", "data:"],
  "connect-src": ["'self'", ...turnstile, ...(isDev ? ["ws:", "wss:"] : [])],
  "frame-src": turnstile.length ? turnstile : ["'none'"],
  "media-src": ["'self'"],
  "worker-src": ["'self'", "blob:"],
  "manifest-src": ["'self'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
};

export function contentSecurityPolicy(): string {
  const parts = Object.entries(policy).map(([name, sources]) => `${name} ${sources.join(" ")}`);
  if (!isDev) parts.push("upgrade-insecure-requests");
  return parts.join("; ");
}

export const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy() },
  // HTTPS only for a year. includeSubDomains/preload are intentionally off: turning them on would also force every
  // other subdomain (old blog, mail, staging) onto HTTPS, and preload is very hard to undo.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" }, // legacy twin of frame-ancestors for old browsers
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site never needs these powerful browser features, so no embedded script may ask for them either.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

/** API responses must never be cached or indexed. */
export const apiHeaders = [
  { key: "Cache-Control", value: "no-store" },
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
];
