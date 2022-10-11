import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Header from "components/header";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class">
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
