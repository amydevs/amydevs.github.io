import type { Options as MDXOptions } from "@mdx-js/esbuild";
import type { GetStaticPathsResult, InferGetStaticPropsType } from "next";
import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code";
import * as React from "react";
import { getPostBySlug, getPostSlugs } from "~/lib/ssg/utils";
import { getMDXComponent } from "mdx-bundler/client";
import rehypePrettyCode from "rehype-pretty-code";
import { cn, filterUrlParams, localeDateTimeStyle } from "~/lib/utils";
import Head from "next/head";
import { env } from "~/env";
import { useRouter } from "next/router";

type Params = { slug: string };

async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
  const paths = (await getPostSlugs()).map((slug) => ({ params: { slug } }));
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
          } satisfies RehypePrettyCodeOptions,
        ],
      ];
      return options;
    },
  });
  return { props: { post } };
}

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const Component = React.useMemo(
    () => getMDXComponent(post.code),
    [post.code],
  );
  const lastModified = post.meta.lastModified ?? post.meta.date;

  const jsonLd = React.useRef(
    JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      headline: post.meta.title,
      author: {
        "@type": "Person",
        name: env.NEXT_PUBLIC_GH_USER,
      },
      genre: post.meta.category,
      dateCreated: new Date(post.meta.date).toISOString(),
      dateModified: new Date(lastModified).toISOString(),
      description: post.meta.description,
      url: new URL(
        filterUrlParams(router.asPath),
        env.NEXT_PUBLIC_SITE_URL,
      ).toString(),
      "inLanguage ": "en-US",
      image: post.meta.preview,
      keywords: post.meta.keywords,
    }),
  );

  return (
    <>
      <Head>
        <title key="title">{post.meta.title}</title>
        <meta key="og:title" property="og:title" content={post.meta.title} />
        <meta key="og:type" property="og:type" content="website" />

        <meta
          key="description"
          name="description"
          content={post.meta.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={post.meta.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={post.meta.description}
        />

        {post.meta.preview != null && (
          <>
            <link key="image_src" rel="image_src" href={post.meta.preview} />
            <meta
              key="og:image"
              property="og:image"
              content={post.meta.preview}
            />
            <meta
              key="twitter:image"
              name="twitter:image"
              content={post.meta.preview}
            />
          </>
        )}

        <meta
          key="keywords"
          name="keywords"
          content={post.meta.keywords.join(", ")}
        />
        <meta key="author" name="author" content={env.NEXT_PUBLIC_GH_USER} />
        <meta key="category" name="category" content={post.meta.category} />

        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd.current }}
        />
      </Head>
      <main className="auto-limit-w flex max-w-5xl flex-col items-center">
        <div className="pb-24 pt-32 md:text-center">
          <div className="mb-4 font-bold text-primary">
            {post.meta.category}
          </div>
          <h1 className="text-4xl font-extrabold">{post.meta.title}</h1>
        </div>
        <article
          suppressHydrationWarning
          className={cn("prose w-full dark:prose-invert prose-a:text-primary")}
        >
          <Component />
        </article>
        <div className="prose mt-5 w-full italic dark:prose-invert">
          <p>
            Created{" "}
            <time
              className="font-medium"
              dateTime={new Date(post.meta.date).toISOString()}
            >
              <React.Suspense
                fallback={new Date(post.meta.date)
                  .toLocaleDateString("en-US", {
                    timeZone: "UTC",
                    ...localeDateTimeStyle,
                  })
                  .replaceAll(",", "")}
              >
                {new Date(post.meta.date)
                  .toLocaleDateString("en-US", localeDateTimeStyle)
                  .replaceAll(",", "")}
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
                fallback={new Date(lastModified)
                  .toLocaleDateString("en-US", {
                    timeZone: "UTC",
                    ...localeDateTimeStyle,
                  })
                  .replaceAll(",", "")}
              >
                {new Date(lastModified)
                  .toLocaleDateString("en-US", localeDateTimeStyle)
                  .replaceAll(",", "")}
              </React.Suspense>
            </time>
          </p>
        </div>
      </main>
    </>
  );
}
export default BlogPost;

export { getStaticPaths, getStaticProps };
