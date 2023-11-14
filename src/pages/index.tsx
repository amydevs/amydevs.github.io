import IconButton from "components/IconButton";
import type { NextPage } from "next";
import Image from "next/image";
import SocialLinks from 'cfg/social'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Spinner from "components/Spinner";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const [pfpLoaded, setPfpLoaded] = useState(true);
    useEffect(() => {
        setPfpLoaded(false); 
    }, []);

    return (
        <div className="min-h-screen flex flex-col px-8 pb-8 lg:px-32 space-y-6">
            <div className="flex-1 flex flex-col justify-around items-center text-center gap-2 pt-16 sm:min-h-fit min-h-screen">
                <div className="relative grid overflow-hidden rounded-full shadow hover:shadow-lg transition-all ease-in-out">
                    <div 
                        className="absolute h-full w-full flex items-center justify-center"
                    >   
                        <Spinner className={`fill-primary ${pfpLoaded && "hidden"}`} />
                    </div>
                    <Image className={`${!pfpLoaded && "opacity-0"} transition-all`} onLoad={() => setPfpLoaded(true)} width="460" height="460" alt="PFP" src={`https://github.com/${process.env.GH_USERNAME}.png`} />
                </div>
                <div>
                    <span className="text-3xl">Hi, I&apos;m <span className="text-primary">Amy</span>.</span> <br />
                    <span className="text-2xl">I&apos;m a software engineer and computer science student based in Australia.</span><br /> 
                </div>
                <div className="p-3 sm:hidden">
                    <div className="h-6" />
                </div>
                <Link
                    href="/#social"
                    className="action p-3 rounded-full sm:hidden absolute bottom-8">

                    <ArrowDownIcon height="24px" />

                </Link>
            </div>
            <div id="social" className="flex flex-wrap items-center justify-center gap-3">
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
