export const routes: Route[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Portfolio",
        path: "/portfolio",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Radio",
        path: "/radio",
    },
    {
        name: "RotMG Stuff",
        path: "https://rotmg-mirror.github.io/",
    }
]

export interface Route {
    name: string,
    path: string
}