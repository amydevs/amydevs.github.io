import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import Header from "~/components/Header";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={cn('flex min-h-screen flex-col', GeistSans.className)}>
      <div className="sticky auto-limit-w">
      <Header className="w-full" />
      </div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
