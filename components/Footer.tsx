import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image
                src="/logo.png"
                alt="Digital Impact Hub"
                width={44}
                height={44}
                style={{ objectFit: "contain", filter: "invert(1) brightness(2)" }}
              />
              <div>
                <span className="t1" style={{ color: "#ffffff" }}>Digital Impact Hub</span>
                <span className="t2">Learn. Connect. Thrive.</span>
              </div>
            </Link>
            <p className="footer-desc">
              Empowering communities through digital skills, AI awareness, and technology education.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: ".5rem" }}>
              <a href="mailto:thedigitalimpacthub@gmail.com" className="footer-link" style={{ fontSize: ".82rem" }}>
                thedigitalimpacthub@gmail.com
              </a>
              <a href="https://www.instagram.com/digitalimpacthub_" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontSize: ".82rem" }}>
                @digitalimpacthub_
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/webinar", label: "Webinars" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Connect</div>
            <a href="https://www.instagram.com/digitalimpacthub_" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            <Link href="/webinar" className="footer-link">Register for Webinar</Link>
            <Link href="/contact" className="footer-link">Partner With Us</Link>
            <Link href="/contact" className="footer-link">Book a Discovery Call</Link>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span className="footer-copy">© The Digital Impact Hub. All Rights Reserved.</span>
          <span className="footer-built">
            Built by <a href="https://sotundeolamide.com" target="_blank" rel="noopener noreferrer">sotundeolamide.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}