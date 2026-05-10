import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "About | Digital Impact Hub" };

const differentiators = [
  { title: "Community-Focused", desc: "We believe digital learning should be accessible, inclusive, and relatable." },
  { title: "Practical Learning", desc: "Our workshops are designed to be engaging, beginner-friendly, and applicable to real life." },
  { title: "Future-Focused", desc: "We help communities understand emerging technologies and prepare for the future digital economy." },
  { title: "Empowerment Through Technology", desc: "We use technology as a tool to build confidence, opportunity, and growth." },
];

const mission = ["Digital Skills", "AI Awareness", "Technology Education", "Employability Support", "Community Learning", "Digital Confidence"];

const whoWeWork = ["Councils & Local Authorities", "Schools & Colleges", "Libraries & Community Centres", "Youth Organisations", "Women's Groups", "Charities & CICs", "Small Businesses", "Individuals Seeking Digital Confidence"];

export default function AboutPage() {
  return (
    <main>
      {/* BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />About Us</div>
          <h1 className="page-banner-title a2">
            Bridging the Digital Skills Gap Through <em>Community, Education & Innovation</em>
          </h1>
          <p className="page-banner-sub a3">
            Digital Impact Hub exists to help individuals and communities confidently navigate today&apos;s digital world through accessible learning, digital skills, and AI awareness.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Our Mission</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  We Are On A Mission To <em>Bridge The Gap</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                  The Digital Impact Hub was created because too many individuals and communities are being left behind in the digital revolution.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "1.75rem" }}>
                  As technology continues to shape the future of work, education, and everyday life, we believe everyone deserves the opportunity to understand, access, and benefit from digital tools and innovation.
                </p>
                <div className="reveal" style={{ marginBottom: "2rem" }}>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1rem" }}>Our mission is to empower people through:</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6rem" }}>
                    {mission.map((m) => (
                      <div key={m} style={{ display: "flex", alignItems: "center", gap: ".65rem", padding: ".75rem 1rem", background: "var(--cream)", border: "1px solid var(--border)" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                        <span style={{ fontSize: ".88rem", fontWeight: 600, color: "var(--ink2)" }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="reveal" style={{ fontSize: ".95rem", color: "var(--ink3)", lineHeight: 1.9 }}>
                  We are passionate about making technology more accessible, inclusive, and empowering for all.
                </p>
              </div>
              <div className="reveal" style={{ position: "relative" }}>
                <img
                  src="/community.jpg"
                  alt="Digital Impact Hub community learners"
                  style={{ width: "100%", height: "560px", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
                <div style={{ position: "absolute", bottom: "2rem", left: "-1.5rem", background: "var(--accent)", padding: "1.5rem 2rem" }}>
                  <div className="serif" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--white)", lineHeight: 1 }}>1K+</div>
                  <div style={{ fontSize: ".7rem", fontWeight: 600, color: "rgba(255,255,255,.85)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: ".3rem" }}>Learners impacted</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FOUNDER */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div className="about-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div className="reveal" style={{ position: "relative" }}>
                <Image src="/oyinda.jpg" alt="Oyinda Lawal" width={560} height={640} style={{ width: "100%", height: "580px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                <div style={{ position: "absolute", top: "2rem", right: "-1.5rem", background: "var(--navy)", padding: "1.5rem 2rem" }}>
                  <div className="serif" style={{ fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,.6)", letterSpacing: ".04em" }}>Founder &amp; Visionary</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginTop: ".25rem" }}>Oyinda Lawal</div>
                </div>
              </div>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Meet The Founder</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  Oyinda Lawal, <em>Founder & Visionary</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  Oyinda is a technology professional and community-driven entrepreneur passionate about helping people confidently navigate the digital world.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  With a background in digital transformation and years of experience working within the tech industry, she founded Digital Impact Hub to create accessible learning experiences that empower individuals, young people, and communities through digital skills and AI awareness.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "1.25rem" }}>
                  Known for her warm and practical teaching style, she combines real-world insight with a human-first approach that makes technology feel less intimidating and more empowering.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95, marginBottom: "2rem" }}>
                  Her vision is to bridge the gap between technology and everyday people by creating engaging, practical, and inspiring learning opportunities that prepare communities for the future.
                </p>
                <div className="reveal" style={{ padding: "1.75rem", background: "var(--white)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)" }}>
                  <p className="serif" style={{ fontSize: "1.3rem", fontStyle: "italic", fontWeight: 500, lineHeight: 1.6, color: "var(--ink)" }}>
                    &ldquo;Everyone&apos;s talking about AI but few are thriving with it. Let&apos;s change that.&rdquo;
                  </p>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--accent)", marginTop: ".75rem" }}>Oyinda Lawal</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHAT MAKES US DIFFERENT */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}><div className="eyebrow-bar" /><span className="eyebrow-text">What Makes Us Different</span><div className="eyebrow-bar" /></div>
              <h2 className="section-title reveal">What Makes Us <em>Different</em></h2>
            </div>
            <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" }}>
              {differentiators.map((d, i) => (
                <div key={d.title} className="card reveal">
                  <div className="card-accent-bar" />
                  <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>0{i + 1}</div>
                  <div className="serif" style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".65rem" }}>{d.title}</div>
                  <div style={{ fontSize: ".92rem", color: "var(--ink3)", lineHeight: 1.85 }}>{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHO WE SUPPORT */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--navy)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: 28, height: 2, background: "var(--accent2)" }} />
                  <span style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent2)" }}>Who We Support</span>
                </div>
                <h2 className="serif reveal" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 600, lineHeight: 1.1, color: "var(--white)", marginBottom: "1.5rem" }}>
                  We collaborate with <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>communities everywhere</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "rgba(255,255,255,.55)", lineHeight: 1.9 }}>
                  We work with a wide range of organisations and individuals who share our commitment to digital inclusion and community empowerment.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".65rem" }} className="reveal">
                {whoWeWork.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: ".85rem", padding: "1rem 1.25rem", border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.04)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent2)", flexShrink: 0 }} />
                    <span style={{ fontSize: ".9rem", color: "rgba(255,255,255,.75)", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* VISION */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream2)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}><div className="eyebrow-bar" /><span className="eyebrow-text">Our Vision</span><div className="eyebrow-bar" /></div>
            <h2 className="section-title reveal" style={{ maxWidth: 700, margin: "0 auto 1.5rem" }}>
              To create a future where communities are <em>empowered, informed, and confident</em> in the digital age
            </h2>
            <p className="reveal section-sub" style={{ maxWidth: 520, margin: "0 auto 3rem" }}>
              We envision a world where no one is left behind by the digital revolution, where technology is a tool for opportunity, not exclusion.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>Let&apos;s Create <em>Digital Impact Together</em></h2>
            <p className="reveal section-sub" style={{ maxWidth: 500, margin: "0 auto 2.5rem" }}>
              Whether you are looking to organise workshops, support residents, empower young people, or collaborate on community initiatives, we would love to hear from you.
            </p>
            <div className="banner-ctas reveal" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/webinar" className="btn-secondary">Join a Webinar</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}