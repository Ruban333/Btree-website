import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import TermsContent from "@/components/pages/TermsContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/terms-of-use";
const DESC = "The terms that apply when you use the BTree Systems website and enrol in our courses.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Terms of use","path":"/terms-of-use"}];

export const metadata: Metadata = {
  title: { absolute: "Terms of Use | BTree Systems" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Terms of Use | BTree Systems", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <TermsContent />
    </main>
  );
}
