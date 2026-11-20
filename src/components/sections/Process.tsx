import { PROCESS } from "@/data/home";

export default function Process() {
  return (
    <section className="sec" aria-labelledby="how">
      <div className="wrap split-5-7">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 id="how" className="t-h1">
            How a BTree course takes you from class to job
          </h2>
          <p className="t-lead muted">
            The same path on every course, whether you study online or in our Chennai classroom.
          </p>
        </div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
          {PROCESS.map((s) => (
            <li
              key={s.title}
              className="card"
              style={{
                background: s.highlight ? "var(--brand)" : "var(--surface)",
                color: s.highlight ? "var(--on-brand)" : undefined,
                padding: 28,
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: 24,
              }}
            >
              <p className="t-h3">{s.title}</p>
              <p className={s.highlight ? undefined : "muted"}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
