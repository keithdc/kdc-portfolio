/**
 * @file orbiting-circles.tsx — Icons orbiting on circular paths (Magic UI)
 * @shared
 * @dependencies react
 */
import React from "react";
import { cn } from "@/lib/utils";
import type { ReactNode, CSSProperties } from "react";

interface OrbitingCirclesProps {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

/** Circles of children that orbit along a circular path around the parent center. */
function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 36,
  speed = 1,
}: OrbitingCirclesProps): React.JSX.Element {
  const calculatedDuration = duration / speed;
  const childArray = React.Children.toArray(children);
  const count = Math.max(childArray.length, 1);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
          aria-hidden="true"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {childArray.map((child, index) => {
        const angle = (360 / count) * index;
        return (
          <div
            key={`orbit-${String(index)}`}
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${String(iconSize)}px`,
                width: iconSize,
                height: iconSize,
                animationDirection: reverse ? "reverse" : "normal",
              } as CSSProperties
            }
            className={cn(
              "absolute top-1/2 left-1/2 z-[1] flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full",
              "ml-[calc(var(--icon-size)/-2)] mt-[calc(var(--icon-size)/-2)]",
              className,
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export { OrbitingCircles };
