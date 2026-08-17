/**
 * @file text-animate.tsx — Word/character text entrance animations (Magic UI)
 * @shared
 * @dependencies framer-motion
 */
import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "slideUp"
  | "slideLeft"
  | "scaleUp";

interface TextAnimateProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const itemVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.35 },
    },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(8px)", y: 16 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.4 },
    },
  },
  slideUp: {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  },
  slideLeft: {
    hidden: { x: 16, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.35 } },
  },
  scaleUp: {
    hidden: { scale: 0.92, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 16, stiffness: 260 },
    },
  },
};

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

function TextAnimateBase({
  children,
  className,
  segmentClassName,
  delay = 0,
  duration = 0.35,
  as = "p",
  by = "word",
  startOnView = true,
  once = true,
  animation = "blurInUp",
}: TextAnimateProps): React.JSX.Element {
  const MotionTag = motionTags[as];
  let segments: string[] = [];
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/);
      break;
    case "character":
      segments = children.split("");
      break;
    case "line":
      segments = children.split("\n");
      break;
    default:
      segments = [children];
  }

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: Math.max(duration / Math.max(segments.length, 1), 0.03),
      },
    },
  };

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      whileInView={startOnView ? "show" : undefined}
      animate={startOnView ? undefined : "show"}
      viewport={{ once }}
      aria-label={children}
      className={cn("whitespace-pre-wrap", className)}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={`${by}-${segment}-${String(i)}`}
          variants={itemVariants[animation]}
          custom={i * staggerTimings[by]}
          className={cn(
            by === "line" ? "block" : "inline-block whitespace-pre",
            segmentClassName,
          )}
          aria-hidden
        >
          {segment}
        </motion.span>
      ))}
    </MotionTag>
  );
}

const TextAnimate = memo(TextAnimateBase);

export { TextAnimate };
