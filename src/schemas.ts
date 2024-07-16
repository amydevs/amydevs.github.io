import * as z from 'zod';

const postFrontmatter = z.object({
  title: z.string(),
  description: z.string(),
  preview: z.string().optional(),
  category: z.string().default('Miscellaneous'),
  date: z.string().datetime(),
  lastModified: z.string().datetime().optional(),
  draft: z.boolean().default(false),
  keywords: z.string().array().default([]),
});

export {
  postFrontmatter
}