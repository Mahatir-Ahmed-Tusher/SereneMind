import React, { useState, useEffect } from 'react';
import { Book, Sparkles, Calendar, TrendingUp } from 'lucide-react';
import { analyzeSymptomsWithAI } from '../services/mistral';

interface JournalEntry {
  id: string;
  content: string;
  date: string;
  analysis?: {
    mood: string;
    themes: string[];
    insights: string;
  };
}

const SmartJournal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [weeklyInsights, setWeeklyInsights] = useState<string[]>([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    generateWeeklyInsights();
  }, [entries]);

  const generateWeeklyInsights = () => {
    const lastWeekEntries = entries.filter(entry => {
      const entryDate = new Date(entry.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return entryDate >= weekAgo;
    });

    const insights = [];
    const gratitudeCount = lastWeekEntries.filter(entry => 
      entry.content.toLowerCase().includes('grateful') || 
      entry.content.toLowerCase().includes('thankful')
    ).length;

    if (gratitudeCount > 0) {
      insights.push(`You expressed gratitude ${gratitudeCount} times this week.`);
    }

    setWeeklyInsights(insights);
  };

  const analyzeEntry = async (content: string) => {
    try {
      const analysis = await analyzeSymptomsWithAI(content);
      return {
        mood: analysis.severity,
        themes: analysis.copingStrategies,
        insights: analysis.assessment
      };
    } catch (error) {
      console.error('Error analyzing entry:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.trim()) return;

    setIsAnalyzing(true);
    const analysis = await analyzeEntry(newEntry);
    setIsAnalyzing(false);

    const entry: JournalEntry = {
      id: Date.now().toString(),
      content: newEntry,
      date: new Date().toISOString(),
      analysis: analysis || undefined
    };

    setEntries(prev => [entry, ...prev]);
    setNewEntry('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
        <Book className="w-10 h-10 mr-3 text-indigo-600" />
        Smart Journal
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center text-indigo-600 mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Total Entries</h3>
          </div>
          <p className="text-2xl font-bold">{entries.length}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center text-green-600 mb-2">
            <Sparkles className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Weekly Insights</h3>
          </div>
          <p className="text-sm">{weeklyInsights[0] || "Start writing to get insights!"}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center text-purple-600 mb-2">
            <TrendingUp className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Mood Trend</h3>
          </div>
          <p className="text-sm">Based on your recent entries</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="How are you feeling today? Write your thoughts..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[200px]"
          />
          <button
            type="submit"
            disabled={isAnalyzing || !newEntry.trim()}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 flex items-center justify-center"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Save & Analyze Entry'
            )}
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-gray-500">
                {new Date(entry.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap mb-4">{entry.content}</p>
            {entry.analysis && (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Mood:</span>{' '}
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      entry.analysis.mood === 'severe' ? 'bg-red-100 text-red-800' :
                      entry.analysis.mood === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {entry.analysis.mood}
                    </span>
                  </p>
                  {entry.analysis.themes.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold">Key Themes:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {entry.analysis.themes.map((theme, index) => (
                          <span
                            key={index}
                            className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {entry.analysis.insights && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">AI Insights:</span>{' '}
                      {entry.analysis.insights}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartJournal;