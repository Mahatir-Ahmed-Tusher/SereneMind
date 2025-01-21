import React from 'react';
import { GamepadIcon, Brain, Puzzle } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Memory Match",
      description: "Test and improve your memory by matching pairs of cards",
      icon: Brain,
      link: "/games/memory",
      color: "bg-blue-500"
    },
    {
      title: "Word Association",
      description: "Connect related words to boost cognitive function",
      icon: Puzzle,
      link: "/games/words",
      color: "bg-purple-500"
    },
    {
      title: "Mindful Maze",
      description: "Navigate through a maze while practicing mindfulness",
      icon: GamepadIcon,
      link: "/games/maze",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Mental Wellness Games
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const Icon = game.icon;
          return (
            <div
              key={game.title}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${game.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Play Now
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Play Mental Wellness Games?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <span className="text-green-600">✓</span>
            </div>
            <span className="ml-3">Improve cognitive function and memory</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <span className="text-green-600">✓</span>
            </div>
            <span className="ml-3">Reduce stress and anxiety through engaging activities</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <span className="text-green-600">✓</span>
            </div>
            <span className="ml-3">Track your progress and mental agility over time</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Games;