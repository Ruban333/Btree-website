import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BlogTrackContent from "@/components/pages/BlogTrackContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/blog/category/cloud-devops";
const DESC = "Career paths, project ideas and tools for AWS, Azure, Kubernetes and CI/CD, from BTree’s cloud trainers in Chennai.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Cloud & DevOps","path":"/blog/category/cloud-devops"}];

export const metadata: Metadata = {
  title: { absolute: "Cloud & DevOps Articles and Guides | BTree Blog" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Cloud & DevOps Articles and Guides | BTree Blog", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <BlogTrackContent />
    </main>
  );
}
