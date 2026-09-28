import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const lab = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    number: z.string().regex(/^EXP-\d{3}$/),
    description: z.string(),
    status: z.enum(['idea', 'prototype', 'active', 'archived']),
    tags: z.array(z.string()),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    url: z.url().optional(),
    github: z.url().optional(),
  }),
});
export const collections = { lab };
