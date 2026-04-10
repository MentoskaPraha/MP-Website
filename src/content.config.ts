import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const games = defineCollection({
  loader: file("content/games.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().nullable()
  })
});

const technology = defineCollection({
  loader: file("content/technology.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().nullable()
  })
});

const quotes = defineCollection({
  loader: file("content/quotes.json"),
  schema: z.object({
    quote: z.string(),
    author: z.string()
  })
});

export const collections = { games, technology, quotes };
