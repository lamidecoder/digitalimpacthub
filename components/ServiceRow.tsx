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
      className="reveal"
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr",
        gap: 0,
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        background: hovered ? "var(--cream)" : "var(--white)",
        transition: "background .3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ padding: "2.5rem 1.5rem", borderRight: "1px solid var(--border)", display: "flex", alignItems: "flex-start" }}>
        <span className="serif" style={{ fontSize: "2.2rem", fontWeight: 300, color: "var(--border2)", lineHeight: 1 }}>{num}</span>
      </div>
      <div style={{ padding: "2.5rem 2.5rem 2.5rem 2rem", borderRight: "1px solid var(--border)" }}>
        <div style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: ".75rem" }}>{tag}</div>
        <div className="serif" style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--ink)", marginBottom: ".75rem", lineHeight: 1.3 }}>{title}</div>
        <div style={{ fontSize: ".88rem", color: "var(--ink3)", lineHeight: 1.85 }}>{desc}</div>
      </div>
      <div style={{ padding: "2.5rem 2rem" }}>
        <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: "1rem" }}>Includes</div>
        {features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: ".85rem", color: "var(--ink2)", marginBottom: ".5rem" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: ".55rem" }} />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}
