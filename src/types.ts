import type { LucideIcon } from "lucide-react";
import type { postFrontmatter } from '~/schemas';
import type * as z from 'zod';

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

type Author = {
    name: string;
    picture: string;
}

type Post = {
    slug: string;
    frontmatter: z.infer<typeof postFrontmatter>;
    scope: Record<string, unknown>;
    compiledSource: string;
}

export type {
  Route,
  ProjectCardData,
  Author,
  Post,
}