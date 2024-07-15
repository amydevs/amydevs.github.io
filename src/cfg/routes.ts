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
    name: "About",
    pathname: "/about",
  },
  {
    name: "Blog",
    pathname: "/blog",
    currentPathnameRegex: /\/blog(?:\/.*)?/,
  },
  {
    name: "Radio",
    pathname: "/radio",
  }
];

export default routes;