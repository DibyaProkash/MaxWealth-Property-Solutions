
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
          {/* Add a visually hidden DialogHeader and DialogTitle for accessibility */}
          <DialogHeader className="sr-only">
            <DialogTitle>AI Financial Advisor Chat</DialogTitle>
          </DialogHeader>
          <AIChatbot />
          {/* DialogClose is automatically added by ShadCN's DialogContent */}
        </DialogContent>
      </Dialog>
    </>
  );
}
