import React from 'react';

const ServiceDetailModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-black bg-opacity-80 backdrop-filter backdrop-saturate-150 p-6 md:p-8 rounded-lg shadow-xl max-w-lg w-full text-white relative border border-zinc-700">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <div className="text-center mb-6">
          {service.icon && (
            <div className="w-20 h-20 bg-purple-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <i className={`fas fa-${service.icon} text-4xl text-white`}></i>
            </div>
          )}
          <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-300">{service.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 text-lg leading-relaxed">
          {service.description}
        </p>
        
        <div className="my-6 p-4 bg-purple-900/30 rounded-lg">
            <p className="text-yellow-400 text-center font-semibold text-xl">Coming Soon!</p>
            <p className="text-gray-400 text-center mt-2">More details about this service will be available shortly. Stay tuned!</p>
        </div>

        <p className="text-purple-400 font-medium text-lg text-center mb-6">Price: {service.price}</p>

        <div className="text-center mt-8">
          <button 
            onClick={onClose} 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;