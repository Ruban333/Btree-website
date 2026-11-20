/**
 * Legacy WordPress -> new site 301 redirects (wired into next.config.ts).
 *
 * Fill this from the Step 1 URL audit: every old URL whose path changes must
 * appear here. URLs that stay identical need NO entry.
 * `permanent: true` is sent as HTTP 308, which Google treats the same as 301.
 *
 * Examples:
 *   { source: "/python-training-in-chennai", destination: "/courses/python-full-stack" },
 *   { source: "/2023/05/:slug", destination: "/blog/:slug" },
 */
export const LEGACY_REDIRECTS: { source: string; destination: string }[] = [
  // Corporate page moves from the WordPress URL to the cleaner one (per design specs).
  { source: "/corporate-page", destination: "/corporate-training" },
];
