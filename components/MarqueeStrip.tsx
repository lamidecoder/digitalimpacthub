"use client";

const items = [
  "Digital Skills",
  "AI Learning",
  "Growth Community",
  "Webinars & Masterclasses",
  "Thriving in the Tech Era",
  "Skill Up. Not Out.",
  "Don't Fear the Future",
  "Connect & Grow",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--accent)",
        padding: "1rem 0",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3rem",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0a0a0a",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "rgba(10,10,10,0.3)",
                fontSize: "0.6rem",
              }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
