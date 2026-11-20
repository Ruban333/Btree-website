import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";

/* Generated from the design canvas (Job-Portal.dc.html). */
export default function JobPortalContent() {
  return (
    <>
      <section style={{ padding: "40px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Job portal</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h1 className="t-display" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                Job portal for BTree learners
              </h1>
              <p className="t-lead">
                <b>The BTree job portal connects learners with jobs and internships</b> through our hiring-partner
                portals. Apply directly with your BTree profile, and use our placement support for resume reviews, mock
                interviews and referrals.
              </p>
              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }} className="t-small">
                <span>
                  <b style={{ fontSize: "17px" }}>[200+]</b> <span className="muted">hiring partners</span>
                </span>
                <span>
                  <b style={{ fontSize: "17px" }}>[1000+]</b> <span className="muted">career transitions</span>
                </span>
                <span>
                  <b style={{ fontSize: "17px" }}>[2+]</b>{" "}
                  <span className="muted">interviews arranged per learner</span>
                </span>
              </div>
            </div>
            <ImageSlot
              what="Image to supply"
              file="hiring-partners-interviewing-btree-learners-at-a-placement-drive-in-ch.webp"
              alt="Hiring partners interviewing BTree learners at a placement drive in Chennai"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>
        </div>
      </section>
      <section className="sec band" aria-labelledby="portals">
        <div className="wrap">
          <div className="head">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 id="portals" className="t-h1">
                Partner job portals
              </h2>
              <p className="t-lead muted">
                Apply through portals that work with BTree to move learners from training to employment.
              </p>
            </div>
          </div>
          <div className="g2">
            <article
              className="card"
              style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="t-h2" style={{ fontSize: "28px" }}>
                  OptimHire
                </h3>
                <span className="tag">Jobs</span>
              </div>
              <p className="muted">
                A hiring platform partnered with BTree to help learners find roles that match their new skills, from
                fresher openings to experienced positions.
              </p>
              <a className="btn btn--primary" style={{ alignSelf: "flex-start" }} href="#">
                Easy apply on OptimHire
              </a>
            </article>
            <article
              className="card"
              style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="t-h2" style={{ fontSize: "28px" }}>
                  Paas Venture
                </h3>
                <span className="tag">Jobs + internships</span>
              </div>
              <p className="muted">
                A partner portal for jobs and internships, giving BTree learners another route from course completion to
                their first role.
              </p>
              <a className="btn btn--primary" style={{ alignSelf: "flex-start" }} href="#">
                Easy apply on Paas Venture
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="support">
        <div className="wrap split-5-7">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="support" className="t-h1">
              How placement support works
            </h2>
            <figure className="fig">
              <ImageSlot
                what="Image to supply"
                file="btree-mentor-running-a-mock-technical-interview-with-a-learner.webp"
                alt="BTree mentor running a mock technical interview with a learner"
                style={{ aspectRatio: "4 / 3", marginTop: "8px" }}
              />
              <figcaption>Mock interviews with one-to-one feedback.</figcaption>
            </figure>
            <p className="t-lead muted">Every BTree course includes these steps.</p>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            <li className="card" style={{ background: "var(--surface)", padding: "24px" }}>
              <b>Resume and LinkedIn review</b>
              <p className="t-small muted" style={{ marginTop: "6px" }}>
                Rewritten around your projects and target role.
              </p>
            </li>
            <li className="card" style={{ background: "var(--surface)", padding: "24px" }}>
              <b>Mock interviews</b>
              <p className="t-small muted" style={{ marginTop: "6px" }}>
                Technical and HR rounds with one-to-one feedback.
              </p>
            </li>
            <li className="card" style={{ background: "var(--surface)", padding: "24px" }}>
              <b>HR and soft-skill sessions</b>
              <p className="t-small muted" style={{ marginTop: "6px" }}>
                Communication, salary discussion and workplace readiness.
              </p>
            </li>
            <li className="card" style={{ background: "var(--brand)", color: "var(--on-brand)", padding: "24px" }}>
              <b>Referrals and interviews</b>
              <p className="t-small" style={{ marginTop: "6px" }}>
                Profiles shared with hiring partners until you are placed.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="sec band-2" aria-labelledby="hire">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="hire" className="t-h1">
              Hiring? Recruit trained BTree learners
            </h2>
            <p className="t-lead muted">
              Share your openings and we&apos;ll send pre-screened candidates who have finished projects in your stack,
              at no cost to you.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              width: "100%",
              maxWidth: "422px",
            }}
          >
            <Link className="btn btn--primary btn--lg" href="/contact">
              Share a job opening
            </Link>
            <Link className="btn btn--secondary btn--lg" href="/corporate-training">
              Corporate training
            </Link>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="jfaq">
        <div className="wrap split-5-7">
          <h2 id="jfaq" className="t-h1">
            Placement FAQ
          </h2>
          <div className="acc">
            <details open>
              <summary>
                Does BTree provide placement assistance?
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
                Yes. Every BTree course includes placement assistance: resume and LinkedIn reviews, mock technical and
                HR interviews, soft-skill sessions, and referrals to hiring partners and partner job portals. Support
                continues after the course ends.
              </div>
            </details>
            <details>
              <summary>
                Is placement guaranteed?
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
                BTree guarantees placement support and arranges [at least 2] interviews for eligible learners, but a job
                offer depends on interview performance. Learners who complete projects and attend mock interviews have
                the best results.
              </div>
            </details>
            <details>
              <summary>
                Who can use the job portal?
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
                The partner job portals are open to current BTree learners and alumni. Sign up with the email you used
                to enrol so your BTree course and projects appear on your profile.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
