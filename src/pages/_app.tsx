import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { useRouter } from "next/router";
import routes from "~/cfg/routes";
import Header from "~/components/Header";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const newRoutes = routes.map((e) => { 
    return {
      ...e,
      current: e.href == router.asPath
    };
  });
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={cn('flex min-h-screen flex-col', GeistSans.className)}>
        <div className="sticky top-0 z-50">
          <Header suppressHydrationWarning routes={newRoutes} className="auto-limit-w md:rounded-bl md:rounded-br" />
        </div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
