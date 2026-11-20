import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";

/* Generated from the design canvas (Blog-Interview.dc.html). */
export default function InterviewContent() {
  return (
    <>
      <article>
        <header style={{ padding: "40px 0 56px" }}>
          <div className="wrap">
            <div style={{ maxWidth: "980px", display: "flex", flexDirection: "column", gap: "22px" }}>
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/blog">Blog</Link>
                <span>/</span>
                <a href="#">Interview questions</a>
                <span>/</span>
                <b aria-current="page">Full stack developer</b>
              </nav>
              <h1 className="t-h1" style={{ fontSize: "clamp(34px, 4.2vw, 56px)" }}>
                Full stack developer interview questions and answers
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div className="person">
                  <span className="av">[AB]</span>
                  <span className="t-small">
                    <b>[Author name]</b>, Full Stack trainer at BTree
                    <br />
                    <span className="muted">[N] years as a developer at [Company]</span>
                  </span>
                </div>
                <p className="t-small muted">Updated [date] · [N] questions · Reviewed by [Reviewer], Lead Trainer</p>
              </div>
              <div className="answer">
                <p className="t-label">Short answer</p>
                <p className="t-lead">
                  Full stack interviews test four areas: web fundamentals (HTTP, REST), front end (JavaScript, React),
                  back end and databases (APIs, SQL vs NoSQL), and problem solving. Expect conceptual questions first,
                  then a coding or system-design round.
                </p>
              </div>
              <figure className="fig">
                <ImageSlot
                  what="Image to supply"
                  file="full-stack-developer-interview-questions-and-answers-covering-front-en.webp"
                  alt="Full stack developer interview questions and answers covering front end, back end and databases"
                  style={{ aspectRatio: "16 / 7" }}
                />
                <figcaption>Full stack interviews test front end, back end, databases and problem solving.</figcaption>
              </figure>
            </div>
          </div>
        </header>
        <div
          className="wrap"
          style={{ display: "flex", gap: "64px", alignItems: "flex-start", flexWrap: "wrap", paddingBottom: "96px" }}
        >
          <aside style={{ flex: "1 1 200px", maxWidth: "240px", alignSelf: "stretch" }}>
            <div className="toc">
              <p className="t-small" style={{ fontWeight: "600", marginBottom: "8px" }}>
                Jump to
              </p>
              <nav aria-label="Question levels">
                <a className="on" href="#basics">
                  Basics questions
                </a>
                <a href="#intermediate">Intermediate questions</a>
                <a href="#advanced">Advanced questions</a>
                <a href="#tips">Interview tips</a>
              </nav>
            </div>
          </aside>
          <div className="prose" style={{ flex: "999 1 560px", maxWidth: "720px", minWidth: "0" }}>
            <h2 id="basics" style={{ marginTop: "0" }}>
              Basics full stack interview questions
            </h2>
            <h3>1. What is the difference between front end and back end?</h3>
            <p>
              The front end is what users see and interact with in the browser (HTML, CSS, JavaScript, React). The back
              end runs on the server and handles data, business logic and APIs (for example Node.js, Django or Spring
              Boot) and talks to the database.
            </p>
            <h3>2. What happens when you type a URL into a browser?</h3>
            <p>
              The browser resolves the domain to an IP address with DNS, opens a TCP connection (with TLS for HTTPS),
              sends an HTTP request, receives the HTML response, then requests CSS, JavaScript and images, and renders
              the page.
            </p>
            <h3>3. What is REST?</h3>
            <p>
              REST is a style for designing APIs where resources are identified by URLs and accessed with standard HTTP
              methods: GET to read, POST to create, PUT or PATCH to update and DELETE to remove. Responses are usually
              JSON and each request is stateless.
            </p>
            <h2 id="intermediate">Intermediate full stack interview questions</h2>
            <h3>4. What is the difference between SQL and NoSQL databases?</h3>
            <p>
              SQL databases such as PostgreSQL store data in tables with a fixed schema and support joins and
              transactions. NoSQL databases such as MongoDB store flexible documents or key-value data and scale
              horizontally more easily, at the cost of fewer relational features.
            </p>
            <h3>5. How do you keep a user logged in securely?</h3>
            <p>
              Common approaches are server-side sessions stored in a cookie, or signed tokens such as JWTs. Use HTTPS,
              HttpOnly and Secure cookies, short expiry times with refresh tokens, and hash passwords with bcrypt or
              Argon2.
            </p>
            <h2 id="advanced">Advanced full stack interview questions</h2>
            <h3>6. How would you improve a slow web page?</h3>
            <p>
              Measure first with Lighthouse or browser dev tools. Then compress and lazy-load images, split and cache
              JavaScript bundles, add database indexes, cache API responses, and serve static files through a CDN.
            </p>
            <p className="muted">[Continue with the remaining questions from the existing article.]</p>
            <aside
              style={{
                background: "var(--brand-soft)",
                borderRadius: "var(--r-lg)",
                padding: "28px",
                margin: "40px 0",
                display: "flex",
                gap: "24px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1 1 260px" }}>
                <p style={{ fontWeight: "700", margin: "0" }}>Prepare with mock interviews</p>
                <p className="t-small muted" style={{ margin: "4px 0 0" }}>
                  The Python Full Stack course includes technical mock interviews with feedback.
                </p>
              </div>
              <a className="btn btn--primary btn--sm" href="#">
                View the course
              </a>
            </aside>
            <h2 id="tips">How to prepare for a full stack interview</h2>
            <ul>
              <li>Rebuild one of your projects end to end and be ready to explain every choice.</li>
              <li>Practise 2–3 coding problems a day on arrays, strings and hash maps.</li>
              <li>Revise HTTP, REST, authentication and SQL joins.</li>
              <li>Prepare a 60-second introduction that names your stack and best project.</li>
            </ul>
          </div>
        </div>
      </article>
      <section className="sec band" aria-labelledby="more">
        <div className="wrap">
          <div className="head">
            <h2 id="more" className="t-h2">
              More interview guides
            </h2>
            <Link className="lnk" href="/blog">
              All interview questions
            </Link>
          </div>
          <div className="g4">
            <a
              className="card"
              style={{ padding: "12px 12px 24px", display: "flex", flexDirection: "column", gap: "14px" }}
              href="#"
            >
              <ImageSlot
                what="Image to supply"
                file="cognizant-genc-interview-questions-with-answers.webp"
                alt="Cognizant GenC interview questions with answers"
                style={{ aspectRatio: "16 / 10" }}
              />
              <h3 className="t-h3" style={{ padding: "0 12px" }}>
                Cognizant GenC interview questions
              </h3>
            </a>{" "}
            <a
              className="card"
              style={{ padding: "12px 12px 24px", display: "flex", flexDirection: "column", gap: "14px" }}
              href="#"
            >
              <ImageSlot
                what="Image to supply"
                file="infosys-coding-interview-questions-with-answers.webp"
                alt="Infosys coding interview questions with answers"
                style={{ aspectRatio: "16 / 10" }}
              />
              <h3 className="t-h3" style={{ padding: "0 12px" }}>
                Infosys coding interview questions
              </h3>
            </a>{" "}
            <a
              className="card"
              style={{ padding: "12px 12px 24px", display: "flex", flexDirection: "column", gap: "14px" }}
              href="#"
            >
              <ImageSlot
                what="Image to supply"
                file="deloitte-interview-questions-with-answers.webp"
                alt="Deloitte interview questions with answers"
                style={{ aspectRatio: "16 / 10" }}
              />
              <h3 className="t-h3" style={{ padding: "0 12px" }}>
                Deloitte interview questions
              </h3>
            </a>{" "}
            <a
              className="card"
              style={{ padding: "12px 12px 24px", display: "flex", flexDirection: "column", gap: "14px" }}
              href="#"
            >
              <ImageSlot
                what="Image to supply"
                file="net-interview-questions-with-answers.webp"
                alt=".NET interview questions with answers"
                style={{ aspectRatio: "16 / 10" }}
              />
              <h3 className="t-h3" style={{ padding: "0 12px" }}>
                .NET interview questions
              </h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
