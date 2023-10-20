/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,svelte}"],
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				secondary: "#4E4FEB",
				tertiary: "#068FFF",
				quaternary: "#EEEEEE"
			},
			spacing: {
				17: "4.25rem",
				76: "19rem"
			}
		},
		fontFamily: {
			primary: [
				"Roboto Mono",
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace"
			]
		}
	},
	plugins: []
};
