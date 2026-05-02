import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        accent: "#C9A96E"
      }
    }
  },
  plugins: [],
};

export default config;