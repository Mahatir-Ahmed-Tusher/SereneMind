import React from 'react';
import { Line } from 'react-chartjs-2';
import { Star, TrendingUp, Brain, Activity } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { moodData, chartOptions, achievements, monthlyHighlights } from '../data/journeyData';
import AchievementCard from '../components/journey/AchievementCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const JourneyTracker = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Wellness Journey</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Mood Trends</h2>
          <Line data={moodData} options={chartOptions} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Monthly Highlights</h2>
        <div className="space-y-6">
          {monthlyHighlights.map((highlight, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <span className="text-sm text-purple-600 font-medium">{highlight.date}</span>
                <h3 className="font-medium mt-1">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTracker;