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
		},
	},
	plugins: [],
};
export default config;
