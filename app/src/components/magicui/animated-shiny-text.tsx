/**
 * @file animated-shiny-text.tsx — Shimmering text highlight (Magic UI)
 * @shared
 * @dependencies clsx, tailwind-merge
 */
import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

/** Readable steel text with a light shine sweep. */
function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps): React.JSX.Element {
  return (
    <span
      style={
        {
          "--shiny-width": `${String(shimmerWidth)}px`,
        } as CSSProperties
      }
      className={cn(
        "inline-flex items-center justify-center font-semibold text-[#2A4359]",
        "bg-gradient-to-r from-[#2A4359] via-[#5C7D9A] to-[#2A4359] bg-[length:var(--shiny-width)_100%] bg-clip-text text-transparent animate-shiny-text",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { AnimatedShinyText };
