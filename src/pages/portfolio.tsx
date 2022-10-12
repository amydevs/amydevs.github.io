import type { NextPage } from "next";

import Donut from "components/Donut";
import ProjectCard from "components/ProjectCard";

import project_cards from "cfg/project_cards";
import Link from "next/link";
import IconButton from "components/IconButton";

const Portfolio: NextPage = () => {
    return(
        <div className="pt-16 pb-2">
            <div className="flex flex-wrap gap-3 p-3 flex-col sm:flex-row">
                {
                    project_cards.map((card, i) => {
                        return (
                            <div key={i} className="card hover flex-1 sm:flex-[1_0_49.2%] min-h-[24vh]">
                                <h1>
                                    {card.title}
                                </h1>
                                <div className="text-sm flex-1">
                                    {card.description}
                                </div>
                                <div className="flex self-end gap-1">
                                    {card.actions.map((action, i) => (
                                        <IconButton key={i} {...action} />
                                    ))}
                                </div>
                            </div>
                        )
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