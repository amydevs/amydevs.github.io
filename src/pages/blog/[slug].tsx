import type { Post } from "~/types";
import { type GetStaticPaths, type GetStaticProps, type InferGetStaticPropsType } from "next";
import { getPostBySlug, getPostSlugs } from '~/lib/ssg/utils';
import { MDXRemote } from "next-mdx-remote";

const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = (await getPostSlugs()).map((slug) => ({ params: { slug }}));
  return { paths, fallback: false };
}

const getStaticProps: GetStaticProps<{ post: Post }, { slug: string }> = async ({ params }) => {
  const { slug } = params!;
  const post = await getPostBySlug(slug);
  return { props: { post } };
}

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <main className="auto-limit-w pt-3 flex flex-col gap-3">
    <h1 className="font-bold text-3xl md:text-5xl">
      {post.frontmatter.title}
    </h1>
    <p className="text-sm text-muted-foreground">
      Created On {new Date(post.frontmatter.created).toDateString()}
      <br />
      Updated On {new Date(post.frontmatter.updated ?? post.frontmatter.created).toDateString()}
    </p>
    <MDXRemote {...post} />
  </main>;
}
export default BlogPost;

export {
  getStaticPaths,
  getStaticProps
};