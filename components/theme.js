import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";

const tokens = defineTokens({
  fonts: {
    heading: `var(--font-manrope), sans-serif`,
    body: `var(--font-inter), sans-serif`,
  },
  colors: {
    brand: {
      primaryNavy: { value: "#332b1f" },
      accentGold: { value: "#981509" },
      accentGoldHover: { value: "#7c1006" },
      navySoft: { value: "#6b6154" },
      crimson: { value: "#981509" },
      crimsonBright: { value: "#b82316" },
      obsidian: { value: "#11100e" },
      parchment: { value: "#f3ead6" },
    },
    surface: {
      surfaceLight: { value: "#faf9f6" },
      surfaceGlass: { value: "rgba(255, 255, 255, 0.86)" },
      panel: { value: "#ffffff" },
      textMuted: { value: "#f3ead6" },
    },
    text: {
      main: { value: "#332b1f" },
      textMuted: { value: "#6b6154" },
    },
    border: {
      borderLight: { value: "#e7e0d2" },
    },
  },
  shadows: {
    glass: { value: "0 10px 32px -6px rgba(51, 43, 31, 0.08)" },
    premium: { value: "0 20px 44px -14px rgba(51, 43, 31, 0.14)" },
    apple: { value: "0 6px 24px -6px rgba(51, 43, 31, 0.06)" },
  },
  radii: {
    xl: { value: "1.125rem" },
    "2xl": { value: "1.375rem" },
    "3xl": { value: "1.75rem" },
    "4xl": { value: "2.25rem" },
  },
});

const system = createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      tokens,
    },
    globalCss: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "#faf9f6",
        color: "#332b1f",
      },
      "*::selection": {
        background: "#981509",
        color: "#faf9f6",
      },
      ".material-symbols-outlined": {
        fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
        userSelect: "none",
      },
      ".glass-panel": {
        background: "rgba(250, 249, 246, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid #e7e0d2",
      },
      ".text-gradient": {
        bgGradient: "linear-gradient(135deg, #332b1f 0%, #981509 100%)",
        backgroundClip: "text",
        color: "transparent",
      },
      ".bento-card": {
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      ".bento-card:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 24px 48px -12px rgba(51, 43, 31, 0.14)",
      },
      ".bg-pattern": {
        backgroundImage: "radial-gradient(#332b1f 0.6px, transparent 0.6px)",
        backgroundSize: "24px 24px",
        opacity: 0.04,
      },
      ".apple-card": {
        background: "rgba(255, 255, 255, 0.90)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "1.75rem",
        boxShadow: "0 8px 28px -8px rgba(51, 43, 31, 0.07)",
        border: "1px solid #e7e0d2",
        transition: "all 0.3s ease",
      },
      ".apple-card:hover": {
        boxShadow: "0 16px 36px -10px rgba(51, 43, 31, 0.12)",
        borderColor: "#d5cab6",
      },
    },
  }),
);

export default system;
