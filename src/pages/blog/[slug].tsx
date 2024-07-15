import type { Post } from "~/types";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import { getPostBySlug, getPostSlugs } from '~/lib/ssg/utils';
import { MDXRemote } from "next-mdx-remote";
import rehypePrettyCode from 'rehype-pretty-code'
import { cn } from "~/lib/utils"
import Head from "next/head";

const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = (await getPostSlugs()).map((slug) => ({ params: { slug }}));
  return { paths, fallback: false };
}

const getStaticProps: GetStaticProps<{ post: Post }, { slug: string }> = async ({ params }) => {
  const { slug } = params!;
  const post = await getPostBySlug(slug, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, {
        theme: {
          dark: "github-dark-dimmed",
          light: "github-light",
        },
      } satisfies RehypePrettyCodeOptions]]
    }
  });
  return { props: { post } };
}

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <>
      <Head>
        <title key="title">{post.frontmatter.title}</title>
        <meta key="og:title" property="og:title" content={post.frontmatter.title} />
        <meta key="og:type"property="og:type" content="website" />
          
        <meta key="description" name="description" content={post.frontmatter.description} />
        <meta key="og:description" property="og:description" content={post.frontmatter.description} />
        <meta key="twitter:description" name="twitter:description" content={post.frontmatter.description} />

        {
          post.frontmatter.preview != null && (
            <>
              <link key="image_src" rel="image_src" href={post.frontmatter.preview} />
              <meta key="og:image" property="og:image" content={post.frontmatter.preview} />
              <meta key="twitter:image" name="twitter:image" content={post.frontmatter.preview} />
            </> 
          )
        }
      </Head>
      <main className="auto-limit-w max-w-5xl flex flex-col items-center">
        <div className="pt-32 pb-24 md:text-center">
          <div className="font-bold text-primary mb-4">
            { post.frontmatter.topic }
          </div>
          <h1 className="font-extrabold text-4xl">
            {post.frontmatter.title}
          </h1>
        </div>
        <div className={cn("prose dark:prose-invert prose-a:text-primary")}>
          <MDXRemote {...post} />
        </div>
      </main>
    </>
  );
}
export default BlogPost;

export {
  getStaticPaths,
  getStaticProps
};