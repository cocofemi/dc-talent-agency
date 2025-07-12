"use client";
import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { IChatMessageType } from "@/types/chatbot-d-t";
import { useChatbot } from "../../../context/chatbot-context";

function ChatBot() {
  const { showChatbot, setShowChatbot } = useChatbot();
  const [chatHistory, setChatHistory] = useState(() => {
    const stored = localStorage.getItem("chatbotChatHistory");
    try {
      return stored
        ? JSON.parse(stored)
        : [
            {
              role: "model",
              text: `Hi there! 👋\n
                    Welcome to DC Talent Agency.
                    To get started booking any of our artists, please answer the following questions. Thanks \n
                    Which of our artist would you like to book?`,
            },
          ];
    } catch {
      return [];
    }
  });
  const [sessionId, setSessionId] = useState<string | null>(null);
  // const [showChatbot, setShowChatbot] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("chatbotSessionId");
    const storedMessages = localStorage.getItem("chatbotChatHistory");

    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId =
        "session_" + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("chatbotSessionId", newSessionId);
      setSessionId(newSessionId);
    }

    if (storedMessages) {
      setChatHistory(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatbotChatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const generateBotResponse = async (history: any) => {
    const updateHistory = (text: string, fileUrl = false, isError = false) => {
      setChatHistory((prevHistory: IChatMessageType[]) => [
        ...prevHistory.filter(
          (msg: IChatMessageType) => msg.text != "Thinking..."
        ),
        { role: "model", text, fileUrl, isError } as IChatMessageType,
      ]);
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionId, text: history }),
    };

    try {
      if (!process.env.NEXT_BASE_URL) {
        throw new Error("NEXT_BASE_URL environment variable is not defined");
      }
      const response = await fetch(
        process.env.NEXT_BASE_URL as string,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.response.error || "Something went wrong");
      }
      const apiResponseText = data.reply.trim();
      const fileUrl = data.fileUrl;
      updateHistory(apiResponseText, fileUrl);
    } catch (error) {
      console.log(error);
      updateHistory("Something went wrong please try again. ", true);
    }
  };

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);
  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev: any) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-icons">mode_comment</span>
        <span className="material-icons">close</span>
      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Booking Assistant 🧑‍🏫</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev: any) => !prev)}
            className="material-icons"
          >
            keyboard_arrow_down
          </button>
        </div>
        <div ref={chatBodyRef} className="chat-body">
          {chatHistory.length === 0 && (
            <div className="message bot-message">
              <ChatbotIcon />
            </div>
          )}

          {chatHistory.map((chat: IChatMessageType, index: number) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer">
          <ChatForm
            // chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
