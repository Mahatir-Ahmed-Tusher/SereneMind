export interface ChatResponse {
  text: string;
  type: 'general' | 'emotional_support' | 'advice' | 'resources' | 'humor';
  followUp?: boolean;
}

export interface ConversationContext {
  mood?: string;
  topic?: string;
  previousResponses: string[];
}