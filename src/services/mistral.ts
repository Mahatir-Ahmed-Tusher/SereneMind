const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;
const API_URL = 'https://api.mistral.ai/v1/chat/completions';

const SYSTEM_PROMPT = `You are an experienced mental health counselor and psychiatrist. Your role is to:
1. Carefully analyze the symptoms described by users
2. Provide a thoughtful assessment of their potential mental health state
3. Suggest appropriate types of mental health professionals they should consult
4. Offer immediate coping strategies while they seek professional help
5. Always maintain a compassionate, professional tone
6. Include disclaimers that this is not a diagnosis
7. Emphasize the importance of seeking professional help

Please structure your response in the following format:

ASSESSMENT:
[Provide your assessment here]

SEVERITY: (mild/moderate/severe)
[Indicate severity level]

SPECIALISTS:
- [List recommended specialists]

COPING_STRATEGIES:
- [List coping strategies]

EMERGENCY_RESOURCES: (if needed)
- [List emergency resources]`;

export interface MistralResponse {
  assessment: string;
  specialists: string[];
  copingStrategies: string[];
  severity: 'mild' | 'moderate' | 'severe';
  emergencyResources?: string[];
}

export const analyzeSymptomsWithAI = async (symptoms: string): Promise<MistralResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `Based on these symptoms, provide a mental health assessment: ${symptoms}` }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to get response from Mistral AI');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    return parseAIResponse(content);
  } catch (error) {
    console.error('Error calling Mistral AI:', error);
    throw error;
  }
};

const parseAIResponse = (content: string): MistralResponse => {
  const sections = content.split('\n\n');
  let assessment = '';
  let severity: 'mild' | 'moderate' | 'severe' = 'moderate';
  let specialists: string[] = [];
  let copingStrategies: string[] = [];
  let emergencyResources: string[] = [];

  sections.forEach(section => {
    if (section.startsWith('ASSESSMENT:')) {
      assessment = section.replace('ASSESSMENT:', '').trim();
    } else if (section.startsWith('SEVERITY:')) {
      const severityText = section.replace('SEVERITY:', '').trim().toLowerCase();
      if (severityText.includes('mild')) severity = 'mild';
      else if (severityText.includes('severe')) severity = 'severe';
      else severity = 'moderate';
    } else if (section.startsWith('SPECIALISTS:')) {
      specialists = section
        .replace('SPECIALISTS:', '')
        .trim()
        .split('\n')
        .filter(line => line.startsWith('-'))
        .map(line => line.replace('-', '').trim());
    } else if (section.startsWith('COPING_STRATEGIES:')) {
      copingStrategies = section
        .replace('COPING_STRATEGIES:', '')
        .trim()
        .split('\n')
        .filter(line => line.startsWith('-'))
        .map(line => line.replace('-', '').trim());
    } else if (section.startsWith('EMERGENCY_RESOURCES:')) {
      emergencyResources = section
        .replace('EMERGENCY_RESOURCES:', '')
        .trim()
        .split('\n')
        .filter(line => line.startsWith('-'))
        .map(line => line.replace('-', '').trim());
    }
  });

  // If no structured response is detected, use the entire content as assessment
  if (!assessment && content) {
    assessment = content;
  }

  return {
    assessment,
    specialists,
    copingStrategies,
    severity,
    emergencyResources: emergencyResources.length > 0 ? emergencyResources : undefined
  };
};