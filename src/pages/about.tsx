import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote,  } from 'next-mdx-remote'
import { env } from "~/env";
import rehypeRaw from 'rehype-raw';

const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  const res = await fetch(`https://raw.githubusercontent.com/${env.NEXT_PUBLIC_GH_USER}/${env.NEXT_PUBLIC_GH_USER}/master/README.md`)
  const source = await res.text();
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