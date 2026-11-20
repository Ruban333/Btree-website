import type { Metadata } from "next";
import CoursesContent from "@/components/pages/CoursesContent";
import JsonLd from "@/components/seo/JsonLd";
import { ALL_COURSES } from "@/data/courses";
import { breadcrumbSchema, courseListSchema } from "@/lib/schema";

const TITLE = "IT Courses in Chennai with Placement | 40+ Courses | BTree";
const DESC =
  "Compare 40+ live IT courses in Chennai — full stack, AWS, DevOps, data, AI and testing — with fees, duration and placement support.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/courses" },
  openGraph: { type: "website", url: "/courses", title: TITLE, description: DESC },
};

export default function CoursesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
          ]),
          courseListSchema(ALL_COURSES),
        ]}
      />
      <CoursesContent />
    </main>
  );
}
