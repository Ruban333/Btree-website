// SEO + AEO advisor for course pages. It reads a course content file, audits it, and writes a report of
// ready-to-paste suggestions: keywords, title and meta description, answer-engine (AEO) FAQ and definition
// fixes, schema and internal-link advice. It never edits the page: you paste what you accept.
//
//   npm run seo:suggest -- <slug>        one page  -> seo-reports/<slug>.md
//   npm run seo:suggest -- --all         every page -> seo-reports/*.md + seo-reports/INDEX.md (weakest first)
//   npm run seo:suggest -- <slug> --print  also print the whole report in the terminal
//
// Suggestions are rule-based and use only facts already on the page. Anything unknown stays a [placeholder],
// matching the rest of the site. Search volumes are NOT included: check the keywords in Search Console / OpenSEO.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "src/content/courses");
const OUT = path.join(ROOT, "seo-reports");
const toUrl = (p) => new URL(`file:///${p.replaceAll("\\", "/")}`).href;

const args = process.argv.slice(2);
const ALL = args.includes("--all");
const PRINT = args.includes("--print");
const slugs = ALL
  ? fs.readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => f.replace(/\.ts$/, ""))
  : args.filter((a) => !a.startsWith("--"));
if (!slugs.length) {
  console.error("Usage: npm run seo:suggest -- <slug> | --all  [--print]");
  process.exit(1);
}

const { ALL_COURSES } = await import(toUrl(path.join(ROOT, "src/data/courses.ts")));

// ---------- helpers ----------
const plain = (s = "") => s.split("**").join("").replace(/\s+/g, " ").trim();
const isPh = (s = "") => /\[[^\]]+\]/.test(s);
const words = (s) => plain(s).split(" ").filter(Boolean).length;
const real = (arr = []) => arr.filter((x) => x && !isPh(x));
const uniq = (arr) => [...new Set(arr.map((x) => x.trim()).filter(Boolean))];
const lc = (s = "") => s.toLowerCase();
const has = (text, kw) => lc(plain(text)).includes(lc(kw));
const P = (s) => `[${s}]`;

// The question types learners (and answer engines) ask about a course. `re` tells us whether the page already answers it.
const INTENTS = [
  { id: "duration", pri: 2, re: /\b(how long|duration|months?|weeks?|hours)\b/i, q: (n) => `How long does it take to learn ${n}?`, a: (n) => `The BTree ${n} course takes ${P("N")} months and about ${P("N")} hours of live classes and labs. ${P("What most learners can do by the end")}.` },
  { id: "fresher", pri: 3, re: /\b(fresher|non-it|beginner|background|no experience|prior|from scratch)\b/i, q: (n) => `Can a fresher or non-IT graduate learn ${n}?`, a: () => `${P("Yes or no, then who it suits and what is taught from scratch. 40 to 60 words, answer first")}.` },
  { id: "salary", pri: 4, re: /\b(salary|salaries|lpa|pay)\b/i, q: (n) => `What is the salary of a ${n} professional in Chennai?`, a: (n) => `Entry-level ${n} roles in Chennai typically pay ₹${P("X–Y")} LPA, rising to ₹${P("X–Y")} LPA with 3–5 years of experience (${P("source, year")}).` },
  { id: "placement", pri: 5, re: /\b(placement|placed|hiring|referral)/i, q: (n) => `Will I get placement support after the ${n} course?`, a: () => "Yes. Placement support includes resume and LinkedIn reviews, mock interviews with feedback, and referrals to BTree hiring partners. It continues after the course ends, until you are placed." },
  { id: "cert", pri: 6, re: /certif/i, q: (n) => `Does the ${n} course prepare me for certification?`, a: () => `${P("Exam names and what is covered")}.` },
  { id: "mode", pri: 7, re: /\b(online|classroom|offline|weekend|weekday)\b/i, q: (n) => `Is the ${n} course online or classroom in Chennai?`, a: () => "Both. Attend at our Perungudi centre in Chennai or join live online, with the same projects and syllabus." },
  { id: "syllabus", pri: 8, re: /\b(syllabus|curriculum|topics|modules|cover)\b/i, q: (n) => `What is in the ${n} syllabus?`, a: (n) => `The ${n} syllabus has ${P("N")} modules: ${P("top 4 to 6 topics")}, plus a capstone project. ${P("Download link or where to find the PDF")}.` },
  { id: "career", pri: 9, re: /\b(worth|career|demand|scope|future)\b/i, q: (n) => `Is ${n} a good career in 2026?`, a: (n) => `${P("Yes or no, then one reason with a fact")}. ${n} roles are ${P("in demand because ...")}.` },
  { id: "what", pri: 10, re: /^what (is|are|does)\b/i, q: (n) => `What is ${n}?`, a: (n) => `${n} is ${P("one-sentence definition, 40 to 60 words, answer first")}.` },
  { id: "vs", pri: 11, re: /\b(vs\.?|versus|difference|better than|compared)\b/i, q: (n) => `Is ${n} better than ${P("alternative")}?`, a: (n) => `${P(`Direct comparison of ${n} and the alternative in 2 to 3 sentences`)}.` },
  { id: "demo", pri: 12, re: /\b(demo|trial|free class)\b/i, q: (n) => `Can I attend a free ${n} demo class?`, a: () => "Yes. Book a free demo class to meet the trainer, see the labs and ask your questions before you enrol." },
];

// ---------- analysis ----------
function analyse(c) {
  const n = c.name;
  const cat = ALL_COURSES.find((x) => x.slug === c.slug);
  const tools = real(c.tools?.items).filter((x) => x.split(" ").length <= 3 && !/[()]/.test(x) && !/^an? /i.test(x)).slice(0, 8);
  const roles = real((c.jobs?.roles ?? []).map((r) => r.role)).filter((r) => !/[()/]/.test(r));
  const certCodes = uniq((plain(c.cert?.text ?? "").match(/\b[A-Z]{2,4}-?[A-Z]?\d{2,3}[A-Z]?\b/g) ?? []).filter((x) => /\d/.test(x)));
  const dur = (c.glance?.batches ?? []).map((b) => b.duration).find((d) => /\d/.test(d) && !isPh(d));
  const hours = (c.glance?.batches ?? []).find((b) => /hours/i.test(b.name) && !isPh(b.duration))?.duration;
  const faqs = c.faq?.items ?? [];

  // --- keywords ---
  const kw = {
    primary: [{ kw: `${n} course in Chennai`, use: "H1, <title>, meta description, first sentence of the lead, URL" }],
    secondary: [
      { kw: `${n} training in Chennai`, use: "an H2, the lead, internal link anchors" },
      { kw: `${n} training institute in Chennai`, use: "why-BTree section, areas line" },
      { kw: `${n} course with placement in Chennai`, use: "title or description, placement FAQ" },
      { kw: `best ${n} course in Chennai`, use: "title variant, reviews section" },
      { kw: `${n} online course`, use: "mode FAQ, hero lead" },
      { kw: `${n} classes in Chennai`, use: "areas line, CTA" },
    ],
    commercial: [
      { kw: `${n} course syllabus`, use: "curriculum H2, syllabus button" },
      { kw: `${n} certification course`, use: "cert section H2" },
      { kw: `${n} course for freshers`, use: "who-should-join H2, fresher FAQ" },
      { kw: `${n} course duration`, use: "glance section H2" },
    ],
    questions: INTENTS.filter((i) => ["duration", "fresher", "salary", "career", "cert"].includes(i.id)).map((i) => ({ kw: i.q(n).replace(/\[[^\]]+\]/g, "").trim(), use: "FAQ question wording" })),
    tools: tools.map((t) => ({ kw: `${t} training in Chennai`, use: "tools section, internal anchors" })),
    jobs: roles.flatMap((r) => [{ kw: `${r} jobs in Chennai`, use: "jobs section" }, { kw: `${r} salary in Chennai`, use: "jobs section, salary FAQ" }]),
    certs: certCodes.map((x) => ({ kw: `${x} certification training`, use: "cert section" })),
    local: ["Perungudi", "OMR", "Velachery", "Guindy", "Adyar"].map((a) => ({ kw: `${n} course in ${a}`, use: "areas line only, never as a thin separate page" })),
  };

  // --- title / description ---
  const titles = uniq([
    `${n} Course in Chennai with Placement | BTree`,
    `${n} Training in Chennai: Online & Classroom | BTree`,
    `Best ${n} Course in Chennai | Live Projects | BTree`,
    `${n} Course in Chennai | Syllabus & Placement | BTree`,
    `${n} Course in Chennai | BTree`,
  ]);
  const fitTitles = titles.filter((t) => t.length <= 60);
  const toolStr = tools.slice(0, 2).join(" and ");
  // segments are [text, optional]; optional ones are dropped (last first) until the description fits 160.
  const build = (segs) => {
    const s = segs.filter((x) => x[0]);
    const join = () => s.map((x) => x[0]).join(" ").replace(/\s+/g, " ").trim();
    while (join().length > 158) {
      const i = s.map((x) => x[1]).lastIndexOf(true);
      if (i < 0) break;
      s.splice(i, 1);
    }
    return join();
  };
  const descs = uniq([
    build([[`${n} course in Chennai:`], [toolStr && `${toolStr} with live projects${dur ? ` in ${dur}` : ""}.`, true], ["Classroom or online, with certification and placement support."], ["Book a free demo."]]),
    build([[`Learn ${n} in Chennai with live trainer-led classes, hands-on projects`], [certCodes[0] ? `and ${certCodes[0]} exam prep.` : "and a course certificate."], ["Placement support until you are hired.", true], ["Free demo class.", true]]),
    build([[`Join the ${n} course in Chennai: classroom at Perungudi or live online.`], [hours && `${hours} of hands-on learning.`, true], ["Resume help, mock interviews and referrals."], ["Book a free demo.", true]]),
  ]).map((d) => d.replace(/\s+/g, " ").replace(/:\s*\./, "."));
  const bestTitle = fitTitles[0] ?? titles[titles.length - 1];

  // --- audit ---
  const checks = [];
  const add = (id, w, pass, msg, fix) => checks.push({ id, w, pass, msg, fix });
  const t = c.seo?.title ?? "", d = c.seo?.description ?? "", h1 = c.hero?.h1 ?? "";
  const lead = c.hero?.lead ?? "";
  add("title-len", 8, t.length > 0 && t.length <= 60, `Title is ${t.length} chars`, `Keep to 60 or fewer. Try: "${bestTitle}"`);
  add("title-brand", 3, t.endsWith("| BTree"), 'Title ends with "| BTree"', 'Add " | BTree" at the end');
  add("title-kw", 8, has(t, n) && has(t, "chennai"), "Title has the course name and Chennai", `Use: "${bestTitle}"`);
  add("title-ph", 6, !isPh(t), "Title has no placeholders", "Replace the [placeholder] in seo.title");
  add("desc-len", 8, d.length >= 120 && d.length <= 160, `Meta description is ${d.length} chars`, "Aim for 120 to 160. See the suggested descriptions below");
  add("desc-kw", 6, has(d, n) && has(d, "chennai"), "Description has the course name and Chennai", "Open with the primary keyword");
  add("desc-cta", 3, /\b(book|demo|enrol|enroll|join|call|free)\b/i.test(d), "Description has a call to action", 'End with "Book a free demo."');
  add("desc-ph", 6, !isPh(d), "Description has no placeholders", "Replace the [placeholder] in seo.description");
  add("h1-kw", 8, lc(h1).includes(lc(n)) && lc(h1).includes("chennai"), "H1 has the course name and Chennai", `Use: "${n} course in Chennai"`);
  add("lead-first", 7, has(plain(lead).slice(0, 170), n) && has(plain(lead).slice(0, 170), "chennai"), "First sentence of the lead names the course and Chennai", `Start with: "The BTree ${n} course in Chennai ..."`);
  const defWords = words(c.whatis?.definition ?? "");
  add("aeo-def", 8, defWords >= 30 && defWords <= 65, `Definition is ${defWords} words`, "Answer engines quote a 40 to 60 word, answer-first definition: '**X** is ... that ...'");
  add("aeo-def-start", 4, new RegExp(`^${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(plain(c.whatis?.definition ?? "")), "Definition starts with the course name", `Begin: "**${n}** is ..."`);
  add("faq-count", 6, faqs.length >= 6, `${faqs.length} FAQs`, "Add questions from the missing-intents list");
  const covered = INTENTS.filter((i) => faqs.some((f) => i.re.test(f.q)));
  const missing = INTENTS.filter((i) => !covered.includes(i));
  add("faq-intents", 8, ["duration", "fresher", "salary", "placement", "cert"].every((id) => covered.some((i) => i.id === id)), `FAQ covers ${covered.length} of ${INTENTS.length} question types`, "Cover at least duration, fresher, salary, placement and certification");
  const longA = faqs.filter((f) => !isPh(f.a) && words(f.a) > 80).length;
  add("faq-len", 4, longA === 0, longA ? `${longA} FAQ answer(s) over 80 words` : "FAQ answers are concise", "Lead with a 40 to 60 word answer, then detail");
  const phFaq = faqs.filter((f) => isPh(f.a)).length;
  add("faq-ph", 4, phFaq === 0, phFaq ? `${phFaq} FAQ answer(s) still contain placeholders` : "FAQ answers are filled", "Fill FAQ placeholders before launch (they go straight into FAQPage schema)");
  const headings = [c.glance?.title, c.outcomes?.title, c.who?.title, c.curriculum?.title, c.projects?.title, c.cert?.title, c.jobs?.title, c.why?.title, c.faq?.title].filter(Boolean);
  const hKw = headings.filter((h) => has(h, n)).length;
  add("h2-kw", 5, hKw >= Math.ceil(headings.length * 0.6), `${hKw} of ${headings.length} section headings name the course`, "Put the course name (and Chennai in 2 to 3) in section headings");
  add("h2-local", 3, headings.filter((h) => has(h, "chennai")).length >= 2, "At least 2 headings mention Chennai", "Add Chennai to the glance, jobs and why headings");
  const links = (c.related ?? []).filter((r) => r.href.startsWith("/"));
  add("links", 5, links.length >= 3, `${links.length} internal links`, "Link to 3 or more related courses/guides (suggestions below)");
  add("areas", 4, !!c.areas && !isPh(c.areas), "Chennai areas line is present", "Add the areas line (local SEO)");
  const noAlt = (c.projects?.items ?? []).filter((p) => !p.imageAlt).length + (c.cert?.imageAlt ? 0 : 1);
  add("alts", 4, noAlt === 0, noAlt ? `${noAlt} image(s) missing alt text` : "All images have alt text", "Add descriptive imageAlt with the course name");
  add("proof", 3, !isPh(c.hero?.proof?.score ?? "") && !isPh(c.hero?.proof?.detail ?? ""), "Rating/proof line is real", "Fill the rating and review count (trust signal, also used for review schema later)");
  add("jobs-real", 3, (c.jobs?.roles ?? []).every((r) => !isPh(r.salary)), "Salary ranges are filled", "Fill salary ranges with a source (E-E-A-T)");

  const total = checks.reduce((a, x) => a + x.w, 0);
  const score = Math.round((checks.filter((x) => x.pass).reduce((a, x) => a + x.w, 0) / total) * 100);

  // --- AEO / schema / links ---
  const faqAdds = missing.sort((a, b) => a.pri - b.pri).slice(0, 6).map((i) => ({ q: i.q(n), a: i.a(n), id: i.id }));
  const sameCat = ALL_COURSES.filter((x) => x.cat === cat?.cat && x.slug !== c.slug && !links.some((l) => l.href === `/courses/${x.slug}`)).slice(0, 4);
  const linkAdds = sameCat.map((x) => ({ label: `${x.name} course in Chennai`, href: `/courses/${x.slug}` }));
  const phCount = JSON.stringify(c).match(/\[[^\]"]{1,70}\]/g)?.length ?? 0;

  return { c, n, kw, titles: fitTitles.length ? fitTitles : titles, descs, checks, score, faqAdds, linkAdds, covered, phCount, defWords, certCodes };
}

// ---------- report ----------
const group = (title, rows) => rows.length ? `**${title}**\n\n${rows.map((r) => `- ${r.kw} <br>_use in: ${r.use}_`).join("\n")}\n` : "";
function report(a) {
  const { c, n } = a;
  const fails = a.checks.filter((x) => !x.pass);
  const lines = [];
  lines.push(`# SEO + AEO suggestions: ${n}`, "", `Page: \`/courses/${c.slug}\` · Score: **${a.score}/100** · Placeholders still on page: ${a.phCount}`, "", `_Generated ${new Date().toISOString().slice(0, 10)} by \`npm run seo:suggest\`. Suggestions only; nothing was changed. Verify keyword volume in Search Console or OpenSEO before committing to them._`, "");
  lines.push("## 1. Fix first", "");
  if (!fails.length) lines.push("Nothing to fix. Good to go.", "");
  else lines.push("| Check that failed | Fix |", "|---|---|", ...fails.sort((x, y) => y.w - x.w).map((x) => `| ${x.msg} | ${x.fix} |`), "");
  lines.push("## 2. Title and meta description", "", `Current title (${(c.seo?.title ?? "").length}): ${c.seo?.title}`, `Current description (${(c.seo?.description ?? "").length}): ${c.seo?.description}`, "");
  lines.push("Suggested titles (60 chars or fewer):", "", ...a.titles.map((t) => `- ${t} (${t.length})`), "", "Suggested descriptions (aim 120 to 160):", "", ...a.descs.map((d) => `- ${d} (${d.length})`), "");
  lines.push("Paste into `src/content/courses/" + c.slug + ".ts`:", "", "```ts", "seo: {", `  title: ${JSON.stringify(a.titles[0])},`, `  description: ${JSON.stringify(a.descs[0] ?? "")},`, "},", "```", "");
  lines.push("Also use: H1 `" + `${n} course in Chennai` + "`, canonical `/courses/" + c.slug + "` (already automatic), Open Graph title and description (already copied from the above).", "");
  lines.push("## 3. Keywords", "", group("Primary (one per page)", a.kw.primary), group("Secondary", a.kw.secondary), group("Commercial / decision", a.kw.commercial), group("Question keywords (AEO)", a.kw.questions), group("Tool and skill keywords", a.kw.tools), group("Job-role keywords", a.kw.jobs), group("Certification keywords", a.kw.certs), group("Local modifiers", a.kw.local));
  lines.push("## 4. AEO: be the answer AI engines quote", "");
  lines.push(`- Definition block is ${a.defWords} words. Target 40 to 60, starting "**${n}** is ...", self-contained, no pronouns like "it" without the noun.`);
  lines.push("- Put the direct answer in the first sentence of every FAQ answer, then support it. Keep answers 40 to 60 words.");
  lines.push("- Use real numbers (hours, salary with source, batch size). Pages with cited facts get quoted more than vague copy.");
  lines.push("- Keep one H2 per question-shaped topic (\"What is ...\", \"How long ...\", \"Which certification ...\"); the page template already does this.", "");
  lines.push(`FAQ question types already covered: ${a.covered.map((i) => i.id).join(", ") || "none"}.`, "");
  if (a.faqAdds.length) {
    lines.push("Suggested FAQs to add (missing question types; `[brackets]` need your facts):", "", "```ts");
    for (const f of a.faqAdds) lines.push("{", `  q: ${JSON.stringify(f.q)},`, `  a: ${JSON.stringify(f.a)},`, "},");
    lines.push("```", "");
  }
  lines.push("## 5. Structured data", "", "Already emitted automatically: `Course` (+ CourseInstance), `FAQPage` from the FAQ list, `BreadcrumbList`, site-wide `EducationalOrganization` and `WebSite`.", "", "Add when the facts exist:", "", "- `aggregateRating` on the Course once the rating and review count are real and match visible Google reviews (never invent).", "- `hasCourseInstance` start dates for upcoming batches.", "- `Article` + `FAQPage` for the \"What is " + n + "?\" explainer blog, linked from this page.", "");
  lines.push("## 6. Internal links", "");
  if (a.linkAdds.length) lines.push("Add to `related` (same track, not linked yet):", "", "```ts", ...a.linkAdds.map((l) => `{ label: ${JSON.stringify(l.label)}, href: ${JSON.stringify(l.href)} },`), "```", "");
  lines.push("Link back to this page from the related courses above, the /courses hub, and any blog post on the topic, using the keyword as anchor text. Do not use \"click here\".", "");
  lines.push("## 7. Full audit", "", "| Check | Result |", "|---|---|", ...a.checks.map((x) => `| ${x.msg} | ${x.pass ? "pass" : "FIX"} |`), "");
  return lines.join("\n");
}

// ---------- run ----------
fs.mkdirSync(OUT, { recursive: true });
const results = [];
for (const slug of slugs) {
  const file = path.join(DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) { console.error(`No content file for "${slug}" (src/content/courses/${slug}.ts)`); process.exitCode = 1; continue; }
  const c = (await import(toUrl(file))).default;
  const a = analyse(c);
  const md = report(a);
  fs.writeFileSync(path.join(OUT, `${slug}.md`), md);
  results.push({ slug, score: a.score, fixes: a.checks.filter((x) => !x.pass).length, ph: a.phCount, top: a.checks.filter((x) => !x.pass).sort((x, y) => y.w - x.w).slice(0, 3).map((x) => x.msg) });
  if (PRINT) console.log(md);
}

if (ALL) {
  results.sort((x, y) => x.score - y.score);
  const idx = ["# SEO + AEO scoreboard", "", `${results.length} course pages, weakest first. Open \`<slug>.md\` for the suggestions.`, "", "| Page | Score | Fixes | Top issues |", "|---|---|---|---|", ...results.map((r) => `| [${r.slug}](${r.slug}.md) | ${r.score} | ${r.fixes} | ${r.top.join("; ")} |`), ""].join("\n");
  fs.writeFileSync(path.join(OUT, "INDEX.md"), idx);
  const avg = Math.round(results.reduce((a, r) => a + r.score, 0) / results.length);
  console.log(`seo:suggest: ${results.length} pages, average score ${avg}/100. Weakest:`);
  for (const r of results.slice(0, 8)) console.log(`  ${String(r.score).padStart(3)}  ${r.slug}  (${r.top[0] ?? "ok"})`);
  console.log("Reports: seo-reports/INDEX.md and seo-reports/<slug>.md");
} else {
  for (const r of results) console.log(`seo:suggest: ${r.slug} scores ${r.score}/100 with ${r.fixes} fix(es). Report: seo-reports/${r.slug}.md`);
}
