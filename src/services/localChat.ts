interface Response {
  text: string;
  keywords: string[];
}

const responses: Response[] = [
  {
    text: "I understand you might be going through a difficult time. Would you like to tell me more about what's troubling you?",
    keywords: ["help", "sad", "depressed", "anxiety", "worried"]
  },
  {
    text: "It's completely normal to feel this way. Remember that seeking support is a sign of strength, not weakness.",
    keywords: ["feel", "feeling", "scared", "alone", "lonely"]
  },
  {
    text: "I hear you, and I want you to know that your feelings are valid. Would you like to explore some coping strategies together?",
    keywords: ["cope", "dealing", "handle", "manage"]
  },
  {
    text: "Taking care of your mental health is important. Have you considered talking to a mental health professional who can provide expert guidance?",
    keywords: ["professional", "doctor", "therapy", "counseling"]
  },
  {
    text: "Sometimes taking small steps can make a big difference. What's one small thing you could do today to take care of yourself?",
    keywords: ["help", "better", "improve", "change"]
  }
];

const defaultResponse = "I'm here to listen and support you. Would you like to tell me more about what's on your mind?";

export const generateLocalResponse = (message: string): string => {
  const words = message.toLowerCase().split(/\s+/);
  
  // Find the most relevant response based on keyword matching
  const matchedResponse = responses.find(response => 
    response.keywords.some(keyword => words.includes(keyword))
  );
  
  return matchedResponse?.text || defaultResponse;
};