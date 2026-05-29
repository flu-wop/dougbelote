import type { Config } from "tailwindcss";

/**
 * Shared ecosystem design tokens — identical to midcitysound.com and
 * streetbeat.video. Do not deviate from these values; they keep all of
 * James's sites visually unified.
 *
 * dougbelote.com adds one accent on top of the shared system:
 *   nola-red — a deep New Orleans red used sparingly for warmth/energy
 *   (drumming, brass-band heat). Use it for small highlights only, never
 *   as a large fill, so the site still reads as part of the family.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // --- Shared ecosystem palette ---
        "studio-black": "#090909",
        charcoal: "#111111",
        dark: "#1A1A1A",
        card: "#1C1C1C",
        border: "#2A2A2A",
        gold: "#D4AF77",
        "gold-light": "#E8C97A",
        "gold-dark": "#B8935A",
        cream: "#F5EDD8",
        mist: "#A89880",
        // --- dougbelote.com accent layer ---
        "nola-red": "#8E2A2A",
        "nola-red-light": "#B5413A",
      },
      fontFamily: {
        // Display / headings
        serif: ['"Cormorant Garamond"', "serif"],
        // Body
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        // Mono / labels / eyebrows
        mono: ['"DM Mono"', "monospace"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
