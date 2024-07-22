import * as React from "react";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { env } from "~/env";
import { Cat } from "lucide-react";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `flex flex-col items-center justify-between gap-4 py-10 md:h-24·md:flex-row
        md:py-0`,
        className,
      )}
      {...props}
    >
      <div
        className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2
          md:px-0"
      >
        <Cat className="text-primary" width={32} height={32} />
        <p className="text-center leading-loose md:text-left">
          Built by{" "}
          <Link
            className="font-medium text-primary underline"
            href={`https://github.com/${env.NEXT_PUBLIC_GH_USER}`}
          >
            {env.NEXT_PUBLIC_GH_USER}
          </Link>{" "}
          with{" "}
          <Link
            className="font-medium text-primary underline"
            href={"https://nextjs.org/"}
          >
            next.js
          </Link>
          . The source code is available on{" "}
          <Link
            className="font-medium text-primary underline"
            href={`https://github.com/${env.NEXT_PUBLIC_GH_USER}/${env.NEXT_PUBLIC_GH_USER}.github.io`}
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
