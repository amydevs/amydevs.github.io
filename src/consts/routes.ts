import { type Route } from "~/types";

const routes: Route[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Blog",
    path: "/blog",
    currentPathRegex: /\/blog(?:\/.*)?/,
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Radio",
    path: "/radio",
  },
];

export default routes;
