import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Scraped from hyperthinksys.com computed styles + logo SVG
        navy: "#0A1233", // brand-deck dark hero (live hero uses imagery)
        "navy-deep": "#080E30",
        ink: "#252A61", // logo wordmark + AI-section navy headings
        blue: "#0A2E6E",
        brand: "#C1262A", // live CTA / AI H1 accent
        gold: "#DD8A02", // Sovereign AI deck — sparingly
        mist: "#F5F8FC",
        body: "#384252", // live body text
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(37, 42, 97, 0.09)",
      },
    },
  },
  plugins: [],
} satisfies Config;
