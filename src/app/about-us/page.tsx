import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import AboutContent from "@/components/pages/AboutContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/about-us";
const DESC = "BTree Systems is an IT and software training institute in Chennai, teaching live online and classroom courses since 2011.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"About","path":"/about-us"}];

export const metadata: Metadata = {
  title: { absolute: "About BTree Systems | IT Training Institute in Chennai Since 2011" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "About BTree Systems | IT Training Institute in Chennai Since 2011", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <AboutContent />
    </main>
  );
}
