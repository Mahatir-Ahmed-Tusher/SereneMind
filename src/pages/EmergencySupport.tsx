import React from 'react';
import { Phone, ExternalLink } from 'lucide-react';

const EmergencySupport = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Emergency Support</h1>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
        <p className="text-red-800 font-semibold">
          If you're in immediate danger, call the emergency services: 999
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Kaan Pete Roi-কান পেতে রই</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+8809607111222" className="text-blue-600 hover:underline">
                +8809607111222
              </a>
            </p>
            <p className="text-gray-600">
              Bangladesh's first emotional support and suicide prevention helpline. 
              Trained volunteers offer empathetic listening and support.
            </p>
            <a 
              href="https://kaanpeteroi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Visit Website <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Vent by Mindspace</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+8809678678778" className="text-blue-600 hover:underline">
                +8809678678778
              </a>
            </p>
            <p className="text-gray-600">
              Trained Psychology students of Bangladesh offering support and guidance.
            </p>
            <a 
              href="https://mindspacebd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Visit Website <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Psychological Health and Wellness Clinic (PHWC)
          </h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+8801708789886" className="text-blue-600 hover:underline">
                +880 1708 789 886
              </a>
            </p>
            <p className="text-gray-600">
              Provides therapy, psychological assessments, and counseling.
            </p>
            <a 
              href="https://phwcbd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Visit Website <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-bengali">
            জরুরি সহায়তা
          </h2>
          <p className="text-gray-600 text-bengali">
            আপনি যদি মানসিক চাপে থাকেন বা আত্মহত্যার চিন্তা করেন, অনুগ্রহ করে উপরে উল্লেখিত 
            হেল্পলাইন নম্বরগুলিতে যোগাযোগ করুন। প্রশিক্ষিত কাউন্সেলররা আপনাকে সহায়তা করতে 
            ২৪/৭ প্রস্তুত আছেন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencySupport;