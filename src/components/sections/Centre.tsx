import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import { CENTRE_IMAGES } from "@/data/home";

export default function Centre() {
  return (
    <section className="sec" aria-labelledby="centre" style={{ paddingTop: 60 }}>
      <div className="wrap">
        <div className="head">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h2 id="centre" className="t-h1">
              Inside our Chennai training centre
            </h2>
            <p className="t-lead muted">
              Air-conditioned classrooms, a lab with one system per learner and weekly placement drives.
            </p>
          </div>
          <Link className="lnk" href="/contact">
            Visit the centre
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)",
            gridTemplateRows: "260px 260px",
            gap: 16,
          }}
        >
          {CENTRE_IMAGES.map((img) => (
            <ImageSlot
              key={img.file}
              what={img.what}
              file={img.file}
              alt={img.alt}
              style={img.large ? { gridRow: "span 2" } : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
