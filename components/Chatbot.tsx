import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { runChat } from '../services/gradioService';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
          { role: 'model', parts: [{ text: "Hello! I'm an AI liaison for this developer. Feel free to ask me about their skills, projects, or experience. How can I help you?" }] }
        ]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = [...messages, userMessage];
      const responseText = await runChat(chatHistory);
      const modelMessage: ChatMessage = { role: 'model', parts: [{ text: responseText }] };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Gemini API error:', error);
      const errorMessage: ChatMessage = { role: 'model', parts: [{ text: "Sorry, I'm having trouble connecting right now. Please try again later." }] };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        id="chat-fab"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-110 z-50 glow"
        aria-label="Toggle Chat"
      >
        {isOpen ? <CloseIcon className="h-6 w-6" /> : <ChatIcon className="h-6 w-6" />}
      </button>

      {isOpen && (
         <div className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] rounded-xl shadow-2xl z-40 origin-bottom-right transition-all duration-300 ease-out animate-slide-in p-[2px] bg-gradient-to-br from-indigo-500/50 to-pink-500/50">
            <div className="bg-gray-800 rounded-[10px] h-full w-full flex flex-col">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">AI Liaison</h3>
                <p className="text-sm text-gray-400">Powered by Gemini</p>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex flex-col space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${
                          msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.parts[0].text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-gray-700 text-gray-200 rounded-lg p-2 rounded-bl-none">
                          <div className="flex items-center space-x-2">
                            <span className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce"></span>
                          </div>
                        </div>
                     </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center bg-gray-700 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="w-full bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none"
                    disabled={isLoading}
                  />
                  <button onClick={handleSend} disabled={isLoading} className="p-3 text-indigo-400 hover:text-indigo-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                    <SendIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
        </div>
      )}
      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>
    </>
  );
};

export default Chatbot;