"use client";
import { useEffect, useRef } from "react";

export default function Webinar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="webinar" className="webinar-section" ref={ref}>
      <div className="container">
        <div className="webinar-box reveal">
          {/* Left */}
          <div className="webinar-left">
            <div className="w-date">Upcoming · 18 October 2025 · 11:00am to 11:45am</div>
            <h3 className="w-title">
              Thriving in the Tech Era:<br />
              <em>How to Stay Ahead in the Age of AI</em>
            </h3>
            <p className="w-body">
              A practical guide to growth in the age of artificial intelligence.
              Featuring Oyinda Lawal, Founder of The Digital Impact Hub.
            </p>
            <div className="w-features">
              <div className="w-feat-item">
                <div className="w-feat-dot" />
                <span>Live session on Zoom, register via the link in bio</span>
              </div>
              <div className="w-feat-item">
                <div className="w-feat-dot" />
                <span>Free to attend, limited spots available</span>
              </div>
              <div className="w-feat-item">
                <div className="w-feat-dot" />
                <span>Interactive Q and A session included</span>
              </div>
              <div className="w-feat-item">
                <div className="w-feat-dot" />
                <span>Certificate of participation on request</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="webinar-right">
            <div className="w-date">Register Now</div>
            <h3 className="w-right-title">
              Don&apos;t fear<br />the future.<br /><em>Skill up for it.</em>
            </h3>
            <p className="w-right-body">
              The winners in this new world are not those who resist technology.
              They are the ones who learn how to use it.
            </p>
            <div className="w-ctas">
              <a
                href="https://us05web.zoom.us/meeting/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Register Free
              </a>
              <a href="#contact" className="btn-ghost-white">
                Get Reminded
              </a>
            </div>
            <div className="w-meta">Platform: Zoom &nbsp;·&nbsp; Duration: 45 minutes &nbsp;·&nbsp; Certificate on request</div>
          </div>
        </div>
      </div>
    </section>
  );
}
