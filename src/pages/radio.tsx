import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "~/lib/utils";

const Radio = () => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = React.useState(true);

  // Make sure that the iFrame exists on SSR/SSG, only loading component when JS is available.
  React.useEffect(() => {
    setLoaded(ref.current?.contentDocument?.readyState === "complete");
  }, []);

  return (
    <div className="auto-limit-w flex min-h-[calc(100vh-5rem)] py-3">
      <div className="flex flex-1 overflow-hidden">
        {!loaded && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2
              -translate-y-1/2"
          >
            <LoaderCircle className="animate-spin text-primary" />
          </div>
        )}
        <iframe
          ref={ref}
          className={cn("flex-1 rounded-[12px]", !loaded && "invisible")}
          onLoad={() => {
            setLoaded(true);
          }}
          src={`https://open.spotify.com/embed/artist/15HdoPMP89EsIfIvN1coko?utm_source=generator&theme=0`}
          width="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default Radio;
