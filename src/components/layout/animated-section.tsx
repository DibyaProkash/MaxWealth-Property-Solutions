
"use client";

import type { ReactNode } from 'react';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-100', 'delay-200'
}

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    if (node) {
      observer.current = new IntersectionObserver(([firstEntry]) => {
        if (firstEntry.isIntersecting) {
          setEntry(firstEntry);
          // Optionally unobserve after first intersection if animation should only play once
          // observer.current?.unobserve(node); 
        }
      }, options);
      observer.current.observe(node);
    }

    return () => observer.current?.disconnect();
  }, [node, options]);

  return [setNode, entry] as const;
};

export default function AnimatedSection({ children, className, delay = '' }: AnimatedSectionProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Animation plays once
  });
  
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        delay,
        className,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {children}
    </div>
  );
}
