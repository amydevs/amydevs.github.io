import { ProjectCardProps } from "components/ProjectCard";

import { mdiGithub, mdiWeb, mdiDownload } from '@mdi/js';

const projectCards: ProjectCardProps[] = [
    {
        title: "js-ws",
        description: "A Node.js WebSocket wrapper library that provides a multiplexed WebStreams API.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/MatrixAI/js-ws",
                icon: mdiGithub
            }
        ]
    },
    {
        title: "js-mdns",
        description: "A Node.js mDNS responder implementation written in Typescript.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/MatrixAI/js-mdns",
                icon: mdiGithub
            }
        ]
    },
    {
        title: "YirrgayConnect",
        description: "A Twitter-like social media platform focused on interactive multimedia and community-driven content moderation built using Next.js, Postgres, and Tailwind. Created as a Engineers Without Borders project for university.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/amydevs/yirrgay-connect",
                icon: mdiGithub
            },
            {
                text: "Demo",
                href: "https://yirrgayconnect.vercel.app",
                icon: mdiWeb
            }
        ]
    },
    {
        title: "SRXDCustomLeaderboard",
        description: "A third-party open-source private leaderboard client and server built with Next.js and React for SRXD.",
        actions: [
            {
                text: "GitHub (Server)",
                href: "https://github.com/SRXDModdingGroup/SRXDCustomLeaderboardServer",
                icon: mdiGithub
            },
            {
                text: "GitHub (Client)",
                href: "https://github.com/SRXDModdingGroup/SRXDCustomLeaderboard",
                icon: mdiGithub
            }
        ]
    },
    {
        title: "MaebeeTV Website Rewrite",
        description: "The landing page for MaebeeTV rewritten in Next.js and React extended with team management features.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/maebeetv',
                icon: mdiGithub
            },
            {
                text: "Website",
                href: 'https://maebeetv.vercel.app',
                icon: mdiWeb
            }
        ]
    },
    {
        title: "rxgithub",
        description: "A Rust Actix Web App to embed GitHub code snippets, images, gifs, videos, gists, & more on Discord, Slack, Telegram, Twitter, etc.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/rxgithub',
                icon: mdiGithub
            }
        ]
    },
    {
        title: "SRXDBepInExInstaller",
        description: "A installer for the modding framework BepInEx for the game Spin Rhythm XD written in Python and Tkinter.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/SRXDModdingGroup/SRXDBepInExInstaller',
                icon: mdiGithub
            }
        ]
    },
    {
        title: "Simple Australian Tax Calculator",
        description: "A simple tax calculator for the Australian taxation system. Built with Laravel and PHP.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/TaxCalculatorLaravel',
                icon: mdiGithub
            }
        ]
    },
    {
        title: "TapeSync",
        description: "A modification for the productivity and organization application Tape, to enable synchronization of items between different systems using existing sync services.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/TapeSync',
                icon: mdiGithub
            }
        ]
    },
    {
        title: "TapeMobile",
        description: "A modification for the productivity and organization application Tape, that ports it to mobile devices and the PWA platform.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/TapeMobile',
                icon: mdiGithub
            }
        ]
    }
]

export default projectCards;
