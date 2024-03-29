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
        (<Link href={props.href} className="action icon">

            <Icon 
                path={props.icon}
                className="h-6"
            />
            {props.text}

        </Link>)
    );
}

export default IconButton;