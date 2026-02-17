import { type InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { fullName } from "~/consts/about";
import GlowCard from "~/components/GlowCard";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { env } from "~/env";
import { getAllPostMetadata } from "~/lib/ssg/utils";
import { filterUrlParams, localeDateTimeStyle } from "~/lib/utils";

async function getStaticProps() {
  const posts = (await getAllPostMetadata()).map((post) => ({
    ...post,
    code: null,
  }));
  return { props: { posts } };
}

function BlogHome({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [blogCategories] = React.useState(
    () =>
      new Set(posts.reduce((acc, e) => [...acc, e.category], [] as string[])),
  );
  const [activatedCategories, setActivatedCategories] = React.useState(
    new Set<string>(),
  );
  const router = useRouter();
  const asPath = filterUrlParams(router.asPath);
  const [mousePos, setMousePos] = React.useState<[number, number]>([
    -999999, -999999,
  ]);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos([e.clientX, e.clientY]);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          key="rss"
          rel="alternate"
          type="application/rss+xml"
          title={`${fullName}'s Blog`}
          href={new URL(
            `${asPath}/rss.xml`,
            env.NEXT_PUBLIC_SITE_URL,
          ).toString()}
        />
      </Head>
      <main className="auto-limit-w space-y-1">
        <div className="flex gap-2 w-full overflow-scroll">
          {[...blogCategories].map((e, i) => (
            <Badge
              key={i}
              asChild
              className="cursor-pointer transition-all"
              variant={activatedCategories.has(e) ? "default" : "outline"}
            >
              <button
                onClick={() => {
                  const newActivatedCategories = new Set(activatedCategories);
                  if (newActivatedCategories.has(e)) {
                    newActivatedCategories.delete(e);
                  } else {
                    newActivatedCategories.add(e);
                  }
                  setActivatedCategories(newActivatedCategories);
                }}
              >
                {e}
              </button>
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 pt-1 md:grid-cols-2">
          {posts
            .filter((meta) => !meta.draft)
            .filter((e) =>
              activatedCategories.size === 0
                ? true
                : activatedCategories.has(e.category),
            )
            .map((meta, i) => (
              <Link key={i} href={`${asPath}/${meta.slug}`}>
                <GlowCard
                  className="flex h-72 flex-col hover:shadow-xl"
                  mousePos={mousePos}
                >
                  <CardHeader>
                    <CardTitle>{meta.title}</CardTitle>
                    <CardDescription>
                      Created On{" "}
                      <React.Suspense
                        fallback={new Date(meta.date)
                          .toLocaleDateString("en-US", {
                            timeZone: "UTC",
                            ...localeDateTimeStyle,
                          })
                          .replaceAll(",", "")}
                      >
                        {new Date(meta.date)
                          .toLocaleDateString("en-US", localeDateTimeStyle)
                          .replaceAll(",", "")}
                      </React.Suspense>
                    </CardDescription>
                    <div className="-mb-3">
                      <Badge>{meta.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto">
                    <div className="h-full w-full overflow-y-auto">
                      {meta.description}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <Button className="px-0" variant="link">
                      Read More
                    </Button>
                  </CardFooter>
                </GlowCard>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
}

export default BlogHome;

export { getStaticProps };
