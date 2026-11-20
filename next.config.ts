import type { NextConfig } from "next";
import { LEGACY_REDIRECTS } from "./src/data/redirects";
import { SITE_URL } from "./src/lib/site";
import { apiHeaders, securityHeaders } from "./src/lib/security-headers";

// One canonical host: if the site lives at www.example.com, requests to example.com are 301'd to it. Without this,
// search engines can index both hosts as duplicates and split link equity. Only active in production.
const siteHost = new URL(SITE_URL).host;
const canonicalHostRedirects =
  process.env.NODE_ENV === "production" && siteHost.startsWith("www.")
    ? [
        {
          source: "/:path*",
          has: [{ type: "host" as const, value: siteHost.replace(/^www\./, "") }],
          destination: `${SITE_URL}/:path*`,
          permanent: true,
        },
      ]
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
