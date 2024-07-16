import type { Post } from '~/types';
import * as fs from 'fs';
import * as path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { glob } from 'glob';
import { postFrontmatter } from '~/schemas';

const postsDirectory = path.join(process.cwd(), "_posts");


async function getPostFilenames(): Promise<string[]> {
  const paths = await glob("**/*.mdx", { cwd: postsDirectory });
  return paths.map((path) => path.replaceAll("\\", "/"));
}

async function getPostSlugs(): Promise<string[]> {
  return (await getPostFilenames()).map((filename) => filename.toLowerCase().replace(/\.mdx?$/, ""));
}

async function getPostBySlug(slug: string, options?: Parameters<typeof serialize>[1]): Promise<Post> {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPaths = await glob(path.join(postsDirectory, `${realSlug}.{md,mdx}`), {
    nocase: true,
  })
  const fullPath = fullPaths[0]!;
  const dirName = path.dirname(fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const serializedContents = await serialize(fileContents, {
    ...options,
    parseFrontmatter: true,
    mdxOptions: {
      format: fullPath.endsWith("x") ? "mdx" : "md",
      ...options?.mdxOptions
    },
  });
  const post: Post = {
    ...serializedContents,
    slug: realSlug,
    frontmatter: postFrontmatter.parse({
      ...serializedContents.frontmatter,
      category: serializedContents.frontmatter.category ?? dirName,
    }),
  };
  return post;
}
  
async function getAllPosts(options?: Parameters<typeof serialize>[1]): Promise<Post[]>  {
  const slugs = await getPostSlugs();
  const posts: Post[] = await Promise.all(slugs.map((slug) => getPostBySlug(slug, options)));
  const sortedPosts = posts
    .sort((post1, post2) => (new Date(post1.frontmatter.date) > new Date(post2.frontmatter.date) ? -1 : 1));
  return sortedPosts;
}

export { 
  getPostFilenames,
  getPostSlugs,
  getPostBySlug,
  getAllPosts
}