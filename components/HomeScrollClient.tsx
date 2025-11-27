"use client";

import dynamic from "next/dynamic";

export default function HomeScrollClient() {
  const Hero = dynamic(() => import("./Hero"), { ssr: false });

  return (
    <main className="px-6">
      <Hero />
    </main>
  );
}
