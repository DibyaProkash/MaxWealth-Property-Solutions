
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import AIChatbot from '@/components/sections/ai-chatbot';
import { MessageSquare, X } from 'lucide-react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="fixed bottom-6 right-6 rounded-full shadow-xl p-4 h-16 w-16 z-50 transform transition-all hover:scale-110"
        onClick={() => setIsOpen(true)}
        aria-label="Open financial advisor chat"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg p-0">
          {/* DialogHeader is inside AIChatbot now, so we can remove it from here if AIChatbot's header is sufficient */}
          {/* Or, we can have a generic one here and let AIChatbot have its own more specific one */}
          {/* For now, let AIChatbot manage its own header */}
          <AIChatbot />
          {/* Explicit close button for accessibility within the dialog if needed, though ShadCN DialogContent usually has one */}
          {/* <DialogClose asChild className="absolute top-4 right-4">
             <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
          </DialogClose> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
