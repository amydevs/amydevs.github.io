import { Github, Linkedin, Mail, Music } from "lucide-react";
import type { LinkWithIcon } from "~/types";

const firstName = "Amy";
const lastName = "Y";
const fullName = `${firstName} ${lastName}` as const;

const socialLinks: LinkWithIcon[] = [
    {
        text: "GitHub",
        href: "github.amydev.me",
        icon: Github,
    },
    {
        text: "Spotify",
        href: "spotify.amydev.me",
        icon: Music,
    },
    {
        text: "SoundCloud",
        href: "soundcloud.amydev.me",
        icon: Music,
    },
    {
        text: "Email",
        href: "mailto:ayanamydev@gmail.com",
        icon: Mail,
    }
];

export { firstName, lastName, fullName, socialLinks };
