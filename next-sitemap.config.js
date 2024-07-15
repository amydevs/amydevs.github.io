/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://amydev.me',
    generateRobotsTxt: true,
    outDir: './out',
}

export default config;