import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: ["bg-[#080809]"],
  theme: {
  	extend: {
  		boxShadow: {
  			purpleShadow: '0 2px 10px rgba(118, 10, 255, 0.7)',
  			themeSwitcherLightBox: '0px 1px 1px 0px rgba(0, 0, 0, 0.25), 1px 1px 10px 0px #24272C',
  			themeSwitcherBoxDark: '0px 3.22px 3.22px 0px rgba(0, 0, 0, 0.25), 8.05px 8.05px 16.1px 0px #24272C',
  			lessonCardInfoMobile: '0.6px 0.7px 1.6px 0px rgba(0, 0, 0, 0.01), 2.6px 3.1px 3.3px 0px rgba(0, 0, 0, 0.015),6.4px 7.7px 6.5px 0px rgba(0, 0, 0, 0.02),12.3px 14.8px 12.7px 0px rgba(0, 0, 0, 0.02),20.7px 24.9px 23.4px 0px rgba(0, 0, 0, 0.025),32px 38.4px 40px 0px rgba(0, 0, 0, 0.035)',
  			lessonCardInfoTabletAndMore: '1px 4px 20px 0px rgba(0, 0, 0, 0.02), 3px 5px 60px 0px rgba(0, 0, 0, 0.03), 4px 0px 5px 0px rgba(0, 0, 0, 0.04), 3px 2px 10px 0px rgba(0, 0, 0, 0.04), 6px 3px 10px 0px rgba(0, 0, 0, 0.05), 3px 0px 25px 0px rgba(0, 0, 0, 0.07)',
  			lessonCardInfoMobileDark: '0.6px 0.7px 15px 0px rgba(173, 143, 255, 0.1), 2px 3px 15px 0px rgba(173, 183, 255, 0.12), 2px 2px 30px 0px rgba(173, 183, 255, 0.11), 4px 5px 13px 0px rgba(173, 183, 255, 0.12), 7px 8px 23px 0px rgba(173, 183, 255, 0.1), 10px 12ppx 40px 0px rgba(173, 183, 255, 0.14)',
  			lessonCardInfoTabletAndMoreDark: '1px 4px 20px 0px rgba(173, 183, 255, 0.06), 3px 5px 60px 0px rgba(173, 183, 255, 0.03), 4px 0px 5px 0px rgba(173, 183, 255, 0.03), 3px 2px 10px 0px rgba(173, 183, 255, 0.04), 6px 3px 10px 0px rgba(173, 183, 255, 0.12), 3px 0px 25px 0px rgba(173, 183, 255, 0.15)'
  		},
  		spacing: {
  			'calc-full-minus-80': 'calc(100% - 80px)',
  			'calc-full-minus-224': 'calc(100% - 224px)'
  		},
  		fontFamily: {
  			bungee: [
  				'Bungee',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			'noto-sans': [
  				'NotoSans',
  				'sans-serif'
  			],
  			'open-sans': [
  				'OpenSans',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			],
  			'roboto-slab': [
  				'RobotoSlab',
  				'serif'
  			]
  		},
  		colors: {
  			'field-focus': '#58585b',
  			'section-title': '#212121',
  			'nav-active': '#DB00FF',
  			'hero-primary': '#9E00FF',
  			footer: '#2B2B2B',
  			purplePrimary: '#624de3',
  			'light-dashboard-menu': '#EFEFEF',
  			inputBgStatic: '#E9EAF7',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		backgroundImage: {
  			'linear-main': 'linear-gradient(180.00deg, rgba(254, 170, 255, 0.4),rgba(254, 183, 255, 0.3) 13.573%,rgba(255, 207, 250, 0.2) 21.823%,rgba(253, 139, 255, 0.05) 37.442%,rgba(255, 250, 205, 0.35) 59.641%,rgba(254, 239, 217, 0.34) 72.793%,rgba(250, 203, 255, 0.3) 74.063%,rgba(247, 157, 255, 0.3) 84.234%,rgba(248, 164, 255, 0.3) 100%);',
  			'linear-main-mobile': 'linear-gradient(180.00deg, rgba(254, 170, 255, 1), rgba(254, 183, 255, 0.9) 9.5%, rgba(254, 183, 255, 0.4) 12%, rgb(230, 170, 234, 0.3) 18%, rgb(204, 174, 255, 0.3) 20%, rgb(248, 239, 224, 0.2) 30%,rgb(248, 239, 224, 0.2) 47.734%, rgba(255, 169, 159, 0.3) 52.271%, rgba(255, 250, 205, 0.4) 69.317%, rgba(255, 250, 205, 0.4) 77.366%, rgba(254, 183, 255, 0.33) 81.695%, rgba(254, 183, 255, 0.3) 100%)',
  			'form-title': 'linear-gradient(180.00deg, rgb(255, 255, 255),rgb(213, 160, 255))'
  		},
  		dropShadow: {
  			'nav-link': '0 0 6px #DB00FF',
  			'first-advantage': '0px 0px 20px #FFFBF5',
  			'second-advantage': '0px 0px 20px #EBF8FF'
  		},
  		keyframes: {
  			slideDown: {
  				'0%': {
  					transform: 'translateY(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			slideDown: 'slideDown 0.5s ease-out',
  			fadeIn: 'fadeIn 0.3s ease-in-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")]
};

export default config;
