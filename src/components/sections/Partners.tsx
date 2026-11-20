import { PARTNERS } from "@/data/home";

export default function Partners() {
  return (
    <section className="sec--tight band-2" aria-labelledby="partners">
      <div className="wrap" style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
        <h2 id="partners" className="t-h3" style={{ flex: "0 0 220px" }}>
          Our learners work at
        </h2>
        <div className="logos" style={{ flex: "1 1 600px" }}>
          {PARTNERS.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
