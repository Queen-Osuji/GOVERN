
import React, { useState, useCallback } from 'react';
import ComingSoonModal from '../components/ComingSoonModal';
import AIModelModal from '../components/AIModelModal'; // Import the modal component
import ai1 from '../assets/images/models/ai1.jpg'
import ai2 from '../assets/images/models/ai2.jpg'
import ai3 from '../assets/images/models/ai3.jpg'
import ai4 from '../assets/images/models/ai4.jpg'

const aiModelsData = [
  {
    name: 'LIFE (The Genesis Engine)',
    tagline: 'LIFE: Design the Future, From Molecules to Markets.',
    description: "Stop just reacting to the world – start designing it. LIFE isn't just another AI; it's your personal Genesis Engine. Imagine: Real Estate Moguls: Developing self-repairing, eco-friendly building materials that skyrocket property value and sustainability. ROI Hunters: Identifying and investing in the next wave of bio-revolutionary companies before they explode. Visionary Billionaires: Funding and directing breakthroughs in sustainable food production, personalized medicine, or environmental regeneration that define your legacy. Gen Z Innovators: Creating entirely new bio-art, sustainable consumer products, or even solutions to local environmental challenges. LIFE gives you the conceptual tools to understand and architect biological and material innovation from the ground up. Get the blueprint to build a more profitable, sustainable, and revolutionary future. This is not just an investment; it's an evolution.",
    image: ai3, // Replace with actual image URL
    gumroadLink: 'YOUR_LIFE_GUMROAD_LINK', // Replace with actual Gumroad link
    rating: 0.0,
  },
  {
    name: 'POKEMON (CogniMon Protocol)',
    tagline: 'POKEMON (CogniMon Protocol): Assemble Your AI Dream Team. Instantly.',
    description: "Why settle for one AI when you can command an entire ecosystem? The CogniMon Protocol lets you access, combine, and deploy specialized 'CogniMons' – powerful AI agents, each a master of its domain. Think of it: Real Estate Pros: Instantly deploy a CogniMon for hyper-local market analysis, another for automated legal doc review, and a third for predicting zoning changes – all working in concert. ROI Maximizers: Build a custom AI 'task force' to uncover hidden market inefficiencies, automate complex financial modeling, or identify arbitrage opportunities 24/7. Empire-Building Billionaires: Orchestrate vast, complex projects by deploying teams of specialized CogniMons for everything from R&D to global logistics and strategic threat assessment. Gen Z Creators: Mix-and-match CogniMons to generate unique content, build personalized apps, or even launch AI-powered startups with minimal overhead. Stop trying to find the one-size-fits-all AI. With POKEMON, you collect, train, and unleash a universe of specialized intelligences. Your unfair advantage is waiting to be assembled.",
    image: ai1, // Replace with actual image URL
    gumroadLink: 'YOUR_POKEMON_GUMROAD_LINK', // Replace with actual Gumroad link
    rating: 4.0,
  },
  {
    name: 'V12 (The Hyper-Dimensional Engine)',
    tagline: 'V12: See the Unseen. Predict the Unthinkable. Profit from the Impossible.',
    description: "The world is complex. Your data is multi-dimensional. Your AI should be too. V12 isn't just faster; it processes information in ways current systems can't even comprehend, seeing patterns in hyper-dimensional space. What this means for you: Real Estate Investors: Go beyond basic trends. V12 can reveal how seemingly unrelated global events will impact local property values, years in advance. ROI Strategists: Uncover 'alpha' where no one else is looking. V12 identifies deep, hidden correlations in financial markets, supply chains, and consumer behavior to give you an unparalleled predictive edge. Visionary Billionaires: Understand the true interconnectedness of global systems. Model the impact of large-scale investments or philanthropic efforts with unprecedented accuracy and foresight. Gen Z Trailblazers: 'See the matrix.' Understand complex social dynamics, predict viral trends, or even design systems that are inherently more stable and equitable. V12 is your telescope into the hidden architecture of reality. For those who don't just want to predict the future, but to understand its very fabric.",
    image: ai2, // Replace with actual image URL
    gumroadLink: 'YOUR_V12_GUMROAD_LINK', // Replace with actual Gumroad link
    rating: 0.0,
  },
  {
    name: 'BLACK SWAN (The Anti-Entropy Engine)',
    tagline: 'BLACK SWAN: Master Uncertainty. Capitalize on Chaos.',
    description: "The future is full of surprises – some disastrous, some revolutionary. BLACK SWAN is your advanced early warning system and opportunity detector for those high-impact, low-probability events that change everything. Imagine being able to: Real Estate Developers: Identify brewing economic storms or unexpected demographic shifts that could tank your project – or pinpoint that overlooked area about to explode in value. ROI Guardians: Protect your portfolio from unforeseen market crashes AND be perfectly positioned to capitalize on sudden, paradigm-shifting opportunities that others miss. Forward-Thinking Billionaires: Navigate global volatility with confidence. BLACK SWAN helps you identify systemic risks and nascent breakthroughs, turning potential crises into strategic triumphs. Gen Z Futurists: Not just react to change, but anticipate it. Understand the forces shaping tomorrow and be ready to ride the next big wave, or even create it. BLACK SWAN doesn't just predict; it prepares you to thrive in a world of radical uncertainty. Turn unknown unknowns into your greatest strategic asset.",
    image: ai4, // Rep
    gumroadLink: 'YOUR_BLACK_SWAN_GUMROAD_LINK', 
    rating: 0.0,
  },
  // Add more models here following the same structure
];

const AIMarketplace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);
  const [selectedComingSoonModel, setSelectedComingSoonModel] = useState(null);

  const openModal = useCallback((model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedModel(null);
  }, []);

  const openComingSoonModal = () => {
    setSelectedComingSoonModel(model);
    setIsComingSoonModalOpen(true);
  };

  return (
    <>
      <div className="flex pt-30">
      <div className="flex flex-col mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-15 text-white">AI Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 md:mx-30">
        {aiModelsData.map((model, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl  shadow-md p-6 text-white flex flex-col">
            <img src={model.image} alt={model.name} className="w-full h-50 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-1">{model.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{model.tagline}</p>
            {model.name === 'POKEMON (CogniMon Protocol)' ? (
              <div className="flex items-center mb-4">
                {/* Dynamic Rating for POKEMON */}
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        model.rating >= ratingValue
                          ? 'text-yellow-400 fill-current'
                          : model.rating >= ratingValue - 0.5
                          ? 'text-yellow-400 fill-current text-opacity-50' // Use a semi-transparent yellow for half star
                          : 'text-gray-500 fill-current' // Use a gray for empty star
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                  );
                })}
                <span className="ml-2 text-sm text-gray-400">
                  ({model.rating.toFixed(1)})
                </span>
              </div>
            ) : (
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-400">Rating: Coming Soon</span>
              </div>
            )}
            <div className="flex justify-between space-x-4 mt-auto">
              <button
                onClick={() => openModal(model)}
                className="flex-1 bg-purple-900/30 hover:bg-purple-500/20 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </button>
              {model.name === 'POKEMON (CogniMon Protocol)' ? (
                <a
                  href={model.gumroadLink}
                  target="_blank"
                  rel="noopener noreferrer" // Good practice for target="_blank"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >Unlock Access
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedComingSoonModel(model);
                    setIsComingSoonModalOpen(true);
                  }}
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >Unlock Access
                </button>
              )}
            </div>
           </div>
        ))}
    </div>
 </div>
    </div>
     {/* Render the modal */}
      {isModalOpen && selectedModel && (
        <AIModelModal
          model={selectedModel}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      {/* Render the Coming Soon modal */}
      {isComingSoonModalOpen && selectedComingSoonModel && ( // Added selectedComingSoonModel check
        <ComingSoonModal
          model={selectedComingSoonModel}
          isOpen={isComingSoonModalOpen}
          onClose={() => {
            setIsComingSoonModalOpen(false);
            setSelectedComingSoonModel(null); // Reset selected model on close
          }}
        />
      )}
    </>
  );
};


export default AIMarketplace;