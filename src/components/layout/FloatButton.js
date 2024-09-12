import React, { useState } from 'react';
import Chatbot from '../ui/Chatbot';
import { Bot, X } from 'lucide-react';

const FloatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 border-2 border-white bg-orange-main text-white rounded-full p-3 shadow-md hover:bg-orange-main transition-colors duration-300"
        aria-label="Open chat"
      >
        <Bot size={24} />
      </button>

      {/* Full-screen Chat Interface */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-orange-main text-white">
            <h2 className="text-xl font-bold">AI Chatbot</h2>
            <button onClick={toggleChat} aria-label="Close chat">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow p-4">
            {/* Add your chat interface components here */}
            < Chatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatButton;