export const routes: Route[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Portfolio",
        href: "/portfolio",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Radio",
        href: "/radio",
    },
    {
        name: "RotMG Stuff",
        href: "https://rotmg-mirror.github.io/",
    }
]

export interface Route {
    name: string,
    href: string,
    current?: boolean
}