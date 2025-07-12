"use client";
import { useContext, useState, createContext, ReactNode } from "react";

type ChatbotContextType = {
  showChatbot: boolean;
  setShowChatbot: (value: boolean | any) => void;
};

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  return (
    <ChatbotContext.Provider value={{ showChatbot, setShowChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context && typeof window !== "undefined")
    throw new Error("useChatbot must be used inside ChatbotProvider");
  return context;
};
