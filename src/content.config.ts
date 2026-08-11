import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    // Which of the two tracks this belongs to. Shown as a label per project.
    track: z.enum(["backend", "agents"]),
    // Personal work and team work are labelled differently everywhere they
    // appear, so the attribution is never ambiguous to a reader.
    kind: z.enum(["personal", "team"]),
    // On team projects this describes the part that was mine.
    role: z.string().optional(),
    team: z.string().optional(),
    stack: z.array(z.string()),
    // GitHub only. No live links, no screenshots.
    repo: z.string().url(),
    // Headline numbers. Kept to three so the card stays scannable.
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(3)
      .optional(),
    order: z.number(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
