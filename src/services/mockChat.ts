interface Response {
  text: string;
  tags: string[];
}

const responses: Response[] = [
  {
    text: "I hear that you're going through a difficult time. Would you like to tell me more about what's troubling you?",
    tags: ["general", "opening"]
  },
  {
    text: "That sounds challenging. Remember that it's completely normal to feel this way, and seeking support is a sign of strength.",
    tags: ["support", "validation"]
  },
  {
    text: "I understand this is hard. Have you considered talking to a mental health professional who can provide expert guidance?",
    tags: ["professional", "guidance"]
  },
  {
    text: "Taking care of your mental health is important. Would you like to explore some coping strategies together?",
    tags: ["coping", "strategies"]
  }
];

const getRelevantResponse = (input: string): string => {
  // Simple keyword matching for demo purposes
  const keywords = input.toLowerCase().split(' ');
  const response = responses.find(r => 
    r.tags.some(tag => keywords.includes(tag))
  ) || responses[Math.floor(Math.random() * responses.length)];
  
  return response.text;
};

export const generateMockResponse = async (message: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return getRelevantResponse(message);
};