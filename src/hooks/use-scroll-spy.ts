
"use client";

import { useState, useEffect, useRef } from 'react';

interface ScrollSpyOptions {
  sectionIds: string[];
  offset?: number; // Offset from the top of the viewport
  rootMargin?: string; // For IntersectionObserver
}

export function useScrollSpy({ sectionIds, offset = 0, rootMargin = "0px 0px -50% 0px" }: ScrollSpyOptions): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<Map<string, HTMLElement | null>>(new Map());

  useEffect(() => {
    // Clear previous elements and observer if sectionIds change
    sectionElementsRef.current.clear();
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        sectionElementsRef.current.set(id, element);
      }
    });

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const elementsToObserve = Array.from(sectionElementsRef.current.values()).filter(el => el !== null) as HTMLElement[];

    if (elementsToObserve.length === 0) {
      // If no elements found (e.g., on a different page), clear active section
      setActiveSection(null);
      return;
    }
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        let currentActiveSection: string | null = null;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find which section this entry corresponds to
            for (const [id, element] of sectionElementsRef.current.entries()) {
              if (element === entry.target) {
                currentActiveSection = id;
                break;
              }
            }
          }
        });

        // Fallback: if multiple are "intersecting" due to rootMargin,
        // prioritize the one closest to the effective "top" (offset by rootMargin)
        // Or if nothing is "intersecting" based on the threshold, pick the last one that passed.
        // For simplicity with rootMargin aiming for middle of screen, if currentActiveSection is set, use it.
        // If not, it means we scrolled past all observed sections or before the first one based on rootMargin.
        // In such cases, if we want to ensure *something* is active, we might need a more complex logic
        // to find the topmost visible section even if not "intersecting" by threshold.
        // For now, if rootMargin is set to activate when section is ~center, this should be okay.

        // If after checking all entries, currentActiveSection is still the old active one
        // and it's no longer intersecting, means we scrolled away from it without another one becoming active.
        // This logic can be refined. A simpler approach if only one section is "active" due to rootMargin:
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        if (intersectingEntries.length > 0) {
            // Find the ID of the first intersecting element in the entries array
             for (const [id, element] of sectionElementsRef.current.entries()) {
              if (element === intersectingEntries[0].target) {
                setActiveSection(id);
                break;
              }
            }
        } else if (entries.length > 0) {
          // If nothing is "intersecting" by the rootMargin definition (e.g. center of screen)
          // we might want to set active based on which section is closest to top of viewport
          // Or, if scrolling up, the last section that was active remains active until a new one intersects.
          // For now, let's keep it simple: if nothing intersects by the rootMargin, clear active.
          // However, to keep an active link, we might want to find the one closest to viewport top.
          // Let's iterate and find the one whose bounding box top is closest to viewport top and non-negative
          let closestSection: string | null = null;
          let minDistance = Infinity;
          elementsToObserve.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < window.innerHeight) { // Element is at least partially in viewport
                // If using rootMargin to detect center, this part might be less relevant
                // as `isIntersecting` should handle it.
                // This is more for a "top of viewport" strategy
                const distanceToTop = Math.abs(rect.top - offset);
                 if (rect.top >= (0 - offset - 100) && rect.top < minDistance) { // element top is near or in viewport
                    minDistance = rect.top; // use actual top, not distance to find highest
                    closestSection = el.id;
                }
            }
          });
          setActiveSection(closestSection);

        }


      },
      {
        rootMargin: rootMargin, // Negative top/bottom margin makes it trigger when section is more "centered"
        threshold: 0.1, // How much of the element needs to be visible (less relevant with large rootMargin)
      }
    );

    elementsToObserve.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  // Re-run effect if sectionIds change, or if on client side for document access.
  }, [sectionIds, offset, rootMargin, typeof document !== 'undefined']); 

  return activeSection;
}
