import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { ALL_COURSES, courseBySlug, type Course } from "@/data/courses";
import CoursePageView from "@/components/course/CoursePageView";
import { COURSE_PAGES } from "@/content/courses";
import { PROCESS } from "@/data/home";
import { breadcrumbSchema, courseSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

/** Plain-text version of a content string (drops **bold** markers and line breaks). */
const plain = (t: string) => t.split("**").join("").split("\n").join(" ");

// Unknown slugs must wait for the full render so notFound() returns a true 404, not a streamed 200 (soft 404).
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return ALL_COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courseBySlug((await params).slug);
  if (!course) return {};
  const path = `/courses/${course.slug}`;
  const page = COURSE_PAGES[course.slug];
  const title = page?.seo.title ?? `${course.name} Course in Chennai: Online & Classroom`;
  const description =
    page?.seo.description ??
    `${course.name} training in Chennai and online. ${course.out} ${course.dur}, live trainer-led batches, projects and placement support.`;
  return {
    title: page ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title, description },
  };
}

function courseFaqs(c: Course) {
  return [
    {
      q: `How long is the ${c.name} course at BTree?`,
      a: `The ${c.name} course runs for ${c.dur}. Batches are live and trainer-led, and every session is recorded so you can revise or catch up.`,
    },
    {
      q: `Is the ${c.name} course online or in Chennai?`,
      a: `${c.mode.replace(" · ", " and ")} batches are available. Classroom batches run at the BTree centre in Perungudi, Chennai.`,
    },
    {
      q: `Does the ${c.name} course include placement support?`,
      a: `Yes. Every BTree course includes resume and LinkedIn reviews, mock technical and HR interviews with one-to-one feedback, and referrals to hiring partners until you are placed.`,
    },
  ];
}

export default async function CoursePage({ params }: Props) {
  const course = courseBySlug((await params).slug);
  if (!course) notFound();

  const path = `/courses/${course.slug}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: course.name, path },
  ];

  const page = COURSE_PAGES[course.slug];
  if (page) {
    return (
      <main>
        <JsonLd
          data={[
            breadcrumbSchema(trail),
            courseSchema({ ...course, out: plain(page.hero.lead) }, path),
            faqSchema(page.faq.items),
          ]}
        />
        <CoursePageView c={page} />
      </main>
    );
  }

  const faqs = courseFaqs(course);
  return (
    <main>
      <JsonLd data={[courseSchema(course, path), faqSchema(faqs)]} />
      <section className="sec sec--tight">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 920 }}>
          <Breadcrumbs trail={trail} />
          <h1 className="t-h1">{`${course.name} course in Chennai`}</h1>
          {/* Answer-first summary: the passage AI engines are most likely to quote. */}
          <p className="t-lead">
            {`BTree's ${course.name} course in Chennai is a ${course.dur} live, trainer-led program (${course.mode.replace(" · ", " or ")}). ${course.out} It includes real projects, a course certificate and placement support.`}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn--primary btn--lg" href="/contact">
              Enquire about this course
            </Link>
            <Link className="btn btn--secondary btn--lg" href="/courses">
              All courses
            </Link>
          </div>

          <h2 className="t-h2">Course at a glance</h2>
          <table>
            <tbody>
              <tr>
                <th scope="row">Duration</th>
                <td>{course.dur}</td>
              </tr>
              <tr>
                <th scope="row">Format</th>
                <td>{course.mode}</td>
              </tr>
              <tr>
                <th scope="row">Level</th>
                <td>{course.level}</td>
              </tr>
              <tr>
                <th scope="row">What you learn</th>
                <td>{course.out}</td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>Perungudi, Chennai, or live online</td>
              </tr>
            </tbody>
          </table>

          <h2 className="t-h2">What is included</h2>
          <ul>
            {PROCESS.map((p) => (
              <li key={p.title}>
                <strong>{p.title}:</strong> {p.body}
              </li>
            ))}
          </ul>

          <h2 className="t-h2">{`${course.name} course FAQs`}</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="t-h3">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
