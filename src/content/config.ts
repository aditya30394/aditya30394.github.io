import { defineCollection, z } from 'astro:content';

// Blog collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Projects collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string(),
    githubUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

// Timeline collection (work experience and education)
const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    type: z.enum(['work', 'education']),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    dates: z.string().optional(),
    location: z.string().optional(),
    logo: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { blog, projects, timeline };
