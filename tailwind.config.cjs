/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte}"],
	theme: {
		extend: {}
	},
	plugins: [require("@tailwindcss/line-clamp")]
};
