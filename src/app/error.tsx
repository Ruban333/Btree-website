"use client";

import { useEffect } from "react";
import { SITE } from "@/lib/site";

/**
 * Runtime error fallback. It deliberately shows NO error message or stack: internal details (file paths, library
 * versions, query text) help attackers. The real error is logged for us; the visitor gets a calm message and a phone number.
 */
export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="sec">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 680 }}>
          <h1 className="t-h1">Something went wrong</h1>
          <p className="t-lead muted">
            This page could not load. Please try again, or call us on{" "}
            <a className="lnk" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
              {SITE.phone}
            </a>
            .
          </p>
          <div>
            <button type="button" className="btn btn--primary" onClick={() => retry()}>
              Try again
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
