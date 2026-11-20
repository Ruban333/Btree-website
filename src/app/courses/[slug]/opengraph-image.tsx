import { ImageResponse } from "next/og";
import { ALL_COURSES, courseBySlug } from "@/data/courses";
import { OG_SIZE, OgCard } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = "BTree Systems course in Chennai";
export const size = OG_SIZE;
export const contentType = "image/png";

export const generateStaticParams = () => ALL_COURSES.map((c) => ({ slug: c.slug }));

/** A share card per course: shows the course name, length and format when a link is pasted into WhatsApp, LinkedIn or X. */
export default async function CourseOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const course = courseBySlug((await params).slug);
  return new ImageResponse(
    (
      <OgCard
        eyebrow={course ? course.level : undefined}
        title={course ? `${course.name} course in Chennai` : SITE.tagline}
        subtitle={course ? `${course.dur} · ${course.mode} · Placement support` : "Live online + classroom batches"}
        footer={`${SITE.name} · Perungudi, Chennai · Since ${SITE.foundingYear}`}
      />
    ),
    { ...size },
  );
}
