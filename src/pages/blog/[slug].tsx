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
  return <main className="auto-limit-w max-w-5xl flex flex-col items-center">
    <div className="pt-32 pb-24 md:text-center">
        <div className="font-bold text-primary mb-4">
            { post.frontmatter.topic ?? "Miscellaneous" }
        </div>
        <h1 className="font-extrabold text-4xl">
        {post.frontmatter.title}
        </h1>
    </div>
    <div className="prose dark:prose-invert prose-a:text-primary">
      <MDXRemote {...post} />
    </div>
  </main>;
}
export default BlogPost;

export {
  getStaticPaths,
  getStaticProps
};