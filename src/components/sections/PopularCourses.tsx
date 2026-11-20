import Link from "next/link";
import { COURSES } from "@/data/home";

export default function PopularCourses() {
  return (
    <section className="sec band" aria-labelledby="popular">
      <div className="wrap">
        <div className="head">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h2 id="popular" className="t-h1">
              Popular courses
            </h2>
            <p className="t-lead muted">Every course is live, project-based and includes placement support.</p>
          </div>
          <Link className="btn btn--secondary" href="/courses">
            View all courses
          </Link>
        </div>
        <div className="g3">
          {COURSES.map((c) => (
            <Link key={c.name} className="card course" href={`/courses/${c.slug}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="ic">{c.code}</span>
                <span className={c.neutral ? "tag tag--n" : "tag"}>{c.tag}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 className="t-h3">{c.name}</h3>
                <p className="t-small muted">{c.out}</p>
              </div>
              <div className="meta">
                <span>{c.dur}</span>
                <span>{c.mode}</span>
              </div>
              <div className="foot">
                <span className="muted">Next batch {c.next}</span>
                <span className="lnk">View course</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
