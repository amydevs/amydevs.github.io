import type { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { env } from "~/env";
import rehypeRaw from "rehype-raw";
import * as he from "he";

async function getStaticProps() {
  const repo = `${env.NEXT_PUBLIC_GH_USER}/${env.NEXT_PUBLIC_GH_USER}`;
  const res = await fetch(
    `https://raw.githubusercontent.com/${repo}/master/README.md`,
  );
  let source = await res.text();

  for (const match of source.matchAll(
    /(?:<img.*?src=['"](.+?)['"])|(?:!\[.*?\]\((.+?)\))/gi,
  )) {
    let unescapedUrl = match.at(1) ?? match.at(2);
    if (unescapedUrl == null) {
      continue;
    }
    unescapedUrl = unescapedUrl.trim();
    source = source.replaceAll(unescapedUrl, he.decode(unescapedUrl));
  }

  const profileRes = await fetch(`https://github.com/${repo}`);
  const profile = await profileRes.text();
  for (const match of profile.matchAll(
    /src="(.*?)".*?data-canonical-src="(.*?)"/g,
  )) {
    if (match[1] == null || match[2] == null) {
      continue;
    }
    const camoUrl = he.decode(match[1].trim());
    const realUrl = he.decode(match[2].trim());
    source = source.replaceAll(realUrl, camoUrl);
  }

  const mdxSource = await serialize(source, {
    mdxOptions: { format: "md", rehypePlugins: [rehypeRaw] },
  });
  return { props: { mdxSource } };
}

function About({ mdxSource }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div
      suppressHydrationWarning
      className="auto-limit-w prose py-3 dark:prose-invert prose-img:m-0
        prose-img:inline"
    >
      <MDXRemote {...mdxSource} />
    </div>
  );
}

export default About;

export { getStaticProps };
