import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote,  } from 'next-mdx-remote'
import { env } from "~/env";
import rehypeRaw from 'rehype-raw';

const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  const repo = `${env.NEXT_PUBLIC_GH_USER}/${env.NEXT_PUBLIC_GH_USER}`
  const res = await fetch(`https://raw.githubusercontent.com/${repo}/master/README.md`)
  const source = await res.text();

  const imageUrls = [];
  for (const match of source.matchAll(/<img.*?src=['"](.*?)['"]/gi)) {
    if (match[1] != null) {
      imageUrls.push(match[1].trim());
    }
  }

  const profileRes = await fetch(`https://github.com/${repo}`);
  const profile = await profileRes.text();
  for (const match of profile.matchAll(/src="(.*?)" data-canonical-src="(.*?)"/g)) {
    if (match[1] == null || match[2] == null) {
      continue;
    }
    const camoUrl = decodeURI(match[1].trim());
    const realUrl = decodeURI(match[2].trim());
    source.replace(realUrl, camoUrl);
  }

  const mdxSource = await serialize(source, { mdxOptions: { format: "md", rehypePlugins: [rehypeRaw] } })
  return { props: { mdxSource } }
};

function About({
  mdxSource
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div className="auto-limit-w py-3 prose dark:prose-invert prose-img:inline prose-img:m-0">
    <MDXRemote {...mdxSource} />
  </div>
}

export default About;

export {
  getStaticProps
};