"use client";

import BottomNav from "@/components/BottomNav";
import HeroSection1 from "@/components/Hero/HeroSection1";
import HeroSection2 from "@/components/Hero/HeroSection2";
import HeroSection3 from "@/components/Hero/HeroSection3";
import { ScrollContainer } from "./ScrollContainer";
import { SnapSection } from "./SnapSection";
import PrivacyPolicy from "./PrivacyPolicy";
import Imprint from "./Imprint";

export default function HomeScrollClient() {
  return (
    <>
      <ScrollContainer>
        <BottomNav />
        <SnapSection>
          <HeroSection1 />
        </SnapSection>
        <SnapSection>
          <HeroSection2 />
        </SnapSection>
        <SnapSection>
          <HeroSection3 />
        </SnapSection>

        <SnapSection>
          <Imprint />
        </SnapSection>
        <SnapSection>
          <PrivacyPolicy />
        </SnapSection>
        <SnapSection>
          <PrivacyPolicy />
        </SnapSection>
      </ScrollContainer>
    </>
  );
}
