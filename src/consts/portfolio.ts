import { Download, Github, Globe } from "lucide-react";
import { type ProjectCardData } from "~/types";

export const projectCategories = [
  "Node.js",
  "Python",
  "PHP",
  "WebAssembly",
  "React",
  "Next.js",
  "Vue.js",
  "Rust",
  "Laravel",
  "Electron",
  "Capacitor",
  "Postgres",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectCards: ProjectCardData<ProjectCategory[]>[] = [
  {
    title: "Polykey-CLI",
    description:
      "A CLI secrets management system that facilitates zero-trust workflows.",
    categories: ["Node.js"],
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
    categories: ["Vue.js", "Electron"],
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
    title: "Chip-8 Emulator (WebAssembly)",
    description: "A React Wrapper around a Chip-8 Emulator Written in Rust.",
    categories: ["React", "WebAssembly"],
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/chip-8-emu-wasm",
        icon: Github,
      },
      {
        text: "Demo",
        href: "https://amydev.me/chip-8-emu-wasm",
        icon: Globe,
      },
    ],
  },
  {
    title: "Chip-8 Emulator (Rust)",
    description: "A Chip-8 Interpreting Emulator Written in Rust.",
    categories: ["Rust"],
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
    title: "Twinleaf PTCG Wiki",
    description:
      "A community-driven wiki detailing the status of available cards in the Twinleaf online trading card game client built with Next.js, Prisma, and Postgres.",
    categories: ["React", "Next.js"],
    actions: [
      {
        text: "Demo",
        href: "https://twinleaf-gg-wiki.vercel.app/",
        icon: Globe,
      },
    ],
  },
  {
    title: "Exalta Launcher",
    description:
      "A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",
    categories: ["Rust"],
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
    title: "js-ws",
    description:
      "A Node.js WebSocket wrapper library that provides a multiplexed WebStreams API.",
    categories: ["Node.js"],
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
    categories: ["Node.js"],
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
    categories: ["Next.js", "Postgres"],
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
    title: "rxgithub",
    description:
      "A Rust Actix Web App to embed GitHub code snippets, images, gifs, videos, gists, & more on Discord, Slack, Telegram, Twitter, etc.",
    categories: ["Rust"],
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
    categories: ["Python"],
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
    categories: ["Laravel", "PHP"],
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
    categories: ["Node.js"],
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
    categories: ["Node.js", "Capacitor"],
    actions: [
      {
        text: "GitHub",
        href: "https://github.com/amydevs/TapeMobile",
        icon: Github,
      },
    ],
  },
];
