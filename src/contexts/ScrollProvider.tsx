import * as React from "react";

const ScrollContext = React.createContext<[number, number]>([0, 0]);

function ScrollProvider({ children }: { children: JSX.Element }) {
  const [scrollPosition, setScrollPosition] = React.useState<[number, number]>([
    0, 0,
  ]);
  const handleScroll = () => {
    document.documentElement.setAttribute("scrollX", `${window.scrollX}`);
    document.documentElement.setAttribute("scrollY", `${window.scrollY}`);
    setScrollPosition([window.scrollX, window.scrollY]);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ScrollContext.Provider value={scrollPosition}>
      {children}
    </ScrollContext.Provider>
  );
}

const useScroll = () => React.useContext(ScrollContext);

export default ScrollProvider;

export { ScrollContext, useScroll };
