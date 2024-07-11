import Link from "next/link";
import * as React from "react";
import { cn } from "~/lib/utils";
import MobileNavbar from "./MobileNavbar";
import { type Route } from "~/types";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), { ssr: false });

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
    router.events.on('routeChangeComplete', routeChangeHandler);
    return () => router.events.off('routeChangeComplete', routeChangeHandler);
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
        variant="ghost"
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
      <ThemeSwitch>
        {
          (theme) => (
            <Button onClick={() => theme.setTheme(theme.resolvedTheme == "dark" ? "light" : "dark")} className="-translate-y-1 hover:text-primary" variant="ghost" size="icon">
              {
                theme.resolvedTheme == "dark" ? <Sun height={24} width={24} /> : <Moon height={24} width={24} />
              }
            </Button>
          )
        }
      </ThemeSwitch>
      
    </nav>
  </div>)
})
Header.displayName = "Header"

export default Header;