import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ContactContent from "@/components/pages/ContactContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/contact";
const DESC = "Call, WhatsApp or visit BTree Systems in Chennai. Address, opening hours, directions and free course counselling.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Contact","path":"/contact"}];

export const metadata: Metadata = {
  title: { absolute: "Contact BTree Systems | Software Training Institute in Chennai" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Contact BTree Systems | Software Training Institute in Chennai", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <ContactContent />
    </main>
  );
}
