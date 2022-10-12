import type { NextPage } from "next";

import Donut from "components/Donut";
import ProjectCard from "components/ProjectCard";

import project_cards from "cfg/project_cards";
import Link from "next/link";
import IconButton from "components/IconButton";

const Portfolio: NextPage = () => {
    return(
        <div className="pt-16 pb-2">
            <div className="flex flex-wrap gap-3 p-3">
                {
                    project_cards.map((card, i) => {
                        return <ProjectCard key={i} {...card} />
                    })
                }
            </div>
            <Donut />
            <div className="text-center">
                Spinning Donut Code is by&nbsp;
                <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">
                    a1k0n
                </a>
            </div>
        </div>
    );
}

export default Portfolio;