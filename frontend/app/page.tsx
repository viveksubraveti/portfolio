"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FadeInSection from "./components/FadeInSection";
import Terminal from "./components/Terminal";

export default function SimplePortfolio() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 pt-16 transition-colors">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>

        {/* Interactive Terminal */}
        <FadeInSection delay={300}>
          <section className="py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 text-center">
                Try it out
              </p>
              <Terminal />
            </div>
          </section>
        </FadeInSection>

        <div className="section-divider" />

        <FadeInSection delay={200}>
          <WorkSection />
        </FadeInSection>

        <div className="section-divider" />

        <FadeInSection delay={200}>
          <EducationSection />
        </FadeInSection>

        <div className="section-divider" />

        <FadeInSection delay={200}>
          <ProjectsSection />
        </FadeInSection>

        <div className="section-divider" />

        <FadeInSection delay={200}>
          <SkillsSection />
        </FadeInSection>

        <div className="section-divider" />

        <FadeInSection delay={200}>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
