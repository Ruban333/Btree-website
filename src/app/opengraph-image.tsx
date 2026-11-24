import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} | ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/images/logo.png")).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="" width={330} height={70} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>{SITE.tagline}</div>
          <div style={{ fontSize: 32, color: "#4b5563" }}>
            Live online + classroom batches · Real projects · Placement support
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#4b5563" }}>{`Perungudi, Chennai · Since ${SITE.foundingYear}`}</div>
      </div>
    ),
    { ...size },
  );
}
