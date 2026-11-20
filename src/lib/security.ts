/**
 * Shared security helpers: bot/probe detection, client IP, same-origin checks.
 * Pure functions with no Node-only APIs, so they work in the proxy and in route handlers.
 */
import { SITE_URL } from "@/lib/site";

/**
 * Paths only attackers and vulnerability scanners request on this site. The old WordPress site was a constant target
 * for these, and they keep coming after the migration. Answering them in the proxy (before any page renders) is cheap
 * and keeps our logs and 404 analytics clean. `.well-known` is deliberately NOT here (security.txt lives there).
 */
export const PROBE_PATHS =
  /^\/(?:wp-admin|wp-login\.php|xmlrpc\.php|wp-json|wp-config|phpmyadmin|pma|myadmin|adminer|cgi-bin|vendor\/phpunit|actuator|server-status|boaform|HNAP1|\.env|\.git|\.svn|\.hg|\.aws|\.ssh|\.ds_store|\.htaccess|\.htpasswd)(?:[/.\-_?]|$)/i;

/**
 * User agents of attack tooling and of scrapers that ignore robots.txt.
 * Search engines (Googlebot, Bingbot) and AI answer engines (GPTBot, PerplexityBot, ClaudeBot ...) are NOT listed:
 * we want them, because answer-engine visibility is part of the SEO plan.
 */
export const BAD_USER_AGENTS =
  /(sqlmap|nikto|nmap|masscan|zgrab|nuclei|dirbuster|gobuster|wpscan|acunetix|netsparker|havij|zmeu|jaeles|w3af|libwww-perl|bytespider|mj12bot|blexbot)/i;

/**
 * Best-effort client IP. Only trustworthy behind a proxy that overwrites these headers (Vercel, Cloudflare,
 * nginx with `proxy_set_header`). On a bare server a client can spoof them, which only weakens rate limiting.
 */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headers.get("x-real-ip") || "unknown";
}

/**
 * CSRF defence for state-changing requests: the request must come from our own pages.
 * Browsers always send `Origin` on cross-site and same-site POSTs, and `Sec-Fetch-Site` on every request.
 * Requests with neither (curl, scripts) are rejected; the enquiry endpoint is only meant for our own forms.
 */
export function isSameOrigin(headers: Headers): boolean {
  const own = new Set<string>([new URL(SITE_URL).host]);
  const host = headers.get("host");
  if (host) own.add(host);

  const origin = headers.get("origin");
  if (origin) {
    try {
      return own.has(new URL(origin).host);
    } catch {
      return false;
    }
  }
  const fetchSite = headers.get("sec-fetch-site");
  return fetchSite === "same-origin" || fetchSite === "none";
}
