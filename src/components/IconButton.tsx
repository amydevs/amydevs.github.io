import Icon from '@mdi/react';
import { NextPage } from  'next';
import Link from 'next/link';


export interface IconButtonProps {
    href: string,
    icon: string,
    text: string,
}

const IconButton: NextPage<IconButtonProps> = (props) => {
    return (
        <Link
            href={props.href}
        >
            <a className={styles.icon_button}>
                <Icon 
                    path={props.icon}
                    className={styles.mdi}
                />
                {props.text}
            </a>
        </Link>
    )
}

export default IconButton;