"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-label a1"><span />Get in Touch</div>
          <h1 className="page-banner-title a2">
            Let&apos;s build your <em>digital future</em> together
          </h1>
          <p className="page-banner-sub a3">
            Whether you want to attend a webinar, partner with us or bring The Digital Impact Hub to your organisation, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <ScrollReveal>
        <section style={{ padding: "8rem 0", background: "var(--white)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="con-grid">

              {/* Left - Info */}
              <div>
                <div className="eyebrow reveal"><div className="eyebrow-bar" /><span className="eyebrow-text">Contact Information</span></div>
                <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
                  We would love to <em>hear from you</em>
                </h2>
                <p className="reveal" style={{ fontSize: "1rem", color: "var(--ink3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
                  We are a small, passionate team and we read every message. Whether you have a question, an idea or just want to say hello, reach out via any of the channels below.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }} className="reveal">
                  {[
                    { icon: "◉", label: "Instagram", value: "@digitalimpacthub_", href: "https://www.instagram.com/digitalimpacthub_" },
                    { icon: "◈", label: "Webinar Registration", value: "Register via Zoom", href: "https://us05web.zoom.us/meeting/register" },
                    { icon: "◎", label: "Community", value: "Join our growing community", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)", transition: "border-color .3s, background .3s", color: "inherit" }}
                      onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.background = "var(--cream)"; }}
                      onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "var(--white)"; }}
                    >
                      <span style={{ fontSize: ".9rem", color: "var(--accent)", width: 16, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: ".64rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: ".15rem" }}>{item.label}</div>
                        <div style={{ fontSize: ".9rem", fontWeight: 600, color: "var(--ink)" }}>{item.value}</div>
                      </div>
                      <span style={{ marginLeft: "auto", color: "var(--ink4)", fontSize: ".85rem" }}>&#8594;</span>
                    </a>
                  ))}
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginTop: "3.5rem" }}>
                  <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1.5rem" }}>Common Questions</div>
                  {[
                    { q: "Are the webinars really free?", a: "Yes. Our webinars are completely free to attend. Some masterclasses and bootcamps are paid." },
                    { q: "Do I need a tech background?", a: "Not at all. Our content is designed for complete beginners through to working professionals." },
                    { q: "How can I partner with you?", a: "Send us a message using the form with the subject set to Partnership and we will get back to you within 48 hours." },
                  ].map((faq, i) => (
                    <div key={i} style={{ padding: "1.25rem 0", borderTop: "1px solid var(--border)" }}>
                      <div style={{ fontSize: ".92rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".4rem" }}>{faq.q}</div>
                      <div style={{ fontSize: ".85rem", color: "var(--ink3)", lineHeight: 1.8 }}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="reveal">
                <div style={{ background: "var(--cream)", padding: "2.5rem", border: "1px solid var(--border)", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--accent),var(--accent2))" }} />

                  {sent ? (
                    <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                        <span style={{ color: "var(--white)", fontSize: "1.4rem" }}>&#10003;</span>
                      </div>
                      <div className="serif" style={{ fontSize: "1.6rem", fontStyle: "italic", color: "var(--accent)", marginBottom: ".5rem" }}>Message received.</div>
                      <div style={{ fontSize: ".9rem", color: "var(--ink3)", lineHeight: 1.8 }}>
                        Thank you for reaching out. We will get back to you within 48 hours.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                      <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: ".25rem" }}>
                        Send Us a Message
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                        <div className="form-group">
                          <label className="form-label">Full Name</label>
                          <input type="text" placeholder="Your name" className="form-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input type="email" placeholder="your@email.com" className="form-input" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <select className="form-input" style={{ cursor: "pointer" }} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                          <option value="">Select a subject</option>
                          <option>Webinar enquiry</option>
                          <option>1 on 1 Coaching</option>
                          <option>Speaking engagement</option>
                          <option>Partnership</option>
                          <option>Something else</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea placeholder="Tell us how we can help you..." className="form-input" rows={5} style={{ resize: "vertical" }} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                      </div>
                      <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "1rem", marginTop: ".25rem" }}>
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BOTTOM CTA */}
      <ScrollReveal>
        <section style={{ padding: "6rem 0", background: "var(--cream2)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>Not sure where to start?</h2>
            <p className="reveal section-sub" style={{ maxWidth: 440, margin: "0 auto 2.5rem" }}>
              Register for our next free webinar and let us show you what is possible.
            </p>
            <Link href="/webinar" className="btn-primary reveal">Register Free for Next Webinar</Link>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 900px) {
          .con-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
