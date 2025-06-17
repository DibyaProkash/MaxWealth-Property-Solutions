
"use client";

import { useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User, Loader2, Send } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useChatWidget } from '@/contexts/chat-widget-context';

// Helper icon component if MessageSquare is not directly from lucide-react
function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function AIChatbot() {
  const { 
    messages, 
    currentInput, 
    isChatLoading, 
    setCurrentInputText, 
    handleSendMessage 
  } = useChatWidget();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth'});
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSendMessage(currentInput);
  };

  return (
    <Card className="w-full max-w-lg shadow-2xl rounded-xl">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center font-headline text-xl">
          <Bot className="mr-2 h-6 w-6 text-primary" />
          AI-powered Home Buying Advisor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-80 p-4" ref={scrollAreaRef}>
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <MessageSquareIcon className="w-12 h-12 mb-2" />
              <p>Ask me anything about financing a house!</p>
              <p className="text-xs">e.g., "What is a good credit score for a mortgage?"</p>
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 mb-4 ${
                message.type === 'user' ? 'justify-end' : ''
              }`}
            >
              {message.type === 'ai' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot size={18}/>
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg max-w-[75%] ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-secondary text-secondary-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              {message.type === 'user' && (
                 <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <User size={18}/>
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isChatLoading && messages[messages.length -1]?.type === 'user' && ( // Show loader only if last message was user
            <div className="flex items-start space-x-3 mb-4">
              <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot size={18}/>
                  </AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-lg bg-secondary text-secondary-foreground rounded-bl-none">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInputText(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1"
            disabled={isChatLoading}
            aria-label="Ask the chatbot a question"
          />
          <Button type="submit" disabled={isChatLoading || !currentInput.trim()} size="icon" aria-label="Send message">
            {isChatLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5"/>}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
