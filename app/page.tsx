import Link from "next/link";
import Image from "next/image";
import Ticker from "@/components/Ticker";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Digital Impact Hub | Empowering Communities With Digital Confidence",
  description: "Digital Impact Hub helps individuals, communities, and organisations build confidence in technology through practical workshops, webinars, and digital learning experiences.",
};

const focusAreas = [
  { icon: "💻", title: "Digital Confidence", desc: "Helping individuals feel more confident using technology in everyday life, work, and learning." },
  { icon: "🤖", title: "AI Awareness & Practical AI Skills", desc: "Introducing communities to AI tools, trends, and practical ways AI can support productivity, creativity, and future careers." },
  { icon: "🚀", title: "Future Skills & Career Growth", desc: "Supporting career transitioners, students, and professionals with digital and employability-focused skills for the future workforce." },
  { icon: "🌍", title: "Community Learning & Empowerment", desc: "Delivering inclusive workshops and webinars designed to educate, inspire, and create positive digital impact within communities." },
];

const workshops = [
  { title: "Thriving In The Age Of AI", desc: "Understanding AI, future careers, and how to adapt confidently in a changing digital world." },
  { title: "Digital Confidence For Everyday Life", desc: "Practical support for navigating technology, online tools, communication platforms, and digital safety." },
  { title: "Future Skills For Career Growth", desc: "Exploring digital tools, AI platforms, personal branding, and employability skills for career development." },
  { title: "Women, Confidence & Technology", desc: "Encouraging women to build confidence in technology, personal growth, and digital opportunities." },
];

const whyPoints = [
  { title: "Community-Focused", desc: "We believe digital education should be inclusive, accessible, and empowering." },
  { title: "Beginner-Friendly", desc: "We simplify technology and AI in ways that are practical and easy to understand." },
  { title: "Real-World Learning", desc: "Our sessions focus on practical skills, confidence-building, and future opportunities." },
  { title: "Flexible Delivery", desc: "Available for virtual sessions, webinars, community programmes, and in-person workshops." },
];

const testimonials = [
  { text: "Digital Impact Hub delivered an engaging and inspiring session that helped attendees feel more confident about technology and AI.", author: "Rachel Williams" },
  { text: "An accessible and empowering approach to digital learning.", author: "Dorcas Oyenride" },
  { text: "Practical, engaging, and community-focused.", author: "Mary Boateng" },
];

const partners = [
  "Councils", "Schools & Colleges", "Libraries", "Community Organisations",
  "Nonprofits & Charities", "Workforce Development Programmes", "Corporate & Social Impact Teams",
];

export default function Home() {
  return (
    <main>
      {/* ── HERO — exactly like financemattersuk ── */}
      <section className="hero-fullscreen">
        {/*
          VIDEO BACKGROUND — Black people learning technology in a classroom/workshop.
          Source: Pexels free stock video (no attribution required).
          These URLs work in browsers — Pexels blocks server-side requests but serves fine to browsers.
          If you want to guarantee it always plays, download one of these videos from pexels.com
          and place it at /public/videos/hero.mp4 then change the src to "/videos/hero.mp4"

          Recommended downloads:
          - https://www.pexels.com/video/students-sitting-inside-the-classroom-8419341/
          - https://www.pexels.com/video/people-in-a-classroom-7773882/
        */}
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-content">
          {/* Line 1 — bold sans-serif, same as "Build your financial future" */}
          <h1 className="a1 hero-h1-top">
            Empowering communities
          </h1>
          {/* Line 2 — italic serif in accent colour, same as "with confidence" */}
          <h1 className="a2 hero-h1-italic">
            <em>with digital confidence</em>
          </h1>

          {/* Sub — short, same weight as financemattersuk */}
          <p className="a3 hero-sub">
            Practical workshops, webinars and digital learning experiences
            for individuals, communities and organisations.
          </p>

          {/* ONE button — rounded, white pill — same as "EXPLORE SERVICES" */}
          <div className="a4" style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/services" className="btn-hero-pill">
              EXPLORE OUR WORKSHOPS
            </Link>
          </div>

          {/* Divider + stats — exactly like financemattersuk */}
          <div className="a5 hero-stats">
            <div className="hero-stats-line" />
            <div className="hero-stats-row">
              {[
                { n: "1K+", l: "Community members" },
                { n: "10+", l: "Events hosted" },
                { n: "100%", l: "Beginner friendly" },
              ].map((s) => (
                <div key={s.n} className="hero-stat">
                  <div className="hero-stat-n">{s.n}</div>
                  <div className="hero-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ── INTRO ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div className="eyebrow reveal">
                  <div className="eyebrow-bar" /><span className="eyebrow-text">Who We Are</span>
                </div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  Building Confidence In A <em>Digital World</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                  At Digital Impact Hub, our mission is to bridge the digital skills gap by helping individuals and communities understand, adopt, and thrive in the digital age.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                  Through engaging workshops, webinars, and community learning initiatives, we support people in building confidence with technology, exploring AI tools, developing future-ready skills, and navigating career opportunities in an increasingly digital world.
                </p>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                  We believe technology should feel accessible, empowering, and practical for everyone.
                </p>
                <div className="reveal" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/about" className="btn-primary">Meet The Founder</Link>
                  <Link href="/services" className="btn-secondary">Our Services</Link>
                </div>
              </div>
              <div className="reveal">
                <div className="card" style={{ padding: "2.5rem" }}>
                  <div className="card-accent-bar" />
                  <p className="serif" style={{ fontSize: "1.5rem", fontStyle: "italic", fontWeight: 500, lineHeight: 1.65, color: "var(--ink)", marginBottom: "2rem" }}>
                    &ldquo;Everyone&apos;s talking about AI but few are thriving with it. Let&apos;s change that.&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--border)" }}>
                      <Image src="/oyinda.jpg" alt="Oyinda Lawal" width={48} height={48} style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: ".92rem", fontWeight: 700, color: "var(--ink)" }}>Oyinda Lawal</div>
                      <div style={{ fontSize: ".75rem", color: "var(--accent)", fontWeight: 600 }}>Founder, Digital Impact Hub</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid var(--border)", background: "var(--cream)", marginTop: "1.5rem" }}>
                  {[{ n: "1K+", l: "Members" }, { n: "10+", l: "Webinars" }, { n: "100%", l: "Free to start" }].map((s, i) => (
                    <div key={s.n} style={{ padding: "1.4rem 1rem", borderRight: i < 2 ? "1px solid var(--border)" : "none", textAlign: "center" }}>
                      <div className="serif" style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: ".65rem", fontWeight: 700, color: "var(--ink4)", textTransform: "uppercase", letterSpacing: ".07em", marginTop: ".3rem" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FOCUS AREAS ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <div className="eyebrow-bar" /><span className="eyebrow-text">Our Focus Areas</span><div className="eyebrow-bar" />
              </div>
              <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>What <em>We Do</em></h2>
              <p className="reveal section-sub" style={{ maxWidth: 520, margin: "0 auto" }}>
                Everything we do is designed to build confidence, create opportunity, and make technology feel accessible for everyone.
              </p>
            </div>
            <div className="focus-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
              {focusAreas.map((f) => (
                <div key={f.title} className="focus-card reveal">
                  <div className="focus-icon">{f.icon}</div>
                  <div className="focus-title">{f.title}</div>
                  <div className="focus-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── WHO WE SUPPORT ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Who We Support</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  We work with <em>communities</em> across the UK
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                  From individuals taking their first steps online to organisations looking to upskill their teams, we partner with communities at every level to create meaningful digital impact.
                </p>
                <ul className="support-list reveal">
                  {["Individuals seeking digital confidence", "Career transitioners exploring new opportunities", "Young people preparing for the future workforce", "Schools, colleges, and universities", "Local Councils and community organisations", "Libraries and digital inclusion initiatives", "Businesses and workforce development programmes"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="reveal" style={{ position: "relative" }}>
                <Image src="/oyinda.jpg" alt="Oyinda Lawal, Founder of Digital Impact Hub" width={580} height={520} style={{ width: "100%", height: "520px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                <div style={{ position: "absolute", bottom: "2rem", right: "-1rem", background: "var(--accent)", padding: "1.4rem 1.75rem" }}>
                  <div className="serif" style={{ fontSize: "1.8rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>1K+</div>
                  <div style={{ fontSize: ".7rem", fontWeight: 600, color: "rgba(255,255,255,.85)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: ".25rem" }}>Lives impacted</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── POPULAR WORKSHOPS ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream2)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Featured Workshops</span></div>
                <h2 className="section-title reveal">Popular <em>Workshops</em></h2>
              </div>
              <Link href="/services" className="btn-secondary reveal">View All Services</Link>
            </div>
            <div className="workshops-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" }}>
              {workshops.map((w, i) => (
                <div key={w.title} className="workshop-card reveal">
                  <div style={{ height: 4, background: i % 2 === 0 ? "var(--accent)" : "var(--navy)" }} />
                  <div className="workshop-card-body">
                    <div className="workshop-num">0{i + 1}</div>
                    <div className="workshop-title">{w.title}</div>
                    <div className="workshop-desc">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── WHY DIH ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <div className="eyebrow-bar" /><span className="eyebrow-text">Why Choose Us</span><div className="eyebrow-bar" />
              </div>
              <h2 className="section-title reveal">Why <em>Digital Impact Hub?</em></h2>
            </div>
            <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid var(--border)" }}>
              {whyPoints.map((w, i) => (
                <div key={w.title} className="why-card reveal" style={{ borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                  <div className="why-num">0{i + 1}</div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PARTNER SECTION ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--navy)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: 28, height: 2, background: "var(--accent2)", flexShrink: 0 }} />
                  <span style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent2)" }}>Partner With Us</span>
                </div>
                <h2 className="serif reveal" style={{ fontSize: "clamp(2rem,3.8vw,3.2rem)", fontWeight: 600, lineHeight: 1.12, color: "#fff", marginBottom: "1.5rem" }}>
                  We are passionate about <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>collaborating</em> with organisations
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "rgba(255,255,255,.6)", lineHeight: 1.9, marginBottom: "2rem" }}>
                  Together, we can create meaningful digital impact and help communities thrive in the digital age.
                </p>
                <div className="banner-ctas reveal" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-white">Partner With Us</Link>
                  <Link href="/contact" className="btn-outline-white">Book a Discovery Call</Link>
                </div>
              </div>
              <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".85rem" }}>
                {partners.map((p) => (
                  <div key={p} style={{ padding: "1rem 1.25rem", border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.04)", display: "flex", alignItems: "center", gap: ".65rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent2)", flexShrink: 0 }} />
                    <span style={{ fontSize: ".88rem", color: "rgba(255,255,255,.75)", fontWeight: 500 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── TESTIMONIALS ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <div className="eyebrow-bar" /><span className="eyebrow-text">Community Impact</span><div className="eyebrow-bar" />
              </div>
              <h2 className="section-title reveal">What people <em>say about us</em></h2>
            </div>
            <div className="testimonial-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
              {testimonials.map((t) => (
                <div key={t.author} className="testimonial-card reveal">
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">{t.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FINAL CTA ── */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              <div className="eyebrow-bar" /><span className="eyebrow-text">Get Started</span><div className="eyebrow-bar" />
            </div>
            <h2 className="section-title reveal" style={{ marginBottom: "1.25rem" }}>
              Ready To Make <em>Digital Impact?</em>
            </h2>
            <p className="reveal section-sub" style={{ maxWidth: 560, margin: "0 auto 2.5rem" }}>
              Whether you are looking to organise a workshop, support residents, empower young people, or collaborate on community initiatives, we would love to hear from you.
            </p>
            <div className="banner-ctas reveal" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/contact" className="btn-secondary">Book a Discovery Call</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}