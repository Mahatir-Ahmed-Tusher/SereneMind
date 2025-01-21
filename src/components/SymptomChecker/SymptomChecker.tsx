import React, { useState } from 'react';
import { AlertTriangle, Send, Loader } from 'lucide-react';
import { analyzeSymptomsWithAI, MistralResponse } from '../../services/mistral';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MistralResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await analyzeSymptomsWithAI(symptoms);
      setResult(response);
    } catch (err) {
      setError('Unable to analyze symptoms at the moment. Please try again later.');
      console.error('Error analyzing symptoms:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'severe': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            <p className="text-yellow-700 font-medium">Important Disclaimer</p>
          </div>
          <p className="text-yellow-600 text-sm">
            This AI-powered tool provides general guidance and is not a substitute for professional medical advice, 
            diagnosis, or treatment. Always seek the advice of qualified mental health professionals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Describe your symptoms and feelings in detail:
          </label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[200px]"
            placeholder="Please describe how you've been feeling, any changes in your mood, sleep, appetite, or daily activities. The more details you provide, the better we can assist you."
          />
          <button
            type="submit"
            disabled={isAnalyzing || !symptoms.trim()}
            className="mt-4 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isAnalyzing ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Analyze Symptoms
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-6">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${getSeverityColor(result.severity)}`}>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm">{result.assessment}</p>
            </div>

            {result.specialists.length > 0 && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Recommended Specialists</h3>
                <ul className="list-disc list-inside text-sm text-blue-700">
                  {result.specialists.map((specialist, index) => (
                    <li key={index}>{specialist}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.copingStrategies.length > 0 && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Coping Strategies</h3>
                <ul className="list-disc list-inside text-sm text-green-700">
                  {result.copingStrategies.map((strategy, index) => (
                    <li key={index}>{strategy}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.emergencyResources && result.emergencyResources.length > 0 && (
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Resources</h3>
                <ul className="list-disc list-inside text-sm text-red-700">
                  {result.emergencyResources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;