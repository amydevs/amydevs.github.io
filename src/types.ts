import type { LucideIcon } from "lucide-react";

type Route = {
    name: string;
    href: string;
    current?: boolean;
}

type ProjectCardData = {
    title: string;
    description: string;
    actions: Array<{
        href: string;
        icon: LucideIcon;
        text: string;
    }>
};

export type {
    Route,
    ProjectCardData
}