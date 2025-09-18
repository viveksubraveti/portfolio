import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { NAVIGATION_SECTIONS } from "../config/links";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = NAVIGATION_SECTIONS.map((item) =>
            item.href.substring(1)
          );
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const viewportCenter = scrollY + windowHeight / 2;

          let activeSection = sections[0];

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top + scrollY;
              const elementBottom = elementTop + rect.height;

              if (
                viewportCenter >= elementTop &&
                viewportCenter <= elementBottom
              ) {
                activeSection = sectionId;
                break;
              }
            }
          }

          setActiveSection(activeSection);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <button
              onClick={() => scrollToSection("#about")}
              className='flex items-center hover:opacity-80 transition-opacity'
            >
              <Image
                src='/favicon.ico'
                alt='Vivek Subraveti Logo'
                width={40}
                height={40}
                className='rounded-lg'
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {NAVIGATION_SECTIONS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-lg font-bold transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side - Theme Toggle */}
          <div className='flex items-center space-x-4'>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-200 dark:border-gray-700'>
            <div className='flex flex-col space-y-2'>
              {NAVIGATION_SECTIONS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-left text-lg font-bold transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
