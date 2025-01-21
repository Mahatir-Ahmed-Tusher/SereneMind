export interface Question {
  id: number;
  text: string;
  options: string[];
  categories: string[];
  weight: number;
}

export interface DisorderInfo {
  name: string;
  description: string;
  symptoms: string[];
  recommendations: string[];
  riskLevels: {
    low: string;
    moderate: string;
    high: string;
  };
  relatedDisorders: string[];
  treatmentOptions: string[];
  selfHelpStrategies: string[];
}

export interface Answer {
  questionId: number;
  value: number;
  categories: string[];
}

export interface AssessmentResult {
  disorderName: string;
  score: number;
  riskLevel: 'low' | 'moderate' | 'high';
  recommendations: string[];
}