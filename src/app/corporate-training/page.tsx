import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CorporateContent from "@/components/pages/CorporateContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/corporate-training";
const DESC = "Corporate IT training for your teams in Chennai and online, delivered by industry trainers and tailored to your tech stack.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Corporate training","path":"/corporate-training"}];

export const metadata: Metadata = {
  title: { absolute: "Corporate IT Training in Chennai & Online | BTree Systems" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Corporate IT Training in Chennai & Online | BTree Systems", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <CorporateContent />
    </main>
  );
}
