import React from "react";
import { Card } from "./ui/card";
import { cn } from "~/lib/utils";

// TODO: fix imperative handles in this

const GlowCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    mousePos?: [number, number];
  }
>(({ children, mousePos, className, ...props }, ref) => {
  const [x, y] = mousePos ?? [-999999, -999999];
  const cardRef = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/refs
  const rect = cardRef.current?.getBoundingClientRect();
  React.useImperativeHandle(ref, () => cardRef.current!);

  return (
    <Card
      ref={cardRef}
      className={cn(
        `relative z-10 overflow-hidden transition-all after:absolute
        after:left-(--x) after:top-(--y) after:-z-10 after:h-400
        after:w-400 after:-translate-x-1/2 after:-translate-y-1/2
        after:bg-[radial-gradient(oklch(from_var(--foreground)_l_c_h/6%),#3984ff00_60%)]
        after:transition-[height,width] after:duration-700 after:ease-out
        after:content-['']
        dark:after:bg-[radial-gradient(oklch(from_var(--primary)_l_c_h/30%),#3984ff00_70%)]`,
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
