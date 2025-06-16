
"use client";

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AIChatbot from '@/components/sections/ai-chatbot';
import { MessageSquare } from 'lucide-react';
import { useChatWidget } from '@/contexts/chat-widget-context';

export default function LiveChatWidget() {
  const { isChatOpen, setChatOpen, openChat } = useChatWidget();

  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="fixed bottom-20 right-6 rounded-full shadow-xl p-4 h-16 w-16 z-50 transform transition-all hover:scale-110" // Removed 'hidden' class
        onClick={openChat}
        aria-label="Open financial advisor chat"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>

      <Dialog open={isChatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-lg p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Financial Advisor Chat</DialogTitle>
          </DialogHeader>
          <AIChatbot />
        </DialogContent>
      </Dialog>
    </>
  );
}

