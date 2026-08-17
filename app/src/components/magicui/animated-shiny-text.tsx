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

/** Readable copper text with a light shine sweep. */
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
        "inline-flex items-center justify-center font-semibold text-[#8F5A32]",
        "bg-gradient-to-r from-[#8F5A32] via-[#D4A57A] to-[#8F5A32] bg-[length:var(--shiny-width)_100%] bg-clip-text text-transparent animate-shiny-text",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { AnimatedShinyText };
