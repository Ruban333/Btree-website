/**
 * Single source of truth for site-wide SEO facts.
 * Set NEXT_PUBLIC_SITE_URL in production (no trailing slash).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.btreesystems.com").replace(/\/$/, "");

export const SITE = {
  name: "BTree Systems",
  shortName: "BTree",
  tagline: "Software Training Institute in Chennai with Placement",
  description:
    "Live, trainer-led IT courses in Chennai and online: Python, Java, AWS, DevOps, data analytics, testing. Projects, certification and placement support.",
  locale: "en_IN",
  foundingYear: 2011,
  email: "info@btreesystems.com",
  phone: "+91 91769 97676",
  whatsapp: "+91 73973 93335",
  address: {
    street: "Greeta Techpark, Gate 5, 96, VSI Functional Industrial Estate, Perungudi",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600096",
    country: "IN",
  },
  /** Add real profile URLs (LinkedIn, YouTube, Instagram, Google Business Profile...). Used for schema `sameAs`. */
  sameAs: [] as string[],
  /** Paste verification tokens from Search Console / Bing Webmaster here, or via env. */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  },
} as const;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
