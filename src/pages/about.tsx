import { NextPage } from 'next'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { useQuery } from '@tanstack/react-query';

const About: NextPage = () => {
    const mkdwn = useQuery(["about"], async () => {
        const data = await fetch(`https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${process.env.GH_USERNAME}/master/README.md`);
        return data.text();
    })
    console.log()

    return (
        <div className="mt-20 auto-limit-w">
            <div className="card prose sm:p-12 dark:prose-invert prose-img:inline prose-img:m-0 max-w-full">
                {
                    mkdwn.data ? (
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {mkdwn.data}
                        </ReactMarkdown>
                    ) : (
                        <>Loading...</>
                    )
                }
            </div>
            
        </div>
    )
}

export default About;