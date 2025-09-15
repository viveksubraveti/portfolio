"use client";

import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";

export default function SimplePortfolio() {
  return (
    <main className='min-h-screen bg-gray-900 pt-12'>
      <HeroSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <CertificationSection />
      <ContactSection />
    </main>
  );
}
