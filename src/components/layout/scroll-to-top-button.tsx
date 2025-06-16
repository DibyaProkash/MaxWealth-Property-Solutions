
"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') { // Ensure window is available
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Ensure window is defined
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisibility);
        // Call it once to set initial state based on current scroll position
        toggleVisibility(); 
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }
  }, []); // Empty dependency array, runs once on mount

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-28 right-6 z-[51] transition-all duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl', // Changed bottom-24 to bottom-28
        'hover:bg-primary/10',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
}
