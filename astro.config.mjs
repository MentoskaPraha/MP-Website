import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mentoskapraha.com",
  base: "",
  integrations: [sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
    }), svelte(), 
    prefetch()
  ]
});