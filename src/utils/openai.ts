import { ChatCompletionMessageParam } from 'openai/resources/chat';

const SYSTEM_PROMPT = `You are an empathetic mental health support chatbot. Your role is to:
- Provide supportive, non-judgmental responses
- Listen actively and validate feelings
- Suggest healthy coping strategies
- Recognize crisis situations and direct to professional help
- Never provide medical advice or diagnosis
- Always maintain appropriate boundaries
- Be clear that you are an AI assistant, not a mental health professional

If someone expresses thoughts of self-harm or suicide, immediately provide crisis hotline numbers and encourage seeking professional help.`;

export const generateChatResponse = async (
  message: string,
  apiKey: string
): Promise<string> => {
  const messages: ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'user', content: message }
  ];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages,
        temperature: 0.7,
        max_tokens: 150
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};