import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import routes from "~/cfg/routes";
import MobileNavbar from "./MobileNavbar";
import { useRouter } from "next/router";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const router = useRouter();
  const navigation = routes.map(e => { 
    return {
      ...e,
      current: e.href == router.asPath
    };
  });
  
  return (<div
    ref={ref}
    className={cn('flex h-20 py-6 bg-background text-lg font-medium', className)}
    {...props}
  >
    <div>
      <Link className="hover:text-primary transition-all" href="/">
        Amy<span className="text-primary">!</span>
      </Link>
    </div>
    <MobileNavbar className="md:hidden" />
    <nav className="hidden md:flex ml-auto gap-6">
      {
        navigation.map((route, i) =>
          <Link
            className={cn("hover:text-primary transition-all", route.current && 'text-primary')}
            href={route.href}
            key={i}
            >
            {route.name}
          </Link>
        )
      }
    </nav>
  </div>)
})
Header.displayName = "Header"

export default Header;