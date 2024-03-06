import type { NextPage } from "next";

import ProjectCard from "components/ProjectCard";

import projectCards from "cfg/projectCards";
import bentoCards from "cfg/bentoCards";

import BentoCard from "components/BentoCard";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import { cn } from "utils/cn";

const Portfolio: NextPage = () => {
    const bentoScrollWrapperRef = useRef<HTMLDivElement>(null);
    const [ bentoScroll, setBentoScroll ] = useState<number | undefined>(undefined);
    useEffect(() => {
        setBentoScroll(0);
        const scrollHandler = () => {
            setBentoScroll(bentoScrollWrapperRef.current?.scrollLeft || 0);
        };
        window.addEventListener('resize', scrollHandler);
        bentoScrollWrapperRef.current?.addEventListener('scroll', scrollHandler);
        () => {
            window.removeEventListener('resize', scrollHandler);
            bentoScrollWrapperRef.current?.removeEventListener('scroll', scrollHandler);
        }
    }, []);
    
    return(
        <div className="space-y-3">
            <div className="pt-16 px-0 sm:auto-limit-w">
                <div className="relative overflow-hidden">
                    <div ref={bentoScrollWrapperRef} className={cn(bentoScroll != null && "focus-within:overflow-x-hidden", "overflow-x-auto h-[calc(100vh-4rem)] sm:h-fit flex sm:block peer")}>
                        <div className="min-w-[768px] sm:min-w-min flex-1 relative w-full aspect-video sm:rounded-lg overflow-hidden">
                            { bentoCards.map(({...props}, i) => <BentoCard scrollY={bentoScroll} key={i} {...props} />) }
                        </div>
                    </div>
                    <ArrowLeftCircleIcon className="absolute z-10 right-8 -top-12 peer-focus-within:top-8 text-white h-12 w-12 rounded-full bg-slate-950/50 cursor-pointer transition-all" />
                </div>
            </div>
            <div className="pb-2 auto-limit-w space-y-3">
                <div className="flex flex-wrap gap-3">
                    {
                        projectCards.map((card, i) => {
                            return <ProjectCard key={i} {...card} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;