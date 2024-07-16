import { type Route } from "~/types"

const routes: Route[] = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "Portfolio",
    pathname: "/portfolio",
  },
  {
    name: "Blog",
    pathname: "/blog",
    currentPathnameRegex: /\/blog(?:\/.*)?/,
  },
  {
    name: "About",
    pathname: "/about",
  },
  {
    name: "Radio",
    pathname: "/radio",
  }
];

export default routes;