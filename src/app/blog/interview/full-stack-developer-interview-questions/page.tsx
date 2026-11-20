import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import InterviewContent from "@/components/pages/InterviewContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/blog/interview/full-stack-developer-interview-questions";
const DESC = "Full stack interview questions and answers across web fundamentals, front end, back end, databases and problem solving.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Interview questions","path":"/blog/interview/full-stack-developer-interview-questions"}];

export const metadata: Metadata = {
  title: { absolute: "Full Stack Developer Interview Questions and Answers | BTree" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Full Stack Developer Interview Questions and Answers | BTree", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <InterviewContent />
    </main>
  );
}
