/**
 * @file shimmer-button.tsx — Button with traveling shimmer edge
 * @shared
 * @dependencies clsx, tailwind-merge
 */
import { cn } from "@/lib/utils";
import type { CSSProperties, ComponentPropsWithoutRef } from "react";

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

/** A button with a shimmering light that travels around the perimeter. */
function ShimmerButton({
  shimmerColor = "#5C7D9A",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(58, 90, 120, 0.95)",
  className,
  children,
  ...props
}: ShimmerButtonProps): React.JSX.Element {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className,
      )}
      {...props}
    >
      <div className="-z-30 absolute inset-0 overflow-visible blur-[2px] [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      <div className="absolute inset-0 size-full rounded-2xl shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]" />
      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
    </button>
  );
}

export { ShimmerButton };
