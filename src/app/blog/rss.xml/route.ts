export const dynamic = "force-static";

import { getAllPostMetadata } from "~/lib/ssg/utils";
import { env } from "~/env";
import Rss from "rss";

export async function GET() {
    const blogSlug = "blog";
    const posts = await getAllPostMetadata();

    const rss = new Rss(
        {
            title: "Amy's Blog",
            description:
                "A small blog about software development, music production, queer identity, and sometimes writing.",
            feed_url: new URL(
                `${blogSlug}/rss.xml`,
                env.NEXT_PUBLIC_SITE_URL,
            ).toString(),
            site_url: new URL(blogSlug, env.NEXT_PUBLIC_SITE_URL).toString(),
            pubDate: new Date(),
        },
        posts.map((post) => ({
            date: post.date,
            title: post.title,
            description: post.description,
            url: new URL(
                `${blogSlug}/${post.slug}`,
                env.NEXT_PUBLIC_SITE_URL,
            ).toString(),
            author: env.NEXT_PUBLIC_GH_USER,
            categories: [post.category],
        })),
    );

    return new Response(rss.xml({ indent: true }), {
        headers: {
            "Content-Type": "application/rss+xml",
        },
    });
}