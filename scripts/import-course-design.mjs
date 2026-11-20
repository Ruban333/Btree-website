// Imports a course page from the UI/UX design canvas into a typed content file.
//
//   npm run course:import -- <design-folder> <DesignFile> [<DesignFile> ...] [--force]
//   e.g. npm run course:import -- ./design/project Course-Power-BI Course-Salesforce
//
// <design-folder> holds the downloaded *.dc.html files. <DesignFile> is the file name without ".dc.html".
// The course slug comes from scripts/design-routes.json ("courses"). The importer writes
// src/content/courses/<slug>.ts and registers it. It fails loudly if a page does not follow the
// 15-section course template, so nothing is silently dropped.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { parseDocument, DomUtils } from "htmlparser2";

const ROOT = path.resolve(import.meta.dirname, "..");
const MAP = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "design-routes.json"), "utf8"));
const args = process.argv.slice(2);
const force = args.includes("--force");
const [folder, ...names] = args.filter((a) => a !== "--force");

if (!folder || !names.length) {
  console.error("Usage: npm run course:import -- <design-folder> <DesignFile> [<DesignFile> ...] [--force]\n  e.g. Course-Power-BI (no .dc.html)");
  process.exit(1);
}

const cls = (n, c) => (n.attribs?.class || "").split(/\s+/).includes(c);
const find = (root, fn) => DomUtils.findAll(fn, root.children || [root]);
const one = (root, fn, what) => {
  const r = find(root, fn)[0];
  if (!r) throw new Error(`template mismatch: missing ${what}`);
  return r;
};
const T = (n) => DomUtils.textContent(n).replace(/\s+/g, " ").trim();
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

/** Inline rich text: <b> becomes **bold**, <br> becomes a line break. */
function R(n) {
  let out = "";
  const walk = (x) => {
    if (x.type === "text") out += x.data.replace(/\s+/g, " ");
    else if (x.type === "tag") {
      if (x.name === "br") out += "\n";
      else if (x.name === "b" || x.name === "strong") { out += "**"; x.children.forEach(walk); out += "**"; }
      else x.children.forEach(walk);
    }
  };
  n.children.forEach(walk);
  return out.split("\n").map((l) => l.replace(/\s+/g, " ").trim()).join("\n").trim();
}

const warnings = [];
function href(h) {
  if (!h || h === "#") return "#";
  const [file] = h.split("#");
  if (MAP.routes[file]) return MAP.routes[file];
  const course = Object.keys(MAP.courses).find((c) => `${c}.dc.html` === file);
  if (course) return `/courses/${MAP.courses[course]}`;
  if (/\.dc\.html/.test(file)) { warnings.push(`link to ${file} is not in design-routes.json, left as "#"`); return "#"; }
  return h;
}

/** Cards that hold one check-mark and one sentence (a checklist), as opposed to title + text. */
const bulletsOf = (root, sel) => {
  const els = find(root, sel).filter((el) => find(el, (e) => e.name === "svg").length && find(el, (e) => e.name === "span").length);
  return els.length ? els.map((el) => T(find(el, (e) => e.name === "span")[0])) : null;
};
const titledItems = (root) =>
  find(root, (e) => e.name === "div" && e.children.some((c) => c.name === "h3") && e.children.some((c) => c.name === "p")).map((el) => ({
    title: T(el.children.find((c) => c.name === "h3")),
    text: T(el.children.find((c) => c.name === "p")),
  }));

const section = (main, id) => one(main, (e) => e.name === "section" && e.attribs["aria-labelledby"] === id, `section #${id}`);
const h2 = (s) => T(one(s, (e) => e.name === "h2", "h2"));
const lead = (s) => R(one(s, (e) => e.name === "p" && cls(e, "t-lead"), "lead paragraph"));
const items = (s, sel) =>
  find(s, sel).map((el) => ({
    title: T(find(el, (e) => e.name === "b" || e.name === "h3")[0]),
    text: T(find(el, (e) => e.name === "p")[0]),
  }));

function extract(html, slug) {
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
  const main = parseDocument(`<root>${html.match(/<main[^>]*>([\s\S]*)<\/main>/)[1]}</root>`);

  const hero = one(main, (e) => e.name === "section" && cls(e, "band") && !e.attribs["aria-labelledby"], "hero section");
  const crumb = T(find(one(hero, (e) => e.name === "nav" && cls(e, "crumbs"), "breadcrumb"), (e) => e.name === "b")[0]);
  const track = T(one(hero, (e) => e.name === "span" && cls(e, "tag"), "track tag")).split(" · ")[0];
  const proofP = one(hero, (e) => e.name === "p" && cls(e, "t-small") && T(e).includes("★"), "rating line");
  const btns = find(hero, (e) => e.name === "a" && cls(e, "btn"));
  const form = one(hero, (e) => e.name === "form", "enquiry form");

  const seo = {
    title: dec(head.match(/<title>([^<]*)<\/title>/)[1]),
    description: dec((head.match(/<meta name="description" content="([^"]*)"/) || [])[1] ?? ""),
  };
  if (!seo.description) throw new Error("template mismatch: no meta description in <head>");

  const g = section(main, "glance");
  const w = section(main, "whatis");
  const pipe = find(w, (e) => e.name === "ol" && cls(e, "pipe"))[0];
  const whatImg = find(w, (e) => e.name === "img")[0];
  if (!pipe && !whatImg) throw new Error("template mismatch: the What-is section needs a pipeline list or an image");
  const whyP = find(w, (e) => e.name === "p" && cls(e, "muted") && !cls(e, "t-lead"))[0];
  const whatCap = find(w, (e) => e.name === "figcaption")[0];
  const o = section(main, "outcomes");
  const wh = section(main, "who");
  const y = section(main, "why");
  const c = section(main, "curriculum");
  const t = section(main, "tools");
  const p = section(main, "projects");
  const ce = section(main, "cert");
  const j = section(main, "jobs");
  const rv = section(main, "reviews");
  const f = section(main, "cfaq");
  const ct = section(main, "ccta");
  const rd = section(main, "read");

  const figs = find(rv, (e) => e.name === "figure");
  const areasP = find(rd, (e) => e.name === "p" && cls(e, "t-small"))[0];

  return {
    slug,
    name: crumb,
    track,
    seo,
    hero: {
      h1: T(one(hero, (e) => e.name === "h1", "h1")),
      lead: R(one(hero, (e) => e.name === "p" && cls(e, "t-lead"), "hero lead")),
      proof: { score: T(find(proofP, (e) => e.name === "b")[0]).replace("★", "").trim(), detail: T(find(proofP, (e) => e.name === "span")[0]) },
      syllabusButton: T(btns[1]),
      formTitle: T(one(form, (e) => e.name === "h2", "form title")),
      formNote: T(one(form, (e) => e.name === "p" && cls(e, "t-small") && cls(e, "muted"), "form note")),
      formButton: T(one(form, (e) => e.name === "button" && cls(e, "btn"), "form button")),
    },
    glance: {
      title: h2(g),
      lead: lead(g),
      columns: /repeat\(2/.test(one(g, (e) => e.name === "div" && cls(e, "g3"), "batch grid").attribs.style || "") ? 2 : 3,
      batches: find(g, (e) => e.name === "article").map((a) => {
        const ps = find(a, (e) => e.name === "p");
        return { name: T(find(a, (e) => e.name === "h3")[0]), duration: T(ps[0]), schedule: R(ps[1]).split("\n"), note: T(ps[2]) };
      }),
    },
    whatis: {
      title: h2(w),
      definition: R(one(w, (e) => e.name === "p" && cls(e, "t-lead"), "definition")),
      ...(whyP ? { why: T(whyP) } : {}),
      ...(pipe
        ? {
            pipeline: {
              label: pipe.attribs["aria-label"],
              caption: T(one(w, (e) => e.name === "figcaption", "pipeline caption")),
              steps: find(pipe, (e) => e.name === "li").map((li) => ({
                label: T(find(li, (e) => e.name === "b")[0]),
                tools: T(find(li, (e) => e.name === "span")[0]),
                ...(li.attribs.style ? { highlight: true } : {}),
              })),
            },
          }
        : { image: { alt: whatImg.attribs.alt, ...(whatCap ? { caption: T(whatCap) } : {}) } }),
    },
    outcomes: {
      title: h2(o),
      lead: lead(o),
      ...(bulletsOf(o, (e) => e.name === "li" && cls(e, "card")) ? { bullets: bulletsOf(o, (e) => e.name === "li" && cls(e, "card")) } : { items: items(o, (e) => e.name === "li" && cls(e, "card")) }),
    },
    who: {
      title: h2(wh),
      items: titledItems(wh),
      ...(find(wh, (e) => e.name === "p" && cls(e, "t-lead"))[0] ? { note: T(find(wh, (e) => e.name === "p" && cls(e, "t-lead"))[0]) } : {}),
    },
    curriculum: {
      title: h2(c),
      lead: lead(c),
      ...(find(c, (e) => e.name === "details").length === 0
        ? { list: find(one(c, (e) => e.name === "ol" && cls(e, "acc"), "curriculum list"), (e) => e.name === "li").map((li) => T(find(li, (e) => e.name === "span").slice(-1)[0])) }
        : {}),
      ...(find(c, (e) => e.name === "details").length === 0 ? {} : { modules: find(c, (e) => e.name === "details").map((d) => {
        const sum = one(d, (e) => e.name === "summary", "module summary");
        const sessions = find(sum, (e) => e.name === "span" && cls(e, "ct"))[0];
        const title = T({ type: "root", children: sum.children.filter((x) => x !== sessions && x.name !== "svg") });
        const bd = one(d, (e) => e.name === "div" && cls(e, "bd"), "module body");
        const lis = find(bd, (e) => e.name === "li");
        return { title, sessions: T(sessions), ...(lis.length ? { bullets: lis.map(T) } : { summary: T(bd) }) };
      }) }),
    },
    tools: { title: h2(t), items: find(t, (e) => e.name === "span" && cls(e, "tag")).map(T) },
    projects: {
      title: h2(p),
      lead: lead(p),
      items: find(p, (e) => e.name === "article").map((a) => ({
        title: T(find(a, (e) => e.name === "h3")[0]),
        text: T(find(a, (e) => e.name === "p" && cls(e, "muted"))[0]),
        ...(find(a, (e) => e.name === "b")[0] ? { stack: T(find(a, (e) => e.name === "b")[0]) } : {}),
        imageAlt: find(a, (e) => e.name === "img")[0].attribs.alt,
      })),
    },
    cert: {
      title: h2(ce),
      text: T(one(ce, (e) => e.name === "p" && cls(e, "t-lead"), "certification text")),
      imageAlt: one(ce, (e) => e.name === "img", "certificate image").attribs.alt,
      caption: T(one(ce, (e) => e.name === "figcaption", "certificate caption")),
    },
    jobs: {
      title: h2(j),
      lead: lead(j),
      roles: find(j, (e) => e.name === "tr" && e.parent.name === "tbody").map((tr) => {
        const td = find(tr, (e) => e.name === "td");
        return { role: T(td[0]), salary: T(td[1]), employers: T(td[2]) };
      }),
      note: T(one(j, (e) => e.name === "p" && cls(e, "help"), "salary note")),
    },
    why: {
      title: h2(y),
      ...(bulletsOf(y, (e) => e.name === "li") ? { bullets: bulletsOf(y, (e) => e.name === "li") } : { items: titledItems(y) }),
    },
    reviews: {
      title: h2(rv),
      lead: lead(rv),
      videos: figs
        .filter((x) => find(x, (e) => e.name === "button").length)
        .map((x) => ({ name: T(find(x, (e) => e.name === "b")[0]), meta: T(find(x, (e) => e.name === "span" && cls(e, "t-small"))[0]) })),
      quotes: figs
        .filter((x) => find(x, (e) => e.name === "blockquote").length)
        .map((x) => {
          const small = find(find(x, (e) => e.name === "figcaption")[0], (e) => e.name === "span" && cls(e, "t-small"))[0];
          return {
            text: T(find(x, (e) => e.name === "blockquote")[0]),
            name: T(find(small, (e) => e.name === "b")[0]),
            placed: R({ children: small.children.filter((n) => !(n.name === "b" || n.name === "br")) }),
          };
        }),
      allLink: T(one(rv, (e) => e.name === "a" && cls(e, "lnk"), "all-reviews link")),
    },
    faq: {
      title: h2(f),
      lead: lead(f),
      items: find(f, (e) => e.name === "details").map((d) => {
        const sum = one(d, (e) => e.name === "summary", "faq question");
        return { q: T({ type: "root", children: sum.children.filter((x) => x.name !== "svg") }), a: T(one(d, (e) => e.name === "div" && cls(e, "bd"), "faq answer")) };
      }),
    },
    cta: { title: h2(ct), lead: lead(ct), button: T(one(ct, (e) => e.name === "a" && cls(e, "btn"), "cta button")) },
    related: find(one(rd, (e) => e.name === "nav", "related links"), (e) => e.name === "a").map((a) => ({ label: T(a), href: href(a.attribs.href) })),
    ...(areasP ? { areas: R(areasP) } : {}),
  };
}

const ident = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const catalog = fs.readFileSync(path.join(ROOT, "src/data/courses.ts"), "utf8");
let failed = 0;

for (const name of names) {
  const slug = MAP.courses[name];
  const file = path.join(folder, `${name}.dc.html`);
  if (!slug) { console.error(`✗ ${name}: not in scripts/design-routes.json "courses" (add it with its slug)`); failed++; continue; }
  if (!fs.existsSync(file)) { console.error(`✗ ${name}: ${file} not found`); failed++; continue; }
  const dest = path.join(ROOT, "src/content/courses", `${slug}.ts`);
  if (fs.existsSync(dest) && !force) { console.error(`✗ ${name}: src/content/courses/${slug}.ts already exists (use --force to overwrite)`); failed++; continue; }

  warnings.length = 0;
  let data;
  try { data = extract(fs.readFileSync(file, "utf8"), slug); }
  catch (e) {
    const where = String(e.stack ?? "").split("\n").find((l) => l.includes("import-course-design.mjs:"));
    console.error(`✗ ${name}: ${e.message}${e.message.startsWith("template mismatch") ? "" : `\n    (page structure differs from the template; at ${where?.trim() ?? "unknown"})`}`);
    failed++;
    continue;
  }

  fs.writeFileSync(dest, `import type { CoursePage } from "../course-types";\n\nconst course: CoursePage = ${JSON.stringify(data, null, 2)};\n\nexport default course;\n`);
  try { execSync(`npx prettier --write --print-width 120 "${dest}"`, { cwd: ROOT, stdio: "ignore" }); } catch { /* formatting is optional */ }

  // Register in the content index
  const indexFile = path.join(ROOT, "src/content/courses/index.ts");
  let idx = fs.readFileSync(indexFile, "utf8");
  if (!idx.includes(`"./${slug}"`)) {
    idx = idx.replace("// @course-imports", `import ${ident(slug)} from "./${slug}";\n// @course-imports`).replace("  // @course-list", `  ${ident(slug)},\n  // @course-list`);
    fs.writeFileSync(indexFile, idx);
  }

  console.log(`✓ ${name} -> /courses/${slug}  (${data.curriculum.modules?.length ?? data.curriculum.list.length} ${data.curriculum.modules ? "modules" : "syllabus items"}, ${data.faq.items.length} FAQs, ${data.glance.batches.length} batches${data.areas ? ", areas" : ""})`);
  if (!catalog.includes(`slug: "${slug}"`)) console.log(`  ! "${slug}" is not in src/data/courses.ts: add a row for the course list, sitemap and schema`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (failed) process.exit(1);
console.log("\nNext: npm run course:check   then   npm run check:placeholders");
