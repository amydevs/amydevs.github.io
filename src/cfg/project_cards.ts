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
        title: "Simple Australian Tax Calculator",
        description: "A simple tax calculator for the Australian taxation system. Built with Laravel and PHP.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/amydevs/TaxCalculatorLaravel',
                icon: mdiGithub
            },
            {
                text: "Demo",
                href: 'https://austaxcalc.000webhostapp.com/',
                icon: mdiWeb
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
        title: "SRXDCustomLeaderboard",
        description: "A third-party open-source private leaderboard client and server for SRXD.",
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
        title: "Exalta Launcher",
        description: "A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/amydevs/exalta",
                icon: mdiGithub
            },
            {
                text: "Download",
                href: "https://github.com/amydevs/exalta/releases/latest",
                icon: mdiDownload
            }
        ]
    }
]

export default project_cards;
