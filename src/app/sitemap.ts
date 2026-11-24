import type { MetadataRoute } from "next";
import { ALL_COURSES } from "@/data/courses";
import { absoluteUrl } from "@/lib/site";

/**
 * Only list URLs that really exist and return 200.
 * Add each page here as it ships (later: pull courses/blog slugs from the CMS API).
 */
const ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/category/cloud-devops", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog/career-with-aws-devops-certification", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/interview/full-stack-developer-interview-questions", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.6, changeFrequency: "monthly" },
  { path: "/corporate-training", priority: 0.6, changeFrequency: "monthly" },
  { path: "/placement-job-portal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/become-an-instructor", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/terms-of-use", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ...ALL_COURSES.map((c) => ({ path: `/courses/${c.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
