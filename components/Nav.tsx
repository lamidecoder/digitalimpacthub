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
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const navScrolled = isHome ? scrolled : true;

  return (
    <>
      <nav className={`nav-root${navScrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Use the correct black logo — invert to white when nav is transparent */}
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 6,
            overflow: "hidden",
            background: navScrolled ? "transparent" : "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <Image
              src="/logo.png"
              alt="Digital Impact Hub"
              width={40}
              height={40}
              style={{
                objectFit: "contain",
                filter: navScrolled ? "none" : "invert(1) brightness(2)",
                transition: "filter 0.4s",
              }}
            />
          </div>
          <div>
            <span className="t1">Digital Impact Hub CIC</span>
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
          <Link href="/webinar" className="nav-btn-register">
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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.5rem" }} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Logo" width={44} height={44} style={{ objectFit: "contain" }} />
          <div>
            <span className="t1">Digital Impact Hub CIC</span>
            <span className="t2">Learn. Connect. Thrive.</span>
          </div>
        </Link>
        <div style={{ width: 40, height: 1, background: "var(--border)", margin: ".5rem 0 1rem" }} />
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/webinar" className="btn-primary" style={{ marginTop: ".75rem", padding: "1rem 2.5rem" }} onClick={() => setOpen(false)}>
          Register Now
        </Link>
      </div>
    </>
  );
}