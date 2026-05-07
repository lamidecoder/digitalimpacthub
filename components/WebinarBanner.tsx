"use client";

import { useEffect, useRef } from "react";

export default function WebinarBanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "8rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          className="reveal"
          style={{
            border: "1px solid rgba(201,168,76,0.25)",
            padding: "5rem 4rem",
            textAlign: "center",
            background: "rgba(201,168,76,0.03)",
            position: "relative",
          }}
        >
          {/* Corner accents */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
            (pos, i) => (
              <div
                key={i}
                aria-hidden
                style={{
                  position: "absolute",
                  [pos.includes("top") ? "top" : "bottom"]: "-1px",
                  [pos.includes("left") ? "left" : "right"]: "-1px",
                  width: "12px",
                  height: "12px",
                  background: "var(--accent)",
                }}
              />
            )
          )}

          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.5rem",
            }}
          >
            Upcoming · Oct 18, 2025 · 11:00am – 11:45am
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Thriving in the Tech Era:
          </h2>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.2,
              color: "var(--accent)",
              marginBottom: "1.5rem",
            }}
          >
            How to Stay Ahead in the Age of AI
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.8,
            }}
          >
            A practical guide to growth in the age of artificial intelligence.
            Featuring Oyinda Lawal, Founder of The Digital Impact Hub.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://us05web.zoom.us/meeting/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.9rem", padding: "1rem 2.5rem" }}
            >
              Register Free Now ↗
            </a>
            <a href="#contact" className="btn-outline">
              Get Reminded
            </a>
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
              fontSize: "0.78rem",
              color: "var(--muted)",
              letterSpacing: "0.05em",
            }}
          >
            Platform: Zoom &nbsp;·&nbsp; Free to attend &nbsp;·&nbsp; Limited spots
          </div>
        </div>
      </div>
    </section>
  );
}
