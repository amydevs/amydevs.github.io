import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { useRouter } from "next/router";
import routes from "~/cfg/routes";
import Header from "~/components/Header";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";

import "~/styles/globals.css";
import { Route } from "~/types";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  let currentRoute: Route | undefined;
  const newRoutes = routes.map((e) => { 
    const route = {
      ...e,
      current: e.href === router.pathname
    };
    if (route.current) {
      currentRoute = route;
    }
    return route;
  });

  const title = "Amy" + (currentRoute ? " - " + currentRoute.name : "");
  const image_src = `https://github.com/${process.env.GH_USERNAME}.png`;
  const description = "Software Development and Music Production";
  
  return (
    <>
      <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />

          <link rel="image_src" href={image_src} />
          <meta property="og:image" content={image_src} />
          <meta name="twitter:image" content={image_src} />

          <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default MyApp;
