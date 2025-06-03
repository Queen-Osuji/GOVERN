import React from 'react';

const ComingSoonModal = ({ isOpen, onClose }) => {
 if (!isOpen) return null;
 return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="relative bg-gradient-to-br from-purple-900/40 to-black  rounded-lg shadow-xl text-white p-6 text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl leading-none"
        >
          &times;
        </button>
        <p className="text-xl font-semibold mt-4">Coming soon!</p>
      </div>
    </div>
  );
};

export default ComingSoonModal;