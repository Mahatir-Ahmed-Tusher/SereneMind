import { Question } from './types';
import { STANDARD_OPTIONS, FREQUENCY_OPTIONS, SEVERITY_OPTIONS } from './constants';

export const questions: Question[] = [
  // Depression Questions
  {
    id: 1,
    text: "How often do you feel little interest or pleasure in doing things?",
    options: STANDARD_OPTIONS,
    categories: ['depression', 'mood'],
    weight: 1
  },
  {
    id: 2,
    text: "How often do you feel down, depressed, or hopeless?",
    options: STANDARD_OPTIONS,
    categories: ['depression', 'mood'],
    weight: 1
  },
  // Anxiety Questions
  {
    id: 3,
    text: "How often do you feel nervous, anxious, or on edge?",
    options: STANDARD_OPTIONS,
    categories: ['anxiety', 'mood'],
    weight: 1
  },
  // Bipolar Questions
  {
    id: 4,
    text: "Have you experienced periods of unusually elevated mood, increased energy, and reduced need for sleep?",
    options: FREQUENCY_OPTIONS,
    categories: ['bipolar', 'mood'],
    weight: 1
  },
  // PTSD Questions
  {
    id: 5,
    text: "Do you experience recurring, distressing memories or dreams of a traumatic event?",
    options: FREQUENCY_OPTIONS,
    categories: ['ptsd', 'trauma'],
    weight: 1
  },
  // OCD Questions
  {
    id: 6,
    text: "How often do you experience unwanted, intrusive thoughts that cause anxiety?",
    options: FREQUENCY_OPTIONS,
    categories: ['ocd', 'anxiety'],
    weight: 1
  },
  // ADHD Questions
  {
    id: 7,
    text: "How often do you have difficulty organizing tasks and activities?",
    options: FREQUENCY_OPTIONS,
    categories: ['adhd', 'attention'],
    weight: 1
  },
  // Eating Disorder Questions
  {
    id: 8,
    text: "How often do you feel that food controls your life?",
    options: FREQUENCY_OPTIONS,
    categories: ['eating_disorders'],
    weight: 1
  },
  // Social Anxiety Questions
  {
    id: 9,
    text: "How much do you fear or avoid social situations?",
    options: SEVERITY_OPTIONS,
    categories: ['social_anxiety', 'anxiety'],
    weight: 1
  },
  // Sleep Disorder Questions
  {
    id: 10,
    text: "How often do you have trouble falling or staying asleep?",
    options: FREQUENCY_OPTIONS,
    categories: ['sleep', 'general'],
    weight: 1
  }
  // Add more questions for each category...
];