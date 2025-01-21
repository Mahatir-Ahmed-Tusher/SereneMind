import { ChatResponse, ConversationContext } from './types';
import { emotionalResponses } from './responses/emotional';
import { adviceResponses } from './responses/advice';
import { humorResponses } from './responses/humor';
import { inspirationalQuotes } from './responses/quotes';

const analyzeMessage = (message: string): string[] => {
  const words = message.toLowerCase().split(/\s+/);
  const emotionalWords = words.filter(word => 
    ['sad', 'happy', 'angry', 'anxious', 'stressed', 'worried'].includes(word)
  );
  return emotionalWords;
};

const shouldAddHumor = (context: ConversationContext): boolean => {
  const recentResponses = context.previousResponses.slice(-3);
  return !recentResponses.some(response => response.includes('😊' || '😄'));
};

export const generateResponse = (
  message: string, 
  context: ConversationContext
): ChatResponse => {
  const emotions = analyzeMessage(message);
  const words = message.toLowerCase().split(/\s+/);

  // Find matching emotional response
  const emotionalResponse = emotionalResponses.find(response =>
    response.context.some(keyword => words.includes(keyword))
  );

  // Find matching advice
  const adviceResponse = adviceResponses.find(response =>
    response.context.some(keyword => words.includes(keyword))
  );

  // Add humor if appropriate
  const shouldUseHumor = shouldAddHumor(context);
  const humorResponse = shouldUseHumor ? 
    humorResponses[Math.floor(Math.random() * humorResponses.length)] : null;

  // Find relevant quote
  const quote = inspirationalQuotes.find(q =>
    q.context.some(keyword => words.includes(keyword))
  );

  // Combine responses based on context
  if (emotions.length > 0 && emotionalResponse) {
    return {
      text: emotionalResponse.text + (quote ? `\n\nHere's something to consider: ${quote.quote}` : ''),
      type: 'emotional_support',
      followUp: true
    };
  }

  if (adviceResponse) {
    return {
      text: adviceResponse.text + (humorResponse ? `\n\n${humorResponse.text}` : ''),
      type: 'advice',
      followUp: true
    };
  }

  // Default response with a touch of humor
  return {
    text: "I'm here to chat and support you! Whether you want to discuss your feelings, get some advice, or just have a friendly conversation. What's on your mind? 😊",
    type: 'general',
    followUp: true
  };
};