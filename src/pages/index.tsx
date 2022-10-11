import IconButton from "components/IconButton";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SocialLinks from 'cfg/social'

const Home: NextPage = () => {
    return (
        <div className="min-h-screen flex flex-col p-8 lg:px-32 space-y-6">
            <div className="flex-1 flex flex-col justify-around items-center text-center gap-2 sm:min-h-fit min-h-screen pt-8">
                <div className="pfp">
                    <Image width="460" height="460" layout='intrinsic' alt="PFP" src={`https://github.com/${process.env.GH_USERNAME}.png`} />
                </div>
                <div className="text-2xl">Hi, I&apos;m <span className="text-primary">Amy</span>. A student based in Australia who likes to mess around with music stuff. <br /> Here&apos;s a lil page for my accounts.</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {
                    SocialLinks.map((link, i) => {
                        return (
                            <IconButton key={i} {...link} />
                        )
                    })
                }
            </div>
        </div>
        
    );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
    name,
    description,
    documentation,
}: TechnologyCardProps) => {
    return (
        <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <a
                className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
                href={documentation}
                target="_blank"
                rel="noreferrer"
            >
                Documentation
            </a>
        </section>
    );
};
