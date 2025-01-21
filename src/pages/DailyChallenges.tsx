import React, { useState } from 'react';
import { Trophy, CheckCircle, Circle } from 'lucide-react';

const DailyChallenges = () => {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const challenges = [
    {
      id: 1,
      title: "Morning Gratitude",
      description: "Write down three things you're grateful for today",
      points: 50,
      category: "Mindfulness"
    },
    {
      id: 2,
      title: "Digital Detox",
      description: "Take a 2-hour break from all digital devices",
      points: 100,
      category: "Wellness"
    },
    {
      id: 3,
      title: "Random Act of Kindness",
      description: "Do something nice for someone without expecting anything in return",
      points: 75,
      category: "Social"
    },
    {
      id: 4,
      title: "Mindful Walking",
      description: "Take a 15-minute walk focusing on your surroundings",
      points: 50,
      category: "Exercise"
    }
  ];

  const toggleChallenge = (id: number) => {
    setCompletedChallenges(prev => 
      prev.includes(id) 
        ? prev.filter(cid => cid !== id)
        : [...prev, id]
    );
  };

  const totalPoints = completedChallenges.reduce((sum, id) => {
    const challenge = challenges.find(c => c.id === id);
    return sum + (challenge?.points || 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Daily Challenges</h1>
        <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-3">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-semibold">{totalPoints} Points</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 ${
              completedChallenges.includes(challenge.id)
                ? 'border-2 border-green-500'
                : 'hover:scale-105'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-2">
                  {challenge.category}
                </span>
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
              </div>
              <button
                onClick={() => toggleChallenge(challenge.id)}
                className="focus:outline-none"
              >
                {completedChallenges.includes(challenge.id) ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
            <p className="text-gray-600 mb-4">{challenge.description}</p>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">{challenge.points} points</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Challenge Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-medium mb-2">Build Habits</h3>
            <p className="text-gray-600">Develop positive daily routines</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-medium mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your wellness journey</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-medium mb-2">Stay Motivated</h3>
            <p className="text-gray-600">Earn points and achievements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;