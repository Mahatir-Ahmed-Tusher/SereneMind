import React, { useState } from 'react';
import { Book, Save } from 'lucide-react';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  date: string;
  mood: string;
}

const PersonalDiary = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('neutral');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newEntry: DiaryEntry = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
      mood
    };

    setEntries([newEntry, ...entries]);
    setTitle('');
    setContent('');
    setMood('neutral');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Personal Diary</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Entry Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Give your entry a title..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How are you feeling?
            </label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="happy">Happy</option>
              <option value="neutral">Neutral</option>
              <option value="sad">Sad</option>
              <option value="anxious">Anxious</option>
              <option value="excited">Excited</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Write your thoughts
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={8}
              placeholder="Dear Diary..."
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Entry
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{entry.title}</h2>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">{entry.date}</span>
                <span className="px-3 py-1 rounded-full text-sm capitalize bg-gray-100">
                  {entry.mood}
                </span>
              </div>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDiary;