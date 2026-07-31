import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0E4C92",
          secondary: "#0A2745",
          accent: "#26B7E8",
          canvas: "#F8FAFC",
          ink: "#111827",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(10, 39, 69, 0.12)",
        soft: "0 10px 40px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top, rgba(14, 76, 146, 0.18), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.7), rgba(248,250,252,1))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseLine: "pulseLine 2.4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.8)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
