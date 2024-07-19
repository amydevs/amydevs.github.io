import { type InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import GlowCard from "~/components/GlowCard";
import { Button } from "~/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { useScroll } from "~/contexts/ScrollProvider";
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
  const router = useRouter();
  const asPath = filterUrlParams(router.asPath);
  const [mousePos, setMousePos] = React.useState<[number, number]>([-999999, -999999]);
  // for some reason this gets rid of issues with scrolling
  useScroll();
    
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos([e.clientX, e.clientY]);
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
    
  return <>
    <Head>
      <link
        key="rss"
        rel="alternate"
        type="application/rss+xml"
        title="Amy's Blog"
        href={new URL(`/${asPath}/rss.xml`, env.NEXT_PUBLIC_SITE_URL).toString()}
      />
    </Head>
    <main className="auto-limit-w grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
      {
        posts
          .filter((meta) => !meta.draft)
          .map((meta, i) => 
            <Link key={i} href={`${asPath}/${meta.slug}`}>
              <GlowCard className="h-72 flex flex-col hover:shadow-xl" mousePos={mousePos}>
                <CardHeader>
                  <CardTitle>{meta.title}</CardTitle>
                  <CardDescription>
                    Created On{" "}
                    <React.Suspense
                      fallback={
                        new Date(meta.date)
                          .toLocaleDateString(
                            "en-US",
                            { timeZone: "UTC", ...localeDateTimeStyle }
                          )
                          .replaceAll(",", "")
                      }
                    >
                      {
                        new Date(meta.date)
                          .toLocaleDateString('en-US', localeDateTimeStyle)
                          .replaceAll(",", "")
                      }
                    </React.Suspense>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                  <div className="h-full w-full overflow-y-auto">
                    {meta.description}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button className="px-0" variant="link">Read More</Button>
                </CardFooter>
              </GlowCard>
            </Link>
          )
      }
    </main>
  </>;
}

export default BlogHome;

export {
  getStaticProps
}