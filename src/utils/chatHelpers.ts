import { FALLBACK_RESPONSES } from '../constants/chatResponses';

export const getRandomFallbackResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * FALLBACK_RESPONSES.length);
  return FALLBACK_RESPONSES[randomIndex];
};

export const parseOpenAIError = (error: any): string => {
  if (error?.error?.type === 'insufficient_quota') {
    return "I'm currently experiencing high demand. Please try again in a few minutes.";
  }
  if (error?.error?.type === 'invalid_request_error') {
    return "I apologize, but I'm not configured properly at the moment.";
  }
  return "I apologize, but I'm experiencing technical difficulties. Please try again later.";
};