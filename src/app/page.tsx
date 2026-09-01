"use client";

import React, { useEffect } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import SolutionSection from "@/components/SolutionSection";
import IssueSection from "@/components/IssueSection";
import DefeatSection from "@/components/DefeatSection";
import HackFirstSection from "@/components/HackFirstSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import AwardsSection from "@/components/AwardsSection";
import StartedSection from "@/components/StartedSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { initHackFirstAnimations } from "@/lib/initAnimations";

export default function HomePage() {
  useEffect(() => {
    // Delay initialization slightly to allow fonts and layout to settle
    const timer = setTimeout(() => {
      initHackFirstAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="wrapper">
      <Loader />
      <Header isHome={true} />
      <HeroSection />
      <IntroductionSection />
      <SolutionSection />
      <IssueSection />
      <DefeatSection />

      {/* Floating Layout Indicators */}
      <div className="layout-title" data-layout="01">
        Solution
      </div>
      <div className="layout-title" data-layout="02">
        About
      </div>
      <div className="layout-title" data-layout="03">
        Technologies
      </div>
      <div className="layout-title" data-layout="04">
        Awards
      </div>

      <div className="layout-count" data-layout="01">
        01
      </div>
      <div className="layout-count" data-layout="02">
        02
      </div>
      <div className="layout-count" data-layout="03">
        03
      </div>
      <div className="layout-count" data-layout="04">
        04
      </div>

      <HackFirstSection />
      <AboutSection />
      <TechnologiesSection />
      <AwardsSection />
      <StartedSection />
      <Footer />
      <ScrollProgress />
    </main>
  );
}
