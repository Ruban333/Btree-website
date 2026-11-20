import Link from "next/link";

/* Generated from the design canvas (Terms.dc.html). */
export default function TermsContent() {
  return (
    <>
      <section className="band" style={{ padding: "40px 0 56px" }}>
        <div
          className="wrap"
          style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start" }}
        >
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Terms of use</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h1 className="t-h1" style={{ fontSize: "clamp(34px, 4vw, 56px)" }}>
                Terms of use
              </h1>
              <p className="t-small muted">
                Last updated 29 October 2024 · Applies to btreesystems.com and all BTree courses
              </p>
            </div>
            <div className="answer" style={{ background: "var(--bg)" }}>
              <p className="t-label">In short</p>
              <p>
                By using btreesystems.com or enrolling in a BTree course, you agree to these terms. They cover how you
                may use the site, our content, fees and refunds, your account, and how disputes are handled under Indian
                law in Chennai courts.
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
                <a className="on" href="#intro">
                  Introduction
                </a>
                <a href="#changes">Changes to these terms</a>
                <a href="#usage">Using the website</a>
                <a href="#ip">Intellectual property</a>
                <a href="#payment">Enrolment, fees and refunds</a>
                <a href="#accounts">Your account</a>
                <a href="#liability">Limitation of liability</a>
                <a href="#links">Third-party links</a>
                <a href="#termination">Ending access</a>
                <a href="#privacy">Privacy</a>
                <a href="#law">Governing law</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </aside>
          <div className="prose" style={{ flex: "999 1 560px", maxWidth: "720px", minWidth: "0" }}>
            <h2 id="intro" style={{ marginTop: "0" }}>
              Introduction
            </h2>
            <p>
              These terms apply when you use btreesystems.com or enrol in any course offered by BTree Systems
              (&quot;BTree&quot;, &quot;we&quot;, &quot;us&quot;). If you do not agree with them, please do not use our
              website or services.
            </p>
            <h2 id="changes">Changes to these terms</h2>
            <p>
              We may update these terms at any time. The &quot;last updated&quot; date at the top shows when they last
              changed. Continuing to use the website or our services after a change means you accept the updated terms.
            </p>
            <h2 id="usage">Using the website</h2>
            <ul>
              <li>You must be 18 or older, or have consent from a parent or guardian.</li>
              <li>Do not attempt to break, bypass or weaken the website&apos;s security.</li>
              <li>Anything you submit, such as reviews or comments, must be respectful and lawful.</li>
            </ul>
            <h2 id="ip">Intellectual property</h2>
            <p>
              All website materials and course content, including videos, slides, labs and documents, belong to BTree or
              its licensors. You may not copy, share, sell or distribute them without our written permission.
            </p>
            <h2 id="payment">Enrolment, fees and refunds</h2>
            <p>
              Course fees are payable as shown in your registration schedule. BTree may cancel or reschedule a course;
              if that happens, we will offer a refund or an alternative batch under our <a href="#">Refund Policy</a>.
            </p>
            <h2 id="accounts">Your account</h2>
            <p>
              Keep your login details private and tell us straight away about any unauthorised use. We may suspend or
              close accounts involved in fraud or in breaking these terms.
            </p>
            <h2 id="liability">Limitation of liability</h2>
            <p>
              We work to keep our services accurate and available but cannot promise they will be error-free or
              uninterrupted. BTree is not liable for indirect or consequential losses arising from use of the website or
              courses.
            </p>
            <h2 id="links">Third-party links</h2>
            <p>
              Our website may link to other websites. We do not control or endorse them and are not responsible for
              their content or practices.
            </p>
            <h2 id="termination">Ending access</h2>
            <p>
              We may suspend or end your access if you break these terms, and may take legal action where necessary.
            </p>
            <h2 id="privacy">Privacy</h2>
            <p>
              How we collect and use personal information is explained in our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <h2 id="law">Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes fall under the exclusive jurisdiction of the
              courts in Chennai, Tamil Nadu.
            </p>
            <h2 id="contact">Contact</h2>
            <p>
              Questions about these terms: email <a href="#">support@btreesystems.com</a> or call +91 91769 97676.
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
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <a href="#">Refund policy</a>
          </nav>
          <Link className="btn btn--secondary" href="/contact">
            Questions? Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
