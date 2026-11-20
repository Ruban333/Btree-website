import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BlogArticleContent from "@/components/pages/BlogArticleContent";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const PATH = "/blog/career-with-aws-devops-certification";
const DESC = "The usual AWS DevOps path is Cloud Practitioner, then an Associate exam, then DevOps Engineer Professional. See the skills, jobs and salary.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Cloud & DevOps","path":"/blog/category/cloud-devops"},{"name":"AWS DevOps certification","path":"/blog/career-with-aws-devops-certification"}];

export const metadata: Metadata = {
  title: { absolute: "AWS DevOps Certification: Career Path, Skills & Salary | BTree" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title: "AWS DevOps Certification: Career Path, Skills & Salary | BTree", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema(TRAIL), articleSchema({ headline: "AWS DevOps certification: career path, skills and salary", description: DESC, path: PATH })]} />
      <BlogArticleContent />
    </main>
  );
}
