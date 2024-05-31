/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				text: {
					light: "#4c4f69",
					dark: "#cdd6f4",
				},
				border: {
					light: "#ccd0da",
					dark: "#313244",
				},
				light: "#eff1f5",
				dark: "#1e1e2e",
			},
		},
	},
	plugins: [],
};
