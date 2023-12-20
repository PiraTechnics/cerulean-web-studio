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
				"cws-bg-1": "#00c4cc",
				"cws-bg-2": "#0a1a44",
				"cws-primary": "#00b1f2",
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				serif: ["var(--font-baskerville)"],
			},
			keyframes: {
				slideFromLeft: {
					"0%": { transform: "translateX(-25%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				slideFromRight: {
					"0%": {
						transform: "translateX(25%)",
						opacity: "0",
						display: "none",
					},
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				slideFromLeft: "slideFromLeft 1.5s ease-in-out",
				slideFromRight: "slideFromRight 1.5s ease-in-out",
				fadeIn: "fadeIn 2s ease-in-out",
			},
		},
	},
	plugins: [],
};
export default config;
