// Controls which course pages are live and which are on hold.
//   npm run course:list                      live pages by group, then the held pages
//   npm run course:launch                    make the site match scripts/launch-list.json (the "Need" list)
//   npm run course:hold -- <slug> [slug...]  take pages offline (kept in src/content/courses/_hold/)
//   npm run course:release -- <slug> [...]   bring held pages back
// A held page is not routed, not in the course list or sitemap, and its placeholders do not block the build.
// Links from live pages to a held page are removed so the site has no dead links.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "src/content/courses");
const HOLD_DIR = path.join(DIR, "_hold");
const INDEX = path.join(DIR, "index.ts");
const LIVE_CAT = path.join(ROOT, "src/data/courses.ts");
const HOLD_CAT = path.join(ROOT, "src/data/courses-hold.ts");
const LIST = path.join(import.meta.dirname, "launch-list.json");

const [cmd = "list", ...slugs] = process.argv.slice(2);
const read = (p) => fs.readFileSync(p, "utf8");
const eolOf = (t) => (t.includes("\r\n") ? "\r\n" : "\n");
const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const rowRe = (slug) => new RegExp(`^  \\{ slug: "${slug}",.*\\},?\\r?\\n`, "m");

if (!fs.existsSync(HOLD_CAT)) {
  fs.writeFileSync(
    HOLD_CAT,
    `import type { Course } from "./courses";\n\n/**\n * Courses on hold: not routed, not in the course list or sitemap.\n * Bring one back with \`npm run course:release -- <slug>\`.\n */\nexport const HOLD_COURSES: Course[] = [\n];\n`,
  );
}

const liveRows = () => [...read(LIVE_CAT).matchAll(/^  \{ slug: "([^"]+)"/gm)].map((m) => m[1]);
const holdRows = () => [...read(HOLD_CAT).matchAll(/^  \{ slug: "([^"]+)"/gm)].map((m) => m[1]);

function moveRow(slug, from, to) {
  let src = read(from);
  const m = src.match(rowRe(slug));
  if (!m) return false;
  src = src.replace(rowRe(slug), "");
  fs.writeFileSync(from, src);
  let dst = read(to);
  const eol = eolOf(dst);
  const line = m[0].replace(/\r?\n$/, "").replace(/,?$/, ",");
  const at = dst.lastIndexOf("];"); // the course array is the last array in the file
  dst = dst.slice(0, at).replace(/\s*$/, "") + eol + line + eol + dst.slice(at);
  fs.writeFileSync(to, dst);
  return true;
}

function hold(slug) {
  if (!liveRows().includes(slug)) return `${slug}: not live (already on hold, or unknown)`;
  moveRow(slug, LIVE_CAT, HOLD_CAT);
  const file = path.join(DIR, `${slug}.ts`);
  if (fs.existsSync(file)) {
    let idx = read(INDEX);
    const im = idx.match(new RegExp(`^import (\\w+) from "\\./${slug}";\\r?\\n`, "m"));
    if (im) {
      idx = idx.replace(im[0], "").replace(new RegExp(`^  ${im[1]},\\r?\\n`, "m"), "");
      fs.writeFileSync(INDEX, idx);
    }
    fs.mkdirSync(HOLD_DIR, { recursive: true });
    const body = read(file).replace('"../course-types"', '"../../course-types"');
    fs.writeFileSync(path.join(HOLD_DIR, `${slug}.ts`), body);
    fs.rmSync(file);
  }
  return `${slug}: on hold`;
}

function release(slug) {
  if (!holdRows().includes(slug)) return `${slug}: not on hold`;
  moveRow(slug, HOLD_CAT, LIVE_CAT);
  const held = path.join(HOLD_DIR, `${slug}.ts`);
  if (fs.existsSync(held)) {
    fs.writeFileSync(path.join(DIR, `${slug}.ts`), read(held).replace('"../../course-types"', '"../course-types"'));
    fs.rmSync(held);
    let idx = read(INDEX);
    const eol = eolOf(idx);
    const id = camel(slug);
    idx = idx.replace("// @course-imports", `import ${id} from "./${slug}";${eol}// @course-imports`).replace("  // @course-list", `  ${id},${eol}  // @course-list`);
    fs.writeFileSync(INDEX, idx);
  }
  return `${slug}: live`;
}

/** Remove "related" links that point at held pages from every live page. */
function stripDeadLinks() {
  const dead = new Set(holdRows());
  const removed = [];
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const p = path.join(DIR, f);
    let t = read(p);
    let n = 0;
    for (const s of dead) {
      const re = new RegExp(`[ \\t]*\\{\\s*label:\\s*"[^"]*",\\s*href:\\s*"/courses/${s}",?\\s*\\},?\\r?\\n`, "g");
      t = t.replace(re, () => (n++, ""));
    }
    if (n) { fs.writeFileSync(p, t); removed.push(`${f.replace(/\.ts$/, "")}: ${n}`); }
  }
  return removed;
}

const groups = () => JSON.parse(read(LIST)).live;

if (cmd === "list") {
  const live = new Set(liveRows());
  for (const [g, arr] of Object.entries(groups())) console.log(`${g}\n${arr.map((s) => `  ${live.has(s) ? "live" : "HOLD"}  ${s}`).join("\n")}`);
  const listed = new Set(Object.values(groups()).flat());
  const extra = [...live].filter((s) => !listed.has(s));
  if (extra.length) console.log(`\nLive but not in launch-list.json:\n  ${extra.join("\n  ")}`);
  console.log(`\nOn hold (${holdRows().length}):\n  ${holdRows().join("\n  ")}`);
} else if (cmd === "hold" || cmd === "release") {
  if (!slugs.length) { console.error(`Usage: npm run course:${cmd} -- <slug> [slug...]`); process.exit(1); }
  for (const s of slugs) console.log(cmd === "hold" ? hold(s) : release(s));
  const r = stripDeadLinks();
  if (r.length) console.log(`Removed links to held pages from: ${r.join(", ")}`);
} else if (cmd === "launch") {
  const want = new Set(Object.values(groups()).flat());
  for (const s of want) if (!liveRows().includes(s) && !holdRows().includes(s)) console.error(`launch-list.json names "${s}" but no such course exists`);
  for (const s of holdRows()) if (want.has(s)) console.log(release(s));
  for (const s of liveRows()) if (!want.has(s)) console.log(hold(s));
  const r = stripDeadLinks();
  console.log(`\nLive: ${liveRows().length}  On hold: ${holdRows().length}`);
  if (r.length) console.log(`Removed links to held pages from: ${r.join(", ")}`);
} else {
  console.error("Commands: list | launch | hold <slug...> | release <slug...>");
  process.exit(1);
}
