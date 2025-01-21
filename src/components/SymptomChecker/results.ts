export interface DisorderInfo {
  name: string;
  description: string;
  recommendations: string[];
  riskLevels: {
    low: string;
    moderate: string;
    high: string;
  };
}

export const disorders: Record<string, DisorderInfo> = {
  depression: {
    name: "Depression",
    description: "Depression is more than just feeling sad. It's a serious mental health condition that affects how you think, feel, and handle daily activities.",
    recommendations: [
      "Consider speaking with a mental health professional",
      "Maintain a regular sleep schedule",
      "Exercise regularly",
      "Stay connected with friends and family",
      "Practice mindfulness and meditation"
    ],
    riskLevels: {
      low: "Your responses suggest minimal signs of depression.",
      moderate: "Your responses suggest moderate signs of depression.",
      high: "Your responses suggest significant signs of depression. Please consider seeking professional help."
    }
  },
  anxiety: {
    name: "Anxiety",
    description: "Anxiety disorders involve persistent and excessive worry about various aspects of life.",
    recommendations: [
      "Practice deep breathing exercises",
      "Try progressive muscle relaxation",
      "Maintain a regular exercise routine",
      "Consider cognitive behavioral therapy",
      "Limit caffeine and alcohol intake"
    ],
    riskLevels: {
      low: "Your responses suggest minimal signs of anxiety.",
      moderate: "Your responses suggest moderate signs of anxiety.",
      high: "Your responses suggest significant signs of anxiety. Please consider seeking professional help."
    }
  },
  adhd: {
    name: "ADHD",
    description: "Attention-deficit/hyperactivity disorder affects focus, impulse control, and activity levels.",
    recommendations: [
      "Create structured daily routines",
      "Break tasks into smaller, manageable parts",
      "Use organizational tools and reminders",
      "Consider professional assessment",
      "Practice mindfulness techniques"
    ],
    riskLevels: {
      low: "Your responses suggest minimal signs of ADHD.",
      moderate: "Your responses suggest moderate signs of ADHD.",
      high: "Your responses suggest significant signs of ADHD. Please consider seeking professional help."
    }
  },
  ptsd: {
    name: "PTSD",
    description: "Post-traumatic stress disorder can develop after exposure to a traumatic event.",
    recommendations: [
      "Seek support from a trauma-informed therapist",
      "Practice grounding techniques",
      "Join a support group",
      "Maintain a regular sleep schedule",
      "Learn and practice stress management techniques"
    ],
    riskLevels: {
      low: "Your responses suggest minimal signs of PTSD.",
      moderate: "Your responses suggest moderate signs of PTSD.",
      high: "Your responses suggest significant signs of PTSD. Please consider seeking professional help."
    }
  }
};