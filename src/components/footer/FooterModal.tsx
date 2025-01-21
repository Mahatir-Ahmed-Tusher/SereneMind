import React from 'react';
import Modal from 'react-modal';

interface FooterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const FooterModal: React.FC<FooterModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="mt-4 text-gray-600">
          {children}
        </div>
        <button 
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FooterModal;