import type { NextPage } from "next";

import ProjectCard from "components/ProjectCard";

import projectCards from "cfg/projectCards";
import bentoCards from "cfg/bentoCards";

import BentoCard from "components/BentoCard";
import { useEffect, useState, useRef } from "react";
import { cn } from "utils/cn";

const Portfolio: NextPage = () => {
    const bentoScrollWrapperRef = useRef<HTMLDivElement>(null);
    
    return(
        <div className="space-y-3">
            <div ref={bentoScrollWrapperRef} className="overflow-y-auto h-screen sm:h-fit pt-16 px-0 flex sm:block sm:auto-limit-w">
                <div className="min-w-[768px] sm:min-w-min flex-1 relative w-full aspect-video sm:rounded-lg overflow-hidden">
                    { bentoCards.map(({...props}, i) => <BentoCard key={i} {...props} />) }
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