import "~/styles/globals.css";
import type { AppType } from "next/app";
import { GeistSans } from "geist/font/sans";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { cn, filterUrlParams } from "~/lib/utils";
import Head from "next/head";
import routes from "~/cfg/routes";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { env } from "~/env";
import { fullName } from "~/cfg/consts";
import * as React from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const newRoutes = routes.map((e) => {
    const asPath = filterUrlParams(router.asPath);
    let current = e.path === asPath;
    if (e.currentPathRegex) {
      current = new RegExp(e.currentPathRegex).test(asPath);
    }
    return {
      ...e,
      current,
    };
  });
  const currentRoute = newRoutes.find((e) => e.current);
  const [atTop, setAtTop] = React.useState(true);

  const handleScroll = () => {
    setAtTop(window.scrollY === 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const title =
    (currentRoute == null ? "" : `${currentRoute.name} - `) + fullName;
  const image_src = `https://github.com/${env.NEXT_PUBLIC_GH_USER}.png`;
  const description = "Software Development and Music Production";
  const asPath = filterUrlParams(router.asPath);
  const canonicalUrl =
    asPath === "/"
      ? env.NEXT_PUBLIC_SITE_URL
      : new URL(asPath, env.NEXT_PUBLIC_SITE_URL).toString();
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:type" property="og:type" content="website" />

        <meta key="description" name="description" content={description} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />

        <link key="image_src" rel="image_src" href={image_src} />
        <meta key="og:image" property="og:image" content={image_src} />
        <meta key="twitter:image" name="twitter:image" content={image_src} />

        <meta
          key="content-language"
          httpEquiv="content-language"
          content="en-us"
        />
        <meta key="og:locale" property="og:locale" content="en_US" />

        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />

        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <link
          key="sitemap"
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className={cn("flex min-h-screen flex-col", GeistSans.className)}>
          <header className="sticky top-0 z-50">
            <Header
              suppressHydrationWarning
              routes={newRoutes}
              className={cn(
                "auto-limit-w shadow-lg transition-all xl:rounded-b-lg",
                atTop && "shadow-none",
              )}
            />
          </header>
          <Component {...pageProps} />
          <footer>
            <Footer className="auto-limit-w" />
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
