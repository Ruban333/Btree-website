// Compares a design-canvas course page with the page rendered by the running site, word for word.
//
//   npm run course:compare -- <design-folder> <base-url> <DesignFile> [<DesignFile> ...]
//   e.g. npm run course:compare -- ./design/project http://localhost:3001 Course-Power-BI
//
// "missing from site" = words in the design that the site does not show (a real gap).
// "extra on site"     = words the site shows that the design does not (usually image placeholder labels).
// The byline (curriculum author + updated date) is ignored: it was removed from the site on request.
import fs from "node:fs";
import path from "node:path";

const MAP = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "design-routes.json"), "utf8"));
const [folder, base, ...names] = process.argv.slice(2);
if (!folder || !base || !names.length) {
  console.error("Usage: npm run course:compare -- <design-folder> <base-url> <DesignFile> [<DesignFile> ...]");
  process.exit(1);
}

const dec = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&apos;|&#39;/g, "'").replace(/&nbsp;/g, " ");
const words = (html) =>
  dec(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<input[^>]*name="website"[^>]*>/g, " ").replace(/<[^>]+>/g, " "))
    .split(/\s+/)
    .filter(Boolean);
const bag = (arr) => {
  const m = new Map();
  for (const w of arr) m.set(w, (m.get(w) || 0) + 1);
  return m;
};

let gaps = 0;
for (const name of names) {
  const slug = MAP.courses[name];
  if (!slug) { console.error(`✗ ${name}: not in scripts/design-routes.json`); gaps++; continue; }
  const design = fs.readFileSync(path.join(folder, `${name}.dc.html`), "utf8").match(/<main[^>]*>([\s\S]*)<\/main>/)[1];
  const res = await fetch(`${base}/courses/${slug}`);
  if (!res.ok) { console.error(`✗ ${name}: ${base}/courses/${slug} returned ${res.status}`); gaps++; continue; }
  const site = (await res.text()).match(/<main[^>]*>([\s\S]*)<\/main>/)[1];

  const A = bag(words(design.replace(/<div class="byline">[\s\S]*?<\/div>/, " ")));
  const B = bag(words(site));
  const missing = [], extra = [];
  for (const k of new Set([...A.keys(), ...B.keys()])) {
    const d = (B.get(k) || 0) - (A.get(k) || 0);
    if (d < 0) missing.push(`${-d}x ${k}`);
    if (d > 0) extra.push(`${d}x ${k}`);
  }
  const total = (m) => [...m.values()].reduce((x, y) => x + y, 0);
  console.log(`${missing.length ? "✗" : "✓"} ${name} -> /courses/${slug}   design ${total(A)} words, site ${total(B)} words`);
  console.log(`    missing from site: ${missing.length ? missing.join("  ").slice(0, 400) : "none"}`);
  console.log(`    extra on site:     ${extra.length ? extra.join("  ").slice(0, 200) : "none"}`);
  if (missing.length) gaps++;
}
process.exit(gaps ? 1 : 0);
