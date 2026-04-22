import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

const games = defineCollection({
  loader: file("content/games.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string()
  })
});

const technology = defineCollection({
  loader: file("content/technology.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    tech: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        link: z.string()
      })
    )
  })
});

const projects = defineCollection({
  loader: file("content/projects.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string().nullable(),
    code: z.string()
  })
});

const quotes = defineCollection({
  loader: file("content/quotes.json"),
  schema: z.object({
    quote: z.string(),
    author: z.string()
  })
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./content/blog"
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date().optional()
  })
});

export const collections = { games, technology, projects, quotes, blog };
