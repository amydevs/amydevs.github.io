import { NextPage } from "next";

import IconButton, { IconButtonProps } from "./IconButton";

export interface ProjectCardProps {
    title: string,
    description: string,
    actions: IconButtonProps[]
}

const ProjectCard: NextPage<ProjectCardProps> = (props) => {
    return (
        <div className="card flex flex-col hover flex-1 min-w-full sm:min-w-[500px] min-h-[210px]">
            <h1>
                {props.title}
            </h1>
            <div className="text-sm flex-1">
                {props.description}
            </div>
            <div className="flex w-full self-end gap-1 flex-wrap justify-end">
                {props.actions.map((action, i) => (
                    <IconButton key={i} {...action} />
                ))}
            </div>
        </div>
    )
};

export default ProjectCard;