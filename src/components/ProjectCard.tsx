import { NextPage } from "next";

import IconButton, { IconButtonProps } from "./IconButton";

export interface ProjectCardProps {
    title: string,
    description: string,
    actions: IconButtonProps[]
}

const ProjectCard: NextPage<ProjectCardProps> = (props) => {
    return (
        <div className="card">
            <span className='title'>{props.title}</span>
            <div className="">{props.description}</div>
            <div className="">
                { 
                    props.actions.map((action, i) => {
                        return <IconButton key={i} {...action}></IconButton>
                    })
                }
            </div>
        </div>
    )
};

export default ProjectCard;