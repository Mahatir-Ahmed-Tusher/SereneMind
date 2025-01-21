import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Brain, Moon } from 'lucide-react';

const MindfulnessExercises = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mindfulness Exercises</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Link 
          to="/exercises/breathing" 
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <Wind className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Breathing Exercise</h2>
          <p className="text-gray-600">Guided breathing techniques for relaxation</p>
        </Link>

        <Link 
          to="/exercises/meditation" 
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <Brain className="w-12 h-12 text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Meditation</h2>
          <p className="text-gray-600">Simple meditation practices for beginners</p>
        </Link>

        <Link 
          to="/exercises/relaxation" 
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <Moon className="w-12 h-12 text-indigo-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Progressive Relaxation</h2>
          <p className="text-gray-600">Systematic relaxation of muscle groups</p>
        </Link>
      </div>
    </div>
  );
};

export default MindfulnessExercises;