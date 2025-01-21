import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

const BreathingExercise = () => {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);
  const [isActive, setIsActive] = useState(false);

  const [playInhale] = useSound('/sounds/inhale.mp3', { volume: 0.5 });
  const [playExhale] = useSound('/sounds/exhale.mp3', { volume: 0.5 });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            switch (phase) {
              case 'inhale':
                setPhase('hold');
                playInhale();
                return 7;
              case 'hold':
                setPhase('exhale');
                return 8;
              case 'exhale':
                setPhase('inhale');
                playExhale();
                return 4;
              default:
                return prev;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, phase, playInhale, playExhale]);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">4-7-8 Breathing Exercise</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div 
            className={`absolute inset-0 bg-blue-100 rounded-full transition-transform duration-1000
              ${phase === 'inhale' ? 'scale-100' : phase === 'hold' ? 'scale-110' : 'scale-90'}`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-4xl font-bold text-blue-600">{count}</p>
          </div>
        </div>

        <p className="text-2xl font-medium text-gray-700 mb-4 capitalize">{phase}</p>
        
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <ul className="text-left space-y-2 text-gray-700">
          <li>1. Inhale quietly through the nose for 4 seconds</li>
          <li>2. Hold the breath for 7 seconds</li>
          <li>3. Exhale completely through the mouth for 8 seconds</li>
          <li>4. Repeat this cycle 4 times</li>
        </ul>
      </div>
    </div>
  );
};

export default BreathingExercise;