import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.enum(['shop-humble', 'security-it']),
      summary: z.string(),
      coverImage: image().optional(),
      images: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      tools: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      status: z.enum(['in-progress', 'complete']).default('complete'),
      draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    order: z.number(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: 'now.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { projects, notes, experience, about, now };
