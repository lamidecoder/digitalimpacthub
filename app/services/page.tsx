import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceRow from "@/components/ServiceRow";

export const metadata = { title: "Services | The Digital Impact Hub" };

const services = [
  { num: "01", title: "Webinars and Masterclasses", desc: "Live online sessions covering AI literacy, digital tools and practical strategies to thrive in the tech era. Our flagship series, Thriving in the Tech Era, has attracted hundreds of learners.", tag: "Online · Free and Paid", features: ["Live Zoom sessions", "Replay access for 7 days", "Resource packs included", "Community follow-up"] },
  { num: "02", title: "AI Skills Training", desc: "Practical AI learning programmes for absolute beginners through to working professionals. Learn to use AI tools for scheduling, data entry, writing, strategy and innovation in your daily work.", tag: "Structured Curriculum", features: ["Hands-on exercises", "Beginner and advanced tracks", "Industry case studies", "Progress certificates"] },
  { num: "03", title: "Growth Community", desc: "A curated digital community where tech learners, creators and professionals connect, collaborate and grow together. Share wins, ask questions and find your next collaborator.", tag: "Always Open", features: ["Private community space", "Weekly challenges", "Peer accountability", "Member spotlights"] },
  { num: "04", title: "Speaking and Events", desc: "Oyinda Lawal is available for speaking engagements, panel discussions, corporate workshops and conference keynotes on AI adoption, digital skills and technology empowerment.", tag: "Book a Session", features: ["Keynote speaking", "Panel participation", "Corporate workshops", "University engagements"] },
  { num: "05", title: "Digital Skills Bootcamps", desc: "Intensive short programmes covering the most in-demand digital skills: content creation, digital marketing, data literacy, email marketing, SEO and more. Project-based from day one.", tag: "Upcoming", features: ["4 to 8 week cohorts", "Project-based learning", "Industry mentors", "Job-ready outcomes"] },
  { num: "06", title: "1 on 1 Coaching", desc: "Personalised coaching sessions with Oyinda to identify your digital strengths, clarify your tech goals and build a step-by-step plan for thriving in a digital-first world.", tag: "Private Sessions", features: ["60-minute sessions", "Custom action plan", "Follow-up support", "Flexible scheduling"] },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />Our Services</div>
          <h1 className="page-banner-title a2">
            Everything you need to <em>thrive in tech</em>
          </h1>
          <p className="page-banner-sub a3">
            From free webinars to private coaching, we have a path for every learner at every stage.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ border: "1px solid var(--border)" }}>
              {services.map((s, i) => (
                <ServiceRow key={s.num} {...s} isLast={i === services.length - 1} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <div className="eyebrow-bar" /><span className="eyebrow-text">How It Works</span><div className="eyebrow-bar" />
              </div>
              <h2 className="section-title reveal">Simple steps to get <em>started</em></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid var(--border)", background: "var(--white)" }} className="steps-grid">
              {[
                { n: "1", t: "Choose a path", d: "Pick the service or programme that fits where you are right now." },
                { n: "2", t: "Register", d: "Sign up via our webinar page or send us a message to get started." },
                { n: "3", t: "Learn and engage", d: "Join live sessions, access resources and connect with the community." },
                { n: "4", t: "Grow and thrive", d: "Apply your new skills and share your progress with the world." },
              ].map((step, i) => (
                <div key={step.n} className="reveal" style={{ padding: "2.5rem 2rem", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                  <div className="serif" style={{ fontSize: "3rem", fontWeight: 300, color: "var(--accent)", lineHeight: 1, marginBottom: "1rem", opacity: 0.35 }}>{step.n}</div>
                  <div className="serif" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".6rem" }}>{step.t}</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink3)", lineHeight: 1.85 }}>{step.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--navy)" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
            <div>
              <h2 className="serif reveal" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "var(--white)", lineHeight: 1.15, marginBottom: ".75rem" }}>
                Ready to get <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>started?</em>
              </h2>
              <p className="reveal" style={{ fontSize: ".95rem", color: "rgba(255,255,255,.5)", maxWidth: 400, lineHeight: 1.85 }}>
                Register for our next free webinar or reach out to discuss the right path for you.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/webinar" className="btn-white">Register for Webinar</Link>
              <Link href="/contact" className="btn-ghost-white">Talk to Us</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .steps-grid > div:last-child { border-bottom: none; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .reveal[style*="grid-template-columns: 80px"] {
            grid-template-columns: 60px 1fr !important;
          }
          .reveal[style*="grid-template-columns: 80px"] > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
