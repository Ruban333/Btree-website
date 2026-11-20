"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type LinkItem = { label: string; href: string };

/** Hamburger + drawer used below the 1040px breakpoint, where the inline nav is hidden. */
export default function MobileMenu({ links, phone }: { links: LinkItem[]; phone: string }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const path = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    // Lock page scroll behind the open drawer.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav id="mobile-nav" className="nav-drawer" aria-label="Mobile" hidden={!open}>
        <form className="drawer-search" role="search" action="/courses" method="get">
          <label htmlFor="mobile-q" className="sr-only">
            Search courses
          </label>
          <input id="mobile-q" type="search" name="q" placeholder="Search courses" autoComplete="off" />
        </form>
        <ul>
          {links.map((l) => {
            const on = path === l.href || path.startsWith(`${l.href}/`);
            return (
              <li key={l.href}>
                <Link href={l.href} className={on ? "on" : undefined} aria-current={on ? "page" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a className="nav-drawer__phone" href={`tel:${phone.replace(/\s/g, "")}`}>
          Call {phone}
        </a>
      </nav>
    </>
  );
}
