import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. Last item is the current page. */
export default function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className="crumbs">
        {trail.map((t, i) => (
          <span key={t.path}>
            {i < trail.length - 1 ? <Link href={t.path}>{t.name}</Link> : <span aria-current="page">{t.name}</span>}
            {i < trail.length - 1 ? " / " : ""}
          </span>
        ))}
      </nav>
    </>
  );
}
