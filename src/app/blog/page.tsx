import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BlogHomeContent from "@/components/pages/BlogHomeContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/blog";
const DESC = "Tutorials, project ideas, salary guides and company interview questions from BTree trainers in Chennai.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Blog","path":"/blog"}];

export const metadata: Metadata = {
  title: { absolute: "BTree Blog: IT Career Guides, Tutorials & Interview Questions" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "BTree Blog: IT Career Guides, Tutorials & Interview Questions", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <BlogHomeContent />
    </main>
  );
}
