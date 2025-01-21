import React, { useState } from 'react';
import useSound from 'use-sound';

const steps = [
  { part: 'Feet', instruction: 'Curl your toes tightly for 5 seconds, then release' },
  { part: 'Calves', instruction: 'Point your toes up, tightening your calf muscles' },
  { part: 'Thighs', instruction: 'Squeeze your thigh muscles' },
  { part: 'Hips', instruction: 'Tighten your hip and buttock muscles' },
  { part: 'Abdomen', instruction: 'Tighten your stomach muscles' },
  { part: 'Chest', instruction: 'Take a deep breath and hold it' },
  { part: 'Arms', instruction: 'Make fists and tense your arms' },
  { part: 'Shoulders', instruction: 'Raise your shoulders toward your ears' },
  { part: 'Face', instruction: 'Scrunch your facial muscles' },
];

const ProgressiveRelaxation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [playTransition] = useSound('/sounds/transition.mp3', { volume: 0.5 });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      playTransition();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      playTransition();
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Progressive Muscle Relaxation</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className={`absolute inset-0 bg-green-100 rounded-full ${isActive ? 'animate-pulse' : ''}`} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-green-600 mb-2">{steps[currentStep].part}</p>
            <p className="text-sm text-green-500">Step {currentStep + 1} of {steps.length}</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-8">{steps[currentStep].instruction}</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setIsActive(!isActive)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <ul className="text-left space-y-2 text-gray-700">
          <li>1. Get into a comfortable position</li>
          <li>2. For each muscle group:</li>
          <li className="ml-4">- Tense the muscles for 5 seconds</li>
          <li className="ml-4">- Release and relax for 10 seconds</li>
          <li>3. Notice the difference between tension and relaxation</li>
          <li>4. Move through each muscle group systematically</li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressiveRelaxation;