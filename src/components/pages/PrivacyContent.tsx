import Link from "next/link";

/* Generated from the design canvas (Privacy.dc.html). */
export default function PrivacyContent() {
  return (
    <>
      <section className="band" style={{ padding: "40px 0 56px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Privacy policy</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h1 className="t-h1" style={{ fontSize: "clamp(34px, 4vw, 56px)" }}>
                Privacy policy
              </h1>
              <p className="t-small muted">
                Last updated 22 October 2026 · Applies to btreesystems.com and all BTree courses
              </p>
            </div>
            <div className="answer" style={{ background: "var(--bg)" }}>
              <p className="t-label">In short</p>
              <p>
                We collect the details you give us (like your name, phone and email) and basic technical data to help
                you choose and take courses. We never sell your data. You can ask us to access, correct or delete it at
                any time; we respond within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 0 120px" }}>
        <div className="wrap" style={{ display: "flex", gap: "72px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <aside style={{ flex: "1 1 220px", maxWidth: "260px", alignSelf: "stretch" }}>
            <div className="toc">
              <p className="t-small" style={{ fontWeight: "600", marginBottom: "8px" }}>
                On this page
              </p>
              <nav aria-label="Sections">
                <a className="on" href="#collect">
                  Information we collect
                </a>
                <a href="#cookies">Cookies and similar technologies</a>
                <a href="#use">How we use your information</a>
                <a href="#contact-you">Calls, WhatsApp, SMS and email</a>
                <a href="#share">Who we share information with</a>
                <a href="#testimonials">Testimonials, photos and videos</a>
                <a href="#where">Where your information is processed</a>
                <a href="#retention">How long we keep it</a>
                <a href="#security">How we protect it</a>
                <a href="#rights">Your rights and choices</a>
                <a href="#children">Children</a>
                <a href="#links">Links to other websites</a>
                <a href="#changes">Changes to this policy</a>
                <a href="#grievance">Contact and Grievance Officer</a>
              </nav>
            </div>
          </aside>
          <div className="prose" style={{ flex: "999 1 560px", maxWidth: "720px", minWidth: "0" }}>
            <h2 id="collect" style={{ marginTop: "0" }}>
              Information we collect
            </h2>
            <p>
              We collect details you give us through enquiries, enrolments, job applications and comments, such as your
              name, phone number, email, education and course interest. We also collect technical data like IP address,
              browser and device type.
            </p>
            <h2 id="cookies">Cookies and similar technologies</h2>
            <p>
              We use essential cookies to run the site, plus advertising, chat and embedded-content cookies. You can
              block or delete cookies in your browser settings; some features may then not work.
            </p>
            <h2 id="use">How we use your information</h2>
            <ul>
              <li>To recommend courses and handle enrolment and payments</li>
              <li>To provide career and placement support</li>
              <li>To send course updates and, if you agree, offers</li>
              <li>To improve the website and keep it secure</li>
            </ul>
            <h2 id="contact-you">Calls, WhatsApp, SMS and email</h2>
            <p>
              If you share your phone number or email, a course counsellor may contact you about courses. You can opt
              out of promotional messages at any time by replying STOP or asking us directly.
            </p>
            <h2 id="share">Who we share information with</h2>
            <p>
              We do not sell your personal data. We share it only with service providers who work for us, your trainers,
              hiring partners (with your consent), authorities when the law requires, or a successor business.
            </p>
            <h2 id="testimonials">Testimonials, photos and videos</h2>
            <p>
              We publish your name, photo or story only with your consent, and you can withdraw that consent at any
              time.
            </p>
            <h2 id="where">Where your information is processed</h2>
            <p>
              Some providers, such as Google and Meta, may process data on servers outside India. We use appropriate
              safeguards when this happens.
            </p>
            <h2 id="retention">How long we keep it</h2>
            <p>
              We keep personal data only as long as needed for the purpose it was collected and for legal requirements,
              then delete or anonymise it.
            </p>
            <h2 id="security">How we protect it</h2>
            <p>
              We use HTTPS, access controls and backups. No system is completely secure, but we work to protect your
              information.
            </p>
            <h2 id="rights">Your rights and choices</h2>
            <p>
              You can ask to access, correct or erase your data, withdraw consent, or make a complaint. We aim to
              respond within 30 days.
            </p>
            <h2 id="children">Children</h2>
            <p>
              Our programmes are for people aged 18 and over. Learners under 18 need consent from a parent or guardian.
            </p>
            <h2 id="links">Links to other websites</h2>
            <p>We are not responsible for the content or privacy practices of external websites we link to.</p>
            <h2 id="changes">Changes to this policy</h2>
            <p>We may update this policy and will post a notice on the website for significant changes.</p>
            <h2 id="grievance">Contact and Grievance Officer</h2>
            <p>For privacy questions or complaints, contact our Grievance Officer:</p>
            <p>
              <b>Grievance Officer, BTree Systems</b>
              <br />
              Greeta Techpark, Gate 5, 96, VSI Functional Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096,
              India
              <br />
              Email: <a href="#">info@btreesystems.com</a> · Phone: +91 91769 97676
            </p>
          </div>
        </div>
      </section>
      <section className="sec--tight band" aria-labelledby="rel" style={{ padding: "56px 0" }}>
        <div className="wrap" style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
          <h2 id="rel" className="t-h3" style={{ flex: "0 0 auto" }}>
            Related policies
          </h2>
          <nav className="cluster" aria-label="Related policies" style={{ flex: "1 1 400px" }}>
            <Link href="/terms-of-use">Terms of use</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <a href="#">Cookie settings</a>
          </nav>
          <Link className="btn btn--secondary" href="/contact">
            Questions? Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
