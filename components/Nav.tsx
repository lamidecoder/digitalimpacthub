"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/webinar", label: "Webinar" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          <Image src="/logo.jpg" alt="The Digital Impact Hub" width={38} height={38} className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="t1">The Digital Impact Hub</span>
            <span className="t2">Learn. Connect. Thrive.</span>
          </div>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/webinar" className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.76rem" }}>
            Register Now
          </Link>
        </div>

        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link href="/" className="nav-logo" style={{ marginBottom: "0.5rem" }}>
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="t1">The Digital Impact Hub</span>
            <span className="t2">Learn. Connect. Thrive.</span>
          </div>
        </Link>
        <div style={{ width: 40, height: 1, background: "var(--border)", margin: "0.25rem 0 1rem" }} />
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="mobile-nav-link">
            {l.label}
          </Link>
        ))}
        <Link href="/webinar" className="btn-primary" style={{ marginTop: "0.75rem", padding: "1rem 2.5rem" }}>
          Register Now
        </Link>
      </div>
    </>
  );
}
