import React, { useState } from 'react';
import FooterModal from './FooterModal';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const [modalState, setModalState] = useState({
    privacy: false,
    terms: false,
    faq: false
  });

  const toggleModal = (modal: keyof typeof modalState) => {
    setModalState(prev => ({
      ...prev,
      [modal]: !prev[modal]
    }));
  };

  return (
    <footer className="bg-white shadow-lg mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
            <p className="text-gray-600 text-sm">
              Serene Mind is a mental health platform created by Mahatir Ahmed Tusher to support emotional well-being through accessible and user-friendly tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => toggleModal('privacy')} 
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toggleModal('terms')} 
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toggleModal('faq')} 
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                Email: support@serenemind.com
              </li>
              <li className="text-gray-600 text-sm">
                Phone: +8801848116852
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Serene Mind. All rights reserved. 
            Developed by Mahatir Ahmed Tusher
          </p>
        </div>
      </div>

      <FooterModal
        isOpen={modalState.privacy}
        onClose={() => toggleModal('privacy')}
        title="Privacy Policy"
      >
        <p>
          At Serene Mind, we respect your privacy. Our platform collects data to enhance your user experience, 
          including mood tracking and symptom analysis. All personal data is kept confidential and used only 
          to improve our services. We do not share your information with third parties without your consent.
        </p>
      </FooterModal>

      <FooterModal
        isOpen={modalState.terms}
        onClose={() => toggleModal('terms')}
        title="Terms of Service"
      >
        <p>
          By using Serene Mind, you agree to our terms of service. These include the proper use of the platform, 
          the privacy of your personal data, and our liability limits. We reserve the right to modify these terms 
          at any time. Users should check this page regularly for updates.
        </p>
      </FooterModal>

      <FooterModal
        isOpen={modalState.faq}
        onClose={() => toggleModal('faq')}
        title="FAQ"
      >
        <>
          <div className="mb-4">
            <h3 className="font-semibold">How does the Mood Diary work?</h3>
            <p>The Mood Diary helps track your emotions over time, providing insights into your mental well-being.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is my data private?</h3>
            <p>Yes, your data is fully private and protected under our privacy policy.</p>
          </div>
        </>
      </FooterModal>
    </footer>
  );
};

export default Footer;