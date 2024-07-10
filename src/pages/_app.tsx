import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { useRouter } from "next/router";
import routes from "~/cfg/routes";
import Header from "~/components/Header";
import { cn } from "~/lib/utils";

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
    <div className={cn('flex min-h-screen flex-col', GeistSans.className)}>
      <div className="sticky auto-limit-w">
      <Header routes={newRoutes} className="w-full" />
      </div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
