import * as z from 'zod';

const postFrontmatter = z.object({
  title: z.string(),
  description: z.string(),
  preview: z.string().optional(),
  category: z.string().default('Miscellaneous'),
  date: z.date().transform((date) => date.toISOString()),
  lastModified: z.date().transform((date) => date.toISOString()).optional(),
  draft: z.boolean().default(false),
  keywords: z.string().array().default([]),
});

export {
  postFrontmatter
}