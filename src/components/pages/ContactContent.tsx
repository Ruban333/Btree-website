import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import LeadForm from "@/components/forms/LeadForm";
import ChipGroup from "@/components/forms/ChipGroup";

/* Generated from the design canvas (Contact.dc.html). */
export default function ContactContent() {
  return (
    <>
      <section style={{ padding: "48px 0 120px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Contact</b>
          </nav>
          <div className="split" style={{ alignItems: "start", gap: "72px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h1 className="t-display" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                  Talk to a course advisor
                </h1>
                <p className="t-lead muted" style={{ maxWidth: "540px" }}>
                  BTree Systems is a software training institute at Greeta Techpark, Perungudi, Chennai 600096. Ask
                  about courses, fees, batches or placements; we reply within an hour during opening hours.
                </p>
              </div>
              <div className="g2" style={{ gap: "12px" }}>
                <a
                  className="card"
                  style={{
                    background: "var(--surface)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                  href="#"
                >
                  <span className="t-small muted">Call us</span>
                  <span className="t-h3">+91 91769 97676</span>
                </a>{" "}
                <a
                  className="card"
                  style={{
                    background: "#0f7a3d",
                    color: "#ffffff",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                  href="#"
                >
                  <span className="t-small">WhatsApp</span>
                  <span className="t-h3">+91 73973 93335</span>
                </a>{" "}
                <a
                  className="card"
                  style={{
                    background: "var(--surface)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                  href="#"
                >
                  <span className="t-small muted">Email</span>
                  <span className="t-h3">info@btreesystems.com</span>
                </a>{" "}
                <Link
                  className="card"
                  style={{
                    background: "var(--surface)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                  href="/corporate-training"
                >
                  <span className="t-small muted">Training your team?</span>
                  <span className="t-h3">Corporate training</span>
                </Link>
              </div>
              <div>
                <h2 className="t-h3" style={{ marginBottom: "8px" }}>
                  Opening hours
                </h2>
                <table className="hours">
                  <tbody>
                    <tr>
                      <td>Monday – Friday</td>
                      <td>[9:00 AM – 8:00 PM]</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>[9:00 AM – 6:00 PM]</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>[10:00 AM – 2:00 PM]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <LeadForm source="contact" className="form" style={{ padding: "40px", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h2 className="t-h2" style={{ fontSize: "28px" }}>
                  Send us your enquiry
                </h2>
                <p className="t-small muted">All fields except email are required.</p>
              </div>
              <div className="g2" style={{ gap: "16px" }}>
                <div className="field">
                  <label htmlFor="cn">Full name</label>
                  <input id="cn" className="inp" placeholder="Your name" name="cn" required />
                </div>
                <div className="field">
                  <label htmlFor="cp">Mobile number</label>
                  <input id="cp" className="inp" placeholder="10-digit mobile" inputMode="tel" name="cp" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="ce">Email (optional)</label>
                <input id="ce" className="inp" placeholder="you@example.com" name="ce" />
              </div>
              <div className="field">
                <label htmlFor="cc">Course you&apos;re interested in</label>
                <select id="cc" className="inp" name="cc" required>
                  <option>Not sure yet — help me choose</option>
                  <option>Python Full Stack</option>
                  <option>AWS Solutions Architect</option>
                  <option>Data Analytics</option>
                  <option>Software Testing</option>
                </select>
              </div>
              <ChipGroup
                label="Preferred mode"
                name="preferred-mode"
                options={["Online", "Classroom", "Either"]}
                defaultIndex={0}
                legendStyle={{ fontWeight: "600", fontSize: "14px", marginBottom: "10px" }}
                style={{
                  border: "0",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              />
              <div className="field">
                <label htmlFor="cm">Message (optional)</label>
                <textarea
                  id="cm"
                  className="inp"
                  placeholder="Tell us your background or questions"
                  name="cm"
                ></textarea>
              </div>
              <button className="btn btn--primary btn--lg" style={{ width: "100%" }} type="submit">
                Send enquiry
              </button>
              <p className="help" style={{ textAlign: "center" }}>
                We&apos;ll call you back within an hour, Monday to Saturday.
              </p>
            </LeadForm>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="photos" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <h2 id="photos" className="t-h2" style={{ marginBottom: "32px" }}>
            What to expect when you visit
          </h2>
          <div className="g3">
            <ImageSlot
              what="Image to supply"
              file="entrance-of-the-btree-systems-training-centre-at-greeta-techpark-perun.webp"
              alt="Entrance of the BTree Systems training centre at Greeta Techpark, Perungudi, Chennai"
              style={{ aspectRatio: "4 / 3" }}
            />
            <ImageSlot
              what="Image to supply"
              file="course-advisor-desk-at-btree-chennai-where-visitors-get-free-counselli.webp"
              alt="Course advisor desk at BTree Chennai where visitors get free counselling"
              style={{ aspectRatio: "4 / 3" }}
            />
            <ImageSlot
              what="Image to supply"
              file="classroom-with-projector-and-individual-systems-at-btree-chennai.webp"
              alt="Classroom with projector and individual systems at BTree Chennai"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>
        </div>
      </section>
      <section className="sec band" aria-labelledby="visit">
        <div className="wrap">
          <div className="head">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 id="visit" className="t-h1">
                Visit our Chennai centre
              </h2>
              <p className="t-lead muted">Walk in for a free counselling session or a demo class.</p>
            </div>
          </div>
          <article
            className="card"
            style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)" }}
          >
            <div className="ph" style={{ borderRadius: "0", minHeight: "320px" }}>
              [Embedded Google Map: Greeta Techpark, Perungudi]
            </div>
            <div style={{ padding: "36px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 className="t-h2" style={{ fontSize: "26px" }}>
                BTree Systems, Perungudi
              </h3>
              <address className="muted" style={{ fontStyle: "normal", fontSize: "16px" }}>
                Greeta Techpark, Gate 5, 96, VSI Functional Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096
              </address>
              <p className="t-small">Near [landmark] on the OMR side of Perungudi</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "auto" }}>
                <a className="btn btn--primary" href="#">
                  Get directions
                </a>
                <a className="btn btn--secondary" href="#">
                  Call +91 91769 97676
                </a>
              </div>
            </div>
          </article>
          <div className="acc" style={{ marginTop: "48px" }}>
            <details open>
              <summary>
                How do I reach BTree from Chennai Central or the airport?
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
                BTree is at Greeta Techpark in Perungudi, about [N] km from Chennai Central and [N] km from Chennai
                Airport. The nearest MRTS station is Perungudi, a [N]-minute walk. Buses along OMR stop at [stop name],
                close to Gate 5.
              </div>
            </details>
            <details>
              <summary>
                Is parking available at the centre?
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
                [Yes/No]. Two-wheeler parking is available in the building; car parking is at [location].
              </div>
            </details>
            <details>
              <summary>
                Can I walk in without an appointment?
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
                Yes. Walk in any time during opening hours for free counselling or to sit in on a demo class. Booking
                ahead guarantees an advisor and a seat in the demo.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
