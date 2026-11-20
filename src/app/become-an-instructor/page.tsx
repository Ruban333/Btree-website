import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import InstructorContent from "@/components/pages/InstructorContent";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/become-an-instructor";
const DESC = "Teach IT courses at BTree Systems in Chennai. Apply to become a trainer and share your industry experience with learners.";
const TRAIL = [{"name":"Home","path":"/"},{"name":"Become an instructor","path":"/become-an-instructor"}];

export const metadata: Metadata = {
  title: { absolute: "Become an IT Trainer in Chennai | Teach with BTree Systems" },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: "Become an IT Trainer in Chennai | Teach with BTree Systems", description: DESC },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(TRAIL)} />
      <InstructorContent />
    </main>
  );
}
