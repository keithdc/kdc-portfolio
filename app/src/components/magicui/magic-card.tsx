/**
 * @file magic-card.tsx — Mouse-following spotlight card (Magic UI style)
 * @shared
 * @dependencies framer-motion
 */
import { useCallback, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

/** Card with a radial spotlight that follows the pointer. */
function MagicCard({
  children,
  className,
  gradientSize = 220,
  gradientColor = "rgba(184, 122, 75, 0.18)",
  gradientOpacity = 0.9,
  gradientFrom = "#B87A4B",
  gradientTo = "#2F5D62",
}: MagicCardProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [hovered, setHovered] = useState(false);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor},
      transparent 70%
    )
  `;

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const handleLeave = useCallback((): void => {
    setHovered(false);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative overflow-hidden rounded-[18px] border border-transparent",
        className,
      )}
      style={{
        background: `linear-gradient(var(--magic-card-bg, #fff) 0 0) padding-box,
          linear-gradient(135deg, ${gradientFrom}55, ${gradientTo}55) border-box`,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovered ? gradientOpacity : 0,
          background: spotlightBackground,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export { MagicCard };
