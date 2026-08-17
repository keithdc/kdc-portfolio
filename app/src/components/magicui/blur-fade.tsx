/**
 * @file blur-fade.tsx — Blur fade animation on scroll into view
 * @shared
 * @dependencies framer-motion
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}

/** Animates children with a blur + fade + slide effect on scroll into view. */
function BlurFade({
  children,
  className,
  duration = 0.45,
  delay = 0,
  yOffset = 10,
  inView = true,
  blur = "8px",
}: BlurFadeProps): React.JSX.Element {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: "-60px",
  });
  const isInView = !inView || inViewResult;

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
      animate={
        isInView
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: yOffset, opacity: 0, filter: `blur(${blur})` }
      }
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { BlurFade };
