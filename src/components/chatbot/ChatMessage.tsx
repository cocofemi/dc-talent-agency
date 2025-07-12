import ChatbotIcon from "./ChatbotIcon";
import { IChatMessageType } from "@/types/chatbot-d-t";

// type ChatMessageData = {
//   role: string;
//   text: string;
//   fileUrl?: string;
//   isError?: boolean;
// };

type IProps = {
  chat: IChatMessageType;
};

function ChatMessage({ chat }: IProps) {
  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
        chat.isError ? "error" : ""
      }`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
      {/* ✅ Show link if there's a file URL */}
      {typeof chat.fileUrl === "string" && (
        <a
          href={chat.fileUrl}
          className="message-text"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          📥 Download
        </a>
      )}
    </div>
  );
}

export default ChatMessage;
