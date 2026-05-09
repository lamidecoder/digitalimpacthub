import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceRow from "@/components/ServiceRow";

export const metadata = { title: "Services | Digital Impact Hub" };

const services = [
  {
    num: "01", title: "Webinars & Masterclasses", tag: "Online · Free & Paid",
    desc: "Live online sessions covering digital skills, AI awareness, employability, and practical strategies for thriving in the digital age.",
    features: ["Live Zoom sessions", "Replay access", "Resource packs", "Interactive Q&A", "Community follow-up"],
  },
  {
    num: "02", title: "AI Skills Training", tag: "Structured Learning Programmes",
    desc: "Practical AI learning designed to help individuals and organisations confidently understand and use AI tools in everyday life and work.",
    features: ["Beginner-friendly learning", "Hands-on exercises", "Real-world applications", "Industry case studies", "Progress certificates"],
  },
  {
    num: "03", title: "Community Learning Programmes", tag: "Digital Inclusion & Confidence",
    desc: "Interactive programmes designed to support residents and communities with digital confidence, online skills, and technology awareness.",
    features: ["Beginner digital skills", "Online confidence", "Internet safety awareness", "Practical digital support", "Community-focused learning"],
  },
  {
    num: "04", title: "Workshops & Speaking Engagements", tag: "In-Person & Virtual",
    desc: "Interactive and engaging sessions designed to educate, inspire, and empower individuals and communities in today's digital world.",
    features: ["Conferences & Panels", "Schools & Colleges", "Councils & Community", "Youth Engagement", "Corporate Learning"],
  },
  {
    num: "05", title: "Digital Skills Bootcamps", tag: "Intensive Learning Experiences",
    desc: "Short programmes focused on helping learners develop practical, future-focused digital skills through project-based learning.",
    features: ["Cohort learning", "Hands-on projects", "Industry guidance", "Accountability support", "Real-world skill building"],
  },
  {
    num: "06", title: "Growth Community", tag: "Learn · Connect · Grow",
    desc: "A supportive digital community where learners, creators, and professionals can connect, collaborate, and grow together.",
    features: ["Community discussions", "Weekly challenges", "Networking opportunities", "Accountability support", "Learning resources"],
  },
];

const steps = [
  { n: "1", t: "Choose Your Path", d: "Select the workshop, programme, or learning experience that best fits your goals." },
  { n: "2", t: "Register Or Enquire", d: "Sign up for a session or contact us to discuss partnership opportunities." },
  { n: "3", t: "Learn & Engage", d: "Participate in interactive sessions, access resources, and connect with the community." },
  { n: "4", t: "Grow With Confidence", d: "Apply your new skills and continue building confidence in the digital world." },
];

const testimonials = [
  { text: "Engaging, empowering, and beginner-friendly.", author: "Community Attendee" },
  { text: "A valuable introduction to digital skills and AI.", author: "Workshop Participant" },
  { text: "Practical learning delivered in a relatable and inspiring way.", author: "Programme Graduate" },
];

const partnerTypes = ["Resident Programmes", "School Workshops", "Community Events", "Youth Engagement Sessions", "Digital Inclusion Initiatives", "Corporate Learning Workshops", "Speaking Engagements"];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />Our Services</div>
          <h1 className="page-banner-title a2">
            Empowering Individuals To <em>Thrive In A Digital World</em>
          </h1>
          <p className="page-banner-sub a3">
            Accessible digital skills, AI awareness, community learning, and technology education designed to help individuals and organisations confidently navigate the future.
          </p>
          <div className="a4 banner-ctas" style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <Link href="/webinar" className="btn-white">Register for a Webinar</Link>
            <Link href="/contact" className="btn-outline-white">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <ScrollReveal>
        <section style={{ padding: "6rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Our Services</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>What We <em>Deliver</em></h2>
              </div>
              <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.95 }}>
                At Digital Impact Hub, we provide engaging digital learning experiences that help individuals, communities, and organisations build confidence, skills, and opportunities in today&apos;s digital world. Whether through webinars, workshops, speaking engagements, or community programmes, our mission is to make technology and AI more accessible, practical, and empowering for everyone.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICES LIST */}
      <ScrollReveal>
        <section style={{ padding: "5rem 0 8rem", background: "var(--white)" }}>
          <div className="container">
            <div style={{ border: "1px solid var(--border)" }}>
              {services.map((s, i) => (
                <ServiceRow key={s.num} {...s} isLast={i === services.length - 1} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ORGANISATIONS / PARTNERS */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream2)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Partnerships & Community Delivery</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>Working With <em>Organisations</em></h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                  We collaborate with councils, schools, libraries, charities, businesses, and community organisations to deliver engaging digital learning experiences tailored to different audiences and community needs.
                </p>
                <div className="banner-ctas reveal" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary">Partner With Us</Link>
                  <Link href="/contact" className="btn-secondary">Book a Discovery Call</Link>
                </div>
              </div>
              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: ".65rem" }}>
                {partnerTypes.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "center", gap: ".85rem", padding: "1rem 1.25rem", border: "1px solid var(--border)", background: "var(--white)", transition: "all .3s" }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: ".92rem", fontWeight: 600, color: "var(--ink2)" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOW IT WORKS */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}><div className="eyebrow-bar" /><span className="eyebrow-text">How It Works</span><div className="eyebrow-bar" /></div>
              <h2 className="section-title reveal">Simple Steps To Get <em>Started</em></h2>
            </div>
            <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid var(--border)", background: "var(--white)" }}>
              {steps.map((s, i) => (
                <div key={s.n} className="reveal" style={{ padding: "2.5rem 2rem", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                  <div className="serif" style={{ fontSize: "3rem", fontWeight: 300, color: "var(--accent)", lineHeight: 1, marginBottom: "1rem", opacity: 0.35 }}>{s.n}</div>
                  <div className="serif" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".6rem" }}>{s.t}</div>
                  <div style={{ fontSize: ".88rem", color: "var(--ink3)", lineHeight: 1.85 }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}><div className="eyebrow-bar" /><span className="eyebrow-text">Community Impact</span><div className="eyebrow-bar" /></div>
              <h2 className="section-title reveal">What Our Community <em>Says</em></h2>
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

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--navy)" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
            <div>
              <h2 className="serif reveal" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "var(--white)", lineHeight: 1.15, marginBottom: ".75rem" }}>
                Ready To Make A <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>Digital Impact?</em>
              </h2>
              <p className="reveal" style={{ fontSize: ".95rem", color: "rgba(255,255,255,.5)", maxWidth: 400, lineHeight: 1.85 }}>
                Whether you are looking to build digital confidence, organise workshops, empower communities, or collaborate on meaningful initiatives.
              </p>
            </div>
            <div className="banner-ctas reveal" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/contact" className="btn-white">Book a Discovery Call</Link>
              <Link href="/webinar" className="btn-outline-white">Register for a Webinar</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}