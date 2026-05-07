"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div>
            <div className="eyebrow reveal">
              <div className="eyebrow-bar" />
              <span className="eyebrow-text">Get in Touch</span>
            </div>
            <h2 className="section-title reveal" style={{ marginBottom: "1.4rem" }}>
              Let&apos;s build your<br /><em>digital future</em><br />together
            </h2>
            <p className="section-sub reveal" style={{ maxWidth: 380 }}>
              Whether you want to attend a webinar, partner with us or bring The Digital
              Impact Hub to your organisation, we would love to hear from you.
            </p>

            <div className="contact-links reveal">
              <a href="https://www.instagram.com/digitalimpacthub_" target="_blank" rel="noopener noreferrer" className="c-link">
                <span className="c-icon">&#9651;</span>
                <div>
                  <div className="c-label">Instagram</div>
                  <div className="c-val">@digitalimpacthub_</div>
                </div>
                <span className="c-arrow">&#8594;</span>
              </a>
              <a href="https://us05web.zoom.us/meeting/register" target="_blank" rel="noopener noreferrer" className="c-link">
                <span className="c-icon">&#9633;</span>
                <div>
                  <div className="c-label">Webinar Registration</div>
                  <div className="c-val">Register via Zoom</div>
                </div>
                <span className="c-arrow">&#8594;</span>
              </a>
              <div className="c-link">
                <span className="c-icon">&#9675;</span>
                <div>
                  <div className="c-label">Community</div>
                  <div className="c-val">Join our growing community</div>
                </div>
                <span className="c-arrow">&#8594;</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal">
            <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "1.25rem" }}>
              Send a Message
            </div>

            {sent ? (
              <div style={{ padding: "3rem 2rem", background: "var(--cream)", border: "1px solid var(--border)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontStyle: "italic", color: "var(--accent)", marginBottom: "0.5rem" }}>
                  Message received.
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--ink-3)" }}>We will be in touch soon.</div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="form-input"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="form-input"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    className="form-input"
                    rows={5}
                    style={{ resize: "vertical" }}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
