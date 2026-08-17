/**
 * @file ripple.tsx — Expanding ripple background (Magic UI)
 * @shared
 * @dependencies clsx, tailwind-merge
 */
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
  color?: string;
}

/** Expanding ripple circles for a dynamic background effect. */
function Ripple({
  mainCircleSize = 180,
  mainCircleOpacity = 0.22,
  numCircles = 7,
  className,
  color = "58, 90, 120",
}: RippleProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const circleSize = mainCircleSize + i * 64;
        const opacity = mainCircleOpacity - i * 0.025;
        return (
          <div
            key={`ripple-${String(i)}`}
            className="absolute animate-ripple rounded-full border"
            style={
              {
                "--i": i,
                width: `${String(circleSize)}px`,
                height: `${String(circleSize)}px`,
                opacity,
                animationDelay: `${String(i * 0.06)}s`,
                borderStyle: i === numCircles - 1 ? "dashed" : "solid",
                borderWidth: "1px",
                borderColor: `rgba(${color}, ${String((8 + i * 5) / 100)})`,
                backgroundColor: `rgba(${color}, 0.04)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

export { Ripple };
