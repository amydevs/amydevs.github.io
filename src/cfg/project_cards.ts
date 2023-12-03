import { ProjectCardProps } from "components/ProjectCard";

import { mdiGithub, mdiWeb, mdiDownload } from '@mdi/js';

const project_cards: ProjectCardProps[] = [
    {
        title: "Chip-8 Interpretting Emulator",
        description: "A Chip-8 Interpretting Emulator Written in Rust.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/chip-8-emu-rs',
                icon: mdiGithub
            }
        ]
    },
    {
        title: "SpinShare Desktop Client",
        description: "Former developer and translator for the SpinShare desktop client built with Vue.js and Electron.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/SpinShare/client",
                icon: mdiGithub
            },
            {
                text: "Download",
                href: "https://spinsha.re/client",
                icon: mdiDownload
            }
        ]
    },
    {
        title: "Exalta Launcher",
        description: "A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/amydevs/exalta-launcher",
                icon: mdiGithub
            },
            {
                text: "Download",
                href: "https://github.com/amydevs/exalta-launcher/releases/latest",
                icon: mdiDownload
            }
        ]
    },
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

export default project_cards;
