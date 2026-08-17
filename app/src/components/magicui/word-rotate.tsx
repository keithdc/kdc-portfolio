/**
 * @file word-rotate.tsx — Vertical word rotation (Magic UI)
 * @shared
 * @dependencies framer-motion
 */
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

/** Cycles through words with a vertical fade/slide. */
function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 18 },
    transition: { duration: 0.28, ease: "easeOut" },
  },
  className,
}: WordRotateProps): React.JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => window.clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-0.5">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index] ?? "empty"}
          className={cn("inline-block", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export { WordRotate };
