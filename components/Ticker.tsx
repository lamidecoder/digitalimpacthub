"use client";
import { useEffect, useRef } from "react";

const items = ["Digital Skills","AI Learning","Growth Community","Webinars and Masterclasses","Thriving in the Tech Era","Skill Up. Not Out.","Don't Fear the Future","Connect and Grow","Information Technology"];

export default function Ticker() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    [...items,...items,...items,...items].forEach((t) => {
      const d = document.createElement("div");
      d.className = "ticker-item";
      d.innerHTML = `<span class="ticker-text">${t}</span><span class="ticker-dot">&#9670;</span>`;
      ref.current!.appendChild(d);
    });
  }, []);
  return (
    <div className="ticker-wrap">
      <div className="ticker-track" ref={ref} />
    </div>
  );
}
