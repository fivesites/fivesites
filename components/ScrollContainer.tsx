"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { SnapSection } from "./SnapSection";

interface ScrollContextType {
  progress: number;
  scrollToSection: (index: number) => void;
  sectionRefs: React.RefObject<HTMLDivElement | null>[];
  scrollRef: React.RefObject<HTMLDivElement> | null;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollSections = () => {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error("useScrollSections must be used inside ScrollContainer");
  return context;
};

interface ScrollContainerProps {
  children: ReactNode;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const [progress, setProgress] = useState(0);

  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement[];
  // Initialize sectionRefs with a ref for each child that is a SnapSection
  const sectionRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    childrenArray.map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollTop / scrollHeight);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (i: number) => {
    sectionRefs.current[i]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const childrenWithRefs = childrenArray.map((child, i) => {
    if (!React.isValidElement(child)) return child;

    if ((child.type as any).displayName === "SnapSection") {
      const childWithRef = child as React.ReactElement<
        React.ComponentPropsWithRef<typeof SnapSection>
      >;
      return React.cloneElement(childWithRef, {
        ref: sectionRefs.current[i],
      });
    }

    return child;
  });

  return (
    <ScrollContext.Provider
      value={{
        progress,
        scrollToSection,
        sectionRefs: sectionRefs.current,
        scrollRef: containerRef,
      }}
    >
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      >
        {childrenWithRefs}
      </div>
    </ScrollContext.Provider>
  );
};
