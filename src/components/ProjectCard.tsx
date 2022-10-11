import { NextPage } from "next";
import styles from 'styles/components/ProjectCard.module.scss';

import IconButton, { IconButtonProps } from "./IconButton";

export interface ProjectCardProps {
    title: string,
    description: string,
    actions: IconButtonProps[]
}

const ProjectCard: NextPage<ProjectCardProps> = (props) => {
    return (
        <div className={styles.card}>
            <span className='title'>{props.title}</span>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.actions}>
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