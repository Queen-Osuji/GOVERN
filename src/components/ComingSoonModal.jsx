import React from 'react';

const ComingSoonModal = ({ model, isOpen, onClose }) => {
 if (!isOpen) return null;

 return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="relative bg-gradient-to-br from-purple-900/60 to-black rounded-lg shadow-xl text-white p-6 max-w-sm w-full flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl leading-none"
        >
          &times;
        </button>
        {model && (
          <>
            <img src={model.image} alt={model.name} className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-purple-600" />
            <h2 className="text-2xl font-bold mb-2 text-center">{model.name}</h2>
            <p className="text-gray-300 text-sm mb-4 text-center">{model.tagline}</p>
            <p className="text-xl font-semibold mt-2">Still in build</p>
            <p className="text-lg text-gray-300">Coming soon!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ComingSoonModal;