import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

const MeditationExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [playBell] = useSound('/sounds/bell.mp3', { volume: 0.5 });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            playBell();
            setIsActive(false);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, playBell]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Guided Meditation</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className={`absolute inset-0 bg-purple-100 rounded-full ${isActive ? 'animate-pulse' : ''}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-4xl font-bold text-purple-600">{formatTime(timeLeft)}</p>
          </div>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Meditation Guide</h2>
        <ul className="text-left space-y-2 text-gray-700">
          <li>1. Find a comfortable seated position</li>
          <li>2. Close your eyes and focus on your breath</li>
          <li>3. Notice thoughts without judgment</li>
          <li>4. Gently return focus to your breath when distracted</li>
          <li>5. Continue for the duration of the session</li>
        </ul>
      </div>
    </div>
  );
};

export default MeditationExercise;