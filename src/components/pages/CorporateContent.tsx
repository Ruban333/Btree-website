import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import LeadForm from "@/components/forms/LeadForm";

/* Generated from the design canvas (Corporate.dc.html). */
export default function CorporateContent() {
  return (
    <>
      <section style={{ padding: "40px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Corporate training</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "16px" }}>
              <h1 className="t-display" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                Corporate IT training for your teams
              </h1>
              <p className="t-lead">
                <b>BTree corporate training</b> upskills IT teams in cloud, data, development and testing with
                programmes built around your projects. We deliver on-site in your office, live online or blended, and
                report progress so you can measure the return on training.
              </p>
              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }} className="t-small">
                <span>
                  <b style={{ fontSize: "17px" }}>Since 2011</b> <span className="muted">training IT teams</span>
                </span>
                <span>
                  <b style={{ fontSize: "17px" }}>[N]+</b> <span className="muted">companies trained</span>
                </span>
                <span>
                  <b style={{ fontSize: "17px" }}>4</b> <span className="muted">delivery formats</span>
                </span>
              </div>
            </div>
            <LeadForm
              source="corporate"
              className="form"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-float)" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h2 className="t-h3">Plan training for your team</h2>
                <p className="t-small muted">A training consultant replies within one working day.</p>
              </div>
              <div className="field">
                <label htmlFor="c1">Your name</label>
                <input id="c1" className="inp" placeholder="Full name" name="c1" required />
              </div>
              <div className="field">
                <label htmlFor="c2">Work email</label>
                <input id="c2" className="inp" placeholder="you@company.com" name="c2" required />
              </div>
              <div className="g2" style={{ gap: "12px" }}>
                <div className="field">
                  <label htmlFor="c3">Company</label>
                  <input id="c3" className="inp" placeholder="Company name" name="c3" required />
                </div>
                <div className="field">
                  <label htmlFor="c4">Team size</label>
                  <select id="c4" className="inp" name="c4" required>
                    <option>5–20</option>
                    <option>21–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="c5">Training topic</label>
                <input id="c5" className="inp" placeholder="e.g. AWS, Databricks, Selenium" name="c5" required />
              </div>
              <button className="btn btn--primary" style={{ width: "100%" }} type="submit">
                Request a proposal
              </button>
              <p className="help" style={{ textAlign: "center" }}>
                Or{" "}
                <a className="lnk" href="#">
                  download the corporate brochure (PDF)
                </a>
              </p>
            </LeadForm>
          </div>
        </div>
      </section>
      <section className="sec--tight band-2" aria-labelledby="clients">
        <div className="wrap" style={{ display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
          <h2 id="clients" className="t-h3" style={{ flex: "0 0 220px" }}>
            Companies that trained with BTree
          </h2>
          <div className="logos" style={{ flex: "1 1 600px" }}>
            <span>Ericsson</span>
            <span>[Client]</span>
            <span>[Client]</span>
            <span>[Client]</span>
            <span>[Client]</span>
            <span>[Client]</span>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="formats">
        <div className="wrap">
          <div className="head">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 id="formats" className="t-h1">
                Training delivered the way your team works
              </h2>
              <p className="t-lead muted">Choose one format or mix them across a programme.</p>
            </div>
          </div>
          <div className="g4">
            <div className="card card--line" style={{ padding: "28px" }}>
              <h3 className="t-h3">On-premises</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                A BTree trainer teaches at your office, on your systems and sample data.
              </p>
            </div>
            <div className="card card--line" style={{ padding: "28px" }}>
              <h3 className="t-h3">Live online</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Instructor-led virtual classes for distributed and hybrid teams.
              </p>
            </div>
            <div className="card card--line" style={{ padding: "28px" }}>
              <h3 className="t-h3">Self-paced</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Recorded lessons, labs and assessments people complete in their own time.
              </p>
            </div>
            <div
              className="card card--line"
              style={{
                padding: "28px",
                background: "var(--brand)",
                color: "var(--on-brand)",
                borderColor: "var(--brand)",
              }}
            >
              <h3 className="t-h3">Blended</h3>
              <p style={{ marginTop: "8px" }}>Self-paced foundations plus live workshops on your real projects.</p>
            </div>
          </div>
          <div className="g3" style={{ marginTop: "24px" }}>
            <ImageSlot
              what="Image to supply"
              file="btree-trainer-leading-an-on-site-corporate-it-training-workshop.webp"
              alt="BTree trainer leading an on-site corporate IT training workshop"
              style={{ aspectRatio: "4 / 3" }}
            />
            <ImageSlot
              what="Image to supply"
              file="corporate-team-attending-a-live-online-btree-training-session.webp"
              alt="Corporate team attending a live online BTree training session"
              style={{ aspectRatio: "4 / 3" }}
            />
            <ImageSlot
              what="Image to supply"
              file="corporate-learners-receiving-btree-course-certificates.webp"
              alt="Corporate learners receiving BTree course certificates"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>
        </div>
      </section>
      <section className="sec band" aria-labelledby="why">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <ImageSlot
            what="Image to supply"
            file="btree-trainer-leading-an-on-site-corporate-cloud-training-workshop.webp"
            alt="BTree trainer leading an on-site corporate cloud training workshop"
            style={{ aspectRatio: "5 / 4", background: "var(--bg)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 id="why" className="t-h1">
              Why companies choose BTree
            </h2>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gap: "18px" }}>
              <li>
                <b>Hands-on from day one.</b>{" "}
                <span className="muted">Every session includes labs, not just theory.</span>
              </li>
              <li>
                <b>Industry-led curriculum.</b>{" "}
                <span className="muted">Built by practitioners and tailored to your stack.</span>
              </li>
              <li>
                <b>Cloud labs included.</b>{" "}
                <span className="muted">Ready-made environments, no setup for your IT team.</span>
              </li>
              <li>
                <b>Measurable outcomes.</b>{" "}
                <span className="muted">Assessments and reports that show training ROI.</span>
              </li>
              <li>
                <b>Production-ready teams.</b>{" "}
                <span className="muted">People apply skills to real work straight after training.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="library">
        <div className="wrap">
          <div className="head">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 id="library" className="t-h1">
                Corporate programme library
              </h2>
              <p className="t-lead muted">Popular programmes; every one can be customised.</p>
            </div>
            <Link className="btn btn--secondary" href="/courses">
              See all courses
            </Link>
          </div>
          <div className="g4">
            <Link className="card card--line course" href="/courses">
              <span className="ic">BD</span>
              <h3 className="t-h3">Big Data & Data Engineering</h3>
              <p className="t-small muted">Databricks, PySpark, Snowflake, AWS and Azure data engineering.</p>
            </Link>{" "}
            <Link className="card card--line course" href="/courses">
              <span className="ic">BI</span>
              <h3 className="t-h3">Business Intelligence</h3>
              <p className="t-small muted">Power BI, Tableau, SQL and data warehousing.</p>
            </Link>{" "}
            <Link className="card card--line course" href="/courses">
              <span className="ic">DS</span>
              <h3 className="t-h3">Data Science & AI</h3>
              <p className="t-small muted">Machine learning, generative AI and Python for analytics.</p>
            </Link>{" "}
            <Link className="card card--line course" href="/courses">
              <span className="ic">CC</span>
              <h3 className="t-h3">Cloud Computing & DevOps</h3>
              <p className="t-small muted">AWS, Azure, Google Cloud, Kubernetes and Terraform.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec band" aria-labelledby="ctest">
        <div className="wrap">
          <h2 id="ctest" className="t-h1" style={{ marginBottom: "40px" }}>
            What corporate learners say
          </h2>
          <div className="g3">
            <figure
              className="card"
              style={{
                margin: "0",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "var(--bg)",
              }}
            >
              <blockquote className="t-lead" style={{ margin: "0" }}>
                [Quote from a corporate learner, Azure DevOps programme.]
              </blockquote>
              <figcaption className="person">
                <span className="av">AB</span>
                <span className="t-small">
                  <b>[Name]</b>
                  <br />
                  <span className="muted">[Role], [Company]</span>
                </span>
              </figcaption>
            </figure>
            <figure
              className="card"
              style={{
                margin: "0",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "var(--bg)",
              }}
            >
              <blockquote className="t-lead" style={{ margin: "0" }}>
                [Quote from a corporate learner, data science programme.]
              </blockquote>
              <figcaption className="person">
                <span className="av">CD</span>
                <span className="t-small">
                  <b>[Name]</b>
                  <br />
                  <span className="muted">[Role], [Company]</span>
                </span>
              </figcaption>
            </figure>
            <figure
              className="card"
              style={{
                margin: "0",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "var(--bg)",
              }}
            >
              <blockquote className="t-lead" style={{ margin: "0" }}>
                [Quote from an L&D or engineering manager about results.]
              </blockquote>
              <figcaption className="person">
                <span className="av">EF</span>
                <span className="t-small">
                  <b>[Name]</b>
                  <br />
                  <span className="muted">[L&D Manager], [Company]</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="cfaq">
        <div className="wrap split-5-7">
          <h2 id="cfaq" className="t-h1">
            Corporate training FAQ
          </h2>
          <div className="acc">
            <details open>
              <summary>
                What corporate training programmes does BTree offer?
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
                BTree offers corporate programmes in big data and data engineering, business intelligence, data science
                and AI, cloud computing and DevOps, full stack development and software testing. Each programme is
                customised to your team&apos;s stack, current skill level and project goals.
              </div>
            </details>
            <details>
              <summary>
                Can training be delivered at our office?
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
                Yes. BTree trainers can deliver on-premises training at your office, live online, self-paced, or as a
                blend. On-site batches use your systems and sample data so teams practise on what they will use at work.
              </div>
            </details>
            <details>
              <summary>
                How do you measure training results?
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
                Every programme includes pre- and post-training assessments, attendance and lab completion tracking, and
                a final report for managers. These show skill gains per participant and help you measure the return on
                your training spend.
              </div>
            </details>
            <details>
              <summary>
                What is the minimum team size?
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
                Corporate batches usually start from [5] participants. Smaller teams can join a public batch with
                dedicated support. Contact us with your team size and topic for a proposal and pricing.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
