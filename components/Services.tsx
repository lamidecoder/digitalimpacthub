"use client";
import { useEffect, useRef } from "react";

const services = [
  { num: "01", title: "Webinars and Masterclasses", desc: "Live online sessions covering AI literacy, digital tools and strategies to thrive in the tech era. Our flagship: Thriving in the Tech Era.", tag: "Online · Free and Paid" },
  { num: "02", title: "AI Skills Training", desc: "Practical AI learning for beginners and professionals. Learn to use AI for scheduling, data entry, writing, strategy and innovation.", tag: "Structured Curriculum" },
  { num: "03", title: "Growth Community", desc: "A curated digital community where tech learners, creators and professionals connect, collaborate and grow together.", tag: "Always Open" },
  { num: "04", title: "Speaking and Events", desc: "Oyinda Lawal available for speaking engagements, panel discussions and workshops on AI adoption and digital skills.", tag: "Book a Session" },
  { num: "05", title: "Digital Skills Bootcamps", desc: "Intensive short programmes covering content creation, digital marketing, data literacy and other high-demand digital skills.", tag: "Upcoming" },
  { num: "06", title: "1 on 1 Coaching", desc: "Personalised sessions to identify your digital strengths, set goals and build a plan for thriving in a digital-first world.", tag: "Private Sessions" },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 6) * 0.08}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <div className="services-header">
          <div>
            <div className="eyebrow reveal">
              <div className="eyebrow-bar" />
              <span className="eyebrow-text">What We Offer</span>
            </div>
            <h2 className="section-title reveal">
              How we help<br />you <em>grow</em>
            </h2>
          </div>
          <p className="services-sub reveal">
            From online masterclasses to personalised coaching, everything we do is
            designed to create real, lasting impact.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card reveal">
              <div className="service-num">{s.num}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tag">{s.tag}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
          <a href="#webinar" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "0.85rem" }}>
            Register for Upcoming Webinar
          </a>
        </div>
      </div>
    </section>
  );
}
