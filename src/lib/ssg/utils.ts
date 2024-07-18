import type { Post } from '~/types';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import { glob } from 'glob';
import { postFrontmatter } from '~/schemas';
import { bundleMDX } from "mdx-bundler";

type MDXBundlerOptions = Omit<
  Parameters<typeof bundleMDX>[0],
  "source" |
  "file" |
  "cwd"
>;

const postsDirectory = path.join(process.cwd(), "_posts");

async function getPostFilenames(): Promise<string[]> {
  return fs.promises.readdir(postsDirectory);
}

async function getPostSlugs(): Promise<string[]> {
  return (await getPostFilenames()).map((filename) => filename.replace(/\.mdx?$/, ""));
}

async function getPostBySlug(slug: string, options?: MDXBundlerOptions): Promise<Post> {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPaths = await glob(
    path.join(postsDirectory, `${realSlug}.{md,mdx}`),
    { absolute: true },
  );
  const fullPath = fullPaths[0]!;
  // eslint-disable-next-line  @typescript-eslint/no-unsafe-argument
  const mdx = await bundleMDX({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...options as any,
    file: fullPath,
  });
  const post: Post = {
    code: mdx.code,
    slug: realSlug,
    frontmatter: postFrontmatter.parse(mdx.frontmatter),
  };
  return post;
}
  
async function getAllPosts(options?: MDXBundlerOptions): Promise<Post[]>  {
  const slugs = await getPostFilenames();
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