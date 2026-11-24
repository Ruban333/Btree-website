import Link from "next/link";
import LeadForm from "@/components/forms/LeadForm";
import Rich from "@/components/course/Rich";
import ImageSlot from "@/components/ui/ImageSlot";
import type { CoursePage } from "@/content/course-types";
import { SITE } from "@/lib/site";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
const initials = (name: string) =>
  name.startsWith("[")
    ? "AB"
    : name
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
const whatsapp = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

const Plus = () => (
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
);

const col = { display: "flex", flexDirection: "column" } as const;

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flex: "none", marginTop: 3, color: "var(--brand-text)" }}
  >
    <path d="M4 10.5l4 4 8-9" />
  </svg>
);

/** Renders a whole course page from its content file, in the site theme. */
export default function CoursePageView({ c }: { c: CoursePage }) {
  return (
    <>
      {/* Hero */}
      <section className="band" style={{ padding: "40px 0 72px" }}>
        <div className="wrap" style={{ ...col, gap: 28 }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/courses">Courses</Link>
            <span>/</span>
            <Link href="/courses">{c.track}</Link>
            <span>/</span>
            <b aria-current="page">{c.name}</b>
          </nav>
          <div className="split-7-5" style={{ alignItems: "start" }}>
            <div style={{ ...col, gap: 24, paddingTop: 12 }}>
              <span className="tag" style={{ alignSelf: "flex-start" }}>
                {c.track} · Online and classroom
              </span>
              <h1 className="t-h1" style={{ fontSize: "clamp(36px, 4.6vw, 64px)" }}>
                {c.hero.h1}
              </h1>
              <p className="t-lead muted" style={{ maxWidth: 620 }}>
                <Rich text={c.hero.lead} />
              </p>
              <p className="t-small">
                <b>★ {c.hero.proof.score}</b> <span className="muted">{c.hero.proof.detail}</span>
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn--primary btn--lg" href="#enquire">
                  Get fees and next batch
                </a>
                <a className="btn btn--secondary btn--lg" href="#">
                  {c.hero.syllabusButton}
                </a>
              </div>
            </div>
            <LeadForm
              source={`course-${c.slug}`}
              id="enquire"
              className="form"
              style={{ background: "var(--bg)", boxShadow: "var(--shadow-float)" }}
            >
              <div style={{ ...col, gap: 4 }}>
                <h2 className="t-h3">{c.hero.formTitle}</h2>
                <p className="t-small muted">
                  {c.hero.formNote ?? "Free counselling and a demo class. We call back within the hour."}
                </p>
              </div>
              <div className="field">
                <label htmlFor="n1">Full name</label>
                <input id="n1" name="name" className="inp" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="p1">Mobile number</label>
                <input
                  id="p1"
                  name="phone"
                  className="inp"
                  placeholder="10-digit mobile"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="m1">Preferred mode</label>
                <select id="m1" name="mode" className="inp" defaultValue="Online">
                  <option>Online</option>
                  <option>Classroom (Chennai)</option>
                </select>
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
                {c.hero.formButton ?? "Request a call back"}
              </button>
              <p className="help" style={{ textAlign: "center" }}>
                Or{" "}
                <a className="lnk" href={whatsapp}>
                  chat on WhatsApp
                </a>
              </p>
            </LeadForm>
          </div>
        </div>
      </section>

      {/* How long */}
      <section className="sec--tight" aria-labelledby="glance" style={{ padding: "72px 0" }}>
        <div className="wrap split-5-7" style={{ alignItems: "center" }}>
          <div style={{ ...col, gap: 14 }}>
            <h2 id="glance" className="t-h2">
              {c.glance.title}
            </h2>
            <p className="t-lead muted">
              <Rich text={c.glance.lead} />
            </p>
          </div>
          <div
            className="g3"
            style={c.glance.columns === 3 ? { gap: 16 } : { gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          >
            {c.glance.batches.map((b) => (
              <article
                key={b.name}
                className="card"
                style={{ padding: 24, ...col, gap: 8, background: "var(--surface)" }}
              >
                <h3 className="t-small" style={{ fontWeight: 600, color: "var(--ink-muted)" }}>
                  {b.name}
                </h3>
                <p
                  className="t-num"
                  style={{ fontSize: c.glance.columns === 3 ? "clamp(24px, 2.4vw, 34px)" : 34, whiteSpace: "nowrap" }}
                >
                  {b.duration}
                </p>
                <p style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.45 }}>
                  {b.schedule.map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
                <p className="t-small" style={{ color: "var(--ink-muted)", marginTop: "auto" }}>
                  {b.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="sec band-2" aria-labelledby="whatis" style={{ padding: "96px 0" }}>
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div style={{ ...col, gap: 16 }}>
            <h2 id="whatis" className="t-h1">
              {c.whatis.title}
            </h2>
            <p className="t-lead">
              <Rich text={c.whatis.definition} />
            </p>
            {c.whatis.why && <p className="muted">{c.whatis.why}</p>}
          </div>
          {c.whatis.pipeline ? (
            <figure className="fig">
              <ol
                className="pipe"
                style={{ listStyle: "none", margin: 0, padding: 0 }}
                aria-label={c.whatis.pipeline.label}
              >
                {c.whatis.pipeline.steps.map((s) => (
                  <li
                    key={s.label}
                    style={s.highlight ? { background: "var(--brand)", color: "var(--on-brand)" } : undefined}
                  >
                    <b>{s.label}</b>
                    <span style={s.highlight ? { color: "var(--on-brand)" } : undefined}>{s.tools}</span>
                  </li>
                ))}
              </ol>
              <figcaption>{c.whatis.pipeline.caption}</figcaption>
            </figure>
          ) : (
            c.whatis.image && (
              <figure className="fig">
                <ImageSlot
                  what="Image to supply"
                  file={`${slug(c.whatis.image.alt)}.webp`}
                  alt={c.whatis.image.alt}
                  style={{ aspectRatio: "4 / 3" }}
                />
                {c.whatis.image.caption && <figcaption>{c.whatis.image.caption}</figcaption>}
              </figure>
            )
          )}
        </div>
      </section>

      {/* Outcomes */}
      <section className="sec" aria-labelledby="outcomes">
        <div className="wrap split-5-7">
          <div style={{ ...col, gap: 16 }}>
            <h2 id="outcomes" className="t-h1">
              {c.outcomes.title}
            </h2>
            <p className="t-lead muted">{c.outcomes.lead}</p>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {c.outcomes.bullets
              ? c.outcomes.bullets.map((b) => (
                  <li
                    key={b}
                    className="card"
                    style={{
                      background: "var(--surface)",
                      padding: "18px 20px",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      fontWeight: 600,
                      fontSize: 15.5,
                      lineHeight: 1.45,
                    }}
                  >
                    <Check />
                    <span>{b}</span>
                  </li>
                ))
              : c.outcomes.items?.map((i) => (
                  <li key={i.title} className="card" style={{ background: "var(--surface)", padding: 24 }}>
                    <b>{i.title}</b>
                    <p className="t-small muted" style={{ marginTop: 6 }}>
                      {i.text}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
      </section>

      {/* Who */}
      <section className="sec--tight band-2" aria-labelledby="who">
        <div className="wrap">
          <h2 id="who" className="t-h2" style={{ marginBottom: 32 }}>
            {c.who.title}
          </h2>
          <div className="g4">
            {c.who.items.map((i) => (
              <div key={i.title}>
                <h3 className="t-h3">{i.title}</h3>
                <p className="muted" style={{ marginTop: 6 }}>
                  {i.text}
                </p>
              </div>
            ))}
          </div>
          {c.who.note && (
            <p className="t-lead muted" style={{ marginTop: 32 }}>
              {c.who.note}
            </p>
          )}
        </div>
      </section>

      {/* Curriculum */}
      <section className="sec" aria-labelledby="curriculum">
        <div className="wrap split-5-7">
          <div style={{ ...col, gap: 16 }}>
            <h2 id="curriculum" className="t-h1">
              {c.curriculum.title}
            </h2>
            <p className="t-lead muted">{c.curriculum.lead}</p>
            <a className="btn btn--secondary" href="#" style={{ alignSelf: "flex-start" }}>
              Download full syllabus
            </a>
          </div>
          <ol className="acc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {c.curriculum.list?.map((t, i) => (
              <li
                key={t}
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "baseline",
                  padding: "18px 24px",
                  ...(i ? { borderTop: "1px solid var(--border)" } : {}),
                  fontWeight: 600,
                  fontSize: 17,
                }}
              >
                <span className="t-small muted" style={{ fontVariantNumeric: "tabular-nums", minWidth: 22 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
            {c.curriculum.modules?.map((m, i) => (
              <li key={m.title}>
                <details open={i === 0}>
                  <summary>
                    {m.title}
                    <span className="ct">{m.sessions}</span>
                    <Plus />
                  </summary>
                  <div className="bd">
                    {m.bullets ? (
                      <ul>
                        {m.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      m.summary
                    )}
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section className="sec--tight band" aria-labelledby="tools">
        <div className="wrap" style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <h2 id="tools" className="t-h3" style={{ flex: "0 0 240px" }}>
            {c.tools.title}
          </h2>
          <ul className="cluster" style={{ flex: "1 1 600px", listStyle: "none", margin: 0, padding: 0 }}>
            {c.tools.items.map((t) => (
              <li key={t}>
                <span className="tag tag--n" style={{ fontSize: 14, padding: "8px 14px" }}>
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="sec" aria-labelledby="projects">
        <div className="wrap">
          <div className="head">
            <div style={{ ...col, gap: 12 }}>
              <h2 id="projects" className="t-h1">
                {c.projects.title}
              </h2>
              <p className="t-lead muted">{c.projects.lead}</p>
            </div>
          </div>
          <div className="g3">
            {c.projects.items.map((p) => (
              <article key={p.title} className="card card--line" style={{ padding: "12px 12px 28px", ...col, gap: 10 }}>
                <ImageSlot
                  what="Image to supply"
                  file={`${slug(p.imageAlt)}.webp`}
                  alt={p.imageAlt}
                  style={
                    p.stack
                      ? { minHeight: 180, marginBottom: 12, height: "100%" }
                      : { aspectRatio: "16 / 10", marginBottom: 12 }
                  }
                />
                <h3 className="t-h3" style={{ padding: "0 16px" }}>
                  {p.title}
                </h3>
                <p className="muted" style={{ padding: "0 16px" }}>
                  {p.text}
                </p>
                {p.stack && (
                  <p className="t-small" style={{ marginTop: "auto", padding: "0 16px" }}>
                    <b>{p.stack}</b>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="sec band" aria-labelledby="cert">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div style={{ ...col, gap: 16 }}>
            <h2 id="cert" className="t-h1">
              {c.cert.title}
            </h2>
            <p className="t-lead muted">{c.cert.text}</p>
          </div>
          <figure className="fig">
            <ImageSlot
              what="Image to supply"
              file={`${slug(c.cert.imageAlt)}.webp`}
              alt={c.cert.imageAlt}
              style={{ aspectRatio: "16 / 10", background: "var(--bg)" }}
            />
            <figcaption>{c.cert.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Jobs */}
      <section className="sec" aria-labelledby="jobs">
        <div className="wrap split-5-7">
          <div style={{ ...col, gap: 16 }}>
            <h2 id="jobs" className="t-h1">
              {c.jobs.title}
            </h2>
            <p className="t-lead muted">{c.jobs.lead}</p>
          </div>
          <div className="card card--line" style={{ padding: "8px 16px", overflowX: "auto" }}>
            <table className="dtable">
              <thead>
                <tr>
                  <th scope="col">Role</th>
                  <th scope="col">Starting salary in Chennai</th>
                  <th scope="col">Typical employers</th>
                </tr>
              </thead>
              <tbody>
                {c.jobs.roles.map((r) => (
                  <tr key={r.role}>
                    <td>
                      <b>{r.role}</b>
                    </td>
                    <td>{r.salary}</td>
                    <td>{r.employers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="help" style={{ padding: "12px 16px" }}>
              {c.jobs.note}
            </p>
          </div>
        </div>
      </section>

      {/* Why BTree */}
      <section className="sec--tight band-2" aria-labelledby="why">
        {c.why.bullets ? (
          <div className="wrap split-5-7" style={{ alignItems: "start" }}>
            <h2 id="why" className="t-h2">
              {c.why.title}
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, ...col, gap: 16 }}>
              {c.why.bullets.map((b) => (
                <li
                  key={b}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 17, lineHeight: 1.5 }}
                >
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="wrap">
            <h2 id="why" className="t-h2" style={{ marginBottom: 32 }}>
              {c.why.title}
            </h2>
            <div className="g4">
              {c.why.items?.map((i) => (
                <div key={i.title}>
                  <h3 className="t-h3">{i.title}</h3>
                  <p className="muted" style={{ marginTop: 6 }}>
                    {i.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Reviews */}
      <section className="sec" aria-labelledby="reviews">
        <div className="wrap" style={{ alignItems: "stretch", ...col, gap: 40 }}>
          <div style={{ ...col, gap: 12 }}>
            <h2 id="reviews" className="t-h1">
              {c.reviews.title}
            </h2>
            <p className="t-lead muted" style={{ maxWidth: 640 }}>
              {c.reviews.lead}
            </p>
          </div>
          <div className="g3">
            {c.reviews.videos.map((v, i) => (
              <figure key={i} className="card card--line" style={{ margin: 0, padding: 0, overflow: "hidden", ...col }}>
                <div
                  style={{
                    aspectRatio: "16 / 9",
                    background: "var(--brand-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="button"
                    aria-label="Play video testimonial"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 999,
                      border: 0,
                      background: "var(--brand)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
                <figcaption style={{ padding: "20px 24px", ...col, gap: 4 }}>
                  <b>{v.name}</b>
                  <span className="t-small muted">{v.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="g3">
            {c.reviews.quotes.map((q, i) => (
              <figure key={i} className="card card--line" style={{ margin: 0, padding: 32, ...col, gap: 16 }}>
                <p className="t-small">
                  <b>★★★★★</b> <span className="muted">Google review</span>
                </p>
                <blockquote style={{ margin: 0 }}>{q.text}</blockquote>
                <figcaption className="person" style={{ marginTop: "auto" }}>
                  <span className="av">{initials(q.name)}</span>
                  <span className="t-small">
                    <b>{q.name}</b>
                    <br />
                    <span className="ok">{q.placed.split(" · ")[0]}</span>
                    {q.placed.includes(" · ") ? ` · ${q.placed.split(" · ").slice(1).join(" · ")}` : ""}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <a className="lnk" href="#" style={{ alignSelf: "flex-start" }}>
            {c.reviews.allLink}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec band" aria-labelledby="cfaq">
        <div className="wrap split-5-7">
          <div style={{ ...col, gap: 16 }}>
            <h2 id="cfaq" className="t-h1">
              {c.faq.title}
            </h2>
            <p className="t-lead muted">{c.faq.lead}</p>
          </div>
          <div className="acc">
            {c.faq.items.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <Plus />
                </summary>
                <div className="bd">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" aria-labelledby="ccta">
        <div className="wrap">
          <div
            className="band-brand"
            style={{
              borderRadius: "var(--r-xl)",
              padding: "56px 64px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div style={{ ...col, gap: 10 }}>
              <h2 id="ccta" className="t-h1">
                {c.cta.title}
              </h2>
              <p className="t-lead">{c.cta.lead}</p>
            </div>
            <a className="btn btn--invert btn--lg" href="#enquire">
              {c.cta.button}
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="sec--tight" aria-labelledby="read" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ ...col, gap: 20 }}>
          <h2 id="read" className="t-h3">
            Related courses and guides
          </h2>
          <nav className="cluster" aria-label="Related courses and guides">
            {c.related.map((r) =>
              r.href.startsWith("/") ? (
                <Link key={r.label} href={r.href}>
                  {r.label}
                </Link>
              ) : (
                <a key={r.label} href={r.href}>
                  {r.label}
                </a>
              ),
            )}
          </nav>
          {c.areas && (
            <p className="t-small muted" style={{ marginTop: 8 }}>
              <Rich text={c.areas} />
            </p>
          )}
        </div>
      </section>
    </>
  );
}
