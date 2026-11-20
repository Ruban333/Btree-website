// Validates course content files beyond what TypeScript can check.
//   npm run course:check
// Errors fail the build; warnings are advice.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "src/content/courses");

const catalog = fs.readFileSync(path.join(ROOT, "src/data/courses.ts"), "utf8");
const catalogSlugs = new Set([...catalog.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]));
const index = fs.readFileSync(path.join(DIR, "index.ts"), "utf8");
const STATIC_ROUTES = new Set(["/", "/courses", "/blog", "/about-us", "/contact", "/corporate-training", "/placement-job-portal", "/become-an-instructor"]);

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
const errors = [];
const warns = [];
const seen = { title: new Map(), description: new Map(), h1: new Map() };

const min = (e, label, arr, n) => { if (!Array.isArray(arr) || arr.length < n) e(`${label}: needs at least ${n} (has ${arr?.length ?? 0})`); };
const empty = (v) => typeof v !== "string" || !v.trim();

for (const file of files) {
  const slug = file.replace(/\.ts$/, "");
  const e = (m) => errors.push(`${slug}: ${m}`);
  const w = (m) => warns.push(`${slug}: ${m}`);

  let c;
  try {
    c = (await import(pathToUrl(path.join(DIR, file)))).default;
  } catch (err) {
    e(`cannot load (${err.message.split("\n")[0]})`);
    continue;
  }
  if (!c) { e("no default export"); continue; }

  if (c.slug !== slug) e(`slug "${c.slug}" must match the file name "${slug}"`);
  if (!catalogSlugs.has(slug)) e('missing from src/data/courses.ts (the course list, sitemap and schema need a row)');
  if (!index.includes(`./${slug}"`)) e("not registered in src/content/courses/index.ts");

  // SEO
  const t = c.seo?.title ?? "", d = c.seo?.description ?? "";
  if (!t.endsWith("| BTree")) w('seo.title should end with "| BTree"');
  if (t.length > 65) w(`seo.title is ${t.length} chars (aim for 60 or fewer)`);
  if (d.length < 110 || d.length > 170) w(`seo.description is ${d.length} chars (aim for 120 to 160)`);
  for (const [k, v] of [["title", t], ["description", d], ["h1", c.hero?.h1 ?? ""]]) {
    if (seen[k].has(v)) e(`duplicate ${k} with ${seen[k].get(v)}`);
    seen[k].set(v, slug);
  }
  if (!(c.hero?.h1 ?? "").toLowerCase().includes((c.name ?? "").toLowerCase().split(" ")[0])) w("h1 does not mention the course name");

  // Required text
  for (const [label, v] of [["name", c.name], ["track", c.track], ["hero.lead", c.hero?.lead], ["whatis.definition", c.whatis?.definition], ["cta.title", c.cta?.title]]) {
    if (empty(v)) e(`${label} is empty`);
  }

  // Section sizes: thin pages rank poorly and break the layout rhythm
  min(e, "glance.batches", c.glance?.batches, 1);
  if (c.whatis?.pipeline) min(e, "whatis.pipeline.steps", c.whatis.pipeline.steps, 4);
  else if (!c.whatis?.image?.alt) e("whatis needs a pipeline or an image");
  min(e, "outcomes", c.outcomes?.bullets ?? c.outcomes?.items, 4);
  min(e, "who.items", c.who?.items, 3);
  min(e, "curriculum", c.curriculum?.modules ?? c.curriculum?.list, 3);
  min(e, "tools.items", c.tools?.items, 4);
  min(e, "projects.items", c.projects?.items, 2);
  min(e, "jobs.roles", c.jobs?.roles, 3);
  min(e, "why", c.why?.bullets ?? c.why?.items, 3);
  min(e, "faq.items", c.faq?.items, 6);
  if ((c.faq?.items?.length ?? 0) > 12) w("more than 12 FAQs; keep the most useful ones");
  if ((c.whatis?.pipeline?.steps?.length ?? 0) > 8) w("more than 8 pipeline steps will wrap awkwardly");

  if (c.curriculum?.modules && c.curriculum?.list) w("curriculum has both modules and list; only one is shown");
  for (const [i, m] of (c.curriculum?.modules ?? []).entries()) {
    if (!m.bullets?.length && empty(m.summary)) e(`curriculum.modules[${i}] "${m.title}" needs bullets or a summary`);
    if (m.bullets?.length && m.summary) w(`curriculum.modules[${i}] has both bullets and summary; summary is ignored`);
  }
  for (const [i, p] of (c.projects?.items ?? []).entries()) if (empty(p.imageAlt)) e(`projects.items[${i}] needs imageAlt`);
  if (empty(c.cert?.imageAlt)) e("cert.imageAlt is empty");

  // Links
  for (const r of c.related ?? []) {
    if (r.href === "#") continue;
    if (!r.href.startsWith("/")) { w(`related "${r.label}" is an external link (${r.href})`); continue; }
    const ok = STATIC_ROUTES.has(r.href) || (r.href.startsWith("/courses/") && catalogSlugs.has(r.href.replace("/courses/", ""))) || r.href.startsWith("/blog/");
    if (!ok) e(`related link "${r.label}" points to ${r.href}, which does not exist`);
  }
  if (!(c.related ?? []).some((r) => r.href.startsWith("/"))) w("related has no internal links (add some for internal linking)");
}

for (const s of catalogSlugs) if (!files.includes(`${s}.ts`)) { /* simple template courses are fine */ }

console.log(`course:check — ${files.length} course page(s)`);
for (const m of warns) console.log(`  warn  ${m}`);
for (const m of errors) console.log(`  ERROR ${m}`);
if (errors.length) { console.error(`\n${errors.length} error(s). Fix them before building.`); process.exit(1); }
console.log(errors.length || warns.length ? "" : "  all good");

function pathToUrl(p) { return new URL(`file:///${p.replaceAll("\\", "/")}`).href; }
