import OpenAI from 'openai';
import { config } from '../config/env';
import { getRandomFallbackResponse } from '../utils/chatHelpers';
import { ERROR_MESSAGES } from '../constants/chatResponses';

const openai = new OpenAI({
  apiKey: config.openai.apiKey,
  dangerouslyAllowBrowser: true
});

export const generateChatResponse = async (message: string): Promise<string> => {
  if (!config.openai.apiKey) {
    console.error('OpenAI API key is missing');
    return ERROR_MESSAGES.CONFIGURATION;
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a compassionate mental health support chatbot. Your role is to:
            - Provide supportive, non-judgmental responses
            - Listen actively and validate feelings
            - Suggest healthy coping strategies
            - Recognize crisis situations and direct to professional help
            - Never provide medical advice or diagnosis
            - Always maintain appropriate boundaries
            - Be clear that you are an AI assistant, not a mental health professional

            If someone expresses thoughts of self-harm or suicide, immediately provide crisis hotline numbers and encourage seeking professional help.`
        },
        { role: "user", content: message }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 150,
    });

    return completion.choices[0].message.content || getRandomFallbackResponse();
  } catch (error: any) {
    console.error('Error generating chat response:', error);
    
    if (error.code === 'insufficient_quota') {
      return ERROR_MESSAGES.QUOTA_EXCEEDED;
    }
    
    return ERROR_MESSAGES.GENERAL;
  }
};