import Link from "next/link";

/* Generated from the design canvas (Disclaimer.dc.html). */
export default function DisclaimerContent() {
  return (
    <>
      <section className="band" style={{ padding: "40px 0 56px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">Disclaimer</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h1 className="t-h1" style={{ fontSize: "clamp(34px, 4vw, 56px)" }}>
                Disclaimer
              </h1>
              <p className="t-small muted">Last updated [date] · Applies to btreesystems.com and all BTree courses</p>
            </div>
            <div className="answer" style={{ background: "var(--bg)" }}>
              <p className="t-label">In short</p>
              <p>
                BTree Systems is an independent training provider. Product and certification names on this site belong
                to their owners and do not mean those companies endorse BTree. We keep information accurate but make no
                guarantees, and we are not responsible for external sites we link to.
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
                <a className="on" href="#trademarks">
                  Trademark notice
                </a>
                <a href="#certs">Certification marks</a>
                <a href="#general">General disclaimer</a>
                <a href="#external">External links</a>
                <a href="#privacy">Privacy</a>
                <a href="#changes">Changes to this disclaimer</a>
              </nav>
            </div>
          </aside>
          <div className="prose" style={{ flex: "999 1 560px", maxWidth: "720px", minWidth: "0" }}>
            <h2 id="trademarks" style={{ marginTop: "0" }}>
              Trademark notice
            </h2>
            <p>
              Trademarks, service marks and trade names used on this website belong to their respective owners. Their
              use does not imply endorsement by, or affiliation with, BTree Systems. These include:
            </p>
            <p className="muted" style={{ fontSize: "15px" }}>
              Oracle, PeopleSoft, Java, JavaScript, Oracle Financials, MySQL, JEE, Primavera, Solaris, Essbase,
              Hyperion, Hyperion Planning, Oracle Fusion, Microsoft, Microsoft Dynamics, SharePoint, Windows Server,
              IBM, Informix, CX, WebSphere, InfoSphere, Cognos, Salesforce, PowerCenter, MicroStrategy, SAS, QlikView,
              Qlik Technologies, Tableau, Pentaho, Ab Initio, Selenium, Android, Apple, iOS, VMware, Amazon Web
              Services, AWS, Azure, OpenStack, Python, Cisco, Chef, IIBA, COBIT, CISSP, MSP, PRINCE2, Scrum Alliance,
              The Open Group.
            </p>
            <h2 id="certs">Certification marks</h2>
            <ul>
              <li>
                PMP, PMI, PMBOK, CAPM, PgMP, PfMP, ACP, PBA, RMP, SP and OPM3 are registered marks of the Project
                Management Institute, Inc.
              </li>
              <li>
                ITIL®, IT Infrastructure Library®, the Swirl logo™, PRINCE2® and MSP® are registered trademarks of
                AXELOS Limited, used under permission.
              </li>
              <li>
                Certified ScrumMaster® (CSM) and Certified Scrum Trainer® (CST) are registered trademarks of Scrum
                Alliance.
              </li>
              <li>
                Professional Scrum Master™ is a trademark of Scrum.org; see Scrum.org&apos;s own disclaimer for details.
              </li>
            </ul>
            <h2 id="general">General disclaimer</h2>
            <p>
              We work to keep this website accurate and current, but make no warranties about its completeness,
              accuracy, reliability or availability. Any reliance on it is at your own risk. BTree is not liable for
              losses arising from its use, including indirect losses, data loss or lost profits.
            </p>
            <h2 id="external">External links</h2>
            <p>
              This website may link to third-party sites we do not control. A link does not mean we endorse the site or
              its views.
            </p>
            <h2 id="privacy">Privacy</h2>
            <p>
              We handle personal information as described in our <Link href="/privacy-policy">Privacy Policy</Link> and
              do not share it without consent except where the law requires.
            </p>
            <h2 id="changes">Changes to this disclaimer</h2>
            <p>We may change this disclaimer at any time. Please review this page from time to time.</p>
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
            <Link href="/privacy-policy">Privacy policy</Link>
          </nav>
          <Link className="btn btn--secondary" href="/contact">
            Questions? Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
