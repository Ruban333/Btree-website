import { NUMBERS } from "@/data/home";

export default function Stats() {
  return (
    <section className="sec--tight band" aria-labelledby="proof">
      <div className="wrap">
        <h2 id="proof" className="t-h3" style={{ marginBottom: 32 }}>
          BTree in numbers
        </h2>
        <div className="stats">
          {NUMBERS.map((n) => (
            <div className="stat" key={n.label}>
              <div className="t-num">{n.value}</div>
              <span>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
