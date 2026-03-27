import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const albums = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/albums" }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    released: z.string(),
    summary: z.string(),
    cover: z.string(),
    favoriteTracks: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

export const collections = { blog, albums };
