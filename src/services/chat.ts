import { MistralResponse } from './mistral';

const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;
const API_URL = 'https://api.mistral.ai/v1/chat/completions';

const COUNSELOR_PROMPT = `You are an empathetic mental health counselor chatbot. Your role is to:
- Provide warm, supportive responses with a caring tone
- Listen actively and validate feelings
- Ask thoughtful follow-up questions to better understand the situation
- Suggest healthy coping strategies when appropriate
- Recognize crisis situations and provide emergency resources
- Always maintain professional boundaries while being approachable
- Be clear that you are an AI assistant, not a replacement for professional help

Critical Situations:
- If user mentions self-harm, suicide, or severe distress, immediately provide emergency resources
- For anxiety attacks, provide immediate grounding techniques
- For depression symptoms, validate feelings and suggest professional help
- For trauma-related issues, approach with extra sensitivity

Your responses should be:
- Warm and welcoming
- Non-judgmental
- Encouraging
- Clear and concise
- Professional yet approachable
- Structured with clear action items when needed

Emergency Protocol:
1. Recognize crisis keywords
2. Provide immediate support and validation
3. Share emergency contact information
4. Encourage seeking professional help
5. Offer grounding techniques if appropriate

Response Structure:
1. Acknowledgment of feelings
2. Supportive statement
3. Practical suggestion or resource
4. Follow-up question or next step
5. Emergency resources if needed`;

export interface ChatResponse {
  text: string;
  followUpQuestion?: string;
  suggestedResources?: string[];
  isEmergency?: boolean;
  copingStrategies?: string[];
  professionalResources?: string[];
  grounding?: string;
}

const EMERGENCY_KEYWORDS = [
  'suicide', 'kill myself', 'end my life', 'self-harm', 'hurt myself',
  'want to die', 'better off dead', 'no reason to live', 'can\'t take it anymore',
  'overdose', 'cut myself', 'severe depression', 'crisis'
];

const ANXIETY_KEYWORDS = [
  'panic attack', 'anxiety attack', 'can\'t breathe', 'heart racing',
  'overwhelming anxiety', 'severe anxiety', 'panic', 'anxious'
];

const DEPRESSION_KEYWORDS = [
  'depressed', 'hopeless', 'worthless', 'empty', 'no motivation',
  'can\'t get out of bed', 'nothing matters', 'deep sadness'
];

const TRAUMA_KEYWORDS = [
  'trauma', 'ptsd', 'flashback', 'abuse', 'assault',
  'nightmare', 'triggered', 'traumatic'
];

const EMERGENCY_RESOURCES = [
  'Emergency Services: 999',
  'Kaan Pete Roi Crisis Helpline: +8809607111222',
  'PHWC Crisis Support: +880 1708 789 886',
  'National Mental Health Institute: +880-2-9118171'
];

const GROUNDING_TECHNIQUES = [
  '5-4-3-2-1 Technique: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste',
  'Deep Breathing: Breathe in for 4 counts, hold for 4, exhale for 4',
  'Body Scan: Focus on each part of your body from toes to head',
  'Name 3 objects you can see in your immediate surroundings'
];

const PROFESSIONAL_RESOURCES = [
  'National Mental Health Institute, Dhaka',
  'Psychological Health and Wellness Clinic (PHWC)',
  'Kaan Pete Roi - Mental Health Support',
  'Bangladesh Association of Psychiatrists'
];

const FALLBACK_RESPONSES = {
  general: "I'm here to listen and support you. While I'm experiencing some technical difficulties, I want to ensure you get the help you need. How can I assist you today?",
  emergency: "I notice you may be in crisis. While I'm having technical difficulties, please immediately contact emergency services at 999 or Kaan Pete Roi at +8809607111222 for immediate support.",
  anxiety: "I understand you're feeling anxious. While I'm having technical difficulties, try this grounding exercise: Take 5 deep breaths, counting to 4 on the inhale and 4 on the exhale.",
  depression: "I hear that you're struggling. While I'm having technical difficulties, please know that you're not alone and help is available.",
  trauma: "I understand you're dealing with trauma. While I'm having technical difficulties, please know that support is available through professional trauma-informed care."
};

const checkForKeywords = (message: string, keywords: string[]): boolean => {
  return keywords.some(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );
};

const getResponseType = (message: string) => {
  if (checkForKeywords(message, EMERGENCY_KEYWORDS)) return 'emergency';
  if (checkForKeywords(message, ANXIETY_KEYWORDS)) return 'anxiety';
  if (checkForKeywords(message, DEPRESSION_KEYWORDS)) return 'depression';
  if (checkForKeywords(message, TRAUMA_KEYWORDS)) return 'trauma';
  return 'general';
};

const validateApiKey = () => {
  if (!MISTRAL_API_KEY) {
    throw new Error('Mistral API key is not configured. Please set VITE_MISTRAL_API_KEY in your .env file.');
  }
};

export const getChatResponse = async (message: string): Promise<ChatResponse> => {
  try {
    validateApiKey();
    
    const responseType = getResponseType(message);
    const isEmergency = responseType === 'emergency';

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          { role: 'system', content: COUNSELOR_PROMPT },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to get response from AI counselor');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    const baseResponse: ChatResponse = {
      text: content,
      isEmergency,
      suggestedResources: isEmergency ? EMERGENCY_RESOURCES : undefined
    };

    // Add response type specific additions
    switch (responseType) {
      case 'emergency':
        return {
          ...baseResponse,
          professionalResources: PROFESSIONAL_RESOURCES,
          grounding: GROUNDING_TECHNIQUES[0],
          copingStrategies: [
            'Call emergency services immediately if you feel unsafe',
            'Contact a trusted friend or family member',
            'Use the provided grounding technique',
            'Focus on getting through the next few minutes'
          ]
        };

      case 'anxiety':
        return {
          ...baseResponse,
          grounding: GROUNDING_TECHNIQUES[Math.floor(Math.random() * GROUNDING_TECHNIQUES.length)],
          copingStrategies: [
            'Practice deep breathing exercises',
            'Use the 5-4-3-2-1 grounding technique',
            'Focus on your immediate surroundings',
            'Try progressive muscle relaxation'
          ]
        };

      case 'depression':
        return {
          ...baseResponse,
          professionalResources: PROFESSIONAL_RESOURCES,
          copingStrategies: [
            'Try to maintain a regular sleep schedule',
            'Take small steps - even minor achievements matter',
            'Stay connected with supportive people',
            'Consider professional counseling'
          ]
        };

      case 'trauma':
        return {
          ...baseResponse,
          professionalResources: PROFESSIONAL_RESOURCES,
          grounding: GROUNDING_TECHNIQUES[1],
          copingStrategies: [
            'Remember you are safe now',
            'Use grounding techniques when triggered',
            'Practice self-care activities',
            'Consider trauma-informed therapy'
          ]
        };

      default:
        return baseResponse;
    }
  } catch (error) {
    console.error('Error getting chat response:', error);
    const responseType = getResponseType(message);
    
    return {
      text: FALLBACK_RESPONSES[responseType] || FALLBACK_RESPONSES.general,
      isEmergency: responseType === 'emergency',
      suggestedResources: responseType === 'emergency' ? EMERGENCY_RESOURCES : undefined,
      professionalResources: PROFESSIONAL_RESOURCES,
      grounding: responseType === 'anxiety' ? GROUNDING_TECHNIQUES[0] : undefined,
      copingStrategies: ['Seek professional help', 'Practice self-care', 'Stay connected with support system']
    };
  }
};