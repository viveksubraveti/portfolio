"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";

export default function SimplePortfolio() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-gray-100 dark:bg-gray-900 pt-12 transition-colors'>
        <HeroSection />
        <WorkSection />
        <EducationSection />
        <SkillsSection />
        <CertificationSection />
        <ContactSection />
      </main>
    </>
  );
}
