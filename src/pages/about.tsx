import { GetStaticProps, InferGetStaticPropsType } from 'next'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const getStaticProps = (async () => {
    const res = await fetch(`https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${process.env.GH_USERNAME}/master/README.md`)
    const markdown = await res.text();
    return { props: { markdown } }
}) as GetStaticProps<{
    markdown: string
}>;

const About = ({
    markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="mt-20 mb-4 auto-limit-w">
            <div className="card prose sm:p-12 dark:prose-invert prose-img:inline prose-img:m-0 max-w-full">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default About;