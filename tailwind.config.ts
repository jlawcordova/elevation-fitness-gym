import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        tight: "0.9",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#B3161F",
          secondary: "#f3f4f6",
          "secondary-focus": "#d1d5db",
          accent: "#1dcdbc",
          neutral: "#27272a",
          "neutral-focus": "#52525b",
          "base-100": "#09090b",
          "base-200": "#18181b",
          "base-content": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
