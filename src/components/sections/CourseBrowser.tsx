"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import Photo from "@/components/ui/Photo";
import { courseImage } from "@/data/home-images";
import { ALL_COURSES, CATEGORIES, type CourseCat } from "@/data/courses";

/**
 * Every course is in the server-rendered HTML (crawlable); the track chips and the
 * header search (?q=) only narrow the list after hydration.
 */
export default function CourseBrowser() {
  const [cat, setCat] = useState<"all" | CourseCat>("all");
  // "" on the server and first render (full crawlable list), then the ?q= from the header search.
  const search = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => "",
  );
  const q = new URLSearchParams(search).get("q")?.trim().toLowerCase() ?? "";

  const shown = useMemo(
    () =>
      ALL_COURSES.filter(
        (c) => (cat === "all" || c.cat === cat) && (!q || `${c.name} ${c.out}`.toLowerCase().includes(q)),
      ),
    [cat, q],
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 32,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} role="group" aria-label="Filter by track">
          {CATEGORIES.map((c) => {
            const n = c.id === "all" ? ALL_COURSES.length : ALL_COURSES.filter((x) => x.cat === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                className={cat === c.id ? "chip on" : "chip"}
                aria-pressed={cat === c.id}
                onClick={() => setCat(c.id)}
              >
                {c.label} <small>{n}</small>
              </button>
            );
          })}
        </div>
        <p className="t-small muted" aria-live="polite">
          Showing <b style={{ color: "var(--ink)" }}>{shown.length}</b> courses{q ? ` for “${q}”` : ""}
        </p>
      </div>

      <div className="g3">
        {shown.map((c) => (
          <Link
            key={c.slug}
            className="card card--line course"
            href={`/courses/${c.slug}`}
            style={{ overflow: "hidden" }}
          >
            <Photo
              src={courseImage(c.cat, c.slug)}
              alt={`${c.name} course at BTree Systems, Chennai`}
              sizes="(min-width: 900px) 33vw, 100vw"
              style={{
                aspectRatio: "1000 / 714",
                background: "#0a1733",
                width: "calc(100% + 48px)",
                maxWidth: "none",
                margin: "-24px -24px 4px",
                borderRadius: "16px 16px 0 0",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="ic">{c.code}</span>
              {c.badge && <span className="tag">{c.badge}</span>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <h3 className="t-h3">{c.name}</h3>
              <p className="t-small muted">{c.out}</p>
            </div>
            <div className="meta">
              <span className="pill pill--brand">{c.dur}</span>
              {c.mode.split(" · ").map((m) => (
                <span key={m} className="pill">
                  {m}
                </span>
              ))}
            </div>
            <div className="foot">
              <span className="lnk">View course</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
