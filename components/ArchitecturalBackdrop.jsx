"use client";

import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function ArchitecturalBackdrop() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <Box
      aria-hidden="true"
      position="fixed"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      overflow="hidden"
      bg="#faf9f6"
      style={{
        backgroundImage:
          "radial-gradient(circle at 86% 14%, rgba(152, 21, 9, 0.055) 0%, transparent 42%), radial-gradient(circle at 12% 86%, rgba(243, 234, 214, 0.72) 0%, transparent 48%)",
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <pattern
            id="ngs-arch-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="#332b1f" fillOpacity="0.065" />
          </pattern>

          <linearGradient id="ngs-crimson-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#981509" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#c9a97c" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#981509" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="ngs-ink-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#332b1f" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#332b1f" stopOpacity="0.075" />
            <stop offset="100%" stopColor="#332b1f" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Architectural drafting dot matrix */}
        <rect width="1440" height="900" fill="url(#ngs-arch-grid)" />

        {/* Subtle vertical editorial framing rails */}
        <line x1="96" y1="0" x2="96" y2="900" stroke="url(#ngs-ink-fade)" strokeWidth="1" />
        <line x1="1344" y1="0" x2="1344" y2="900" stroke="url(#ngs-ink-fade)" strokeWidth="1" />

        {/* Right Architectural Astrolabe / Academic Compass & Heraldic Crest Geometry */}
        <g transform="translate(1210 430)" fill="none">
          <circle r="390" stroke="#332b1f" strokeOpacity="0.055" strokeWidth="1" />
          <circle
            r="340"
            stroke="#981509"
            strokeOpacity="0.11"
            strokeWidth="1"
            strokeDasharray="6 10"
          />
          <circle r="272" stroke="#332b1f" strokeOpacity="0.065" strokeWidth="1.2" />
          <circle r="210" stroke="#c9a97c" strokeOpacity="0.22" strokeWidth="1" />
          <circle r="138" stroke="#981509" strokeOpacity="0.12" strokeWidth="1" />

          {/* Structural drafting axes */}
          <line x1="-430" y1="0" x2="430" y2="0" stroke="#332b1f" strokeOpacity="0.045" strokeWidth="1" />
          <line x1="0" y1="-430" x2="0" y2="430" stroke="#332b1f" strokeOpacity="0.045" strokeWidth="1" />
          <line x1="-305" y1="-305" x2="305" y2="305" stroke="#332b1f" strokeOpacity="0.038" strokeWidth="1" />
          <line x1="305" y1="-305" x2="-305" y2="305" stroke="#332b1f" strokeOpacity="0.038" strokeWidth="1" />

          {/* Inscribed architectural square & diamond (Vitruvian geometry) */}
          <rect
            x="-192"
            y="-192"
            width="384"
            height="384"
            stroke="#332b1f"
            strokeOpacity="0.048"
            strokeWidth="1"
          />
          <rect
            x="-148"
            y="-148"
            width="296"
            height="296"
            transform="rotate(45)"
            stroke="#981509"
            strokeOpacity="0.085"
            strokeWidth="1"
          />

          {/* Minimalist NGS Heraldic Shield + Open Book silhouette */}
          <path
            d="M-66 -78 H66 V10 C66 64 26 98 0 112 C-26 98 -66 64 -66 10 Z"
            stroke="#981509"
            strokeOpacity="0.14"
            strokeWidth="1.5"
          />
          <path
            d="M-54 -66 H54 V8 C54 54 22 83 0 96 C-22 83 -54 54 -54 8 Z"
            stroke="#332b1f"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
          <path
            d="M-34 -18 C-16 -24 -4 -20 0 -10 C4 -20 16 -24 34 -18 V24 C16 18 4 22 0 32 C-4 22 -16 18 -34 24 Z"
            stroke="#332b1f"
            strokeOpacity="0.09"
            strokeWidth="1.2"
          />
          <line x1="0" y1="-10" x2="0" y2="32" stroke="#981509" strokeOpacity="0.14" strokeWidth="1.2" />

          {/* Precision node markers */}
          <circle cx="-272" cy="0" r="3.5" fill="#981509" fillOpacity="0.22" />
          <circle cx="0" cy="-272" r="3.5" fill="#332b1f" fillOpacity="0.14" />
          <circle cx="0" cy="272" r="3.5" fill="#332b1f" fillOpacity="0.14" />
          <circle cx="-192" cy="-192" r="2.5" fill="#981509" fillOpacity="0.2" />
          <circle cx="-192" cy="192" r="2.5" fill="#981509" fillOpacity="0.2" />
        </g>

        {/* Left Architectural Colonnade Arch & Drafting Curves */}
        <g transform="translate(150 670)" fill="none">
          <path
            d="M-190 260 V-90 A190 190 0 0 1 190 -90 V260"
            stroke="#332b1f"
            strokeOpacity="0.06"
            strokeWidth="1.2"
          />
          <path
            d="M-150 260 V-85 A150 150 0 0 1 150 -85 V260"
            stroke="url(#ngs-crimson-fade)"
            strokeWidth="1.2"
          />
          <path
            d="M-110 260 V-80 A110 110 0 0 1 110 -80 V260"
            stroke="#332b1f"
            strokeOpacity="0.05"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <line x1="-220" y1="-90" x2="230" y2="-90" stroke="#332b1f" strokeOpacity="0.05" strokeWidth="1" />
          <circle cx="0" cy="-90" r="6" stroke="#981509" strokeOpacity="0.16" strokeWidth="1" />
          <circle cx="0" cy="-90" r="2" fill="#981509" fillOpacity="0.24" />
          <line x1="0" y1="-295" x2="0" y2="250" stroke="#332b1f" strokeOpacity="0.04" strokeWidth="1" />
        </g>

        {/* Subtle Top-Left Coordinate Crosshair & Diagonal Sweep */}
        <g fill="none">
          <path
            d="M-40 165 Q 340 45 760 220 T 1500 130"
            stroke="url(#ngs-crimson-fade)"
            strokeWidth="1.2"
          />
          <g transform="translate(156 146)" stroke="#981509" strokeOpacity="0.18" strokeWidth="1">
            <line x1="-12" y1="0" x2="12" y2="0" />
            <line x1="0" y1="-12" x2="0" y2="12" />
            <circle r="5" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
