import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import LeadForm from "@/components/forms/LeadForm";

/* Generated from the design canvas (Blog-Clean.dc.html). */
export default function BlogHomeContent() {
  return (
    <>
      <section style={{ padding: "40px 0 56px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Blog</b>
          </nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <h1 className="t-display" style={{ fontSize: "clamp(40px, 5vw, 72px)", maxWidth: "760px" }}>
              IT career guides and interview questions
            </h1>
            <p className="t-lead muted" style={{ maxWidth: "440px" }}>
              Tutorials, project ideas, salary guides and company interview questions from BTree trainers in Chennai.
            </p>
          </div>
          <nav className="cluster" aria-label="Blog tracks" style={{ gap: "8px" }}>
            <Link className="chip on" aria-current="page" href="/blog">
              All <small>[32]</small>
            </Link>
            <Link className="chip" href="/blog/category/cloud-devops">
              Development <small>[5]</small>
            </Link>
            <Link className="chip" href="/blog/category/cloud-devops">
              Cloud & DevOps <small>[6]</small>
            </Link>
            <Link className="chip" href="/blog/category/cloud-devops">
              Data & AI <small>[5]</small>
            </Link>
            <Link className="chip" href="/blog/category/cloud-devops">
              Data Engineering <small>[2]</small>
            </Link>
            <Link className="chip" href="/blog/category/cloud-devops">
              Testing & Automation <small>[8]</small>
            </Link>
            <Link className="chip" href="/blog/category/cloud-devops">
              Design & Marketing <small>[4]</small>
            </Link>
          </nav>
        </div>
      </section>
      <section style={{ paddingBottom: "96px" }} aria-labelledby="feat">
        <div className="wrap">
          <h2 id="feat" className="sr-only">
            Featured guide
          </h2>
          <Link
            className="card card--line"
            style={{ display: "grid", gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)", overflow: "hidden" }}
            href="/blog/career-with-aws-devops-certification"
          >
            <ImageSlot
              what="Image to supply"
              file="aws-devops-certification-career-path-from-cloud-practitioner-to-devops.webp"
              alt="AWS DevOps certification career path from Cloud Practitioner to DevOps Engineer Professional"
              style={{ borderRadius: "0", minHeight: "400px", height: "100%" }}
            />
            <div
              style={{
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <span className="tag" style={{ alignSelf: "flex-start" }}>
                Cloud & DevOps
              </span>
              <h3 className="t-h1" style={{ fontSize: "clamp(28px, 2.6vw, 38px)" }}>
                AWS DevOps certification: career path, skills and salary
              </h3>
              <p className="muted">
                Which AWS certifications to take in order, the skills employers test, and the roles and salaries they
                lead to.
              </p>
              <div className="person" style={{ marginTop: "8px" }}>
                <span className="av">[AB]</span>
                <span className="t-small">
                  <b>[Author name]</b>, DevOps trainer
                  <br />
                  <span className="muted">[N] min read · Updated [date]</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="sec band" aria-labelledby="latest" style={{ paddingTop: "88px" }}>
        <div className="wrap">
          <div className="head" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 id="latest" className="t-h1">
                Latest guides
              </h2>
              <p className="t-lead muted">Practical, step-by-step articles for learners and working professionals.</p>
            </div>
            <Link className="btn btn--secondary" href="/blog/category/cloud-devops">
              Browse by track
            </Link>
          </div>
          <div className="g3" style={{ rowGap: "56px" }}>
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="ci-cd-pipeline-diagram-for-a-beginner-devops-project.webp"
                alt="CI/CD pipeline diagram for a beginner DevOps project"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Cloud & DevOps</span>
              <h3 className="t-h3">15+ DevOps project ideas with step-by-step guides</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="grafana-dashboard-monitoring-a-kubernetes-cluster.webp"
                alt="Grafana dashboard monitoring a Kubernetes cluster"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Cloud & DevOps</span>
              <h3 className="t-h3">Top DevOps monitoring tools to learn</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="five-steps-of-data-analysis-from-collecting-to-visualising-data.webp"
                alt="Five steps of data analysis from collecting to visualising data"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Data & AI</span>
              <h3 className="t-h3">Data analysis fundamentals: a step-by-step guide for beginners</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="python-full-stack-developer-tools-django-react-postgresql-git-and-dock.webp"
                alt="Python full stack developer tools: Django, React, PostgreSQL, Git and Docker"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Development</span>
              <h3 className="t-h3">Full stack developer tools: a complete guide</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="comparison-of-software-testing-and-debugging.webp"
                alt="Comparison of software testing and debugging"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Development</span>
              <h3 className="t-h3">Testing vs debugging in software development</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="selenium-webdriver-command-examples-in-java.webp"
                alt="Selenium WebDriver command examples in Java"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Testing & Automation</span>
              <h3 className="t-h3">Selenium WebDriver commands with examples</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="selenium-automation-project-running-test-cases.webp"
                alt="Selenium automation project running test cases"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Testing & Automation</span>
              <h3 className="t-h3">Top 10 Selenium projects with source code</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="rpa-developer-building-a-uipath-automation-workflow.webp"
                alt="RPA developer building a UiPath automation workflow"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Testing & Automation</span>
              <h3 className="t-h3">How to become an RPA developer: skills, salary and career growth</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>{" "}
            <a className="post" style={{ display: "flex", flexDirection: "column", gap: "14px" }} href="#">
              <ImageSlot
                what="Image to supply"
                file="uipath-studio-workflow-automating-invoice-processing.webp"
                alt="UiPath Studio workflow automating invoice processing"
                style={{ aspectRatio: "16 / 10" }}
              />
              <span className="t-label">Testing & Automation</span>
              <h3 className="t-h3">5+ UiPath automation examples for hands-on practice</h3>
              <p className="t-small muted">[N] min read · Updated [date]</p>
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "56px" }}>
            <a className="btn btn--secondary" href="#">
              More guides
            </a>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="interview">
        <div className="wrap split-5-7">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="interview" className="t-h1">
              Company interview questions
            </h2>
            <p className="t-lead muted">
              Real questions asked in campus and lateral interviews at top IT companies, with model answers.
            </p>
            <Link
              className="btn btn--secondary"
              style={{ alignSelf: "flex-start" }}
              href="/blog/interview/full-stack-developer-interview-questions"
            >
              See all interview guides
            </Link>
          </div>
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  Cognizant GenC interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  Infosys coding interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  Deloitte interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  EY interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  PwC interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  Cisco interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  CSS Corp interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  Full stack developer interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  .NET interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  UI UX designer interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
            <li>
              <Link className="postrow" href="/blog/interview/full-stack-developer-interview-questions">
                <h3 className="t-h3" style={{ fontSize: "18px" }}>
                  IBM Maximo interview questions
                </h3>
                <span className="t-small muted">[N] questions</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec--tight" aria-labelledby="nl" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="wrap">
          <div
            className="band-brand"
            style={{
              borderRadius: "var(--r-xl)",
              padding: "56px 64px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 id="nl" className="t-h1">
                One career guide a week
              </h2>
              <p className="t-lead">New guides, interview questions and batch dates. Unsubscribe any time.</p>
            </div>
            <LeadForm source="blog" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <label htmlFor="em" className="sr-only">
                Email address
              </label>
              <input
                id="em"
                className="inp"
                placeholder="you@example.com"
                style={{ flex: "1 1 260px", borderColor: "#ffffff" }}
                name="em"
                required
              />
              <button className="btn btn--invert" type="submit">
                Subscribe
              </button>
            </LeadForm>
          </div>
        </div>
      </section>
    </>
  );
}
