import type { LucideIcon } from "lucide-react";
import type { postFrontmatter } from '~/schemas';
import type * as z from 'zod';

type Route = {
    name: string;
    pathname: string;
    currentPathnameRegex?: RegExp;
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

type PostMetadata = z.infer<typeof postFrontmatter> & {
    slug: string;
}

type Post = {
    code: string;
    meta: PostMetadata;
}

export type {
  Route,
  ProjectCardData,
  Author,
  PostMetadata,
  Post,
}