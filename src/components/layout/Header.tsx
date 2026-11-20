import Link from "next/link";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import NavLinks from "@/components/layout/NavLinks";
import SearchBox from "@/components/layout/SearchBox";
import { NAV_LINKS, PHONE } from "@/data/home";

export default function Header() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/" className="brand-link" aria-label="BTree Systems home">
          <Logo alt="" priority />
        </Link>
        <SearchBox />
        <NavLinks links={NAV_LINKS} />
        <div className="right">
          <a className="phone" href={`tel:${PHONE.replace(/\s/g, "")}`}>
            {PHONE}
          </a>
          <Link className="btn btn--primary btn--sm" href="/contact">
            Enquire Now
          </Link>
          <MobileMenu links={NAV_LINKS} phone={PHONE} />
        </div>
      </div>
    </header>
  );
}
