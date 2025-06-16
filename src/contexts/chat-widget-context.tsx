
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useCallback } from 'react';
// Removed Genkit import: import { financialAdvisorChatbot, type FinancialAdvisorChatbotInput, type FinancialAdvisorChatbotOutput } from '@/ai/flows/financial-advisor-chatbot';

export interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

interface ChatWidgetContextType {
  isChatOpen: boolean;
  setChatOpen: (isOpen: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  messages: Message[];
  currentInput: string;
  isChatLoading: boolean;
  setCurrentInputText: (text: string) => void;
  handleSendMessage: (inputText: string) => Promise<void>;
}

const ChatWidgetContext = createContext<ChatWidgetContextType | undefined>(undefined);

export const ChatWidgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isChatOpen, setChatOpenState] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInputText] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const setChatOpen = useCallback((isOpen: boolean) => {
    setChatOpenState(isOpen);
  }, []);

  const openChat = useCallback(() => {
    setChatOpenState(true);
  }, []);

  const closeChat = useCallback(() => {
    setChatOpenState(false);
  }, []);

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim() || isChatLoading) return;

    const userMessage: Message = { id: Date.now().toString(), type: 'user', text: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setCurrentInputText(''); 
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const aiMessage: Message = { id: (Date.now() + 1).toString(), type: 'ai', text: data.answer };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error fetching AI response:', error);
      const errorMessageText = error.message && error.message.includes("OpenAI API key not configured")
        ? "Sorry, the AI chatbot is not configured correctly. Please contact support."
        : "Sorry, I encountered an error. Please try again later.";
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: errorMessageText,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  }, [isChatLoading]);


  return (
    <ChatWidgetContext.Provider value={{ 
      isChatOpen, setChatOpen, openChat, closeChat,
      messages, currentInput, isChatLoading,
      setCurrentInputText, handleSendMessage
    }}>
      {children}
    </ChatWidgetContext.Provider>
  );
};

export const useChatWidget = (): ChatWidgetContextType => {
  const context = useContext(ChatWidgetContext);
  if (context === undefined) {
    throw new Error('useChatWidget must be used within a ChatWidgetProvider');
  }
  return context;
};
