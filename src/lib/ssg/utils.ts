import type { Post, PostMetadata } from "~/types";
import * as fs from "fs";
import * as path from "path";
import grayMatter from "gray-matter";
import { glob } from "glob";
import { postFrontmatter } from "~/schemas";
import { bundleMDX } from "mdx-bundler";

type MDXBundlerOptions = Omit<
  Parameters<typeof bundleMDX>[0],
  "source" | "file" | "cwd"
>;

const postsDirectory = path.join(process.cwd(), "_posts");

async function getPostFilenames(): Promise<string[]> {
  return fs.promises.readdir(postsDirectory);
}

async function getPostSlugs(): Promise<string[]> {
  return (await getPostFilenames()).map((filename) =>
    filename.replace(/\.mdx?$/, ""),
  );
}

async function getPostBySlug(
  slug: string,
  options?: MDXBundlerOptions,
): Promise<Post> {
  const fullPaths = await glob(path.join(postsDirectory, `${slug}.{md,mdx}`), {
    absolute: true,
  });
  const fullPath = fullPaths[0]!;
  // eslint-disable-next-line  @typescript-eslint/no-unsafe-argument
  const mdx = await bundleMDX({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(options as any),
    file: fullPath,
  });
  const post: Post = {
    code: mdx.code,
    meta: {
      ...postFrontmatter.parse(mdx.frontmatter),
      slug,
    },
  };
  return post;
}

async function getAllPosts(options?: MDXBundlerOptions): Promise<Post[]> {
  const slugs = await getPostFilenames();
  const posts: Post[] = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, options)),
  );
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.meta.date) > new Date(post2.meta.date) ? -1 : 1,
  );
  return sortedPosts;
}

async function getPostMetadataBySlug(slug: string): Promise<PostMetadata> {
  const fullPaths = await glob(path.join(postsDirectory, `${slug}.{md,mdx}`), {
    absolute: false,
  });
  const fullPath = fullPaths[0]!;
  const contents = await fs.promises.readFile(fullPath);
  return {
    ...postFrontmatter.parse(grayMatter(contents).data),
    slug,
  };
}

async function getAllPostMetadata(): Promise<PostMetadata[]> {
  const slugs = await getPostSlugs();
  const metadata: PostMetadata[] = await Promise.all(
    slugs.map((slug) => getPostMetadataBySlug(slug)),
  );
  const sortedPosts = metadata.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1,
  );
  return sortedPosts;
}

export {
  getPostFilenames,
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
  getPostMetadataBySlug,
  getAllPostMetadata,
};
