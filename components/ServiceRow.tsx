"use client";
import { useState } from "react";

interface ServiceRowProps {
  num: string;
  title: string;
  desc: string;
  tag: string;
  features: string[];
  isLast: boolean;
}

export default function ServiceRow({ num, title, desc, tag, features, isLast }: ServiceRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`service-row reveal${isLast ? "" : " service-row-border"}`}
      style={{ background: hovered ? "var(--cream)" : "var(--white)", transition: "background .3s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <div className="service-row-num">
        <span className="serif" style={{ fontSize: "2rem", fontWeight: 300, color: "var(--border2)", lineHeight: 1 }}>
          {num}
        </span>
      </div>

      {/* Main content */}
      <div className="service-row-main">
        <div style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: ".65rem" }}>
          {tag}
        </div>
        <div className="serif" style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".65rem", lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: ".88rem", color: "var(--ink3)", lineHeight: 1.85 }}>
          {desc}
        </div>
      </div>

      {/* Features */}
      <div className="service-row-features">
        <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: ".85rem" }}>
          Includes
        </div>
        {features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: ".84rem", color: "var(--ink2)", marginBottom: ".5rem" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: ".5rem" }} />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}