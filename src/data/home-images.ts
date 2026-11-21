import type { CourseCat } from "@/data/courses";

/** Home-page photos live in /public/images/home (optimised webp, SEO file names). */
const DIR = "/images/home";

export const HERO_IMAGE = {
  src: `${DIR}/software-training-institute-chennai-btree-classroom.webp`,
  alt: "Trainer teaching a live software training batch at BTree Systems, Chennai",
  // the trainer stands left of centre; keep him in the 4:5 crop
  position: "30% 50%",
};

/** Course-card photos by track. A course always gets the same one (picked from its slug), so cards do not flicker. */
const BY_CAT: Record<CourseCat, string[]> = {
  dev: ["course-code-editor-macbook", "course-code-closeup", "course-code-test-suite", "course-code-editor-dark"],
  cloud: ["course-server-racks-red", "course-server-tower-blue", "course-data-centre-aisle"],
  data: ["course-analytics-dashboard", "course-code-closeup"],
  test: ["course-code-test-suite", "course-code-editor-dark"],
  design: ["course-wireframe-notebook"],
  marketing: ["course-analytics-dashboard"],
};

/** Courses that have their own designed card artwork in /public/images/courses (<slug>-course-chennai.webp). */
const CARD_ART = new Set([
  "aws-data-engineering", "aws-devops-course-chennai", "aws-training-chennai", "azure-data-engineering", "azure-synapse",
  "ccna-ccnp", "cyber-security", "data-analytics", "databricks", "data-science-machine-learning", "digital-marketing",
  "dot-net", "gcp-devops", "generative-ai", "google-bigquery", "java-full-stack", "linux", "playwright-automation",
  "power-automate", "pyspark", "python-full-stack", "salesforce", "selenium", "snowflake", "ui-ux-design", "azure-devops",
  "gcp-data-engineering", "graphic-designing",
]);

export function courseImage(cat: CourseCat, slug: string) {
  if (CARD_ART.has(slug)) return `/images/courses/${slug}-course-chennai.webp`;
  // no artwork yet (for example a page just released from hold): fall back to a track photo
  const list = BY_CAT[cat];
  const n = [...slug].reduce((a, ch) => a + ch.charCodeAt(0), 0);
  return `${DIR}/${list[n % list.length]}.webp`;
}
