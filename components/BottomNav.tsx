"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useScrollSections } from "./ScrollContainer";

export default function BottomNav() {
  const { scrollRef, sectionRefs } = useScrollSections();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  const [containerWidth, setContainerWidth] = useState(0);
  const ballSize = 16;

  const dotCount = sectionRefs.length;
  const dotPositions = Array.from(
    { length: dotCount },
    (_, i) => (i * (containerWidth - ballSize)) / (dotCount - 1)
  );

  // Divide scroll into equal segments
  const sectionProgress = Array.from(
    { length: dotCount },
    (_, i) => i / (dotCount - 1)
  );

  const ballX = useTransform(scrollYProgress, sectionProgress, dotPositions);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) return;

    const container = scrollRef.current;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      const sectionTops = sectionRefs.map((ref) =>
        ref.current ? ref.current.offsetTop - container.offsetTop : 0
      );

      let nearestIndex = 0;
      let minDistance = Infinity;
      sectionTops.forEach((top, i) => {
        const distance = Math.abs(scrollTop - top);
        if (distance < minDistance) {
          nearestIndex = i;
          minDistance = distance;
        }
      });

      x.set(dotPositions[nearestIndex] || 0);
    };

    container.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef, sectionRefs, dotPositions, x]);

  const jumpToSection = (i: number) => {
    sectionRefs[i].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center pointer-events-none z-50 px-2">
      <div
        ref={containerRef}
        className="relative w-full h-0.5 bg-black pointer-events-auto "
      >
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-black  shadow-lg"
          style={{ x: springX }}
        />

        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between">
          {sectionRefs.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpToSection(i)}
              className="w-2 h-2  bg-black hover:bg-gray-500 transition-all cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
