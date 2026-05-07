"use client";

interface LogoProps {
  size?: number;
  color?: string;
  withText?: boolean;
}

export default function Logo({ size = 40, color = "#c9a84c", withText = true }: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Geometric mark inspired by the Instagram logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The two interlocking N-like shapes from the logo */}
        <path
          d="M8 8 L8 52 L32 52 L32 72 L72 72 L72 28 L48 28 L48 8 Z"
          fill="none"
          stroke={color}
          strokeWidth="0"
        />
        {/* Left shape */}
        <path
          d="M6 14 C6 10 9 7 13 7 L35 7 C39 7 42 10 42 14 L42 36 L55 7 L67 7 C71 7 74 10 74 14 L74 66 C74 70 71 73 67 73 L45 73 C41 73 38 70 38 66 L38 44 L25 73 L13 73 C9 73 6 70 6 66 Z"
          fill={color}
        />
        {/* Cutout/overlap effect */}
        <path
          d="M25 25 L38 25 L38 44 L25 44 Z"
          fill="#0a0a0a"
        />
        <path
          d="M42 36 L55 36 L55 55 L42 55 Z"
          fill="#0a0a0a"
        />
      </svg>
      {withText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#f5f0e8",
              letterSpacing: "0.02em",
            }}
          >
            The Digital
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.95rem",
              fontWeight: 400,
              color: color,
              letterSpacing: "0.02em",
            }}
          >
            Impact Hub.
          </span>
        </div>
      )}
    </div>
  );
}
