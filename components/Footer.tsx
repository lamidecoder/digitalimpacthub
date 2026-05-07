"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo.jpg" alt="Logo" width={34} height={34} style={{ objectFit: "contain", filter: "invert(1) brightness(2)", borderRadius: 3 }} />
              <div className="nav-logo-text">
                <span className="t1" style={{ color: "var(--white)" }}>The Digital Impact Hub</span>
                <span className="t2">Learn. Connect. Thrive.</span>
              </div>
            </Link>
            <p className="footer-desc">
              Your space to learn, connect and thrive in tech.
              Building Africa&apos;s most impactful digital skills community, one learner at a time.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/webinar", label: "Webinar" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Connect</div>
            <a href="https://www.instagram.com/digitalimpacthub_" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            <Link href="/webinar" className="footer-link">Register for Webinar</Link>
            <Link href="/contact" className="footer-link">Send a Message</Link>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span className="footer-copy">2025 The Digital Impact Hub. All rights reserved.</span>
          <span className="footer-built">Built by <a href="https://sotundeolamide.com" target="_blank" rel="noopener noreferrer">sotundeolamide.com</a></span>
        </div>
      </div>
    </footer>
  );
}
