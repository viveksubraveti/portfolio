"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateVisibility(); // set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg 
                 hover:bg-blue-700 hover:scale-110 transition-all duration-300 animate-fade-in'
    >
      <ArrowUp className='w-5 h-5' />
    </button>
  );
}
