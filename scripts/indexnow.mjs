// Tells Bing (and the engines that share its index, including Copilot and ChatGPT search) which URLs changed,
// so they are crawled within minutes instead of days or weeks.
//
//   npm run seo:indexnow                      dry run: lists the URLs it WOULD send (default, sends nothing)
//   npm run seo:indexnow -- --send            actually submit every URL in the live sitemap
//   npm run seo:indexnow -- --send /courses/power-bi /blog     submit only these paths
//
// Run it after each deploy. The key is the file public/<key>.txt (public by design; it proves you own the site).
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://btreesystems.com").replace(/\/$/, "");
const args = process.argv.slice(2);
const send = args.includes("--send");
// Paths may be given with or without a leading slash (some shells rewrite "/x" into a Windows path).
const paths = args
  .filter((a) => !a.startsWith("--"))
  .map((a) => a.replace(/^[A-Za-z]:[\\/]Program Files[\\/]Git/, "")) // undo Git Bash rewriting "/x" into a Windows path
  .map((a) => (a.startsWith("/") ? a : `/${a}`));

const keyFile = fs.readdirSync(path.join(ROOT, "public")).find((f) => /^[a-f0-9]{16,128}\.txt$/.test(f));
if (!keyFile) { console.error("No IndexNow key file found in public/ (expected <key>.txt)."); process.exit(1); }
const key = keyFile.replace(/\.txt$/, "");

let urls;
if (paths.length) urls = paths.map((p) => `${site}${p}`);
else {
  const res = await fetch(`${site}/sitemap.xml`).catch(() => null);
  if (!res?.ok) { console.error(`Could not read ${site}/sitemap.xml. Is the site deployed? (Or pass explicit paths.)`); process.exit(1); }
  urls = [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

console.log(`${send ? "SENDING" : "DRY RUN (add --send to submit)"}: ${urls.length} URL(s) for ${new URL(site).host}\n  key file: ${site}/${keyFile}`);
urls.slice(0, 8).forEach((u) => console.log("  " + u));
if (urls.length > 8) console.log(`  ... and ${urls.length - 8} more`);
if (!send) process.exit(0);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${keyFile}`, urlList: urls.slice(0, 10000) }),
});
console.log(res.ok ? `Accepted (HTTP ${res.status}).` : `IndexNow refused it (HTTP ${res.status}). Is the key file live at ${site}/${keyFile}?`);
process.exit(res.ok ? 0 : 1);
