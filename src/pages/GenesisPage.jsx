import React from 'react';
import { useNavigate } from 'react-router-dom';

const GenesisPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => navigate('/ai-models')}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
        >
          ← Back to AI Models
        </button>
        <h1 className="text-2xl font-bold text-white">Genesis Engine</h1>
        <div className="w-32"></div>
      </div>
      
      <div className="px-4 pb-4">
        <iframe
          src="https://aistudio.google.com/app/1ppypk_n-iYuvMxlCBBu7Kb_EAguRVDnX"
          width="100%"
          height="calc(100vh - 100px)"
          style={{border: 'none', borderRadius: '8px'}}
          title="Genesis Engine"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
};

export default GenesisPage;