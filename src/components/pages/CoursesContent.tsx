import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import CourseBrowser from "@/components/sections/CourseBrowser";

/* Generated from the design canvas (Courses.dc.html). */
export default function CoursesContent() {
  return (
    <>
      <section className="band" style={{ padding: "48px 0 64px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Courses</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h1 className="t-h1" style={{ fontSize: "clamp(36px, 4.4vw, 64px)" }}>
                IT courses in Chennai and online
              </h1>
              <p className="t-lead muted" style={{ maxWidth: "600px" }}>
                Choose from 40+ live, trainer-led IT courses in Chennai: full stack development, AWS and DevOps, data
                analytics, AI and software testing. Every course includes projects, certification and placement support.
              </p>
            </div>
            <figure className="fig">
              <ImageSlot
                what="Image to supply"
                file="learners-in-a-live-it-training-batch-at-btree-systems-perungudi-chenna.webp"
                alt="Learners in a live IT training batch at BTree Systems, Perungudi, Chennai"
                style={{ aspectRatio: "4 / 3" }}
              />
              <figcaption>A live batch at the BTree Perungudi centre.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section style={{ padding: "40px 0 120px" }} aria-labelledby="list">
        <div className="wrap">
          <h2 id="list" className="sr-only">
            Course list
          </h2>
          <CourseBrowser />
          <div
            className="band-2"
            style={{
              marginTop: "48px",
              borderRadius: "var(--r-xl)",
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 className="t-h2">Can&apos;t decide between two courses?</h2>
              <p className="t-lead muted">
                Tell an advisor your background and goal. You&apos;ll get a recommendation and the next batch dates in
                one call.
              </p>
            </div>
            <Link className="btn btn--primary btn--lg" href="/contact">
              Get a free recommendation
            </Link>
          </div>
        </div>
      </section>
      <section className="sec band" aria-labelledby="compare">
        <div className="wrap">
          <div className="head" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px" }}>
              <h2 id="compare" className="t-h1">
                Which IT course should you choose?
              </h2>
              <p className="t-lead muted">
                The right IT course depends on your background and the job you want. Find your starting point below to
                see the course most learners like you choose in Chennai, and the role it prepares you for.
              </p>
            </div>
            <Link className="btn btn--secondary" href="/contact">
              Ask a course advisor
            </Link>
          </div>
          <div className="g3">
            <article
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--bg)",
              }}
            >
              <span className="tag tag--n" style={{ alignSelf: "flex-start" }}>
                Fresher or recent graduate
              </span>
              <h3 className="t-h3">Which IT course is best for freshers in Chennai?</h3>
              <p className="muted" style={{ fontSize: "15.5px" }}>
                Python Full Stack is the most popular first course for freshers from any stream. In 4 months you learn
                Python, Django, React and SQL, build 6 projects and apply for junior developer roles that hire freshers
                in large numbers.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span className="t-small">
                  <span className="muted">Leads to</span> <b>Junior Python developer</b>
                </span>{" "}
                <Link className="lnk t-small" href="/courses/aws-devops-course-chennai">
                  Python Full Stack course
                </Link>
              </div>
            </article>
            <article
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--bg)",
              }}
            >
              <span className="tag tag--n" style={{ alignSelf: "flex-start" }}>
                Engineering or CS graduate
              </span>
              <h3 className="t-h3">Which course should a CS graduate take to get placed?</h3>
              <p className="muted" style={{ fontSize: "15.5px" }}>
                Java Full Stack suits engineering and computer science graduates aiming for IT services companies. You
                learn Core Java, Spring Boot and React, and finish with a portfolio that matches what campus and
                off-campus Java interviews test.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span className="t-small">
                  <span className="muted">Leads to</span> <b>Associate Java developer</b>
                </span>{" "}
                <Link className="lnk t-small" href="/courses/aws-devops-course-chennai">
                  Java Full Stack course
                </Link>
              </div>
            </article>
            <article
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--bg)",
              }}
            >
              <span className="tag tag--n" style={{ alignSelf: "flex-start" }}>
                IT support or network engineer
              </span>
              <h3 className="t-h3">How can a support engineer move into cloud?</h3>
              <p className="muted" style={{ fontSize: "15.5px" }}>
                The AWS Solutions Architect course builds on your networking and systems knowledge. In 10 weeks of
                hands-on AWS labs you learn to design secure, scalable architectures and prepare for the SAA-C03
                certification that cloud recruiters ask for.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span className="t-small">
                  <span className="muted">Leads to</span> <b>Cloud engineer</b>
                </span>{" "}
                <Link className="lnk t-small" href="/courses/aws-devops-course-chennai">
                  AWS Solutions Architect course
                </Link>
              </div>
            </article>
            <article
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--bg)",
              }}
            >
              <span className="tag tag--n" style={{ alignSelf: "flex-start" }}>
                Developer or system administrator
              </span>
              <h3 className="t-h3">Which course leads to a DevOps engineer job?</h3>
              <p className="muted" style={{ fontSize: "15.5px" }}>
                AWS DevOps teaches the automation skills DevOps roles require: Linux, Git, Jenkins, Docker, Kubernetes
                and Terraform on AWS. You build 3 end-to-end CI/CD projects and prepare for AWS and Kubernetes
                certifications in 4 months.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span className="t-small">
                  <span className="muted">Leads to</span> <b>DevOps engineer</b>
                </span>{" "}
                <Link className="lnk t-small" href="/courses/aws-devops-course-chennai">
                  AWS DevOps course
                </Link>
              </div>
            </article>
            <article
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--bg)",
              }}
            >
              <span className="tag tag--n" style={{ alignSelf: "flex-start" }}>
                Commerce, science or business graduate
              </span>
              <h3 className="t-h3">Can a non-IT graduate become a data analyst?</h3>
              <p className="muted" style={{ fontSize: "15.5px" }}>
                Yes. The Data Analytics course starts with Excel and moves to SQL, Power BI and Python, with no coding
                background needed. You build dashboards on real datasets and apply for data analyst and business analyst
                roles.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span className="t-small">
                  <span className="muted">Leads to</span> <b>Data analyst</b>
                </span>{" "}
                <Link className="lnk t-small" href="/courses/aws-devops-course-chennai">
                  Data Analytics course
                </Link>
              </div>
            </article>
            <article
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--bg)",
              }}
            >
              <span className="tag tag--n" style={{ alignSelf: "flex-start" }}>
                Manual tester or non-coding fresher
              </span>
              <h3 className="t-h3">How do I move from manual to automation testing?</h3>
              <p className="muted" style={{ fontSize: "15.5px" }}>
                The Software Testing course covers manual testing, then Selenium with Java and API testing. In 3 months
                you build automated test suites and prepare for ISTQB, the skills QA automation interviews in Chennai
                focus on.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span className="t-small">
                  <span className="muted">Leads to</span> <b>QA automation engineer</b>
                </span>{" "}
                <Link className="lnk t-small" href="/courses/aws-devops-course-chennai">
                  Software Testing course
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="lfaq">
        <div className="wrap split-5-7">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 id="lfaq" className="t-h1">
              IT course questions
            </h2>
            <figure className="fig">
              <figcaption>Free counselling helps you pick the right course.</figcaption>
            </figure>
          </div>
          <div className="acc">
            <details open>
              <summary>
                Which IT course has the most jobs in Chennai?
                <svg
                  className="pl"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <div className="bd">
                Full stack development (Python or Java), cloud and DevOps, data analytics and software testing have the
                most openings in Chennai. Full stack and testing suit freshers; cloud and DevOps suit people with some
                IT experience. An advisor can compare current openings for your profile.
              </div>
            </details>
            <details>
              <summary>
                Can I learn IT courses online from BTree?
                <svg
                  className="pl"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <div className="bd">
                Yes. Every BTree course runs as a live online batch as well as in the Chennai classroom. Online learners
                get the same trainer, projects, recordings and placement support, and can switch to classroom sessions
                if they move to Chennai.
              </div>
            </details>
            <details>
              <summary>
                Do I need a degree to join?
                <svg
                  className="pl"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <div className="bd">
                No specific degree is needed for most courses. BTree learners include engineering, arts, science and
                commerce graduates as well as working professionals. Some advanced courses, like DevOps, expect basic
                programming or Linux knowledge first.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
