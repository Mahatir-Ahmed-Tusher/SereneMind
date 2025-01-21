import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MoodDiary from './pages/MoodDiary';
import MindfulnessExercises from './pages/MindfulnessExercises';
import EmergencySupport from './pages/EmergencySupport';
import CommunityForum from './pages/CommunityForum';
import PersonalDiary from './pages/PersonalDiary';
import Resources from './pages/Resources';
import BreathingExercise from './pages/exercises/BreathingExercise';
import MeditationExercise from './pages/exercises/MeditationExercise';
import ProgressiveRelaxation from './pages/exercises/ProgressiveRelaxation';
import SymptomCheckerPage from './pages/SymptomCheckerPage';
import Games from './pages/Games';
import DailyChallenges from './pages/DailyChallenges';
import JourneyTracker from './pages/JourneyTracker';
import SmartJournal from './pages/SmartJournal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mood-diary" element={<MoodDiary />} />
            <Route path="/mindfulness" element={<MindfulnessExercises />} />
            <Route path="/emergency" element={<EmergencySupport />} />
            <Route path="/community" element={<CommunityForum />} />
            <Route path="/diary" element={<PersonalDiary />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
            <Route path="/exercises/breathing" element={<BreathingExercise />} />
            <Route path="/exercises/meditation" element={<MeditationExercise />} />
            <Route path="/exercises/relaxation" element={<ProgressiveRelaxation />} />
            <Route path="/games" element={<Games />} />
            <Route path="/challenges" element={<DailyChallenges />} />
            <Route path="/journey" element={<JourneyTracker />} />
            <Route path="/smart-journal" element={<SmartJournal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;