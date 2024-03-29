import * as React from "react";
import Image from 'next/image';
import { cn } from "utils/cn";
import Link from "next/link";

export type BentoCardProps = {
    title: string;
    description: string;
    image: string;
    href: string;
    scrollY?: number;
    className?: string;
};

const BentoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BentoCardProps
>(({ className, title, description, image, href, scrollY, ...props }, ref) => {
    return (
        <div ref={ref} className={cn('group/bento-card focus:w-full focus:h-full focus:z-10 z-0 absolute transition-all cursor-pointer', className)} tabIndex={0} {...props}>
            <style jsx>{`
                .group\/bento-card:focus .bento-text {
                    left: ${scrollY}px;
                }
            `}</style>
            <div className={cn(scrollY != null && "group-focus/bento-card:max-w-[100vw]", "bento-text absolute h-1/2 w-full bottom-0 bg-gradient-to-t from-gray-950 to-gray-400/0 flex items-end text-white")}>
                <div className="m-4">
                    <h3 className="bento-title">
                        <Link className="decoration-primary underline" href={href}>{ title }</Link>
                    </h3>
                    <p className="transition-all overflow-hidden max-h-0 group-focus/bento-card:max-h-screen">
                        { description }
                    </p>
                </div>
            </div>
            <Image alt={`${title} Screenshot`} width={1280} height={720} className="h-full w-full object-left-top object-cover" src={image} />
        </div>
    );
});

BentoCard.displayName = "BentoCard";

export default BentoCard;