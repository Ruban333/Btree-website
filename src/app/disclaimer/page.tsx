import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import DisclaimerContent from "@/components/pages/DisclaimerContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/disclaimer";
const DESC = "Disclaimer for the BTree Systems website, course information and placement support.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Disclaimer","path":"/disclaimer"}];

export const metadata: Metadata = {
  title: { absolute: "Disclaimer | BTree Systems" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Disclaimer | BTree Systems", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <DisclaimerContent />
    </main>
  );
}
