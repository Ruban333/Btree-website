# Security, bot protection and SEO: what exists and why

An education site has three things worth attacking or abusing: the **enquiry forms** (they collect names, phone
numbers and emails of students, many of them young adults), the **brand's search visibility** (competitors and spammers
exploit weak sites), and the **server itself** (every public site is scanned within hours of going live).
This document says what each control is, which file implements it, and why it is there.

## 1. At a glance

| Risk | Control | File |
| --- | --- | --- |
| Scanners probing `/wp-login.php`, `/.env`, `/.git` | Instant 404 before any page renders | `src/proxy.ts`, `src/lib/security.ts` |
| Attack tools and scrapers that ignore robots.txt | 403 by User-Agent | `src/proxy.ts`, `src/lib/security.ts` |
| Cross-site request forgery on the form API | Same-origin check (twice) | `src/proxy.ts`, `src/app/api/enquiry/route.ts` |
| Form spam and bot floods | Rate limits, honeypot, timing, link/script heuristics, optional Turnstile | `src/lib/rate-limit.ts`, `src/lib/validation.ts`, `src/lib/turnstile.ts` |
| Malformed or malicious form input | Strict schema, size caps, invisible-character stripping | `src/lib/validation.ts` |
| Script injection (XSS), clickjacking, plugin abuse | Content Security Policy and browser security headers | `src/lib/security-headers.ts`, `next.config.ts` |
| Leaked secrets | `server-only` modules, validated env, `.env*` git-ignored | `src/lib/env.ts`, `.gitignore`, `.env.example` |
| Vulnerable dependencies | `npm audit` gate, Dependabot, CodeQL, security lint rules | `package.json`, `.github/`, `eslint.config.mjs` |
| Error pages leaking internals | Generic error page, no stack shown | `src/app/error.tsx` |
| Researchers who find a bug | `security.txt` | `public/.well-known/security.txt` |
| Duplicate/thin pages wasting crawl budget | Canonical host redirect, `robots` rules, noindex 404 | `next.config.ts`, `src/app/robots.ts`, `src/app/not-found.tsx` |
| Slow discovery of new pages | IndexNow | `scripts/indexnow.mjs`, `public/<key>.txt` |
| Weak link previews | Per-course share images | `src/app/courses/[slug]/opengraph-image.tsx` |

## 2. Bot protection ("bot network")

Traffic to a public site falls into four groups, and each gets different treatment:

1. **Search engines** (Googlebot, Bingbot): welcome. Never blocked.
2. **AI answer engines** (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended ...): welcome. Being quoted by
   ChatGPT, Perplexity and Google AI Overviews is part of the SEO plan, so `robots.txt` allows them explicitly.
3. **Bandwidth-heavy scrapers** (Bytespider, MJ12bot, BLEXBot): they give nothing back. Listed in `robots.txt` *and*
   refused by the proxy, because many ignore robots.txt.
4. **Attackers and scanners**: vulnerability tools (sqlmap, Nikto, Nuclei ...) and probes for WordPress and config
   files. The old WordPress site was a constant target and the probes continue after migration. They get a 404/403
   straight from the proxy, which is cheap and keeps analytics free of fake 404s.

**Limit:** User-Agent can be faked. This stops lazy tooling, not a determined attacker. Real protection against a
determined bot network needs a network-level service (see section 8).

## 3. Why the enquiry form has nine layers

A contact form is the most abused part of any site. A bot that finds it can flood your CRM, burn webhook quota,
relay spam through you, or probe for injection. No single check is enough, so `/api/enquiry` applies them in
order, cheapest first, and stops at the first failure:

1. **Same-origin (CSRF).** A malicious page cannot make a visitor's browser post to your form, because browsers
   attach the real `Origin`. curl/scripts with no origin are refused.
2. **JSON only, 3. size cap (10 KB).** Rejects oversize and wrong-format bodies before parsing them.
4. **Rate limits.** 5 enquiries per IP per 10 minutes, 300 per hour overall. A real family sharing one phone
   will not hit this; a bot will.
5. **Strict schema (zod).** Unknown keys, odd field names or a non-slug `source` are rejected. Accepting "any JSON" is
   how injection happens.
6. **Timing.** Humans take seconds to fill a form; bots take milliseconds. Under 1.5 s is dropped (the threshold allows
   browser autofill).
7. **Turnstile (optional).** Cloudflare's free, privacy-friendly CAPTCHA replacement. Off until you set the keys.
8. **Honeypot and spam heuristics.** A hidden field only bots fill; `<script>`, `<a href>` or 3+ links are dropped.
9. **Must contain a reachable contact.** A valid Indian mobile (`+91`, `0` prefix and spaces handled) or a valid
   email. Fake numbers like `1234567890` are rejected.

Layers 6 and 8 answer **"ok"** to the bot, so it believes it succeeded and does not adapt. The lead is simply never
forwarded. Nothing personal is ever written to logs; only the reason and the form name.

If no `ENQUIRY_WEBHOOK_URL` is configured the API returns 503 and the form shows the phone number. **An honest error is
better than a form that says "thank you" and loses the student's number.**

## 4. Content Security Policy and headers

The CSP tells the browser exactly which origins may load scripts, styles, images, frames and forms. If an attacker
ever injects HTML (through a future CMS field, say), the browser refuses to load their script from another origin.

**One honest trade-off.** The strictest CSP uses a fresh "nonce" per request, but Next.js can only apply nonces
to *dynamically rendered* pages. That would turn every page from a static, CDN-cached file into a per-request render:
slower, and slower pages rank worse. So this site uses a header-based CSP with `script-src 'self' 'unsafe-inline'`
(Next.js injects small inline bootstrap scripts). It still blocks: scripts from other origins, plugins (`object-src
'none'`), framing the site (`frame-ancestors 'none'`, clickjacking), form hijacking (`form-action 'self'`) and `<base>`
tricks. When the Django backend and a login arrive, re-evaluate: authenticated pages are dynamic anyway and can use
nonces.

Other headers: **HSTS** (HTTPS only for a year; `includeSubDomains`/`preload` are off on purpose because they would
force every other subdomain onto HTTPS and are hard to undo), **X-Content-Type-Options**, **Referrer-Policy**,
**Permissions-Policy** (camera, microphone, location, payment off: the site never needs them),
**Cross-Origin-Opener-Policy**, **X-Frame-Options** (old-browser twin of frame-ancestors).

**When you add a third party you must allow it in `src/lib/security-headers.ts`**, or the browser will block it:
Google Analytics (`script-src`, `connect-src`), Google Maps or YouTube (`frame-src`), a CDN (`img-src`).
The file lists what to add. Turnstile is only allowed when its site key is configured (least privilege).

## 5. Secrets and configuration

- `src/lib/env.ts` validates server variables with zod and is marked `server-only`: **the build fails if any
  browser component imports it**, so a webhook URL or secret can never be bundled into JavaScript visitors download.
- Only variables starting `NEXT_PUBLIC_` reach the browser. Keep secrets out of that prefix.
- `.env*` is git-ignored; `.env.example` is the tracked template.
- The webhook fetch refuses redirects (a redirecting URL could be steered at an internal address) and has an 8 s timeout.
- Rotate the webhook URL and Turnstile secret if a developer leaves.

## 6. Dependencies

Most real-world breaches come through outdated packages, not clever attacks.

- `npm run security:audit` fails on high/critical advisories in production dependencies. Today: **0 vulnerabilities**
  (the lint-toolchain advisories were fixed with `npm audit fix`).
- **Dependabot** opens weekly pull requests for updates; **CodeQL** statically analyses the code on GitHub.
  (These need the repo on GitHub; the files are ready.)
- **eslint-plugin-security** flags `eval`, unsafe regular expressions (ReDoS), invisible/bidirectional-text
  tricks and similar patterns while you write code.
- `zod` and `server-only` are the two runtime dependencies added for security. Both are small and widely used.

## 7. SEO additions in this change

- **Honest sitemap.** Pages no longer claim "modified now" on every request; Google learns to ignore dishonest
  `lastmod`. Add real dates when the CMS provides `last_published_at`.
- **robots.txt:** blocks `/api/` and `?q=` search URLs (thin duplicates), keeps AI answer engines in, blocks the three scrapers.
- **Custom 404:** returns a true 404, is `noindex, follow`, and links to real pages so visitors and crawlers recover.
  Before, the 404 inherited the home page's title.
- **Canonical host redirect:** the non-canonical host 301s to the canonical one so both are not indexed as duplicates. The live site's canonical host is `btreesystems.com` (no www; verified), so `www.` redirects to it. Changing hosts later only needs `NEXT_PUBLIC_SITE_URL`.
- **`lang="en-IN"`:** tells search engines the page targets English in India.
- **Per-course share images:** a link pasted into WhatsApp or LinkedIn shows the course, its length and format,
  which lifts click-through from the channels your audience actually uses.
- **IndexNow:** after a deploy, `npm run seo:indexnow -- --send` tells Bing (and the engines built on its index, such
  as Copilot and ChatGPT search) what changed. It is a dry run unless you add `--send`.
- **`security.txt`:** a trust signal and the correct place for researchers to report problems.

## 8. What is NOT covered (be aware)

- **DDoS and large bot networks.** Application code cannot stop traffic floods. Put the site behind Cloudflare
  (free tier is enough to start) or the host's firewall; turn on its bot-fight mode and rate rules. That is the single
  biggest remaining protection.
- **Shared rate limits.** The limiter is in memory, per server instance. Fine for one server; for several instances
  or serverless, swap `src/lib/rate-limit.ts` for Redis (Upstash/Vercel KV). The function signature stays the same.
- **Email security.** Add SPF, DKIM and DMARC records for btreesystems.com so nobody can send fake "BTree" emails to
  students. This is DNS, not code.
- **Accounts.** Turn on two-factor authentication for the domain registrar, hosting, GitHub, Google Search Console
  and the CRM. Account takeover is more likely than a code exploit.
- **Privacy law.** The forms collect personal data, so India's DPDP Act 2023 applies: add a short consent line and a
  link to the privacy policy near the submit buttons, state retention, and have your legal adviser approve the wording.
- **Backups and monitoring.** Back up the CRM/lead store; add uptime monitoring and error alerts.
- **The Django/Wagtail backend** will need its own review: CORS locked to this site, read-only public API,
  authenticated admin with 2FA, rate limits and a WAF.

## 9. Running the checks

```bash
npm run security:check     # lint (with security rules) + dependency audit
npm run course:check       # content validation
npm run check:placeholders # content still to be filled
npm run seo:indexnow       # dry run of the IndexNow submission
```
