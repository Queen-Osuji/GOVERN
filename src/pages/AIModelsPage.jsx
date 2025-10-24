
import React, { useState, useCallback, useEffect } from 'react';
import ComingSoonModal from '../components/ComingSoonModal';
import AIModelModal from '../components/AIModelModal'; // Import the modal component
import ai1 from '../assets/models/ai1.jpg';
import ai2 from '../assets/models/ai2.jpg'
import ai3 from '../assets/models/ai3.jpg'
import ai4 from '../assets/models/ai4.jpg'

const aiModelsData = [
  {
    name: 'LIFE (The Genesis Engine)',
    tagline: 'LIFE: Design the Future, From Molecules to Markets.',
    description: "Stop just reacting to the world – start designing it. LIFE isn't just another AI; it's your personal Genesis Engine. Imagine: Real Estate Moguls: Developing self-repairing, eco-friendly building materials that skyrocket property value and sustainability. ROI Hunters: Identifying and investing in the next wave of bio-revolutionary companies before they explode. Visionary Billionaires: Funding and directing breakthroughs in sustainable food production, personalized medicine, or environmental regeneration that define your legacy. Gen Z Innovators: Creating entirely new bio-art, sustainable consumer products, or even solutions to local environmental challenges. LIFE gives you the conceptual tools to understand and architect biological and material innovation from the ground up. Get the blueprint to build a more profitable, sustainable, and revolutionary future. This is not just an investment; it's an evolution.",
    image: ai3,
    gumroadLink: 'YOUR_LIFE_GUMROAD_LINK',
  },
  {
    name: 'POKEMON (CogniMon Protocol)',
    tagline: 'POKEMON (CogniMon Protocol): Assemble Your AI Dream Team. Instantly.',
    image: ai1,
    gumroadLink: 'https://vxpturf.gumroad.com/l/pokemaster',
  },
  {
    name: 'V12 (The Hyper-Dimensional Engine)',
    tagline: 'V12: See the Unseen. Predict the Unthinkable. Profit from the Impossible.',
    image: ai2,
    gumroadLink: 'YOUR_V12_GUMROAD_LINK',
  },
  {
    name: 'BLACK SWAN (The Anti-Entropy Engine)',
    tagline: 'BLACK SWAN: Master Uncertainty. Capitalize on Chaos.',
    image: ai4,
    gumroadLink: 'YOUR_BLACK_SWAN_GUMROAD_LINK',
  }
];

const AIMarketplace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const openModal = useCallback((model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
    setEmail('');
    setError('');
    setIsLoading(false);
    setAccessGranted(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedModel(null);
    setEmail('');
    setError('');
    setIsLoading(false);
    setAccessGranted(false);
  }, []);

  useEffect(() => {
    if (!isModalOpen || !selectedModel || accessGranted) return;
    let paypalButtons = null;
  const containerId = `paypal-button-container-${selectedModel.name.replace(/[^a-zA-Z0-9_-]/g, '')}`;
    if (!window.paypal) {
      if (!document.getElementById('paypal-sdk')) {
        const script = document.createElement('script');
        script.id = 'paypal-sdk';
        script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`;
        script.onload = renderPayPal;
        document.body.appendChild(script);
      } else {
        document.getElementById('paypal-sdk').addEventListener('load', renderPayPal);
      }
    } else {
      renderPayPal();
    }
    function renderPayPal() {
      const container = document.getElementById(containerId);
      if (container && !container.hasChildNodes()) {
        paypalButtons = window.paypal.Buttons({
          createOrder: (data, actions) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
              setError('Please enter your email address.');
              return Promise.reject(new Error('No email'));
            }
            if (!emailRegex.test(email)) {
              setError('Please enter a valid email address.');
              return Promise.reject(new Error('Invalid email'));
            }
            setError('');
            setIsLoading(true);
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '99', 
                  currency_code: 'USD'
                }
              }]
            });
          },
          onApprove: async (data, actions) => {
            try {
              await actions.order.capture();
              setIsLoading(false);
              setAccessGranted(true);
            } catch (err) {
              console.error('PayPal payment error:', err);
              setError('Payment failed. Please try again.');
              setIsLoading(false);
            }
          },
          onError: () => {
            setError('An error occurred with the payment. Please try again.');
            setIsLoading(false);
          }
        });
        paypalButtons.render(`#${containerId}`);
      }
    }
    return () => {
      if (paypalButtons && paypalButtons.close) paypalButtons.close();
    };
  }, [isModalOpen, selectedModel, accessGranted, email]);


  return (
    <>
      <div className="flex pt-30">
      <div className="flex flex-col mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-15 text-white">AI Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 md:mx-30">
        {aiModelsData.map((model, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl shadow-md p-6 text-white flex flex-col">
            <img src={model.image} alt={model.name} className="w-full h-50 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-1">{model.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{model.tagline}</p>
            <button
              className="w-full bg-gradient-to-r to-purple-800 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all mb-2"
              onClick={() => openModal(model)}
            >
              Buy with PayPal
            </button>
          </div>
        ))}
      </div>

      {/* PayPal Modal for AI Model */}
      {isModalOpen && selectedModel && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-900/90 to-black rounded-lg shadow-xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-white">Access {selectedModel.name}</h3>
            {!accessGranted ? (
              <>
                <p className="text-purple-400 mb-2">Price: $99</p>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full mb-4 px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-800/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div id={`paypal-button-container-${selectedModel.name.replace(/[^a-zA-Z0-9_-]/g, '')}`} className="mb-4"></div>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                {isLoading && <div className="text-purple-400 mb-2">Processing payment...</div>}
              </>
            ) : (
              <div className="bg-purple-800 text-white p-4 rounded-xl shadow-xl mt-4 text-center">
                <h4 className="text-lg font-bold">Access Granted!</h4>
                <p className="mt-2 text-sm">You can now access the code for <strong>{selectedModel.name}</strong>.</p>
                <a
                  href={selectedModel.gumroadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r to-purple-800 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  View Code on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      </div>
      </div>
    </>
  );
}
export default AIMarketplace;