"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ links }: { links: { label: string; href: string }[] }) {
  const path = usePathname();
  return (
    <nav className="links" aria-label="Main">
      {links.map((l) => {
        const on = path === l.href || path.startsWith(`${l.href}/`);
        return (
          <Link key={l.href} href={l.href} className={on ? "on" : undefined} aria-current={on ? "page" : undefined}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
