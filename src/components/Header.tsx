import Link from "next/link";
import * as React from "react";
import { cn } from "~/lib/utils";
import MobileNavbar from "./MobileNavbar";
import { type Route } from "~/types";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { firstName } from "~/cfg/consts";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), { ssr: false });

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    routes: Array<Route>;
    onThemeChange?: (theme: string) => void;
  }
>(({ routes, className, onThemeChange, ...props }, ref) => {
  const [mobileEnable, setMobileEnable] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const routeChangeHandler = () => {
      setMobileEnable(false);
    };
    router.events.on("routeChangeComplete", routeChangeHandler);
    return () => router.events.off("routeChangeComplete", routeChangeHandler);
  }, [router.events]);

  return (
    <>
      <div
        ref={ref}
        className={cn(
          `z-50 flex h-20 dark:bg-[hsl(var(--background)/50%)]
          bg-[hsl(var(--background)/75%)] backdrop-blur-lg py-6 text-lg
          font-medium transition-all`,
          className,
          mobileEnable && "shadow-none bg-background dark:bg-background",
        )}
        {...props}
      >
        <div>
          <Link className="transition-all hover:text-primary" href="/">
            {firstName}
            <span className="text-primary">!</span>
          </Link>
        </div>

        <div className="ml-auto md:hidden">
          <button
            className={cn(
              `flex h-9 w-9 -translate-y-1 items-center justify-center
              transition-all`,
              mobileEnable && "rotate-90 text-primary",
            )}
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

        <nav className="ml-auto hidden gap-6 md:flex">
          {routes.map((route, i) => (
            <Link
              className={cn(
                "transition-all hover:text-primary",
                route.current && "text-primary",
              )}
              href={route.path}
              key={i}
            >
              {route.name}
            </Link>
          ))}
          <ThemeSwitch>
            {(theme) => (
              <Button
                onClick={() => {
                  const newTheme =
                    theme.resolvedTheme == "dark" ? "light" : "dark";
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
                {theme.resolvedTheme == "dark" ? (
                  <Sun height={24} width={24} />
                ) : (
                  <Moon height={24} width={24} />
                )}
              </Button>
            )}
          </ThemeSwitch>
        </nav>
      </div>
      <MobileNavbar
        routes={routes}
        onThemeChange={(theme) => {
          onThemeChange?.(theme);
          setMobileEnable(false);
        }}
        className={cn(
          `auto-limit-w fixed inset-0 top-20 -z-10 max-h-screen transition-all
          md:hidden`,
          !mobileEnable && "-top-full",
        )}
      />
    </>
  );
});
Header.displayName = "Header";

export default Header;
