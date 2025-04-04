import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.mentoskapraha.com",
  trailingSlash: "never",
  output: "static",
  integrations: [sitemap(), svelte()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
