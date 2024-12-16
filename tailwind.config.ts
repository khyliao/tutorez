import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: ["bg-[#080809]"],
  theme: {
    extend: {
      boxShadow: {
        purpleShadow: "0 2px 10px rgba(118, 10, 255, 0.7)",
        themeSwitcherLightBox:
          "0px 1px 1px 0px rgba(0, 0, 0, 0.25), 1px 1px 10px 0px #24272C",
        themeSwitcherBoxDark:
          "0px 3.22px 3.22px 0px rgba(0, 0, 0, 0.25), 8.05px 8.05px 16.1px 0px #24272C",
      },
      spacing: {
        "calc-full-minus-96": "calc(100% - 96px)",
        "calc-full-minus-256": "calc(100% - 256px)",
      },
      fontFamily: {
        bungee: ["Bungee", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "noto-sans": ["NotoSans", "sans-serif"],
        "open-sans": ["OpenSans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["RobotoSlab", "serif"],
      },
      colors: {
        "section-title": "#212121",
        "nav-active": "#DB00FF",
        "hero-primary": "#9E00FF",
        footer: "#2B2B2B",
        purplePrimary: "#624DE3",
        "light-dashboard-menu": "#EFEFEF",
      },
      backgroundImage: {
        "linear-main":
          "linear-gradient(180.00deg, rgba(254, 170, 255, 0.4),rgba(254, 183, 255, 0.3) 13.573%,rgba(255, 207, 250, 0.2) 21.823%,rgba(253, 139, 255, 0.05) 37.442%,rgba(255, 250, 205, 0.35) 59.641%,rgba(254, 239, 217, 0.34) 72.793%,rgba(250, 203, 255, 0.3) 74.063%,rgba(247, 157, 255, 0.3) 84.234%,rgba(248, 164, 255, 0.3) 100%);",
        "linear-main-mobile":
          "linear-gradient(180.00deg, rgba(254, 170, 255, 1), rgba(254, 183, 255, 0.9) 9.5%, rgba(254, 183, 255, 0.4) 12%, rgb(230, 170, 234, 0.3) 18%, rgb(204, 174, 255, 0.3) 20%, rgb(248, 239, 224, 0.2) 30%,rgb(248, 239, 224, 0.2) 47.734%, rgba(255, 169, 159, 0.3) 52.271%, rgba(255, 250, 205, 0.4) 69.317%, rgba(255, 250, 205, 0.4) 77.366%, rgba(254, 183, 255, 0.33) 81.695%, rgba(254, 183, 255, 0.3) 100%)",
        "form-title":
          "linear-gradient(180.00deg, rgb(255, 255, 255),rgb(213, 160, 255))",
      },
      dropShadow: {
        "nav-link": "0 0 6px #DB00FF",
        "first-advantage": "0px 0px 20px #FFFBF5",
        "second-advantage": "0px 0px 20px #EBF8FF",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        fadeIn: "fadeIn 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
