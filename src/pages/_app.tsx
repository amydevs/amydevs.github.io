import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Header from "components/Header";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollHandler from "components/ScrollHandler";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ScrollHandler />
            <ThemeProvider attribute="class">
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default MyApp;
