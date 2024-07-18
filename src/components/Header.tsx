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
    routes: Array<Route>,
    onThemeChange?: (theme: string) => void
      }
      >(({ routes, className, onThemeChange, ...props }, ref) => {
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
          className={cn('flex h-20 py-6 bg-background text-lg font-medium z-50', className, mobileEnable && 'shadow-none')}
          {...props}
        >
          <div>
            <Link className="hover:text-primary transition-all" href="/">
              Amy<span className="text-primary">!</span>
            </Link>
          </div>

          <MobileNavbar
            routes={routes}
            onThemeChange={(theme) => {
              onThemeChange?.(theme);
              setMobileEnable(false);
            }}
            className={cn("md:hidden -z-10 max-h-screen fixed auto-limit-w inset-0 top-20 transition-all", !mobileEnable && "-top-full")}
          />
          <div className="md:hidden ml-auto">
            <button
              className={cn("transition-all w-9 h-9 flex justify-center items-center -translate-y-1", mobileEnable && "rotate-90 text-primary")}
              onClick={() => setMobileEnable(!mobileEnable)}
              title="Toggle Nav Menu"
              aria-controls="menu"
              aria-expanded={mobileEnable}
              role="switch"
              aria-checked={mobileEnable}
            >
              <Menu height={24} width={24} />
            </button>
          </div>
    
          <nav className="hidden md:flex ml-auto gap-6">
            {
              routes.map((route, i) =>
                <Link
                  className={cn("hover:text-primary transition-all", route.current && 'text-primary')}
                  href={route.pathname}
                  key={i}
                >
                  {route.name}
                </Link>
              )
            }
            <ThemeSwitch>
              {
                (theme) => (
                  <Button
                    onClick={() => {
                      const newTheme = theme.resolvedTheme == "dark" ? "light" : "dark";
                      theme.setTheme(newTheme);
                      onThemeChange?.(newTheme);
                    }}
                    className="-translate-y-1 hover:text-primary"
                    variant="ghost"
                    size="icon"
                    title="Toggle Theme"
                    role="switch"
                    aria-checked={theme.resolvedTheme == "dark"}
                  >
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