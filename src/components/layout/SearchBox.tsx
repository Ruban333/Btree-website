"use client";

import { useEffect, useRef } from "react";

/** Header course search (GET /courses?q=). Press "/" anywhere to focus it. */
export default function SearchBox() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      const typing = el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <form className="nav-search" role="search" action="/courses" method="get">
      <label htmlFor="nav-q" className="sr-only">
        Search courses
      </label>
      <svg className="nav-search__icon" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="9" r="6" />
        <path d="M13.5 13.5 17 17" strokeLinecap="round" />
      </svg>
      <input ref={ref} id="nav-q" type="search" name="q" placeholder="Search courses" autoComplete="off" />
      <kbd className="nav-search__key" aria-hidden="true">
        /
      </kbd>
    </form>
  );
}
