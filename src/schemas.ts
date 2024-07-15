import * as z from 'zod';

const postFrontmatter = z.object({
  title: z.string(),
  topic: z.string().optional(),
  date: z.string().datetime(),
  lastModified: z.string().datetime().optional(),
  description: z.string(),
  draft: z.boolean().optional(),
});

export {
  postFrontmatter
}