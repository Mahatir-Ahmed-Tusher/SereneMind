import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Modal from 'react-modal';

const Footer = () => {
  // Modal state
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isFaqOpen, setFaqOpen] = useState(false);

  // Open and close modal functions
  const openPrivacyModal = () => setPrivacyOpen(true);
  const closePrivacyModal = () => setPrivacyOpen(false);
  const openTermsModal = () => setTermsOpen(true);
  const closeTermsModal = () => setTermsOpen(false);
  const openFaqModal = () => setFaqOpen(true);
  const closeFaqModal = () => setFaqOpen(false);

  return (
    <footer className="bg-white shadow-lg mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About Seren Mind</h3>
            <p className="text-gray-600 text-sm">
              Serene Mind is a mental health platform created by Mahatir Ahmed Tusher to support emotional well-being through accessible and user-friendly tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={openPrivacyModal} className="text-gray-600 hover:text-indigo-600 text-sm">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={openTermsModal} className="text-gray-600 hover:text-indigo-600 text-sm">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={openFaqModal} className="text-gray-600 hover:text-indigo-600 text-sm">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                Email: mahatirtusher@gmail.com
              </li>
              <li className="text-gray-600 text-sm">
                Phone: +8801848116852
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Serene Mind. All rights reserved. Developed by Mahatir Ahmed Tusher
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onRequestClose={closePrivacyModal}
        contentLabel="Privacy Policy"
        ariaHideApp={false}
        className="modal"
      >
        <h2 className="text-xl font-semibold">Privacy Policy</h2>
        <p className="mt-4 text-gray-600">
          At Serene Mind, we respect your privacy. Our platform collects data to enhance your user experience, including mood tracking and symptom analysis. All personal data is kept confidential and used only to improve our services. We do not share your information with third parties without your consent.
        </p>
        <button onClick={closePrivacyModal} className="mt-4 text-indigo-600">
          Close
        </button>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOpen}
        onRequestClose={closeTermsModal}
        contentLabel="Terms of Service"
        ariaHideApp={false}
        className="modal"
      >
        <h2 className="text-xl font-semibold">Terms of Service</h2>
        <p className="mt-4 text-gray-600">By using Serene Mind, you agree to our terms of service. These include the proper use of the platform, the privacy of your personal data, and our liability limits. We reserve the right to modify these terms at any time. Users should check this page regularly for updates.
        </p>
        <button onClick={closeTermsModal} className="mt-4 text-indigo-600">
          Close
        </button>
      </Modal>

      {/* FAQ Modal */}
      <Modal
        isOpen={isFaqOpen}
        onRequestClose={closeFaqModal}
        contentLabel="FAQ"
        ariaHideApp={false}
        className="modal"
      >
        <h2 className="text-xl font-semibold">FAQ</h2>
        <p className="mt-4 text-gray-600">
          <strong>Q1: How does the Mood Diary work?</strong>
          <br />
          A1: The Mood Diary helps track your emotions over time, providing insights into your mental well-being.
        </p>
        <p className="mt-4 text-gray-600">
          <strong>Q2: Is my data private?</strong>
          <br />
          A2: Yes, your data is fully private and protected under our privacy policy.
        </p>
        <button onClick={closeFaqModal} className="mt-4 text-indigo-600">
          Close
        </button>
      </Modal>
    </footer>
  );
};

export default Footer;
