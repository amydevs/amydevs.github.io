import { Github, Linkedin, Mail, Music } from "lucide-react";
import type { LinkWithIcon } from "~/types";

const firstName = "Amy";
const lastName = "Y";
const fullName = `${firstName} ${lastName}` as const;

const socialLinks: LinkWithIcon[] = [
    {
        text: "GitHub",
        href: "https://github.amydev.me",
        icon: Github,
    },
    {
        text: "Spotify",
        href: "https://spotify.amydev.me",
        icon: Music,
    },
    {
        text: "SoundCloud",
        href: "https://soundcloud.amydev.me",
        icon: Music,
    },
    {
        text: "Last.fm",
        href: "https://lastfm.amydev.me",
        icon: Music,
    },
    {
        text: "Email",
        href: "mailto:ayanamydev@gmail.com",
        icon: Mail,
    }
];

export { firstName, lastName, fullName, socialLinks };
