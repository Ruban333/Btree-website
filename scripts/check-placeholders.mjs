// Launch guard: fails the build while "[placeholder]" text from the design is still in the site.
// Run on its own:  npm run check:placeholders      Bypass for a preview build:  ALLOW_PLACEHOLDERS=1 npm run build
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["src/components/pages", "src/components/sections", "src/components/course", "src/content", "src/data", "src/app"];
const EXT = /\.(tsx|ts)$/;
// A placeholder is "[some words]" that is not an array index, a type, or a code construct.
const PLACEHOLDER = /(?<![\w\])"'`])\[(?=[^\]]*[A-Za-z0-9₹])[^\]\[<>{}"'`=;()\\^]{1,70}\](?![\w(\[])/g;
const IGNORE_LINE =
  /^\s*(\/\/|\*|\/\*)|:\s*\[|=\s*\[|\bas\s|\]\[\]|import\s|\bconst \[|=>\s*\[|\},\s*\[|\(\(?\[|^\s*\[[A-Za-z_]\w*(, ?[A-Za-z_]\w*)+\],?\s*$/;
// Whole-string placeholders in data files, e.g. next: "[date]".
const QUOTED = /["'`](\[[^\]"'`\n]{1,70}\])["'`]/g;

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== "_hold") yield* walk(p); } // _hold = course pages kept offline
    else if (EXT.test(e.name)) yield p;
  }
}

const found = new Map();
for (const d of DIRS) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    fs.readFileSync(file, "utf8")
      .split(/\r?\n/)
      .forEach((line, i) => {
        if (IGNORE_LINE.test(line)) return;
        const rel = path.relative(ROOT, file).replaceAll("\\", "/");
        const add = (text) => {
          if (!found.has(rel)) found.set(rel, []);
          found.get(rel).push(`${i + 1}: ${text}`);
        };
        for (const m of line.matchAll(PLACEHOLDER)) add(m[0]);
        // Only treat quoted "[x]" as a placeholder when it looks like one (not an index or type tuple).
        for (const m of line.matchAll(QUOTED)) if (/^\[[A-Za-z0-9₹][^,]*\]$/.test(m[1]) && !/^\[\d\]$/.test(m[1])) add(m[1]);
      });
  }
}

const total = [...found.values()].reduce((n, a) => n + a.length, 0);
if (!total) {
  console.log("check-placeholders: none left. Good to launch.");
  process.exit(0);
}

console.log(`check-placeholders: ${total} placeholder(s) in ${found.size} file(s)\n`);
for (const [file, hits] of [...found].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${file} (${hits.length})`);
  for (const h of hits) console.log(`  ${h}`);
}

if (process.env.ALLOW_PLACEHOLDERS === "1") {
  console.log("\nALLOW_PLACEHOLDERS=1 set, continuing anyway. Do NOT deploy this build to production.");
  process.exit(0);
}
console.error("\nBuild stopped: fill in or remove the placeholders above. For a preview build only: ALLOW_PLACEHOLDERS=1 npm run build");
process.exit(1);
