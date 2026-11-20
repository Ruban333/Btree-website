import Link from "next/link";
import { FAQS } from "@/data/home";

export default function Faq() {
  return (
    <section className="sec band" aria-labelledby="faq">
      <div className="wrap split-5-7">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 id="faq" className="t-h1">
            Questions learners ask before joining
          </h2>
          <p className="t-lead muted">Still unsure? A course advisor will call you back within the hour.</p>
          <Link className="btn btn--secondary" href="/contact" style={{ alignSelf: "flex-start" }}>
            Talk to an advisor
          </Link>
        </div>
        <div className="acc">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <svg className="pl" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <div className="bd">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
