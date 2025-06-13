
"use client";

import { useEffect } from 'react';

export default function GlobalEventListeners() {
  useEffect(() => {
    const checkAllowInteraction = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      return target.tagName === 'INPUT' ||
             target.tagName === 'TEXTAREA' ||
             target.isContentEditable ||
             !!target.closest('.allow-interaction');
    };

    const handleContextMenu = (event: MouseEvent) => {
      if (checkAllowInteraction(event.target as HTMLElement)) {
        return;
      }
      event.preventDefault();
    };

    const handleCopyCut = (event: ClipboardEvent) => {
      if (checkAllowInteraction(event.target as HTMLElement)) {
        return;
      }
      event.preventDefault();
      // Optionally, show a message to the user
      // alert("Copying content is disabled on this site.");
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopyCut);
    document.addEventListener('cut', handleCopyCut);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyCut);
      document.removeEventListener('cut', handleCopyCut);
    };
  }, []);

  return null; // This component does not render anything visible
}
