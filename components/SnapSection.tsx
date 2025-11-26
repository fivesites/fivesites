"use client";

import React from "react";

interface SnapSectionProps {
  children: React.ReactNode;
}

export const SnapSection = React.forwardRef<HTMLDivElement, SnapSectionProps>(
  ({ children }, ref) => {
    return (
      <section
        ref={ref}
        className="w-full h-screen snap-center flex items-center justify-center"
      >
        {children}
      </section>
    );
  }
);

SnapSection.displayName = "SnapSection";
