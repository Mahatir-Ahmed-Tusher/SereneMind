import React from 'react';
import SymptomChecker from '../components/SymptomChecker/SymptomChecker';

const SymptomCheckerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Symptom Checker</h1>
          <p className="text-lg text-gray-600">
            Answer a few questions to help identify potential mental health concerns.
            Remember, this is not a diagnosis - always consult with a mental health professional.
          </p>
        </div>

        <SymptomChecker />
      </div>
    </div>
  );
};

export default SymptomCheckerPage;