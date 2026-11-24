import { courseBySlug } from "@/data/courses";

export const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Job portal", href: "/placement-job-portal" },
  { label: "Corporate training", href: "/corporate-training" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const PHONE = "+91 91769 97676";

export const HERO_STATS = [
  { value: "3750+", label: "students trained" },
  { value: "110+", label: "industry trainers" },
  { value: "Online + classroom", label: "batches" },
];

export const NUMBERS = [
  { value: "3750+", label: "Students trained" },
  { value: "110+", label: "Industry trainers" },
  { value: "1100+", label: "Certifications earned" },
  { value: "1:1", label: "Mentorship on every course" },
];

export type ProfileId = "fresher" | "it" | "nonit";
export type GoalId = "dev" | "cloud" | "data" | "test";

export const PROFILES: { id: ProfileId; label: string }[] = [
  { id: "fresher", label: "A fresher / student" },
  { id: "it", label: "Working in IT" },
  { id: "nonit", label: "From a non-IT job" },
];

export const GOALS: { id: GoalId; label: string }[] = [
  { id: "dev", label: "Development" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "data", label: "Data & AI" },
  { id: "test", label: "Testing" },
];

export const RECOMMENDATIONS: Record<GoalId, { name: string; facts: string }> = {
  dev: { name: "Python Full Stack", facts: "4 months · Online + classroom · 6 projects" },
  cloud: { name: "AWS Solutions Architect", facts: "2.5 months · Online · AWS exam prep" },
  data: { name: "Data Analytics", facts: "3 months · Online + classroom · Power BI + SQL" },
  test: {
    name: "Software Testing (Manual + Selenium)",
    facts: "3 months · Online + classroom · ISTQB prep",
  },
};

export const PROFILE_WHY: Record<ProfileId, string> = {
  fresher: "Starts from fundamentals and ends with a portfolio interviewers can open.",
  it: "Builds on what you already know; weekend batches fit around work.",
  nonit: "Beginner friendly, with a mentor who checks in every week.",
};

const HOME_COURSES: [string, string, boolean][] = [
  ["python-full-stack", "Most popular", false],
  ["data-science-machine-learning", "Data", true],
  ["data-analytics", "Data", true],
  ["aws-data-engineering", "Cloud", true],
  ["selenium", "Testing", true],
  ["ui-ux-design", "Design", true],
];

/** The six courses featured on the home page (full catalogue lives in data/courses.ts). */
export const COURSES = HOME_COURSES.map(([slug, tag, neutral]) => {
  const c = courseBySlug(slug)!;
  return { slug, cat: c.cat, code: c.code, tag, neutral, name: c.name, out: c.out, dur: c.dur, mode: c.mode, next: "[date]" };
});

export const PROCESS = [
  { title: "Live classes", body: "Small batches with a working engineer, weekday or weekend, online or in class. Every session is recorded." },
  { title: "Real projects", body: "You build 4–6 projects on real datasets and code reviews, and publish them to your GitHub portfolio." },
  { title: "Certification", body: "A BTree course certificate, plus preparation for the vendor exam where one exists (AWS, Azure, ISTQB)." },
  { title: "Placement support", body: "Resume review, mock interviews with 1:1 feedback and referrals to hiring partners until you get placed.", highlight: true },
];

export const CENTRE_IMAGES = [
  { what: "Live batch in the classroom", src: "/images/home/btree-chennai-classroom-live-batch.webp", alt: "Trainer teaching a live batch in the BTree Systems classroom in Chennai", large: true, position: "40% 50%" },
  { what: "Hands-on lab", src: "/images/home/btree-chennai-hands-on-lab.webp", alt: "Learners practising hands-on on laptops and monitors at BTree Chennai", position: "60% 50%" },
  { what: "One-to-one mentoring", src: "/images/home/btree-mentor-one-to-one-guidance.webp", alt: "A mentor giving one-to-one guidance to a learner at a laptop", position: "50% 40%" },
  { what: "Trainer-led session", src: "/images/home/btree-chennai-trainer-presentation-batch.webp", alt: "Trainer presenting to a batch on a projector screen at BTree Chennai", position: "55% 50%" },
  { what: "Case-study session", src: "/images/home/btree-chennai-case-study-session.webp", alt: "Trainer presenting a product case study to a batch at BTree Chennai", position: "35% 50%" },
];

export const PARTNERS = ["Infosys", "TCS", "Wipro", "Cognizant", "Intel", "IBM", "Freshworks"];

export const FAQS = [
  { q: "Which is the best software training institute in Chennai for placements?", a: "Look for an institute with live trainer-led classes, real projects, verified placement records and recent Google reviews. BTree Systems offers all four: 40+ courses taught by industry trainers, 4–6 portfolio projects per course, and resume, mock interview and referral support until you are placed." },
  { q: "Which IT course is best for freshers in Chennai?", a: "Python Full Stack, Java Full Stack, Data Analytics and Software Testing are the most popular starting points for freshers in Chennai. They need no prior experience, take 3–4 months, and lead to entry-level developer, analyst or QA roles. A BTree advisor can match one to your degree and goals." },
  { q: "Do BTree courses include placement support?", a: "Yes. Every BTree course includes placement support: resume and LinkedIn reviews, mock technical and HR interviews with one-to-one feedback, and referrals to hiring partners. Support continues after the course ends, until you are placed." },
  { q: "Are classes online or in Chennai?", a: "Both. You can join live online batches from anywhere, or classroom batches at the BTree centre in Chennai. Every session is recorded so you can revise or catch up." },
];

export const KEYWORD_LINKS = [
  "Python full stack course in Chennai",
  "Java full stack training in Chennai",
  "AWS training in Chennai",
  "DevOps course in Chennai",
  "Data analytics course in Chennai",
  "Data science course in Chennai",
  "Software testing course in Chennai",
  "Selenium training in Chennai",
  "UI/UX design course in Chennai",
  "Azure training in Chennai",
  "MERN stack course in Chennai",
  "Generative AI course in Chennai",
];

export const FOOTER = {
  blurb: "IT and software training institute in Chennai since 2011. Live online and classroom courses with placement support.",
  address: "Greeta Techpark, Gate 5, 96, VSI Functional Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096",
  email: "info@btreesystems.com",
  whatsapp: "+91 73973 93335",
  columns: [
    { title: "Courses", links: [["All courses", "/courses"], ["Python Full Stack", "/courses/python-full-stack"], ["Data Science", "/courses/data-science-machine-learning"], ["Selenium Testing", "/courses/selenium"], ["Data Analytics", "/courses/data-analytics"], ["UI/UX Design", "/courses/ui-ux-design"]] },
    { title: "Company", links: [["About BTree", "/about-us"], ["Corporate training", "/corporate-training"], ["Job portal", "/placement-job-portal"], ["Become an instructor", "/become-an-instructor"], ["Contact", "/contact"]] },
    { title: "Resources", links: [["Blog", "/blog"], ["Interview questions", "/blog/interview/full-stack-developer-interview-questions"], ["Terms of use", "/terms-of-use"], ["Privacy policy", "/privacy-policy"], ["Disclaimer", "/disclaimer"]] },
  ] as { title: string; links: [string, string][] }[],
};
