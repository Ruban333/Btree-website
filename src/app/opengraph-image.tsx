import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} | ${SITE.tagline}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        title={SITE.tagline}
        subtitle="Live online + classroom batches · Real projects · Placement support"
        footer={`Perungudi, Chennai · Since ${SITE.foundingYear}`}
      />
    ),
    { ...size },
  );
}
