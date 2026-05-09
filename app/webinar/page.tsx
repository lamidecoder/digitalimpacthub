import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import VideoPlayer from "@/components/VideoPlayer";

export const metadata = { title: "Webinars | Digital Impact Hub" };

const learnings = [
  "AI & The Future of Work",
  "Digital Skills That Matter",
  "Careers & Opportunities in Tech",
  "Building Confidence in a Digital World",
  "Practical Tools & Resources",
];

const format = ["Live Zoom Session", "Interactive Q&A", "Resource Pack Included", "Beginner Friendly"];

const whoItsFor = ["Young People", "Career Transitioners", "Community Members", "Small Business Owners", "Parents", "Professionals", "Anyone Interested in Digital Skills & AI"];

const whyAttend = [
  { title: "Beginner Friendly", desc: "Accessible learning designed for all levels." },
  { title: "Practical & Engaging", desc: "Real-world insights and interactive learning." },
  { title: "Community Focused", desc: "Learn alongside others in a supportive environment." },
  { title: "Future Focused", desc: "Understand the skills and technologies shaping tomorrow." },
];

/*
 * ─── YOUR WEBINAR VIDEOS ───
 * Place your MP4 files in: public/videos/
 *
 *   public/videos/session-1.mp4  ← first webinar recording
 *   public/videos/session-2.mp4  ← second webinar recording
 *   public/videos/session-3.mp4  ← third webinar recording
 *
 * Optional thumbnails (JPG preview image before play):
 *   public/videos/thumb-1.jpg
 *   public/videos/thumb-2.jpg
 *   public/videos/thumb-3.jpg
 *
 * To use YouTube instead, replace src with:
 *   youtubeEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
 */
const videos = [
  {
    id: "v1",
    title: "Thriving in the Tech Era: AI & The Future of Work",
    desc: "Oyinda Lawal introduces practical AI strategies for navigating the changing world of work.",
    src: "/videos/session-1.mp4",
    thumb: "/videos/thumb-1.jpg",
    duration: "Session 1",
  },
  {
    id: "v2",
    title: "Digital Confidence for Everyday Life",
    desc: "A beginner-friendly session on using technology safely and confidently in daily life.",
    src: "/videos/session-2.mp4",
    thumb: "/videos/thumb-2.jpg",
    duration: "Session 2",
  },
  {
    id: "v3",
    title: "Future Skills & Career Growth",
    desc: "Exploring the digital tools and mindsets needed to grow your career in a digital economy.",
    src: "/videos/session-3.mp4",
    thumb: "/videos/thumb-3.jpg",
    duration: "Session 3",
  },
];

export default function WebinarPage() {
  return (
    <main>
      {/* BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />Webinars & Learning Sessions</div>
          <h1 className="page-banner-title a2">
            Learn, Grow & Thrive In The <em>Digital Age</em>
          </h1>
          <p className="page-banner-sub a3">
            Join our live webinars and interactive learning sessions focused on digital skills, AI awareness, employability, and future-ready learning.
          </p>
          <div className="a4 banner-ctas" style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <a href="https://us05web.zoom.us/meeting/register" target="_blank" rel="noopener noreferrer" className="btn-white">Register Now</a>
            <Link href="/contact" className="btn-outline-white">Get Reminded</Link>
          </div>
        </div>
      </section>

      {/* FEATURED WEBINAR */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div className="web-grid" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "5rem", alignItems: "start" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Featured Webinar</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>
                  Thriving in the <em>Tech Era</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9, marginBottom: "2rem" }}>
                  Helping individuals confidently navigate AI, digital skills, and the future of work. No technical background required. This is for professionals, entrepreneurs, students, and anyone who wants to stay ahead.
                </p>

                <div className="two-col reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", borderTop: "1px solid var(--border)", paddingTop: "2rem", marginBottom: "2rem" }}>
                  <div>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1rem" }}>What You&apos;ll Learn</div>
                    {learnings.map((l) => (
                      <div key={l} style={{ display: "flex", alignItems: "flex-start", gap: ".65rem", marginBottom: ".6rem" }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", border: "1.5px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: ".2rem" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
                        </div>
                        <span style={{ fontSize: ".9rem", color: "var(--ink2)", lineHeight: 1.6 }}>{l}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1rem" }}>Format</div>
                    {format.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: ".65rem", marginBottom: ".6rem" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                        <span style={{ fontSize: ".9rem", color: "var(--ink2)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Host */}
                <div className="reveal" style={{ background: "var(--cream)", padding: "1.75rem", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--border)" }}>
                    <Image src="/oyinda.jpg" alt="Oyinda Lawal" width={64} height={64} style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: ".25rem" }}>Hosted By</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>Oyinda Lawal</div>
                    <div style={{ fontSize: ".8rem", color: "var(--accent)", fontWeight: 600 }}>Founder, Digital Impact Hub</div>
                    <div style={{ fontSize: ".8rem", color: "var(--ink3)", marginTop: ".2rem" }}>Digital skills educator, community builder and AI literacy advocate.</div>
                  </div>
                </div>
              </div>

              {/* Sticky register card */}
              <div className="web-sidebar" style={{ position: "sticky", top: "7rem" }}>
                <div style={{ background: "var(--navy)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--accent),var(--accent2))" }} />
                  <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "1.25rem" }}>Register Now · Free</div>
                  <h3 className="serif" style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--white)", lineHeight: 1.2, marginBottom: "1.5rem" }}>Secure your<br />spot today</h3>
                  {[{ l: "Platform", v: "Zoom" }, { l: "Cost", v: "100% Free" }, { l: "Level", v: "All levels welcome" }].map((d) => (
                    <div key={d.l} style={{ display: "flex", justifyContent: "space-between", padding: ".65rem 0", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                      <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.45)", fontWeight: 600 }}>{d.l}</span>
                      <span style={{ fontSize: ".78rem", color: "var(--white)", fontWeight: 500 }}>{d.v}</span>
                    </div>
                  ))}
                  <a href="https://us05web.zoom.us/meeting/register" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ width: "100%", marginTop: "2rem" }}>Register on Zoom</a>
                  <p style={{ fontSize: ".72rem", color: "rgba(255,255,255,.3)", textAlign: "center", marginTop: "1rem" }}>A Zoom link will be sent after registration.</p>
                </div>
                <div style={{ background: "var(--cream2)", border: "1px solid var(--border)", borderTop: "none", padding: "1.5rem" }}>
                  <p style={{ fontSize: ".82rem", color: "var(--ink3)", lineHeight: 1.8 }}>
                    <strong style={{ color: "var(--ink)", display: "block", marginBottom: ".3rem" }}>Can&apos;t make it live?</strong>
                    Register and receive the replay for 7 days after the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* VIDEO SESSIONS */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ marginBottom: "3.5rem" }}>
              <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Watch & Learn</span></div>
              <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>Previous <em>Teaching Sessions</em></h2>
              <p className="reveal section-sub" style={{ maxWidth: 520 }}>
                Watch recordings from our past webinars and learning sessions. Pause, play, and learn at your own pace.
              </p>
            </div>
            <div className="video-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {videos.map((v) => (
                <VideoPlayer key={v.id} {...v} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY ATTEND */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="eyebrow reveal" style={{ justifyContent: "center" }}><div className="eyebrow-bar" /><span className="eyebrow-text">Why Attend</span><div className="eyebrow-bar" /></div>
              <h2 className="section-title reveal">Why Attend Our <em>Sessions?</em></h2>
            </div>
            <div className="focus-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
              {whyAttend.map((w) => (
                <div key={w.title} className="focus-card reveal">
                  <div className="focus-title">{w.title}</div>
                  <div className="focus-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHO IT'S FOR */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--cream2)" }}>
          <div className="container">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Who It&apos;s For</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>Our webinars are for <em>everyone</em></h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink2)", lineHeight: 1.9 }}>
                  Whether you are just starting out or looking to upskill, our sessions are designed to be welcoming, practical, and empowering for all backgrounds.
                </p>
              </div>
              <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
                {whoItsFor.map((w) => (
                  <div key={w} style={{ display: "flex", alignItems: "center", gap: ".65rem", padding: "1rem 1.1rem", border: "1px solid var(--border)", background: "var(--white)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: ".88rem", fontWeight: 600, color: "var(--ink2)" }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <ScrollReveal>
        <section style={{ padding: "7rem 0", background: "var(--navy)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="serif reveal" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 600, color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>
              Ready To <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>Join Us?</em>
            </h2>
            <p className="reveal" style={{ fontSize: "1rem", color: "rgba(255,255,255,.55)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.85 }}>
              Register for an upcoming webinar and start building confidence for the digital future.
            </p>
            <div className="banner-ctas reveal" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://us05web.zoom.us/meeting/register" target="_blank" rel="noopener noreferrer" className="btn-white">Register Now</a>
              <Link href="/contact" className="btn-outline-white">Get Reminded</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}