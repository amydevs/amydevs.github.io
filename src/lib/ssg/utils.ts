import type { Post } from '~/types';
import * as fs from 'fs';
import * as path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { glob } from 'glob';
import { postFrontmatter } from '~/schemas';

const postsDirectory = path.join(process.cwd(), "_posts");


async function getPostFilenames(): Promise<string[]> {
  return fs.promises.readdir(postsDirectory);
}

async function getPostSlugs(): Promise<string[]> {
  return (await getPostFilenames()).map((filename) => filename.replace(/\.mdx?$/, ""));
}

async function getPostBySlug(slug: string, options?: Parameters<typeof serialize>[1]): Promise<Post> {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = (await glob(path.join(postsDirectory, `${realSlug}.{md,mdx}`)))[0]!;
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
    frontmatter: postFrontmatter.parse(serializedContents.frontmatter),
  };
  return post;
}
  
async function getAllPosts(options?: Parameters<typeof serialize>[1]): Promise<Post[]>  {
  const slugs = await getPostFilenames();
  const posts: Post[] = await Promise.all(slugs.map((slug) => getPostBySlug(slug, options)));
  const sortedPosts = posts
    .sort((post1, post2) => (new Date(post1.frontmatter.created) > new Date(post2.frontmatter.created) ? -1 : 1));
  return sortedPosts;
}

export { 
  getPostFilenames,
  getPostSlugs,
  getPostBySlug,
  getAllPosts
}