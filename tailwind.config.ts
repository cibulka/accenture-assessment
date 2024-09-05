import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        white: "var(--color-white)",
        "white-10": "var(--color-white-10)",
        "white-20": "var(--color-white-20)",
        green: "var(--color-green)",
        "green-dark": "var(--color-green-dark)",
      },
    },
  },
  plugins: [],
};
export default config;
