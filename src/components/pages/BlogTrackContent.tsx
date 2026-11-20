import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";

/* Generated from the design canvas (Blog-Track.dc.html). */
export default function BlogTrackContent() {
  return (
    <>
      <section className="band" style={{ padding: "40px 0 72px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <b aria-current="page">Cloud & DevOps</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h1 className="t-h1" style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
                Cloud and DevOps guides
              </h1>
              <p className="t-lead muted">
                Career paths, project ideas and tools for AWS, Azure, Kubernetes and CI/CD, from BTree&apos;s cloud
                trainers.
              </p>
            </div>
            <nav className="cluster" aria-label="Other tracks">
              <Link href="/blog">All</Link>
              <a href="#">Development</a>
              <a aria-current="page" style={{ background: "var(--ink)", color: "var(--bg)" }} href="#">
                Cloud & DevOps
              </a>
              <a href="#">Data & AI</a>
              <a href="#">Data Engineering</a>
              <a href="#">Testing & Automation</a>
              <a href="#">Design & Marketing</a>
            </nav>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="tl" style={{ paddingTop: "72px" }}>
        <div className="wrap" style={{ marginBottom: "48px" }}>
          <figure className="fig">
            <ImageSlot
              what="Image to supply"
              file="cloud-and-devops-tutorials-and-career-guides-from-btree-trainers.webp"
              alt="Cloud and DevOps tutorials and career guides from BTree trainers"
              style={{ aspectRatio: "21 / 6" }}
            />
            <figcaption>Guides written by BTree cloud and DevOps trainers.</figcaption>
          </figure>
        </div>
        <div className="wrap split-7-5" style={{ alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="tl" className="t-h2" style={{ marginBottom: "8px" }}>
              [6] Cloud and DevOps articles
            </h2>
            <Link
              className="post card card--line"
              style={{
                display: "grid",
                gridTemplateColumns: "280px 1fr",
                gap: "28px",
                padding: "16px",
                alignItems: "center",
              }}
              href="/blog/career-with-aws-devops-certification"
            >
              <ImageSlot
                what="Image to supply"
                file="aws-devops-certification-career-path-from-cloud-practitioner-to-devops.webp"
                alt="AWS DevOps certification career path from Cloud Practitioner to DevOps Engineer Professional"
                style={{ aspectRatio: "16 / 11" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingRight: "16px" }}>
                <h3 className="t-h2" style={{ fontSize: "24px" }}>
                  AWS DevOps certification: career path, skills and salary
                </h3>
                <p className="t-small muted">
                  [N] min read · Updated [date] ·{" "}
                  <span className="file" style={{ fontFamily: "var(--mono)" }}>
                    /blog/career-with-aws-devops-certification/
                  </span>
                </p>
              </div>
            </Link>{" "}
            <a
              className="post card card--line"
              style={{
                display: "grid",
                gridTemplateColumns: "280px 1fr",
                gap: "28px",
                padding: "16px",
                alignItems: "center",
              }}
              href="#"
            >
              <ImageSlot
                what="Image to supply"
                file="ci-cd-pipeline-diagram-for-a-beginner-devops-project.webp"
                alt="CI/CD pipeline diagram for a beginner DevOps project"
                style={{ aspectRatio: "16 / 11" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingRight: "16px" }}>
                <h3 className="t-h2" style={{ fontSize: "24px" }}>
                  15+ DevOps project ideas with step-by-step guides
                </h3>
                <p className="t-small muted">
                  [N] min read · Updated [date] ·{" "}
                  <span className="file" style={{ fontFamily: "var(--mono)" }}>
                    /blog/top-devops-project-ideas-2024/
                  </span>
                </p>
              </div>
            </a>{" "}
            <a
              className="post card card--line"
              style={{
                display: "grid",
                gridTemplateColumns: "280px 1fr",
                gap: "28px",
                padding: "16px",
                alignItems: "center",
              }}
              href="#"
            >
              <ImageSlot
                what="Image to supply"
                file="grafana-dashboard-monitoring-a-kubernetes-cluster.webp"
                alt="Grafana dashboard monitoring a Kubernetes cluster"
                style={{ aspectRatio: "16 / 11" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingRight: "16px" }}>
                <h3 className="t-h2" style={{ fontSize: "24px" }}>
                  Top DevOps monitoring tools to learn
                </h3>
                <p className="t-small muted">
                  [N] min read · Updated [date] ·{" "}
                  <span className="file" style={{ fontFamily: "var(--mono)" }}>
                    /blog/top-devops-monitoring-tools-to-learn/
                  </span>
                </p>
              </div>
            </a>
          </div>
          <aside style={{ display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "96px" }}>
            <div
              className="card"
              style={{
                background: "var(--brand-soft)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p className="t-label">Learn it with a trainer</p>
              <h3 className="t-h2" style={{ fontSize: "26px" }}>
                AWS DevOps course in Chennai
              </h3>
              <p className="t-small muted">4 months · Live online + classroom · 3 projects · Placement support</p>
              <Link
                className="btn btn--primary"
                style={{ alignSelf: "flex-start" }}
                href="/courses/aws-devops-course-chennai"
              >
                View course
              </Link>
            </div>
            <div className="card card--line" style={{ padding: "24px" }}>
              <h3 className="t-h3" style={{ marginBottom: "10px" }}>
                Other Cloud & DevOps courses
              </h3>
              <ul className="cluster" style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li>
                  <a href="#">AWS training</a>
                </li>
                <li>
                  <a href="#">Azure DevOps</a>
                </li>
                <li>
                  <a href="#">Google Cloud</a>
                </li>
                <li>
                  <a href="#">Kubernetes</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
