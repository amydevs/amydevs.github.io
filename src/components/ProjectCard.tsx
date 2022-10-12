import { NextPage } from "next";

import IconButton, { IconButtonProps } from "./IconButton";

export interface ProjectCardProps {
    title: string,
    description: string,
    actions: IconButtonProps[]
}

const ProjectCard: NextPage<ProjectCardProps> = (props) => {
    return (
        <div className="card hover flex-1 sm:flex-[1_0_49.2%] min-h-[24vh]">
            <h1>
                {props.title}
            </h1>
            <div className="text-sm flex-1">
                {props.description}
            </div>
            <div className="flex self-end gap-1">
                {props.actions.map((action, i) => (
                    <IconButton key={i} {...action} />
                ))}
            </div>
        </div>
    )
};

export default ProjectCard;