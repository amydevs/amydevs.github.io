import { NextPage } from 'next'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { useQuery } from '@tanstack/react-query';

const About: NextPage = () => {
    const mkdwn = useQuery(["about"], async () => {
        const data = await fetch(`https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${process.env.GH_USERNAME}/master/README.md`);
        return data.text();
    })

    return (
        <div className="pt-20 px-8 sm:px-32">
            <div className='card'>
                {
                    mkdwn.data && (
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {mkdwn.data}
                        </ReactMarkdown>
                    )
                }
            </div>
        </div>
    )
}

export default About;