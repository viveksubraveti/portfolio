"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FadeInSection from "./components/FadeInSection";

export default function SimplePortfolio() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-gray-100 dark:bg-gray-900 pt-12 transition-colors'>
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        <FadeInSection delay={200}>
          <WorkSection />
        </FadeInSection>
        <FadeInSection delay={400}>
          <EducationSection />
        </FadeInSection>
        <FadeInSection delay={600}>
          <SkillsSection />
        </FadeInSection>
        <FadeInSection delay={800}>
          <CertificationSection />
        </FadeInSection>
        <FadeInSection delay={1000}>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
