import * as React from "react";
import Link from "next/link";
import projectCards from "~/cfg/projectCards";
import { Button } from "~/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useScroll } from "~/contexts/ScrollProvider";
import GlowCard from "~/components/GlowCard";

function Portfolio() {
  const [mousePos, setMousePos] = React.useState<[number, number]>([
    -999999, -999999,
  ]);
  // for some reason this gets rid of issues with scrolling
  useScroll();

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos([e.clientX, e.clientY]);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="auto-limit-w grid grid-cols-1 gap-3 pt-1 md:grid-cols-2">
      {projectCards.map((card, i) => (
        <GlowCard
          className="flex h-72 flex-col hover:shadow-xl"
          key={i}
          mousePos={mousePos}
        >
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto">
            <div className="h-full w-full overflow-y-auto">
              {card.description}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3">
            {card.actions.map((action, i) => (
              <Button key={i} asChild>
                <Link href={action.href}>
                  <action.icon className="mr-1" />
                  {action.text}
                </Link>
              </Button>
            ))}
          </CardFooter>
        </GlowCard>
      ))}
    </main>
  );
}

export default Portfolio;
