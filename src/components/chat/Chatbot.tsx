import React, { useState, useRef, useEffect } from 'react';
import { AlertTriangle, Send, Loader } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { getChatResponse } from '../../services/chat';

interface Message {
  text: string;
  isBot: boolean;
  isEmergency?: boolean;
  resources?: string[];
  copingStrategies?: string[];
  grounding?: string;
  professionalResources?: string[];
}

const INITIAL_MESSAGE = "Hi, I'm here to listen and support you. While I'm an AI assistant and not a replacement for professional help, I'm trained to provide a safe space for you to share your thoughts and feelings. How are you feeling today?";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: INITIAL_MESSAGE, isBot: true }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = currentMessage.trim();
    setCurrentMessage('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(userMessage);
      setMessages(prev => [...prev, {
        text: response.text,
        isBot: true,
        isEmergency: response.isEmergency,
        resources: response.suggestedResources,
        copingStrategies: response.copingStrategies,
        grounding: response.grounding,
        professionalResources: response.professionalResources
      }]);
    } catch (error) {
      console.error('Chat response error:', error);
      setMessages(prev => [...prev, {
        text: "I apologize, but I'm having trouble responding right now. If you need immediate support, please reach out to a mental health professional or emergency services.",
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-full border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Mental Health Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <AlertTriangle className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-4">
                <ChatMessage
                  message={msg.text}
                  isBot={msg.isBot}
                  isEmergency={msg.isEmergency}
                  copingStrategies={msg.copingStrategies}
                  grounding={msg.grounding}
                  professionalResources={msg.professionalResources}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <Loader className="w-6 h-6 animate-spin text-indigo-600" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !currentMessage.trim()}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition flex items-center space-x-2"
        >
          <span>Need someone to talk to?</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;