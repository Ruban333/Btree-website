import type { NextConfig } from "next";
import { LEGACY_REDIRECTS } from "./src/data/redirects";
import { SITE_URL } from "./src/lib/site";
import { apiHeaders, securityHeaders } from "./src/lib/security-headers";

// One canonical host. The live site is https://btreesystems.com (no www) and already 301s www to it, so the new site
// must keep exactly that. The OTHER host variant is 301'd to SITE_URL (production only); without this, search engines
// index both hosts as duplicates and split link equity. If you ever switch to www, only NEXT_PUBLIC_SITE_URL changes.
const siteHost = new URL(SITE_URL).host;
const otherHost = siteHost.startsWith("www.") ? siteHost.slice(4) : `www.${siteHost}`;
const canonicalHostRedirects =
  process.env.NODE_ENV === "production"
    ? [{ source: "/:path*", has: [{ type: "host" as const, value: otherHost }], destination: `${SITE_URL}/:path*`, permanent: true }]
    : [];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactStrictMode: true,
  poweredByHeader: false, // do not advertise the framework to scanners
  productionBrowserSourceMaps: false, // do not ship readable source to the browser
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [], // the image optimiser only serves our own files, so it cannot be used as an open proxy
  },
  async redirects() {
    return [...canonicalHostRedirects, ...LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }))];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/api/:path*", headers: apiHeaders },
    ];
  },
};

export default nextConfig;
