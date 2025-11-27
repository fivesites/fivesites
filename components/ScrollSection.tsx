"use client";

import { useScroll, MotionValue, motion } from "motion/react";
import { useRef } from "react";

interface ScrollSectionProps {
  children:
    | React.ReactNode
    | ((progress: MotionValue<number>) => React.ReactNode);
  className?: string;
}

export default function ScrollSection({
  children,
  className,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll({ target: ref, offset: ["start start", "end end"] });

  if (typeof children === "function") {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        ref={ref}
        className={className}
      >
        {children(scroll.scrollYProgress)}
      </motion.section>
    );
  }

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
