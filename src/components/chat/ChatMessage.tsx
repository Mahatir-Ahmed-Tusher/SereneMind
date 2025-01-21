import React from 'react';
import { User, Bot, AlertTriangle, Heart } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isEmergency?: boolean;
  copingStrategies?: string[];
  grounding?: string;
  professionalResources?: string[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  isBot, 
  isEmergency,
  copingStrategies,
  grounding,
  professionalResources
}) => {
  return (
    <div className={`flex items-start space-x-2 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <Bot className="w-5 h-5 text-indigo-600" />
        </div>
      )}
      <div className="max-w-[80%] space-y-2">
        <div className={`rounded-lg p-3 ${
          isBot ? 'bg-white' : 'bg-indigo-600 text-white'
        }`}>
          <p className="text-sm">{message}</p>
        </div>

        {isEmergency && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-800">Emergency Resources</span>
            </div>
            <ul className="text-sm text-red-700 list-disc list-inside">
              {professionalResources?.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </div>
        )}

        {grounding && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Grounding Exercise</span>
            </div>
            <p className="text-sm text-blue-700">{grounding}</p>
          </div>
        )}

        {copingStrategies && copingStrategies.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Coping Strategies</span>
            </div>
            <ul className="text-sm text-green-700 list-disc list-inside">
              {copingStrategies.map((strategy, index) => (
                <li key={index}>{strategy}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
          <User className="w-5 h-5 text-indigo-600" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;