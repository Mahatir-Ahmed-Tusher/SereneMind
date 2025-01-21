import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MoodEntry {
  date: string;
  mood: string;
  notes: string;
}

const moodOptions = [
  { value: '5', label: 'Very Happy' },
  { value: '4', label: 'Happy' },
  { value: '3', label: 'Neutral' },
  { value: '2', label: 'Sad' },
  { value: '1', label: 'Very Sad' },
];

const MoodDiary = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [currentMood, setCurrentMood] = useState('3');
  const [notes, setNotes] = useState('');

  // Load entries from local storage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem('moodEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  // Save entries to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: MoodEntry = {
      date: new Date().toISOString().split('T')[0],
      mood: currentMood,
      notes: notes.trim(),
    };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setNotes('');
  };

  const chartData = {
    labels: entries.map((entry) => entry.date),
    datasets: [
      {
        label: 'Mood Level',
        data: entries.map((entry) => parseInt(entry.mood)),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Mood Trends Over Time',
      },
    },
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: (value: number) => {
            const labels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];
            return labels[value - 1];
          },
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Mood Diary</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How are you feeling today?
            </label>
            <select
              value={currentMood}
              onChange={(e) => setCurrentMood(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              {moodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Write any thoughts or feelings..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Log Mood
          </button>
        </form>
      </div>

      {entries.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Mood History</h2>
          <div className="h-[400px]">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Entries</h3>
            <div className="space-y-4">
              {entries.slice().reverse().map((entry, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">{entry.date}</p>
                      <p className="font-medium">
                        Mood: {moodOptions.find((m) => m.value === entry.mood)?.label}
                      </p>
                    </div>
                  </div>
                  {entry.notes && (
                    <p className="mt-2 text-gray-600">{entry.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodDiary;
