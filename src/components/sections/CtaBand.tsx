import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="sec" aria-labelledby="cta">
      <div className="wrap">
        <div
          className="band-brand"
          style={{
            borderRadius: "var(--r-xl)",
            padding: 64,
            display: "flex",
            gap: 32,
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 }}>
            <h2 id="cta" className="t-h1">
              Not sure which course fits?
            </h2>
            <p className="t-lead">Get a free 15-minute call with a career advisor. No obligation.</p>
          </div>
          <Link className="btn btn--invert btn--lg" href="/contact">
            Book a free call
          </Link>
        </div>
      </div>
    </section>
  );
}
