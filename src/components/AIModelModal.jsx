
import React from 'react';

const AIModelModal = ({ model, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="relative bg-gradient-to-br from-purple-900/40 to-black border border-purple-800/20 rounded-xl  shadow-xl text-white max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose} // Call the onClose prop
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl leading-none"
        >
          &times;
        </button>
        {model && (
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-90 p-6 flex flex-col items-center text-left mt-10">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-center">{model.name}</h2>
              <p className="text-gray-400 text-sm font-semibold text-center">{model.tagline}</p>
            </div>
            <div className="w-full md:w-2/3 p-6 mt-10">
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-gray-300 mb-6">{model.description}</p>
              <a
                href={model.gumroadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-purple-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-200"
              >
                Purchase
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIModelModal;