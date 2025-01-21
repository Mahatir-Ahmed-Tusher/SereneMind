import { Answer, DisorderInfo } from './types';
import { RISK_THRESHOLDS } from './constants';

export const calculateDisorderScore = (
  answers: Answer[],
  category: string
): number => {
  const categoryAnswers = answers.filter(answer => 
    answer.categories.includes(category)
  );

  if (categoryAnswers.length === 0) return 0;

  const totalScore = categoryAnswers.reduce((sum, answer) => 
    sum + answer.value, 0
  );

  return (totalScore / (categoryAnswers.length * 3)) * 100;
};

export const getRiskLevel = (score: number): keyof DisorderInfo['riskLevels'] => {
  if (score < RISK_THRESHOLDS.LOW) return 'low';
  if (score < RISK_THRESHOLDS.MODERATE) return 'moderate';
  return 'high';
};

export const getRecommendations = (
  disorder: DisorderInfo,
  score: number
): string[] => {
  const riskLevel = getRiskLevel(score);
  const baseRecommendations = disorder.recommendations;

  if (riskLevel === 'high') {
    return [
      "Seek immediate professional help",
      ...baseRecommendations
    ];
  }

  return baseRecommendations;
};