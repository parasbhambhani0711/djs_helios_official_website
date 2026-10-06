import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        helios: {
          dark: "#05070A",       // Pitch black background
          card: "#0D111A",       // Glass card surface
          cardHover: "#161B26",  // Hover elevation
          amber: "#F59E0B",      // Solar golden yellow
          gold: "#FBBF24",       // Energy accent glow
          cyan: "#06B6D4",       // Technical spec highlights
        },
      },
    },
  },
  plugins: [],
};

export default config;