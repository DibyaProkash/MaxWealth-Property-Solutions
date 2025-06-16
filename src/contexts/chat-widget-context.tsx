
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useCallback } from 'react';

interface ChatWidgetContextType {
  isChatOpen: boolean;
  setChatOpen: (isOpen: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
}

const ChatWidgetContext = createContext<ChatWidgetContextType | undefined>(undefined);

export const ChatWidgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isChatOpen, setChatOpenState] = useState(false);

  const setChatOpen = useCallback((isOpen: boolean) => {
    setChatOpenState(isOpen);
  }, []);

  const openChat = useCallback(() => {
    setChatOpenState(true);
  }, []);

  const closeChat = useCallback(() => {
    setChatOpenState(false);
  }, []);

  return (
    <ChatWidgetContext.Provider value={{ isChatOpen, setChatOpen, openChat, closeChat }}>
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
