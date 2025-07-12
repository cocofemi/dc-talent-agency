import { IChatMessageType } from "@/types/chatbot-d-t";
import { useRef } from "react";

type IProps = {
  setChatHistory: React.Dispatch<React.SetStateAction<IChatMessageType[]>>;
  generateBotResponse: (userMessage: string) => void;
};

function ChatForm({ setChatHistory, generateBotResponse }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input field
    }

    setChatHistory((history: IChatMessageType[]) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      generateBotResponse(userMessage);
    }, 600);
  };

  //   console.log(chatHistory);

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
}

export default ChatForm;
