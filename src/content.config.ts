import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// İçerikler dil klasörlerinde tutulur: src/content/blog/tr/... ve /en/...
// Entry id'si "tr/yazi-adi" biçiminde gelir; sayfalar dile göre filtreler.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    year: z.number().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
