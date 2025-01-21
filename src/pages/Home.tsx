import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Phone, 
  Book, 
  PenTool, 
  Users, 
  Stethoscope,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import Chatbot from '../components/chat/Chatbot';

const FeatureCard = ({ icon: Icon, title, description, link, color }) => (
  <Link 
    to={link} 
    className="group bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center text-indigo-600 font-medium">
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4 ml-2 transform transition-all duration-300 group-hover:translate-x-2" />
    </div>
  </Link>
);

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Mood Diary",
      description: "Track your daily emotions and moods with our interactive diary",
      link: "/mood-diary",
      color: "bg-pink-500"
    },
    {
      icon: Stethoscope,
      title: "Symptom Checker",
      description: "Get AI-powered insights about your mental health symptoms",
      link: "/symptom-checker",
      color: "bg-indigo-500"
    },
    {
      icon: Brain,
      title: "Mindful Exercises",
      description: "Practice guided meditation and breathing exercises",
      link: "/mindfulness",
      color: "bg-purple-500"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "Access immediate help and crisis resources 24/7",
      link: "/emergency",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with others and share your experiences",
      link: "/community",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Smart Journal",
      description: "AI-powered journaling with mood analysis and weekly insights",
      link: "/smart-journal",
      color: "bg-emerald-500"
    },
    {
      icon: PenTool,
      title: "Personal Diary",
      description: "Write and reflect in your private digital space",
      link: "/diary",
      color: "bg-green-500"
    },
    {
      icon: Book,
      title: "Resources",
      description: "Access helpful articles, videos, and materials",
      link: "/resources",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Journey to
          <span className="text-indigo-600"> Mental Wellness</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Take the first step towards better mental health with our comprehensive suite
          of tools and support systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/symptom-checker"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of others who have taken the first step towards better
            mental health. Our platform provides the support and resources you need.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeU-kHvWNc-hFQ2OWZ4GDvuiPXkUSSgyKv-kb3NHyLJzIXQ6w/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
          >
            Join Now
          </a>
        </div>
      </section>

      <Chatbot />
    </div>
  );
};

export default Home;