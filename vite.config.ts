import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			"@components": resolve(__dirname, "./src/components"),
			"@stores": resolve(__dirname, "./src/stores/"),
			"@utils": resolve(__dirname, "./src/utils"),
			$types: resolve(__dirname, "./src/types.d.ts"),
			$theme: resolve(__dirname, "./src/theme.json")
		}
	}
});
