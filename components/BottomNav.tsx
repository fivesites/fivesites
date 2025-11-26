"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useScrollSections } from "./ScrollContainer";

export default function BottomNav() {
  const { scrollRef, sectionRefs } = useScrollSections();

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const ballSize = 16;

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

  const dotCount = sectionRefs.length;
  const dotPositions = Array.from(
    { length: dotCount },
    (_, i) => (i * (containerWidth - ballSize)) / (dotCount - 1)
  );

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      // Relative top of each section inside the container
      const sectionTops = sectionRefs.map((ref) =>
        ref.current ? ref.current.offsetTop - container.offsetTop : 0
      );

      // Find nearest section
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

    // initialize
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef, sectionRefs, dotPositions, x]);

  const jumpToSection = (i: number) => {
    sectionRefs[i].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center pointer-events-none z-50">
      <div
        ref={containerRef}
        className="relative w-[100%] h-1 bg-gray-300 pointer-events-auto rounded-full"
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
              className="w-4 h-4 rounded-full bg-black hover:bg-black"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
