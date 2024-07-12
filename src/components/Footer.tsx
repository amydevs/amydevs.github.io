import * as React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { env } from "~/env";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0', className)} {...props}>
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <Image src="/favicon-32x32.png" width={32} height={32} alt="logo" />
        <p className="text-center text-md leading-loose md:text-left">
          Built by{" "}
          <Link className="underline text-primary" href={`https://github.com/${env.NEXT_PUBLIC_GH_USER}`}>
            { env.NEXT_PUBLIC_GH_USER }
          </Link>
          .
          The source code is available on{" "}
          <Link className="underline text-primary" href={`https://github.com/${env.NEXT_PUBLIC_GH_USER}/${env.NEXT_PUBLIC_GH_USER}.github.io`}>
            GitHub
          </Link>
          .
        </p>
      </div>
    </div>
  )
});

Footer.displayName = "Footer";

export default Footer;