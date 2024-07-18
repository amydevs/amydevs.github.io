import type { Options as MDXOptions } from '@mdx-js/esbuild'
import type { GetStaticPathsResult, InferGetStaticPropsType } from "next";
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import * as React from "react";
import { getPostBySlug, getPostSlugs } from '~/lib/ssg/utils';
import { getMDXComponent } from "mdx-bundler/client";
import rehypePrettyCode from 'rehype-pretty-code'
import { cn, localeDateTimeStyle } from "~/lib/utils"
import Head from "next/head";
import { env } from "~/env";
import { useRouter } from 'next/router';

type Params = { slug: string };

async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
  const paths = (await getPostSlugs()).map((slug) => ({ params: { slug }}));
  return { paths, fallback: false };
}

async function getStaticProps({ params }: { params: Params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug, {
    mdxOptions: (options: MDXOptions) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [
          rehypePrettyCode,
          {
            theme: {
              dark: "github-dark-dimmed",
              light: "github-light",
            },
          } satisfies RehypePrettyCodeOptions
        ]
      ];
      return options;
    },
  });
  return { props: { post } };
}

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const Component = React.useMemo(() => getMDXComponent(post.code), [post.code]);
  const lastModified = post.frontmatter.lastModified ?? post.frontmatter.date;

  const jsonLd = React.useRef(
    JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      "headline": post.frontmatter.title,
      "author": {
        "@type": "Person",
        "name": env.NEXT_PUBLIC_GH_USER
      },
      "genre": post.frontmatter.category,
      "dateCreated": new Date(post.frontmatter.date).toISOString(),
      "dateUpdated": new Date(lastModified).toISOString(),
      "description": post.frontmatter.description,
      "url": new URL(router.asPath, env.NEXT_PUBLIC_SITE_URL).toString(),
      "inLanguage ": "en-US",
      "image": post.frontmatter.preview,
      "keywords": post.frontmatter.keywords,
    })
  );

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

        <meta key="keywords" name="keywords" content={post.frontmatter.keywords.join(", ")} />
        <meta key="author" name="author" content={env.NEXT_PUBLIC_GH_USER} />
        <meta key="category" name="category" content={post.frontmatter.category} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd.current }} />
      </Head>
      <main className="auto-limit-w max-w-5xl flex flex-col items-center">
        <div className="pt-32 pb-24 md:text-center">
          <div className="font-bold text-primary mb-4">
            { post.frontmatter.category }
          </div>
          <h1 className="font-extrabold text-4xl">
            {post.frontmatter.title}
          </h1>
        </div>
        <article suppressHydrationWarning className={cn("prose dark:prose-invert prose-a:text-primary w-full")}>
          <Component />
        </article>
        <div className="prose dark:prose-invert w-full mt-5 italic">
          <p>
            Created{" "}
            <time
              className="font-medium"
              dateTime={new Date(post.frontmatter.date).toISOString()}
            >
              <React.Suspense
                fallback={
                  new Date(post.frontmatter.date)
                    .toLocaleDateString(
                      "en-US",
                      { timeZone: "UTC", ...localeDateTimeStyle }
                    )
                    .replaceAll(",", "")
                }
              >
                {
                  new Date(post.frontmatter.date)
                    .toLocaleDateString('en-US', localeDateTimeStyle)
                    .replaceAll(",", "")
                }
              </React.Suspense>
            </time>
          </p>
          <p>
            Updated{" "}
            <time
              className="font-medium"
              dateTime={new Date(lastModified).toISOString()}
            >
              <React.Suspense
                fallback={
                  new Date(lastModified)
                    .toLocaleDateString(
                      "en-US",
                      { timeZone: "UTC", ...localeDateTimeStyle }
                    )
                    .replaceAll(",", "")
                }
              >
                {
                  new Date(lastModified)
                    .toLocaleDateString('en-US', localeDateTimeStyle)
                    .replaceAll(",", "")
                }
              </React.Suspense>
            </time>
          </p>
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