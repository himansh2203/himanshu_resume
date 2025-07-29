import React, { useState } from "react";
import "../styles/chatbot.css";
import { SiChatbot } from "react-icons/si";

function ChatBot() {
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChat}>
        <SiChatbot size={30} />
      </div>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>ChatBot</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-body">
            <p>Hello! How can I help you?</p>
            {/* You can add a real chat backend or dialog here */}
          </div>
          <div className="chatbot-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
