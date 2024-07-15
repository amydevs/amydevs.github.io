import * as z from 'zod';

const postFrontmatter = z.object({
  title: z.string(),
  created: z.string().datetime(),
  updated: z.string().datetime().optional(),
  description: z.string(),
});

export {
  postFrontmatter
}