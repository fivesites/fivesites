"use client";

import { motion, useTransform, MotionValue } from "motion/react";

interface TextCarouselProps {
  texts: string[];
  progress: MotionValue<number> | number; // allow number for testing
}

export default function TextCarousel({ texts, progress }: TextCarouselProps) {
  const activeIndex =
    typeof progress === "number"
      ? Math.floor(progress * texts.length)
      : useTransform(progress as MotionValue<number>, (v) =>
          Math.floor(v * texts.length)
        );

  const opacity = texts.map((_, i) =>
    typeof progress === "number"
      ? activeIndex === i
        ? 1
        : 0
      : useTransform(activeIndex as MotionValue<number>, (current) =>
          current === i ? 1 : 0
        )
  );

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center col-start-1 col-span-5 lg:col-start-4 lg:col-span-6">
      {texts.map((t, i) => (
        <motion.div
          key={i}
          style={{ opacity: opacity[i] }} // <--- use style for MotionValue
          transition={{ duration: 0.5, ease: "easeInOut" }} // smooth fade
          className="absolute text-foreground max-w-2xl text-center"
          dangerouslySetInnerHTML={{ __html: t }}
        />
      ))}
    </div>
  );
}
