import { NextResponse, type NextRequest } from "next/server";
import { BAD_USER_AGENTS, PROBE_PATHS, isSameOrigin } from "@/lib/security";

/**
 * First line of defence: runs before any page or API route, so rejected requests cost almost nothing.
 *  - Vulnerability-scanner paths (/wp-login.php, /.env, /.git ...) get an instant 404.
 *  - Attack tools and robots.txt-ignoring scrapers (by User-Agent) get 403.
 *  - Browsers' cross-site POSTs to /api are refused (CSRF); the route re-checks this itself.
 * Search engines and AI answer engines pass through untouched.
 *
 * The proxy keeps no state (it may run on a CDN edge). Rate limiting lives in the API route, see lib/rate-limit.ts.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PROBE_PATHS.test(pathname)) {
    return new NextResponse("Not found", { status: 404, headers: { "Cache-Control": "public, max-age=3600" } });
  }

  if (BAD_USER_AGENTS.test(request.headers.get("user-agent") ?? "")) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (pathname.startsWith("/api/") && !["GET", "HEAD", "OPTIONS"].includes(request.method) && !isSameOrigin(request.headers)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403, headers: { "Cache-Control": "no-store" } });
  }

  return NextResponse.next();
}

export const config = {
  // Skip static assets and icons: nothing to protect there and no reason to add latency.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/|icons/|manifest.webmanifest).*)"],
};
