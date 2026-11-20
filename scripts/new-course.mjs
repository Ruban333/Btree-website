// Creates a new course page: content file + registry entry + catalogue entry.
//   npm run course:new -- <slug> "<Name>" [--cat dev|cloud|data|test|design] [--track "Cloud & DevOps"]
// Everything you still need to write is a [bracketed placeholder]; `npm run build` refuses to ship until they are gone.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(`--${n}`); if (i < 0) return undefined; const v = args[i + 1]; args.splice(i, 2); return v; };
const cat = flag("cat") ?? "cloud";
const trackFlag = flag("track");
const slug = args[0];
const name = args.slice(1).join(" ").trim();

const TRACKS = { dev: "Development", cloud: "Cloud & DevOps", data: "Data & AI", test: "Testing", design: "Design" };
if (!slug || !name || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || !TRACKS[cat]) {
  console.error('Usage: npm run course:new -- <slug> "<Name>" [--cat dev|cloud|data|test|design] [--track "Label"]\n  slug: lowercase words joined by hyphens, e.g. kubernetes-admin');
  process.exit(1);
}
const track = trackFlag ?? TRACKS[cat];

const contentFile = path.join(ROOT, "src/content/courses", `${slug}.ts`);
const indexFile = path.join(ROOT, "src/content/courses/index.ts");
const catalogFile = path.join(ROOT, "src/data/courses.ts");
if (fs.existsSync(contentFile)) { console.error(`Already exists: src/content/courses/${slug}.ts`); process.exit(1); }
const catalog = fs.readFileSync(catalogFile, "utf8");
if (catalog.includes(`slug: "${slug}"`)) { console.error(`"${slug}" is already in src/data/courses.ts`); process.exit(1); }

const P = (s) => `[${s}]`;
const faqs = [
  [`What is the ${name} course fee in Chennai?`, `The BTree ${name} course fee is ₹${P("FEE")} for the full ${P("N")}-month programme, with no-cost EMI from ₹${P("EMI")} a month. ${P("What the fee includes")}.`],
  [`How long does it take to learn ${name}?`, `The BTree ${name} course takes ${P("N")} months on weekdays or about ${P("N")} months on weekends. ${P("What most learners can do by the end")}.`],
  [`Can a fresher or non-IT graduate learn ${name}?`, `${P("Yes or no, then who it suits and what is taught from scratch. 40 to 60 words, answer first")}.`],
  [`What is the salary of a ${name} professional in Chennai?`, `Entry-level ${name} roles in Chennai typically pay ₹${P("X–Y")} LPA, rising to ₹${P("X–Y")} LPA with 3–5 years of experience (${P("source, year")}).`],
  [`Does the ${name} course prepare me for certification?`, `${P("Exam names and what is covered")}. Exam fees are ${P("included / paid separately")}.`],
  [`Will I get placement support after the ${name} course?`, `Yes. Placement support includes resume and LinkedIn reviews, mock interviews with feedback, and referrals to BTree hiring partners. It continues after the course ends, until you are placed.`],
];
const item = (t) => ({ title: P(t), text: P("One sentence") });

const data = {
  slug, name, track,
  seo: {
    title: `${name} Course in Chennai with Placement | BTree`,
    description: `${name} course in Chennai: ${P("key topics")} in ${P("N")} months of live labs. ${P("Exam")} prep and placement support.`,
  },
  hero: {
    h1: `${name} course in Chennai`,
    lead: `The BTree ${name} course in Chennai teaches you ${P("what you will be able to do")}. In ${P("N")} months of live, hands-on classes you build ${P("N")} real projects and get placement support for ${P("job roles")}.`,
    proof: { score: P("4.9"), detail: `from ${P("N")} Google reviews · ${P("N")} learners placed in 2026` },
    syllabusButton: `Download ${name} syllabus (PDF)`,
    formTitle: `Talk to a ${name} advisor`,
  },
  glance: {
    title: `How long is the ${name} course?`,
    lead: `The ${name} course takes **${P("N")} months, about ${P("N")} hours** of live classes and hands-on labs. Choose the batch that fits your schedule; every batch covers the same syllabus and projects.`,
    batches: [
      { name: "Weekday batch", duration: `${P("N")} months`, schedule: ["Monday to Friday", `${P("N")} hours a day`], note: "For freshers or full-time learners" },
      { name: "Weekend batch", duration: `${P("N")} months`, schedule: ["Saturday and Sunday", `${P("N")} hours a day`], note: "Fits around a full-time job" },
    ],
  },
  whatis: {
    title: `What is ${name}?`,
    definition: `**${name}** is ${P("one-sentence definition, 40 to 60 words, answer first")}.`,
    why: `${P("Why employers need it, and the roles it leads to in Chennai")}.`,
    pipeline: {
      label: `${P("How the pieces fit together")}`,
      caption: `${P("What the learner builds across the course")}.`,
      steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"].map((s) => ({ label: P(s), tools: P("Tools") })).concat([{ label: P("Final step"), tools: P("Tools"), highlight: true }]),
    },
  },
  outcomes: {
    title: `What you'll learn in the ${name} course`,
    lead: `By the end you can ${P("headline outcome")}.`,
    items: ["Outcome 1", "Outcome 2", "Outcome 3", "Outcome 4"].map(item),
  },
  who: { title: `Who should join this ${name} course?`, items: ["Freshers and graduates", "Working professionals", "Career switchers", "Learners from another IT role"].map((t) => ({ title: t, text: P("Who they are and what they get") })) },
  curriculum: {
    title: `${name} course syllabus`,
    lead: `${P("N")} modules and a capstone, about ${P("N")} hours of live classes and labs.`,
    modules: [1, 2, 3].map((n) => ({ title: P(`Module ${n}`), sessions: `${P("N")} sessions`, bullets: [P("Topic"), P("Topic"), P("Topic")] })),
  },
  tools: { title: "Tools you'll use", items: ["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5", "Tool 6"].map(P) },
  projects: {
    title: `${name} projects you'll build`,
    lead: `${P("Where the projects run and what the learner publishes")}.`,
    items: [1, 2, 3].map((n) => ({ title: P(`Project ${n}`), text: P("What it does"), stack: P("Tool · Tool · Tool"), imageAlt: `${P(`Project ${n}`)} built in the ${name} course` })),
  },
  cert: {
    title: `${name} certification`,
    text: `You earn a BTree ${name} course certificate and prepare for ${P("industry exams")}. Practice tests and a revision week are included.`,
    imageAlt: `BTree ${name} course completion certificate`,
    caption: `Sample BTree ${name} course certificate.`,
  },
  jobs: {
    title: `Jobs and salary after the ${name} course`,
    lead: `${name} learners usually start as ${P("roles")}. Typical Chennai starting salaries are below and rise quickly with 2–3 years of experience.`,
    roles: [1, 2, 3, 4].map((n) => ({ role: P(`Role ${n}`), salary: `₹${P("X–Y")} LPA`, employers: P("Typical employers") })),
    note: `Source: ${P("salary source, year")}. Ranges vary by skills and company.`,
  },
  why: {
    title: `Why learn ${name} at BTree`,
    items: [
      { title: "Hands-on labs", text: P("What labs the learner gets") },
      { title: "Trainers who work in the field", text: `Classes are taught by working professionals with ${P("N")}+ years of experience.` },
      { title: "Small live batches", text: `Up to ${P("N")} learners per batch, recorded sessions and doubt-clearing every week.` },
      { title: "Placement until hired", text: "Resume review, mock interviews and referrals to hiring partners, with no end date." },
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: `Video stories and reviews from learners of the ${P("Batch month")} ${name} batch.`,
    videos: [1, 2, 3].map(() => ({ name: P("Learner name"), meta: `${P("Role")} at ${P("Company")} · ${P("Batch month")} batch` })),
    quotes: [1, 2, 3].map(() => ({ text: P("Real review from a previous batch learner — 20 to 30 words."), name: P("Learner name"), placed: `Placed at ${P("Company")} · ${P("Batch month")}` })),
    allLink: `Read all ${P("N")} Google reviews`,
  },
  faq: { title: `${name} course FAQ`, lead: "Answers to the questions learners ask most before joining.", items: faqs.map(([q, a]) => ({ q, a })) },
  cta: { title: `Try a free ${name} demo class`, lead: `${P("What the learner will see in the demo")}.`, button: "Book my demo class" },
  related: [
    { label: "All IT courses in Chennai", href: "/courses" },
    { label: P("Related course"), href: "#" },
    { label: P("Related guide"), href: "#" },
  ],
  areas: `**${name} training across Chennai:** ${P("Areas served, e.g. Adyar, Guindy, T. Nagar, OMR")}. Classroom batches run at our Perungudi centre; every batch is also live online.`,
};

const ts = `import type { CoursePage } from "../course-types";\n\nconst course: CoursePage = ${JSON.stringify(data, null, 2)};\n\nexport default course;\n`;
fs.writeFileSync(contentFile, ts);

// Registry
const ident = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
let idx = fs.readFileSync(indexFile, "utf8");
idx = idx.replace("// @course-imports", `import ${ident} from "./${slug}";\n// @course-imports`).replace("  // @course-list", `  ${ident},\n  // @course-list`);
fs.writeFileSync(indexFile, idx);

// Catalogue (listing card + schema + sitemap)
const row = `  { slug: "${slug}", cat: "${cat}", code: "${P("XX")}", name: "${name}", out: "${P("One-line outcome for the course card")}", dur: "${P("N months")}", mode: "Online · Classroom", level: "Beginner" },\n`;
fs.writeFileSync(catalogFile, catalog.replace(/\n\];\n\nexport const courseBySlug/, `\n${row}];\n\nexport const courseBySlug`));

try { execSync(`npx prettier --write --print-width 120 "src/content/courses/${slug}.ts"`, { cwd: ROOT, stdio: "ignore" }); } catch {}

console.log(`Created course "${name}" (/courses/${slug})
  content:   src/content/courses/${slug}.ts        <- fill in every [placeholder]
  catalogue: src/data/courses.ts                    <- fix the course card row (code, outcome, duration, level)
Next:
  npm run course:check          validate the content
  npm run check:placeholders    list what is still to fill
  open http://localhost:3001/courses/${slug}`);
