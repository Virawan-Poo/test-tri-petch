import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "320px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        lightGray: "#E7E7E7",
        gray: "#C2C2C2",
        purple: "#603EBE",
      },
      backgroundColor: {
        gray: "#F5F4F9",
        darkPurple: "#090C35",
        purple: "#603EBE",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
