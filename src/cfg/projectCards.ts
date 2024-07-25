import { Download, Github, Globe } from "lucide-react";
import { type ProjectCardData } from "~/types";

const projectCards: ProjectCardData[] = [
  {
    title: "Polykey-CLI",
    description:
      "A CLI secrets management system that facilitates zero-trust workflows.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/MatrixAI/Polykey-cli",
        icon: Github,
      },
    ],
  },
  {
    title: "SpinShare Client",
    description:
      "Former developer and translator for the SpinShare desktop client built with Vue.js and Electron.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/SpinShare/client",
        icon: Github,
      },
      {
        text: "Download",
        href: "https://spinsha.re/client",
        icon: Download,
      },
    ],
  },
  {
    title: "Exalta Launcher",
    description:
      "A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/exalta-launcher",
        icon: Github,
      },
      {
        text: "Download",
        href: "https://github.com/amydevs/exalta-launcher/releases/latest",
        icon: Download,
      },
    ],
  },
  {
    title: "Chip-8 Emulator",
    description: "A Chip-8 Interpreting Emulator Written in Rust.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/chip-8-emu-rs",
        icon: Github,
      },
      {
        text: "Download",
        href: "https://github.com/amydevs/chip-8-emu-rs/releases/latest",
        icon: Download,
      },
    ],
  },
  {
    title: "js-ws",
    description:
      "A Node.js WebSocket wrapper library that provides a multiplexed WebStreams API.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/MatrixAI/js-ws",
        icon: Github,
      },
    ],
  },
  {
    title: "js-mdns",
    description:
      "A Node.js mDNS responder implementation written in Typescript.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/MatrixAI/js-mdns",
        icon: Github,
      },
    ],
  },
  {
    title: "YirrgayConnect",
    description:
      "A Twitter-like social media platform focused on interactive multimedia and community-driven content moderation built using Next.js, Postgres, and Tailwind. Created as a Engineers Without Borders project for university.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/yirrgay-connect",
        icon: Github,
      },
      {
        text: "Demo",
        href: "https://yirrgayconnect.vercel.app",
        icon: Globe,
      },
    ],
  },
  {
    title: "SRXDCustomLeaderboard",
    description:
      "A third-party open-source private leaderboard client and server built with Next.js and React for SRXD.",
    actions: [
      {
        text: "GitHub (Server)",
        href: "https://github.com/SRXDModdingGroup/SRXDCustomLeaderboardServer",
        icon: Github,
      },
      {
        text: "GitHub (Client)",
        href: "https://github.com/SRXDModdingGroup/SRXDCustomLeaderboard",
        icon: Github,
      },
    ],
  },
  {
    title: "rxgithub",
    description:
      "A Rust Actix Web App to embed GitHub code snippets, images, gifs, videos, gists, & more on Discord, Slack, Telegram, Twitter, etc.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/rxgithub",
        icon: Github,
      },
    ],
  },
  {
    title: "SRXDBepInExInstaller",
    description:
      "A installer for the modding framework BepInEx for the game Spin Rhythm XD written in Python and Tkinter.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/SRXDModdingGroup/SRXDBepInExInstaller",
        icon: Github,
      },
    ],
  },
  {
    title: "Simple Australian Tax Calculator",
    description:
      "A simple tax calculator for the Australian taxation system. Built with Laravel and PHP.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/TaxCalculatorLaravel",
        icon: Github,
      },
      {
        text: "Website",
        href: "https://autaxcalc.fly.dev",
        icon: Globe,
      },
    ],
  },
  {
    title: "TapeSync",
    description:
      "A modification for the productivity and organization application Tape, to enable synchronization of items between different systems using existing sync services.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/TapeSync",
        icon: Github,
      },
    ],
  },
  {
    title: "TapeMobile",
    description:
      "A modification for the productivity and organization application Tape, that ports it to mobile devices and the PWA platform.",
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/TapeMobile",
        icon: Github,
      },
    ],
  },
];

export default projectCards;
