"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 5) * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left - Text */}
          <div>
            <div className="eyebrow reveal">
              <div className="eyebrow-bar" />
              <span className="eyebrow-text">About Us</span>
            </div>

            <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
              Bridging the gap in<br /><em>digital confidence</em><br />across Africa
            </h2>

            <p className="about-p reveal">
              The Digital Impact Hub is a forward-thinking tech education community
              founded by Oyinda Lawal. We believe understanding and working with
              technology, especially AI, is no longer optional.
            </p>
            <p className="about-p reveal">
              Through webinars, workshops and a growing digital community, we equip
              individuals with the mindset and skills to stay ahead in the age of
              artificial intelligence.
            </p>
            <p className="about-p reveal">
              Everyone is talking about AI but few are truly thriving with it.
              That is exactly what we are here to change.
            </p>

            <div className="about-ctas reveal">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a
                href="https://www.instagram.com/digitalimpacthub_"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Right - Quote + stats */}
          <div>
            <div className="quote-card reveal">
              <div className="quote-top-bar" />
              <p className="quote-text">
                &ldquo;Everyone&apos;s talking about AI but few are thriving with it.
                Let&apos;s change that.&rdquo;
              </p>
              <div className="quote-attr">
                <div className="quote-avatar">
                  <Image
                    src="/oyinda.jpg"
                    alt="Oyinda Lawal"
                    width={46}
                    height={46}
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <div>
                  <div className="quote-name">Oyinda Lawal</div>
                  <div className="quote-role">Founder, The Digital Impact Hub</div>
                </div>
              </div>
            </div>

            <div className="about-stats reveal">
              <div className="about-stat">
                <div className="about-stat-n">2K+</div>
                <div className="about-stat-l">Members</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-n">10+</div>
                <div className="about-stat-l">Webinars</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-n">100%</div>
                <div className="about-stat-l">Free to start</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
