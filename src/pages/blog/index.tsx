import { type InferGetStaticPropsType } from "next";
import Link from "next/link";
import * as React from "react";
import GlowCard from "~/components/GlowCard";
import { CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { useScroll } from "~/contexts/ScrollProvider";
import { getAllPosts } from "~/lib/ssg/utils";

const getStaticProps = async () => {
  const posts = (await getAllPosts()).map((post) => ({
    ...post,
    compiledSource: null,
  }));
  return { props: { posts } };
}

function BlogHome({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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
    
  return <main className="auto-limit-w grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
    {
      posts.map((post, i) => 
        <Link key={i} href={`/blog/${post.slug}`}>
          <GlowCard className="h-72 flex flex-col hover:shadow-xl" mousePos={mousePos}>
            <CardHeader>
              <CardTitle>{post.frontmatter.title}</CardTitle>
              <CardDescription>
                Created On {new Date(post.frontmatter.date).toDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {post.frontmatter.description}
            </CardContent>
          </GlowCard>
        </Link>
      )
    }
  </main>;
}

export default BlogHome;

export {
  getStaticProps
}