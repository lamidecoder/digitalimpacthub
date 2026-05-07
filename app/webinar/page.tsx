import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Webinar | The Digital Impact Hub" };

export default function WebinarPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />Upcoming Webinar</div>
          <h1 className="page-banner-title a2">
            Thriving in the<br />Tech Era: <em>How to Stay<br />Ahead in the Age of AI</em>
          </h1>
          <div className="a3" style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: ".85rem", color: "var(--ink3)" }}>18 October 2025</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: ".85rem", color: "var(--ink3)" }}>11:00am to 11:45am</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: ".85rem", color: "var(--ink3)" }}>Zoom · Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "5rem", alignItems: "start" }} className="web-grid">
              {/* Left */}
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">About This Webinar</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  A practical guide to <em>AI growth</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  The world is changing faster than ever. Artificial intelligence is no longer a distant concept reserved for engineers and tech giants. It is here, and it is transforming every industry, every job and every opportunity.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  The question is no longer whether AI will affect your work. It is whether you will learn to use it before it replaces what you do. In this webinar, Oyinda Lawal will walk you through a practical framework for understanding, adopting and thriving with AI in your day to day life.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "2.5rem" }}>
                  No technical background required. This is for professionals, entrepreneurs, students and anyone who wants to stay ahead.
                </p>

                <div className="reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem", marginBottom: "2.5rem" }}>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1.5rem" }}>What You Will Learn</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
                    {[
                      "How AI is reshaping careers, businesses and industries right now",
                      "The mindset shift required to thrive, not just survive, in the AI era",
                      "Practical tools you can start using today, for free",
                      "How to identify AI opportunities specific to your field",
                      "Building a personal AI adoption plan that actually works",
                    ].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".85rem" }}>
                        <div style={{ width: 18, height: 18, border: "1.5px solid var(--accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: ".15rem" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
                        </div>
                        <span style={{ fontSize: ".92rem", color: "var(--ink2)", lineHeight: 1.7 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featuring */}
                <div className="reveal" style={{ background: "var(--cream)", padding: "2rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1.25rem" }}>Featuring</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--border)" }}>
                      <Image src="/oyinda.jpg" alt="Oyinda Lawal" width={64} height={64} style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)", marginBottom: ".2rem" }}>Oyinda Lawal</div>
                      <div style={{ fontSize: ".82rem", color: "var(--accent)", fontWeight: 600 }}>Founder, The Digital Impact Hub</div>
                      <div style={{ fontSize: ".82rem", color: "var(--ink3)", marginTop: ".25rem", lineHeight: 1.6 }}>Digital skills educator, community builder and AI literacy advocate.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Register card */}
              <div className="reveal" style={{ position: "sticky", top: "7rem" }}>
                <div style={{ background: "var(--navy)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--accent),var(--accent2))" }} />

                  <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "1.25rem" }}>
                    Register Now · Free
                  </div>

                  <h3 className="serif" style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--white)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                    Secure your<br />spot today
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", marginBottom: "2rem" }}>
                    {[
                      { l: "Date", v: "18 October 2025" },
                      { l: "Time", v: "11:00am to 11:45am" },
                      { l: "Platform", v: "Zoom (link sent on registration)" },
                      { l: "Cost", v: "100% Free" },
                      { l: "Spots", v: "Limited availability" },
                    ].map((item) => (
                      <div key={item.l} style={{ display: "flex", justifyContent: "space-between", padding: ".65rem 0", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                        <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.45)", fontWeight: 600 }}>{item.l}</span>
                        <span style={{ fontSize: ".78rem", color: "var(--white)", fontWeight: 500 }}>{item.v}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://us05web.zoom.us/meeting/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", fontSize: ".85rem", padding: "1rem" }}
                  >
                    Register on Zoom
                  </a>

                  <p style={{ fontSize: ".72rem", color: "rgba(255,255,255,.3)", textAlign: "center", marginTop: "1rem" }}>
                    A Zoom link will be sent to your email after registration.
                  </p>
                </div>

                <div style={{ background: "var(--cream2)", border: "1px solid var(--border)", borderTop: "none", padding: "1.5rem" }}>
                  <div style={{ fontSize: ".78rem", color: "var(--ink3)", lineHeight: 1.8 }}>
                    <strong style={{ color: "var(--ink)", display: "block", marginBottom: ".4rem" }}>Can&apos;t make it live?</strong>
                    Register anyway and we will send you the replay for 7 days after the event.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PAST WEBINARS */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Previous Events</span></div>
            <h2 className="section-title reveal" style={{ marginBottom: "3rem" }}>Past <em>topics and sessions</em></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="past-grid">
              {[
                { title: "Still Confused About Artificial Intelligence?", date: "October 2024", desc: "An introduction to AI concepts for complete beginners, demystifying what AI actually is and is not." },
                { title: "Don't Fear the Future: Skill Up for It", date: "September 2024", desc: "A mindset session on embracing change and building the courage to learn new digital skills." },
                { title: "Digital Skills in the Age of AI", date: "August 2024", desc: "Exploring which digital skills remain most valuable as automation and AI change the workforce." },
              ].map((w) => (
                <div key={w.title} className="card reveal">
                  <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: ".75rem" }}>{w.date}</div>
                  <div className="serif" style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".65rem", lineHeight: 1.35 }}>{w.title}</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink3)", lineHeight: 1.85 }}>{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 900px) {
          .web-grid { grid-template-columns: 1fr !important; }
          .past-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
