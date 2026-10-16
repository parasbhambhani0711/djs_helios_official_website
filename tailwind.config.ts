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
          dark: "#0B0F17",       // Deep Carbon Charcoal
          card: "#0D111A",       // Glass card surface
          cardHover: "#161B26",  // Hover elevation
          amber: "#F59E0B",      // Solar Amber
          emerald: "#10B981",    // Cyber Emerald
        },
      },
    },
  },
  plugins: [],
};

export default config;