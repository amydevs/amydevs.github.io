import Link from "next/link";
import * as React from "react";
import { cn } from "~/lib/utils";
import MobileNavbar from "./MobileNavbar";
import { type Route } from "~/types";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    routes: Array<Route>
  }
>(({ routes, className, ...props }, ref) => {
  const [mobileEnable, setMobileEnable] = React.useState(false);
  const router = useRouter();
  
  React.useEffect(() => {
    const routeChangeHandler = () => {
      setMobileEnable(false);
    };
    router.events.on('routeChangeStart', routeChangeHandler);
    return () => router.events.off('routeChangeStart', routeChangeHandler);
  }, [router.events]);

  return (<div
    ref={ref}
    className={cn('flex h-20 py-6 bg-background text-lg font-medium z-50', className)}
    {...props}
  >
    <div>
      <Link className="hover:text-primary transition-all" href="/">
        Amy<span className="text-primary">!</span>
      </Link>
    </div>

    <MobileNavbar routes={routes} className={cn("md:hidden -z-10 max-h-screen", !mobileEnable && "-top-full transition-all")} />
    <div className="md:hidden ml-auto">
      <Button
        variant="link"
        size="icon"
        className={cn("transition-all", mobileEnable && "rotate-90 text-primary")}
        onClick={() => setMobileEnable(!mobileEnable)}
      >
        <Menu height={24} width={24} />
      </Button>
    </div>
    
    <nav className="hidden md:flex ml-auto gap-6">
      {
        routes.map((route, i) =>
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