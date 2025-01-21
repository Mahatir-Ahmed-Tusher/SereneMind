import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;