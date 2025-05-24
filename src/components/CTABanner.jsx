import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 text-white px-20 my-10">
      <div className="container mx-auto px-4 text-center bg-gradient-to-b from-purple-600 to-black py-20 rounded-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied clients who have transformed their operations with Verve's innovative AI solutions and expert-led courses. 
          Let's build the future, together.
        </p>
        <div className="space-x-4 py-5">
          <button 
            className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-500 transition-colors duration-300 transform hover:scale-105"
            onClick={() => navigate('/contact')} 
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;