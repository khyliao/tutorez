import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "noto-sans": ["NotoSans", "sans-serif"],
        "open-sans": ["OpenSans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "nav-active": "#DB00FF",
      },
      dropShadow: {
        "nav-link": "0 0 35px #DB00FF",
        "nav-link-mobile": "0 0 20px #DB00FF",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
