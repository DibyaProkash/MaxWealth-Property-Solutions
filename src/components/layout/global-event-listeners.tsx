
"use client";

import { useEffect } from 'react';

export default function GlobalEventListeners() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      // Allow context menu on input fields, textareas, and contentEditable elements
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }
      event.preventDefault();
    };

    const handleCopyCut = (event: ClipboardEvent) => {
      // Allow copy/cut from input fields, textareas, and contentEditable elements
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
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
