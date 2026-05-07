import Image from "next/image";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--white)", position: "relative", overflow: "hidden" }} className="hero-section">
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 3rem 80px" }} className="hero-left">
          <div className="a1" style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", marginBottom: "2rem" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)" }}>
              Digital Skills · AI Learning · Growth Community
            </span>
          </div>

          <h1 className="a2 serif" style={{ fontSize: "clamp(3.2rem,5.5vw,5.8rem)", fontWeight: 600, lineHeight: 1.06, letterSpacing: "-.02em", marginBottom: "1.4rem" }}>
            Your Space<br />to Learn,<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>Connect</em><br />and Thrive<br />in Tech.
          </h1>

          <p className="a3" style={{ fontSize: "1rem", color: "var(--ink3)", maxWidth: 420, lineHeight: 1.9, marginBottom: "2.5rem" }}>
            We equip individuals with the digital skills, AI knowledge and community connections needed to thrive in a rapidly evolving world.
          </p>

          <div className="a4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/webinar" className="btn-primary">Join Upcoming Webinar</Link>
            <Link href="/about" className="btn-secondary">Our Story</Link>
          </div>

          <div className="a5" style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
            {[{ n: "2K+", l: "Community Members" }, { n: "10+", l: "Events Hosted" }, { n: "AI", l: "Focused Curriculum" }].map((s) => (
              <div key={s.n}>
                <div className="serif" style={{ fontSize: "2.8rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: ".72rem", fontWeight: 600, color: "var(--ink4)", letterSpacing: ".07em", textTransform: "uppercase", marginTop: ".3rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Photo */}
        <div className="a6" style={{ position: "relative", background: "var(--cream2)", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--accent),var(--accent2))", zIndex: 2 }} />
          <Image src="/oyinda.jpg" alt="Oyinda Lawal, Founder" fill style={{ objectFit: "cover", objectPosition: "center 12%" }} priority />
          <div style={{ position: "absolute", bottom: "2.5rem", left: "-1.5rem", background: "var(--white)", border: "1px solid var(--border)", padding: "1.1rem 1.5rem", boxShadow: "0 12px 48px rgba(0,0,0,.09)", zIndex: 3 }}>
            <div style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: ".3rem" }}>Founder</div>
            <div style={{ fontSize: ".95rem", fontWeight: 700, color: "var(--ink)" }}>Oyinda Lawal</div>
            <div style={{ fontSize: ".76rem", color: "var(--ink3)", marginTop: ".1rem" }}>The Digital Impact Hub</div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ── ABOUT PREVIEW ── */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
              <div>
                <div className="eyebrow reveal">
                  <div className="eyebrow-bar" /><span className="eyebrow-text">About Us</span>
                </div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  Bridging the gap in<br /><em>digital confidence</em><br />across Africa
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                  The Digital Impact Hub is a forward-thinking tech education community founded by Oyinda Lawal. We believe understanding and working with technology, especially AI, is no longer optional.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                  Everyone is talking about AI but few are truly thriving with it. That is exactly what we are here to change.
                </p>
                <div className="reveal" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/about" className="btn-primary">Meet the Founder</Link>
                  <Link href="/services" className="btn-secondary">Our Services</Link>
                </div>
              </div>
              <div className="reveal">
                <div className="card" style={{ padding: "2.5rem" }}>
                  <div className="card-accent-bar" />
                  <p className="serif" style={{ fontSize: "1.55rem", fontStyle: "italic", fontWeight: 500, lineHeight: 1.6, color: "var(--ink)", marginBottom: "2rem" }}>
                    &ldquo;Everyone&apos;s talking about AI but few are thriving with it. Let&apos;s change that.&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--border)" }}>
                      <Image src="/oyinda.jpg" alt="Oyinda Lawal" width={46} height={46} style={{ objectFit: "cover", objectPosition: "center top" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: ".92rem", fontWeight: 700 }}>Oyinda Lawal</div>
                      <div style={{ fontSize: ".75rem", color: "var(--accent)", fontWeight: 600 }}>Founder, The Digital Impact Hub</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", border: "1px solid var(--border)", background: "var(--white)", marginTop: "1.5rem" }}>
                  {[{ n: "2K+", l: "Members" }, { n: "10+", l: "Webinars" }, { n: "100%", l: "Free to start" }].map((s, i) => (
                    <div key={s.n} style={{ flex: 1, padding: "1.5rem 1rem", borderRight: i < 2 ? "1px solid var(--border)" : "none", textAlign: "center" }}>
                      <div className="serif" style={{ fontSize: "1.9rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: ".66rem", fontWeight: 700, color: "var(--ink4)", textTransform: "uppercase", letterSpacing: ".07em", marginTop: ".3rem" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── SERVICES PREVIEW ── */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <div className="eyebrow-bar" /><span className="eyebrow-text">What We Offer</span><div className="eyebrow-bar" />
              </div>
              <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>How we help you <em>grow</em></h2>
              <p className="reveal section-sub" style={{ maxWidth: 480, margin: "0 auto" }}>
                From AI masterclasses to 1 on 1 coaching, everything we do is designed for real, lasting impact.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid var(--border)" }} className="services-grid">
              {[
                { n: "01", t: "Webinars and Masterclasses", d: "Live online sessions covering AI literacy and digital tools.", tag: "Free and Paid" },
                { n: "02", t: "AI Skills Training", d: "Practical AI learning for beginners and professionals.", tag: "Curriculum" },
                { n: "03", t: "Growth Community", d: "Connect, collaborate and grow with like-minded digital learners.", tag: "Always Open" },
              ].map((s, i) => (
                <div key={s.n} className="reveal" style={{ padding: "2.5rem 2rem", borderRight: i < 2 ? "1px solid var(--border)" : "none", position: "relative" }}>
                  <div className="serif" style={{ fontSize: "2.5rem", fontWeight: 300, color: "var(--border2)", lineHeight: 1, marginBottom: ".75rem" }}>{s.n}</div>
                  <div className="serif" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".65rem" }}>{s.t}</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink3)", lineHeight: 1.85 }}>{s.d}</div>
                  <div style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", marginTop: "1rem" }}>{s.tag}</div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
              <Link href="/services" className="btn-primary">View All Services</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── WEBINAR CTA BANNER ── */}
      <ScrollReveal>
        <section style={{ padding: "6rem 0", background: "var(--navy)" }}>
          <div className="container">
            <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "1rem" }}>
                  Upcoming · 18 October 2025
                </div>
                <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "var(--white)" }}>
                  Don&apos;t fear the future.<br /><em style={{ fontStyle: "italic", color: "var(--accent2)" }}>Skill up for it.</em>
                </h2>
                <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.55)", lineHeight: 1.85, maxWidth: 480, marginTop: "1rem" }}>
                  Thriving in the Tech Era: How to Stay Ahead in the Age of AI. A free webinar featuring Oyinda Lawal.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexShrink: 0 }}>
                <Link href="/webinar" className="btn-white" style={{ textAlign: "center" }}>Register Free</Link>
                <Link href="/contact" className="btn-ghost-white" style={{ textAlign: "center" }}>Get Reminded</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-left { padding: 120px 1.5rem 3rem !important; }
          .hero-section > div:last-child { min-height: 65vw; max-height: 480px; }
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .services-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </main>
  );
}
