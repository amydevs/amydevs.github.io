import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function filterUrlParams(url: string): string {
  return url.split("?", 2)[0]!.split("#", 2)[0]!;
}

const localeDateTimeStyle = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
} as const;

export { cn, filterUrlParams, localeDateTimeStyle };
