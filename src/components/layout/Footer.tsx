import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { FOOTER, PHONE } from "@/data/home";

export default function Footer() {
  return (
    <footer className="band foot-big">
      <div className="wrap">
        <div className="foot-cols">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Logo />
            <p className="t-small muted" style={{ maxWidth: 320 }}>
              {FOOTER.blurb}
            </p>
            <address className="t-small" style={{ fontStyle: "normal", maxWidth: 320 }}>
              {FOOTER.address}
              <br />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a> ·{" "}
              <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
            </address>
          </div>
          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-legal">
          <span>© 2011–2026 BTree Systems, Chennai</span>
          <span>WhatsApp {FOOTER.whatsapp}</span>
        </div>
      </div>
    </footer>
  );
}
