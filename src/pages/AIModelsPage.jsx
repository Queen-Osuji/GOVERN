
import React, { useState } from 'react';

import PaystackModal from '../components/PaystackModal';
const aiModels = [
  // Add a placeholder for Paystack public key
  // You should ideally load this from environment variables for security
  {
    id: 1,
    name: 'Natural Language Processing Model',
    description: 'A powerful model for understanding and generating human language.',
    image: 'https://readdy.ai/api/generate?prompt=natural%20language%20processing%20icon&width=300&height=200',
    price: '$199.99',
  },
  {
    id: 2,
    name: 'Image Recognition Model',
    description: 'Accurately identifies objects and scenes in images.',
    image: 'https://readdy.ai/api/generate?prompt=image%20recognition%20icon&width=300&height=200',
    price: '$249.99',
  },
  {
    id: 3,
    name: 'Predictive Analytics Model',
    description: 'Analyzes data to forecast future trends and behaviors.',
    image: 'https://readdy.ai/api/generate?prompt=predictive%20analytics%20icon&width=300&height=200',
    price: '$299.99',
  },
  {
    id: 4,
    name: 'Recommendation Engine Model',
    description: 'Provides personalized recommendations based on user behavior and preferences.',
    image: 'https://readdy.ai/api/generate?prompt=recommendation%20engine%20icon&width=300&height=200',
    price: '$179.99',
  },
  {
    id: 5,
    name: 'Fraud Detection Model',
    description: 'Identifies and flags potentially fraudulent activities in real-time.',
    image: 'https://readdy.ai/api/generate?prompt=fraud%20detection%20icon&width=300&height=200',
    price: '$349.99',
  },
  {
    id: 6,
    name: 'Chatbot Model',
    description: 'Engages in natural language conversations to provide support and information.',
    image: 'https://readdy.ai/api/generate?prompt=chatbot%20icon&width=300&height=200',
    price: '$149.99',
  },
];

const AIMarketplace = () => {
  // Placeholder for your Paystack public key
  // **IMPORTANT:** In a production environment, do not hardcode your API key.
  // Use environment variables or a backend to handle this securely.  const PAYSTACK_PUBLIC_KEY = 'YOUR_PAYSTACK_PUBLIC_KEY';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  // Placeholder function for handling payment with Paystack
  const handlePurchase = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  return (
    <div className="flex pt-30">
      <div className="flex flex-col mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-15 text-white">AI Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 md:mx-30">
        {aiModels.map((model) => (
          <div key={model.id} className="bg-gray-800 rounded-lg shadow-md p-6 text-white flex flex-col">
            <img src={model.image} alt={model.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
            <p className="text-gray-400 mb-4">{model.description}</p>
            <p className="text-lg font-bold text-green-400 mb-4">{model.price}</p>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button> */}
            <button 
              onClick={() => handlePurchase(model)}
              className="w-full h-12 mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
            >
              Unlock Access
            </button>
          </div>
        ))}
      </div>
      <PaystackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        model={selectedModel}
      />
    </div>
    </div>
  );
};

export default AIMarketplace;