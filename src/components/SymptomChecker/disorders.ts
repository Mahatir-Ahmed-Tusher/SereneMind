import { DisorderInfo } from './types';

export const disorders: Record<string, DisorderInfo> = {
  depression: {
    name: "Major Depressive Disorder",
    description: "A mood disorder characterized by persistent feelings of sadness and loss of interest that interferes with daily functioning.",
    symptoms: [
      "Persistent sad, anxious, or empty mood",
      "Loss of interest in activities once enjoyed",
      "Decreased energy or fatigue",
      "Changes in appetite or weight",
      "Difficulty sleeping or oversleeping",
      "Thoughts of death or suicide"
    ],
    recommendations: [
      "Seek professional help from a mental health provider",
      "Consider cognitive behavioral therapy (CBT)",
      "Maintain a regular sleep schedule",
      "Exercise regularly",
      "Stay connected with supportive friends and family",
      "Practice mindfulness and meditation"
    ],
    riskLevels: {
      low: "Your responses suggest minimal signs of depression.",
      moderate: "Your responses indicate moderate depressive symptoms. Consider consulting a mental health professional.",
      high: "Your responses suggest significant depressive symptoms. Please seek professional help promptly."
    },
    relatedDisorders: ["Anxiety", "Bipolar Disorder", "Dysthymia"],
    treatmentOptions: [
      "Psychotherapy",
      "Medication (antidepressants)",
      "Lifestyle changes",
      "Support groups"
    ],
    selfHelpStrategies: [
      "Regular exercise",
      "Healthy sleep habits",
      "Balanced nutrition",
      "Social connection",
      "Stress management"
    ]
  },
  anxiety: {
    name: "Generalized Anxiety Disorder",
    description: "A disorder characterized by persistent and excessive worry about various aspects of life.",
    symptoms: [
      "Excessive worry about multiple aspects of life",
      "Restlessness or feeling on edge",
      "Difficulty concentrating",
      "Muscle tension",
      "Sleep problems",
      "Irritability"
    ],
    recommendations: [
      "Consult with a mental health professional",
      "Learn and practice relaxation techniques",
      "Consider cognitive behavioral therapy",
      "Maintain regular exercise",
      "Practice stress management",
      "Join a support group"
    ],
    riskLevels: {
      low: "Your responses suggest minimal anxiety symptoms.",
      moderate: "Your responses indicate moderate anxiety levels. Consider professional consultation.",
      high: "Your responses suggest significant anxiety. Professional help is recommended."
    },
    relatedDisorders: ["Panic Disorder", "Social Anxiety", "OCD"],
    treatmentOptions: [
      "Cognitive behavioral therapy",
      "Medication (anti-anxiety medications)",
      "Mindfulness-based therapy",
      "Exposure therapy"
    ],
    selfHelpStrategies: [
      "Deep breathing exercises",
      "Progressive muscle relaxation",
      "Regular exercise",
      "Limiting caffeine and alcohol",
      "Maintaining a worry journal"
    ]
  }
  // Add more disorders...
};