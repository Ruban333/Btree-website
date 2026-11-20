import type { Thing, WithContext } from "schema-dts";

/**
 * Renders schema.org JSON-LD as a server-rendered <script> tag.
 * `<` is escaped so content can never close the script tag (XSS-safe).
 */
export default function JsonLd({ data }: { data: WithContext<Thing> | WithContext<Thing>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
