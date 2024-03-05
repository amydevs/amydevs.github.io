import type { BentoCardProps } from "components/BentoCard";

const bentoCards: BentoCardProps[] = [
    {
        title: "Polykey-CLI",
        description: "A CLI secrets management system that facilitates zero-trust workflows.",
        href: "https://github.com/MatrixAI/Polykey-cli",
        image: "/bento/polykey.gif",
        className: "top-0 left-0 w-3/5 h-1/2"
    },
    {
        title: "Spinshare Client",
        description: "Former developer and translator for the SpinShare desktop client built with Vue.js and Electron.",
        href: "https://spinsha.re/client",
        image: "/bento/spinshare.png",
        className: "top-0 right-0 w-2/5 h-1/2"
    },
    {
        title: "Exalta Launcher",
        description: "A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",
        href: "https://github.com/amydevs/exalta-launcher",
        image: "/bento/exalta.png",
        className: "bottom-0 left-0 w-2/5 h-1/2"
    },
    {
        title: "Chip-8 Emulator",
        description: "A Chip-8 Interpretting Emulator Written in Rust.",
        href: "https://github.com/amydevs/chip-8-emu-rs",
        image: "/bento/chip8.png",
        className: "bottom-0 right-0 w-3/5 h-1/2"
    }
];

export default bentoCards;