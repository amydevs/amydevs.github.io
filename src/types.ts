import type { LucideIcon } from "lucide-react";
import type { postFrontmatter } from "~/schemas";
import type * as z from "zod";

type Route = {
  name: string;
  path: string;
  currentPathRegex?: RegExp;
  current?: boolean;
};

type LinkWithIcon = {
  href: string;
  icon: LucideIcon;
  text: string;
};

type ProjectCardData<C extends string[] = string[]> = {
  title: string;
  description: string;
  categories?: C;
  actions: Array<LinkWithIcon>;
};

type Author = {
  name: string;
  picture: string;
};

type PostMetadata = z.infer<typeof postFrontmatter> & {
  slug: string;
};

type Post = {
  code: string;
  meta: PostMetadata;
};

export type { Route, LinkWithIcon, ProjectCardData, Author, PostMetadata, Post,  };
