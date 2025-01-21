import React from 'react';
import { Star, Brain, Activity } from 'lucide-react';

const iconMap = {
  Star,
  Brain,
  Activity,
};

interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  icon: keyof typeof iconMap;
}

const AchievementCard = ({ title, description, date, icon }: AchievementCardProps) => {
  const Icon = iconMap[icon];

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
};

export default AchievementCard;