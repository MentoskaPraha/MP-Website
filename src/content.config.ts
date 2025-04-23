import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const games = defineCollection({
  loader: file("content/games.json")
});

const technology = defineCollection({
  loader: file("content/technology.json")
});

export const collections = { games, technology };
