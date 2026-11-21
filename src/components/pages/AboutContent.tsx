import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";

/* Generated from the design canvas (About.dc.html). */
export default function AboutContent() {
  return (
    <>
      <section style={{ padding: "40px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <b aria-current="page">About BTree</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h1 className="t-display" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                Quality IT training at a fair price, since 2011
              </h1>
              <p className="t-lead">
                <b>BTree Systems is an IT and software training institute in Chennai, founded in 2011.</b> We run live,
                trainer-led courses in data, cloud, development and testing, built with industry experts, with lifetime
                access to materials and job support for every learner.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link className="btn btn--primary btn--lg" href="/courses">
                  Explore courses
                </Link>
                <Link className="btn btn--secondary btn--lg" href="/contact">
                  Visit our Chennai centre
                </Link>
              </div>
            </div>
            <ImageSlot
              what="Image to supply"
              file="btree-systems-trainers-and-staff-at-the-perungudi-chennai-training-cen.webp"
              alt="BTree Systems trainers and staff at the Perungudi, Chennai training centre"
              style={{ aspectRatio: "4 / 3.4" }}
            />
          </div>
        </div>
      </section>
      <section className="sec--tight band" aria-labelledby="numbers">
        <div className="wrap">
          <h2 id="numbers" className="t-h3" style={{ marginBottom: "32px" }}>
            BTree in numbers
          </h2>
          <div className="stats">
            <div className="stat">
              <div className="t-num">2011</div>
              <span>Year founded, in Chennai</span>
            </div>
            <div className="stat">
              <div className="t-num">40+</div>
              <span>Live IT courses</span>
            </div>
            <div className="stat">
              <div className="t-num">110+</div>
              <span>Industry trainers</span>
            </div>
            <div className="stat">
              <div className="t-num">[200+]</div>
              <span>Hiring partners</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="story">
        <div className="wrap split-5-7">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="story" className="t-h1">
              How BTree started
            </h2>
            <p className="t-lead muted">From one Hadoop batch to a training partner for IT companies.</p>
            <figure className="fig">
              <ImageSlot
                what="Image to supply"
                file="btree-systems-first-hadoop-training-batch-in-chennai-2011.webp"
                alt="BTree Systems first Hadoop training batch in Chennai, 2011"
                style={{ aspectRatio: "4 / 3", marginTop: "8px" }}
              />
              <figcaption>One of BTree&apos;s first batches, 2011.</figcaption>
            </figure>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <li
              className="card"
              style={{
                background: "var(--surface)",
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "24px",
              }}
            >
              <p className="t-h3">The gap</p>
              <p className="muted">
                Our founders wanted advanced Hadoop training and found few reliable options in India, especially in
                Tamil Nadu. The alternatives were expensive overseas programmes.
              </p>
            </li>
            <li
              className="card"
              style={{
                background: "var(--surface)",
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "24px",
              }}
            >
              <p className="t-h3">The first batch</p>
              <p className="muted">
                With a freelance trainer, they announced a specialised programme to their LinkedIn contacts. Ten people
                signed up within 48 hours.
              </p>
            </li>
            <li
              className="card"
              style={{
                background: "var(--surface)",
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "24px",
              }}
            >
              <p className="t-h3">The turning point</p>
              <p className="muted">
                Within three months, Ericsson asked BTree to train 200 of its employees. The idea became a mission.
              </p>
            </li>
            <li
              className="card"
              style={{
                background: "var(--brand)",
                color: "var(--on-brand)",
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "24px",
              }}
            >
              <p className="t-h3">Today</p>
              <p>
                BTree teaches 40+ courses across big data, data science, cloud, Salesforce and development, and
                trains individuals and corporate teams from Chennai and online.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="sec band-2" aria-labelledby="vision">
        <div className="wrap">
          <div className="split" style={{ gap: "64px", marginBottom: "48px", alignItems: "end" }}>
            <h2 id="vision" className="t-h1">
              Our vision: quality education for everyone
            </h2>
            <p className="t-lead">
              We believe good technical training should not depend on where you live or what you can pay. We focus on{" "}
              <b>value, not volume</b>, through four commitments.
            </p>
          </div>
          <div className="g4">
            <div className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <h3 className="t-h3">High-quality content</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Every curriculum is built with subject-matter experts and updated as tools change.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <h3 className="t-h3">Training that works</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Live, hands-on classes with projects, not slides read aloud.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <h3 className="t-h3">Support that lasts</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Lifetime access to course materials and help whenever you need it.
              </p>
            </div>
            <div className="card" style={{ padding: "28px", background: "var(--bg)" }}>
              <h3 className="t-h3">Job assistance</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Mock interviews, resume building and referrals to hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="team">
        <div className="wrap">
          <div className="head">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h2 id="team" className="t-h1">
                Leadership
              </h2>
              <p className="t-lead muted">The people behind BTree&apos;s courses and partnerships.</p>
            </div>
          </div>
          <div className="g2">
            <article
              className="card card--line"
              style={{
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "28px",
                alignItems: "start",
              }}
            >
              <ImageSlot
                what="Image to supply"
                file="lochana-ceo-of-btree-systems.webp"
                alt="Lochana, CEO of BTree Systems"
                style={{ aspectRatio: "4 / 5", height: "264px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 className="t-h2" style={{ fontSize: "26px" }}>
                  Lochana
                </h3>
                <p className="t-label">Chief Executive Officer</p>
                <p className="muted">
                  Grew up in Chennai and built her career in Bangalore. She led a Business Intelligence team at Wipro
                  and worked with Fortune 500 clients including Mercedes-Benz Research and American Express. At BTree
                  she oversees technical and marketing strategy and curates course content across cloud, big data and
                  data science.
                </p>
              </div>
            </article>
            <article
              className="card card--line"
              style={{
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "28px",
                alignItems: "start",
              }}
            >
              <ImageSlot
                what="Image to supply"
                file="shilpi-jain-btree-systems.webp"
                alt="Shilpi Jain, BTree Systems"
                style={{ aspectRatio: "4 / 5", height: "261px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 className="t-h2" style={{ fontSize: "26px" }}>
                  Shilpi Jain
                </h3>
                <p className="t-label">[Role]</p>
                <p className="muted">
                  Shares BTree&apos;s commitment to making quality technical education accessible. [Add a two-line bio:
                  experience, focus at BTree.]
                </p>
              </div>
            </article>
          </div>
          <blockquote
            style={{
              margin: "48px 0 0",
              padding: "40px",
              borderRadius: "var(--r-xl)",
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <p className="t-h2">
              &quot;At BTree, we focus on what, why, who and how. With an excellent line of courses, a learner walks
              away with a smile and a deeper understanding of the concepts&quot;
            </p>
            <footer className="muted">— Lochana, Chief Executive Officer</footer>
          </blockquote>
        </div>
      </section>
      <section className="sec band" aria-labelledby="afaq">
        <div className="wrap split-5-7">
          <h2 id="afaq" className="t-h1">
            About BTree: common questions
          </h2>
          <div className="acc">
            <details open>
              <summary>
                When was BTree Systems founded?
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
                BTree Systems was founded in 2011 in Chennai. It started with a specialised Hadoop programme and, within
                three months, was training 200 Ericsson employees. Today it offers live courses in data, cloud,
                development and testing to individuals and corporate teams.
              </div>
            </details>
            <details>
              <summary>
                Where is BTree Systems located?
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
                BTree Systems is at Greeta Techpark, Gate 5, 96, VSI Functional Industrial Estate, Perungudi, Chennai,
                Tamil Nadu 600096. Classroom batches run at this Perungudi centre, and every course is also available as
                a live online batch.
              </div>
            </details>
            <details>
              <summary>
                Who runs BTree Systems?
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
                BTree Systems is led by its CEO, Lochana, who previously led a Business Intelligence team at Wipro and
                worked with Fortune 500 clients. She oversees course content, technical strategy and marketing.
              </div>
            </details>
            <details>
              <summary>
                Does BTree train corporate teams?
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
                Yes. BTree delivers corporate training on-site, online with a live instructor, self-paced or blended,
                with curricula tailored to each team. Ericsson was one of its first corporate clients.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
