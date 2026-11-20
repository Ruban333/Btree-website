import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import JobPortalContent from "@/components/pages/JobPortalContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/placement-job-portal";
const DESC = "The BTree job portal and placement support for learners: resume reviews, mock interviews and hiring-partner referrals.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Job portal","path":"/placement-job-portal"}];

export const metadata: Metadata = {
  title: { absolute: "IT Jobs & Placement Support for BTree Learners" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "IT Jobs & Placement Support for BTree Learners", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <JobPortalContent />
    </main>
  );
}
