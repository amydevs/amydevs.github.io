import "~/styles/globals.css";
import type { AppType } from "next/app";
import type { Route } from "~/types";
import { GeistSans } from "geist/font/sans";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { cn } from "~/lib/utils";
import Head from "next/head";
import routes from "~/cfg/routes";
import Header from "~/components/Header";
import ScrollProvider from "~/contexts/ScrollProvider";
import Footer from "~/components/Footer";
import { env } from "~/env";

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
  const image_src = `https://github.com/${env.NEXT_PUBLIC_GH_USER}.png`;
  const description = "Software Development and Music Production";
  
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:type"property="og:type" content="website" />
          
        <meta key="description" name="description" content={description} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="twitter:description" name="twitter:description" content={description} />

        <link key="image_src" rel="image_src" href={image_src} />
        <meta key="og:image" property="og:image" content={image_src} />
        <meta key="twitter:image" name="twitter:image" content={image_src} />

        <meta key="content-language" http-equiv="content-language" content="en-us" />
        <meta key="og:locale" property="og:locale" content="en_US" />

        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ScrollProvider>
          <div className={cn('flex min-h-screen flex-col', GeistSans.className)}>
            <header className="sticky top-0 z-50">
              <Header suppressHydrationWarning routes={newRoutes} className="auto-limit-w xl:rounded-b-lg transition-all scroll-y-[0]:shadow-none shadow-lg" />
            </header>
            <Component {...pageProps} />
            <footer>
              <Footer className="auto-limit-w" />
            </footer>
          </div>
        </ScrollProvider>
      </ThemeProvider>  
    </>
  );
};

export default MyApp;
