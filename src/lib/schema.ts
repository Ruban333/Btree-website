import type { Article, BreadcrumbList, Course, EducationalOrganization, FAQPage, ItemList, WebSite, WithContext } from "schema-dts";
import { absoluteUrl, SITE, SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema(): WithContext<EducationalOrganization> {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl("/images/logo.png"),
    description: SITE.description,
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: [{ "@type": "City", name: "Chennai" }, { "@type": "Country", name: "India" }],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions",
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    ...(SITE.sameAs.length ? { sameAs: [...SITE.sameAs] } : {}),
  };
}

export function websiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/** Entries still containing template placeholders like "₹[MIN]" are skipped so they never reach structured data. */
export function faqSchema(faqs: readonly { q: string; a: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((f) => !/\[[A-Za-z ]+\]/.test(f.a))
      .map((f) => ({
        "@type": "Question" as const,
        name: f.q,
        acceptedAnswer: { "@type": "Answer" as const, text: f.a },
      })),
  };
}

/** Course rich-result markup. No price or dates: add them only once real values exist. */
export function courseSchema(
  c: { name: string; out: string; mode: string },
  path: string,
): WithContext<Course> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${c.name} course in Chennai`,
    description: c.out,
    url: absoluteUrl(path),
    inLanguage: "en-IN",
    provider: { "@type": "EducationalOrganization", "@id": ORG_ID, name: SITE.name, url: SITE_URL },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: c.mode.split(" · ").map((m) => m.toLowerCase()),
      location: {
        "@type": "Place",
        name: SITE.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
      },
    },
  };
}

export function courseListSchema(courses: readonly { name: string; out: string; slug: string }[]): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popular IT courses at BTree Systems, Chennai",
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "Course" as const,
        name: c.name,
        description: c.out,
        url: absoluteUrl(`/courses/${c.slug}`),
        provider: { "@type": "EducationalOrganization" as const, "@id": ORG_ID, name: SITE.name },
      },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

/** Article markup without author/date: add `author`, `datePublished`, `dateModified` once the real values exist. */
export function articleSchema(a: { headline: string; description: string; path: string }): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    mainEntityOfPage: absoluteUrl(a.path),
    inLanguage: "en-IN",
    publisher: { "@type": "EducationalOrganization", "@id": ORG_ID, name: SITE.name },
  };
}
