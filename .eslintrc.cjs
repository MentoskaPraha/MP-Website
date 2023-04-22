module.exports = {
	extends: [
		"plugin:astro/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	overrides: [
		{
			files: ["*.astro", "*.svelte"],
			plugins: ["svelte3", "@typescript-eslint"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro", ".svelte"],
				sourceType: "module",
				ecmaVersion: 2020
			},
			env: {
				browser: true,
				es2017: true,
				node: true
			}
		}
	]
};
