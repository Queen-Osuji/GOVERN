import React from 'react';

const CTABanner = () => {
  return (
    <section className="py-16 text-white px-10">
      <div className="container mx-auto px-4 text-center bg-gradient-to-b from-purple-600 to-black py-20 rounded-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied clients who have transformed their operations with Verve's innovative AI solutions and expert-led courses. 
          Let's build the future, together.
        </p>
        <div className="space-x-4 py-5 flex flex-col md:flex-row space-y-5">
          <button 
            className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            onClick={() => console.log('Get Started Clicked!')} // Replace with navigation or modal logic
          >
            Get Started Now
          </button>
          <button 
            className="bg-transparent text-white font-semibold py-3 px-8 hover:bg-purple-600 hover:text-white transition-colors duration-300 transform hover:scale-105"
            onClick={() => console.log('Learn More Clicked!')} // Replace with navigation or modal logic
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;