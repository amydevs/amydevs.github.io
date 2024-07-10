import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import routes from "~/cfg/routes";

const MobileNavbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('fixed inset-0 top-20 bg-background auto-limit-w', className)}
    {...props}
  >
    <nav className="flex flex-col gap-6">
      {
        routes.map((route, i) => <Link className="hover:text-primary transition-all" href={route.href} key={i}>{route.name}</Link>)
      }
    </nav>
  </div>
))
MobileNavbar.displayName = "MobileNavbar"

export default MobileNavbar;