import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "shadow-navy": "#0F1A2E",
        "sunrise-gold": "#F6C98F",
        "soft-peach": "#FAD7C4",
        "horizon-blue": "#1A2A4F",
        "zt-white": "#FFFFFF",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "micro-pulse": "microPulse 2s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        microPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
