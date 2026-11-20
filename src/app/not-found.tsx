import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/data/home";

// A 404 must never be indexed, but its links should still be followed so crawlers can recover into real pages.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className="sec">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 760 }}>
          <p className="t-label">Error 404</p>
          <h1 className="t-h1">We could not find that page</h1>
          <p className="t-lead muted">
            The link may be old or mistyped. Try one of these, or talk to a course advisor and we will point you to the right course.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn--primary" href="/">
              Back to home
            </Link>
            <Link className="btn btn--secondary" href="/courses">
              Browse all courses
            </Link>
            <Link className="btn btn--secondary" href="/contact">
              Contact us
            </Link>
          </div>
          <h2 className="t-h3" style={{ marginTop: 16 }}>
            Popular courses
          </h2>
          <nav className="cluster" aria-label="Popular courses">
            {COURSES.map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`}>
                {c.name} course in Chennai
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
