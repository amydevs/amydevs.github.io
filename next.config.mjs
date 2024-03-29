// @ts-check
import { env } from "./src/env/server.mjs";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
    return config;
}

const type = process.env.npm_lifecycle_event === "export" || process.env.type === "export";

export default defineNextConfig({
    env: {
        GH_USERNAME: "amydevs"
    },
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
    // i18n: {
    //   locales: ["en"],
    //   defaultLocale: "en",
    // },
    images: {
        domains: [
            "github.com"
        ],
        unoptimized: true,
    }
});
