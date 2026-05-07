import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "About | The Digital Impact Hub" };

export default function AboutPage() {
  const values = [
    { icon: "◉", title: "Accessibility First", desc: "Digital education should be available to everyone. We make entry free and progressive." },
    { icon: "◈", title: "Human Centred", desc: "Every programme is designed around real people, real challenges and real outcomes." },
    { icon: "◎", title: "AI Empowerment", desc: "We teach people to work with AI, not fear it. Practical skills for the real world." },
    { icon: "◇", title: "Community Growth", desc: "You grow faster together. Our community is the backbone of everything we do." },
  ];

  return (
    <main>
      {/* BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />About Us</div>
          <h1 className="page-banner-title a2">
            We are on a mission to <em>bridge the gap</em>
          </h1>
          <p className="page-banner-sub a3">
            The Digital Impact Hub exists because too many people are left behind in the digital revolution. We are here to change that, one learner at a time.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
              <div style={{ position: "relative" }}>
                <div className="reveal" style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src="/oyinda.jpg"
                    alt="Oyinda Lawal"
                    width={560}
                    height={680}
                    style={{ width: "100%", height: "580px", objectFit: "cover", objectPosition: "center 12%", display: "block" }}
                  />
                  <div style={{ position: "absolute", top: "2rem", right: "-1.5rem", background: "var(--accent)", padding: "1.5rem", maxWidth: 200 }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--white)", fontFamily: "'Cormorant Garamond',serif", lineHeight: 1 }}>2K+</div>
                    <div style={{ fontSize: ".7rem", fontWeight: 600, color: "rgba(255,255,255,.8)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: ".25rem" }}>Learners impacted</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Meet the Founder</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  Oyinda Lawal,<br /><em>Founder and Visionary</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  Oyinda Lawal founded The Digital Impact Hub with a clear conviction: the digital skills gap is not just an economic problem, it is a human one. Too many talented, capable people are being left out of the digital economy simply because they do not know where to start.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  Through webinars, workshops and a growing community, she has helped thousands of individuals take their first real steps into tech, AI and digital entrepreneurship.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "2.5rem" }}>
                  Her approach is warm, practical and relentlessly human. She does not just teach tools. She changes mindsets.
                </p>
                <div className="reveal" style={{ padding: "1.75rem", background: "var(--cream)", borderLeft: "3px solid var(--accent)" }}>
                  <p className="serif" style={{ fontSize: "1.35rem", fontStyle: "italic", fontWeight: 500, lineHeight: 1.6, color: "var(--ink)" }}>
                    &ldquo;Everyone&apos;s talking about AI but few are thriving with it. Let&apos;s change that.&rdquo;
                  </p>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--accent)", marginTop: ".75rem" }}>Oyinda Lawal</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* VALUES */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <div className="eyebrow-bar" /><span className="eyebrow-text">Our Values</span><div className="eyebrow-bar" />
              </div>
              <h2 className="section-title reveal">What we stand <em>for</em></h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="values-grid">
              {values.map((v) => (
                <div key={v.title} className="card reveal">
                  <div style={{ fontSize: "1.5rem", color: "var(--accent)", marginBottom: "1.25rem" }}>{v.icon}</div>
                  <div className="serif" style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".65rem" }}>{v.title}</div>
                  <div style={{ fontSize: ".9rem", color: "var(--ink3)", lineHeight: 1.85 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* STATS BAND */}
      <ScrollReveal>
        <section style={{ padding: "5rem 0", background: "var(--navy)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0", border: "1px solid rgba(255,255,255,.08)" }} className="stats-band">
              {[
                { n: "2K+", l: "Community Members" },
                { n: "10+", l: "Webinars Hosted" },
                { n: "100%", l: "Free to Start" },
                { n: "AI", l: "Focused Curriculum" },
              ].map((s, i) => (
                <div key={s.n} className="reveal" style={{ padding: "2.5rem", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                  <div className="serif" style={{ fontSize: "3rem", fontWeight: 600, color: "var(--white)", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: ".72rem", fontWeight: 600, color: "rgba(255,255,255,.45)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: ".5rem" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream2)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>Ready to <em>start learning?</em></h2>
            <p className="reveal section-sub" style={{ maxWidth: 440, margin: "0 auto 2.5rem" }}>Join our community and take the first step towards thriving in the digital age.</p>
            <div className="reveal" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/webinar" className="btn-primary">Register for Webinar</Link>
              <Link href="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .stats-band { grid-template-columns: 1fr 1fr !important; }
          .stats-band > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.08); }
        }
        @media (max-width: 640px) {
          .stats-band { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
