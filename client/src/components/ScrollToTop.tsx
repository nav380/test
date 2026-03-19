/**
 * Scroll to Top Button Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * Features: Appears after scrolling down, smooth scroll to top
 */

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#a20504] border border-[#e8e8e8] flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(162,5,4,0.1)] animate-bounce-gentle"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-[#1a0000]" />
    </button>
  );
}
