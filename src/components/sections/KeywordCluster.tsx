import Link from "next/link";
import { KEYWORD_LINKS } from "@/data/home";

export default function KeywordCluster() {
  return (
    <section className="sec--tight" aria-labelledby="searches" style={{ paddingTop: 60 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <h2 id="searches" className="t-h3">
          Popular courses in Chennai
        </h2>
        <nav className="cluster" aria-label="Popular courses">
          {KEYWORD_LINKS.map((k) => (
            <Link key={k} href="/courses">
              {k}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
