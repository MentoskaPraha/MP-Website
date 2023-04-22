import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
	site: "https://www.mentoskapraha.com",
	base: "",
	integrations: [
		sitemap(),
		tailwind({
			config: { applyBaseStyles: false }
		}),
		svelte()
	]
});
