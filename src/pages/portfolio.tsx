import * as React from "react";
import Link from "next/link";
import { projectCards, projectCategories } from "~/consts/portfolio";
import { Button } from "~/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import GlowCard from "~/components/GlowCard";
import { Badge } from "~/components/ui/badge";

function Portfolio() {
  const [activatedCategories, setActivatedCategories] = React.useState(new Set<typeof projectCategories[number]>());

  const [mousePos, setMousePos] = React.useState<[number, number]>([
    -999999, -999999,
  ]);

  React.useEffect(() => {
    const mouseEventCb = (e: MouseEvent) => {
      setMousePos([e.clientX, e.clientY]);
    };
    window.addEventListener("mousemove", mouseEventCb, { passive: true });
    return () => {
      window.removeEventListener("mousemove", mouseEventCb);
    };
  }, []);

  return (
    <main className="auto-limit-w space-y-1">
      <div className="flex gap-2 w-full overflow-scroll">
        {
          projectCategories.map((e) => <Badge asChild
            className="cursor-pointer transition-all"
            variant={activatedCategories.has(e) ? "default" : "outline"}
          >
            <button
              onClick={() => {
                const newActivatedCategories = new Set(activatedCategories);
                !newActivatedCategories.has(e) ? newActivatedCategories.add(e) : newActivatedCategories.delete(e);
                setActivatedCategories(newActivatedCategories);
              }}
            >
              {e}
            </button>
          </Badge>)
        }
      </div>
      <div className="grid grid-cols-1 gap-3 pt-1 md:grid-cols-2">
        {projectCards
          .filter((e) => {
            if (activatedCategories.size == 0) return true;
            for (const c of e.categories ?? []) {
              if (activatedCategories.has(c)) return true;
            }
          })
          .map((card, i) => (
            <GlowCard
              className="flex h-72 flex-col hover:shadow-xl"
              key={i}
              mousePos={mousePos}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <div className="flex gap-2 -mb-3 mt-2">
                  {
                    card.categories?.map((e) => <Badge>{e}</Badge>)
                  }
                </div>
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
      </div>
    </main>
  );
}

export default Portfolio;
