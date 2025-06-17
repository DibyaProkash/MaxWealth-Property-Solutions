
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useCallback } from 'react';
import { financialAdvisorChatbot, type FinancialAdvisorChatbotInput, type FinancialAdvisorChatbotOutput } from '@/ai/flows/financial-advisor-chatbot';

export interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
  fileName?: string; // Optional: to display if a file was part of the user message
}

export interface FilePayload {
  type: 'pdf' | 'image';
  content: string; // text for PDF, dataURI for image
  name: string;
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
  handleSendMessage: (inputText: string, filePayload?: FilePayload) => Promise<void>;
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

  const handleSendMessage = useCallback(async (inputText: string, filePayload?: FilePayload) => {
    if (!inputText.trim() && !filePayload) return; // Need either text or a file
    if (isChatLoading) return;

    const userMessageText = inputText.trim() || (filePayload ? `Uploaded: ${filePayload.name}` : "Analyzing document...");
    const userMessage: Message = { 
      id: Date.now().toString(), 
      type: 'user', 
      text: userMessageText,
      fileName: filePayload?.name
    };
    setMessages((prev) => [...prev, userMessage]);
    setCurrentInputText(''); 
    setIsChatLoading(true);

    try {
      const inputForAI: FinancialAdvisorChatbotInput = { question: inputText.trim() };
      if (filePayload) {
        if (filePayload.type === 'pdf') {
          inputForAI.documentText = filePayload.content;
        } else if (filePayload.type === 'image') {
          inputForAI.photoDataUri = filePayload.content;
        }
      }
      
      const result: FinancialAdvisorChatbotOutput = await financialAdvisorChatbot(inputForAI);
      
      const aiMessage: Message = { id: (Date.now() + 1).toString(), type: 'ai', text: result.answer };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error fetching AI response from Genkit:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: "Sorry, I encountered an error processing your request with Genkit. Please try again later.",
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
