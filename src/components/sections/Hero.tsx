import Link from "next/link";
import Photo from "@/components/ui/Photo";
import { HERO_IMAGE } from "@/data/home-images";
import { HERO_STATS } from "@/data/home";

export default function Hero() {
  return (
    <section className="sec" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div className="wrap split-7-5" style={{ alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingBottom: 24 }}>
          <h1 className="t-display" style={{ maxWidth: 720, fontSize: "clamp(40px, 4.8vw, 70px)" }}>
            IT and software training in Chennai
          </h1>
          <p className="t-lead muted" style={{ maxWidth: 580 }}>
            Training that gets you hired: 40+ live, trainer-led courses in Python, Java, AWS, DevOps, data
            analytics and software testing, online or in our Chennai classroom, with real projects and
            placement support.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn--primary btn--lg" href="/courses">
              Explore courses
            </Link>
            <Link className="btn btn--secondary btn--lg" href="/contact">
              Book a free demo class
            </Link>
          </div>
          <div className="t-small" style={{ display: "flex", gap: 32, flexWrap: "wrap", paddingTop: 12 }}>
            {HERO_STATS.map((s) => (
              <span key={s.value}>
                <b style={{ fontSize: 17 }}>{s.value}</b> <span className="muted">{s.label}</span>
              </span>
            ))}
          </div>
        </div>
        <figure style={{ margin: 0, position: "relative" }}>
          <div
            style={{
              background: "var(--brand-soft)",
              borderRadius: "var(--r-xl)",
              overflow: "hidden",
              aspectRatio: "4 / 5",
              display: "flex",
            }}
          >
            <Photo
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              position={HERO_IMAGE.position}
              sizes="(min-width: 900px) 40vw, 100vw"
              eager
              style={{ width: "100%", height: "100%", borderRadius: 0, background: "var(--brand-soft)" }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
