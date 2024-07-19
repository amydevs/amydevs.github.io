import React from "react";
import { Card } from "./ui/card";
import { cn } from "~/lib/utils";

const GlowCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    mousePos?: [number, number];
  }
>(({ children, mousePos, className, ...props }, ref) => {
  const [x, y] = mousePos ?? [-999999, -999999];
  const cardRef = React.useRef<HTMLDivElement>(null);
  const rect = cardRef.current?.getBoundingClientRect();

  React.useImperativeHandle(ref, () => cardRef.current!);

  return (
    <Card
      ref={cardRef}
      className={cn(
        `relative z-10 overflow-hidden transition-all after:absolute after:left-[var(--x)] after:top-[var(--y)] after:-z-10 after:h-[100rem] after:w-[100rem] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[radial-gradient(hsl(var(--primary)/10%),#3984ff00_70%)] after:transition-[height,width] after:duration-700 after:ease-out after:content-[''] dark:after:bg-[radial-gradient(hsl(var(--primary)/30%),#3984ff00_70%)]`,
        x < 0 && y < 0 && "after:h-0 after:w-0",
        className,
      )}
      style={
        {
          ...props.style,
          "--x": `${x - (rect?.left ?? 0)}px`,
          "--y": `${y - (rect?.top ?? 0)}px`,
        } as Record<string, string>
      }
      {...props}
    >
      {children}
    </Card>
  );
});

GlowCard.displayName = "GlowCard";

export default GlowCard;
