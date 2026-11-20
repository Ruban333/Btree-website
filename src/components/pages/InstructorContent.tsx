import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import LeadForm from "@/components/forms/LeadForm";

/* Generated from the design canvas (Instructor.dc.html). */
export default function InstructorContent() {
  return (
    <>
      <section style={{ padding: "40px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Become an instructor</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "16px" }}>
              <h1 className="t-display" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                Become a BTree instructor
              </h1>
              <p className="t-lead">
                <b>BTree is hiring freelance and part-time IT trainers</b> who enjoy teaching. Share your industry
                experience with learners in Chennai and online, earn alongside your job, and work with an organisation
                that trains individuals and corporate teams.
              </p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", marginTop: "8px" }}>
                <p className="t-small muted" style={{ maxWidth: "280px", width: "357px" }}>
                  BTree trainers teach live batches of [N] learners, online or at our Perungudi centre.
                </p>
              </div>
            </div>
            <LeadForm
              source="instructor"
              className="form"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-float)" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h2 className="t-h3">Apply to teach</h2>
                <p className="t-small muted">Our training team replies within a week.</p>
              </div>
              <div className="field">
                <label htmlFor="i1">Full name</label>
                <input id="i1" className="inp" placeholder="Your name" name="i1" required />
              </div>
              <div className="g2" style={{ gap: "12px" }}>
                <div className="field">
                  <label htmlFor="i2">Mobile number</label>
                  <input id="i2" className="inp" placeholder="10-digit mobile" name="i2" required />
                </div>
                <div className="field">
                  <label htmlFor="i3">Email</label>
                  <input id="i3" className="inp" placeholder="you@example.com" name="i3" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="i4">What can you teach?</label>
                <input id="i4" className="inp" placeholder="e.g. AWS, Power BI, Selenium" name="i4" required />
              </div>
              <div className="field">
                <label htmlFor="i5">Years of industry experience</label>
                <select id="i5" className="inp" name="i5" required>
                  <option>3–5 years</option>
                  <option>6–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="i6">LinkedIn profile</label>
                <input id="i6" className="inp" placeholder="linkedin.com/in/…" name="i6" required />
              </div>
              <button className="btn btn--primary" style={{ width: "100%" }} type="submit">
                Submit application
              </button>
            </LeadForm>
          </div>
        </div>
      </section>
      <section className="sec band" aria-labelledby="why">
        <div className="wrap">
          <h2 id="why" className="t-h1" style={{ marginBottom: "40px" }}>
            Why teach with BTree
          </h2>
          <div className="g3">
            <div className="card" style={{ padding: "28px" }}>
              <h3 className="t-h3">Earn alongside your job</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Paid per batch or session, with revenue sharing on selected programmes.
              </p>
            </div>
            <div className="card" style={{ padding: "28px" }}>
              <h3 className="t-h3">Flexible schedule</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Weekday evening and weekend batches fit around full-time work.
              </p>
            </div>
            <div className="card" style={{ padding: "28px" }}>
              <h3 className="t-h3">Corporate assignments</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Opportunities to train company teams, with domestic and international travel.
              </p>
            </div>
            <div className="card" style={{ padding: "28px" }}>
              <h3 className="t-h3">A community of experts</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Work with trainers who share knowledge across cloud, data and development.
              </p>
            </div>
            <div className="card" style={{ padding: "28px" }}>
              <h3 className="t-h3">Ready course material</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Curricula, labs and slides are provided and kept up to date.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", background: "var(--brand)", color: "var(--on-brand)" }}>
              <h3 className="t-h3">Build your profile</h3>
              <p style={{ marginTop: "8px" }}>Teaching sharpens your own skills and grows your professional network.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="who">
        <div className="wrap split">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="who" className="t-h1">
              Who can teach?
            </h2>
            <p className="t-lead muted">
              You don&apos;t need prior teaching experience. You need real industry knowledge and the patience to
              explain it.
            </p>
            <figure className="fig">
              <ImageSlot
                what="Image to supply"
                file="btree-instructor-teaching-a-live-it-batch-in-chennai.webp"
                alt="BTree instructor teaching a live IT batch in Chennai"
                style={{ aspectRatio: "4 / 3", marginTop: "8px" }}
              />
              <figcaption>BTree trainers teach live batches online and in Chennai.</figcaption>
            </figure>
          </div>
          <ul style={{ margin: "0", paddingLeft: "22px", display: "grid", gap: "12px", fontSize: "17px" }}>
            <li>[3+] years of hands-on experience in the technology you want to teach</li>
            <li>Clear spoken English (Tamil is a plus for Tamil-medium batches)</li>
            <li>You enjoy explaining concepts and helping people get unstuck</li>
            <li>Availability for at least one batch slot a week</li>
          </ul>
        </div>
      </section>
      <section className="sec band-2" aria-labelledby="how">
        <div className="wrap">
          <h2 id="how" className="t-h1" style={{ marginBottom: "40px" }}>
            How to become an instructor
          </h2>
          <ol className="g3" style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <li className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <p className="t-label">First</p>
              <h3 className="t-h3" style={{ marginTop: "6px" }}>
                Submit the form
              </h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Tell us what you can teach and your experience.
              </p>
            </li>
            <li className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <p className="t-label">Then</p>
              <h3 className="t-h3" style={{ marginTop: "6px" }}>
                Talk to our training team
              </h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                A short call and a demo session on a topic you choose.
              </p>
            </li>
            <li className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <p className="t-label">Finally</p>
              <h3 className="t-h3" style={{ marginTop: "6px" }}>
                Get onboarded
              </h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                We help shortlisted trainers learn our delivery method before the first batch.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="sec" aria-labelledby="ifaq">
        <div className="wrap split-5-7">
          <h2 id="ifaq" className="t-h1">
            Instructor FAQ
          </h2>
          <div className="acc">
            <details open>
              <summary>
                How much do BTree instructors earn?
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
                Instructors are paid per batch or per session, based on the course, batch size and their experience.
                Selected programmes include revenue sharing. Exact rates are discussed after the demo session.
              </div>
            </details>
            <details>
              <summary>
                Can I teach while working full time?
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
                Yes. Most BTree trainers work full time and teach weekday evening or weekend batches. You choose the
                slots you can commit to before a batch is scheduled.
              </div>
            </details>
            <details>
              <summary>
                Do I need teaching experience?
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
                No. Industry experience and clear communication matter more. Shortlisted trainers are guided through
                BTree&apos;s delivery methodology, course material and lab setup before their first batch.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
