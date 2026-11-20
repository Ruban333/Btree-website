import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PrivacyContent from "@/components/pages/PrivacyContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/privacy-policy";
const DESC = "How BTree Systems collects, uses and protects your personal information.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Privacy policy","path":"/privacy-policy"}];

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | BTree Systems" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Privacy Policy | BTree Systems", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <PrivacyContent />
    </main>
  );
}
