import { readFileSync } from "node:fs";
import { join } from "node:path";

/** Shared look for generated social-share (Open Graph) images, 1200x630. Used by app/opengraph-image and per-course images. */
export const OG_SIZE = { width: 1200, height: 630 };

let logo: string | undefined;
/** The BTree logo as a data URI (read once; ImageResponse cannot fetch relative URLs). */
export function logoDataUri(): string {
  logo ??= `data:image/png;base64,${readFileSync(join(process.cwd(), "public/images/logo.png")).toString("base64")}`;
  return logo;
}

export function OgCard({ eyebrow, title, subtitle, footer }: { eyebrow?: string; title: string; subtitle: string; footer: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#ffffff",
        color: "#111827",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri()} alt="" width={330} height={70} />
        {eyebrow && (
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#0000ff", background: "#e8eeff", padding: "10px 22px", borderRadius: 10 }}>
            {eyebrow}
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontSize: title.length > 40 ? 64 : 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#4b5563" }}>{subtitle}</div>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#4b5563" }}>{footer}</div>
    </div>
  );
}
