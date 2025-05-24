import React from 'react';
import { ChevronDown } from 'lucide-react'; // Import the ChevronDown icon

const Hero = () => {
  const handleScrollDown = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const aboutSection = document.querySelector('#about'); // Get the target section
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-10">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero_image.jpg"
          alt="Futuristic digital landscape"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10"> {/* Adjusted padding */} 
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Adjusted gap */} 
          <div className="space-y-6 md:space-y-8"> {/* Adjusted spacing */} 
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"> {/* Adjusted text size */} 
              <span className="block">Envision the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Future of Digital</span>
              <span className="block">Experience</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-lg"> {/* Adjusted text size */} 
              Pioneering the digital frontier with cutting-edge AI solutions and premium digital services designed for visionary women in business and tech.
            </p>
          </div>
          <div className="hidden md:block">
            {/* This div is intentionally left empty as the background image serves as the right side content */}
          </div>
        </div>
      </div>
      {/* Scroll Down Animation */}
      <div className="absolute bottom-40 left-0 right-0 flex justify-center z-20">
        <a 
          href="#about" 
          onClick={handleScrollDown} // Add click handler
          className="text-white/70 hover:text-white animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronDown size={28} /> {/* Using Lucide ChevronDown icon */}
        </a>
      </div>
    </section>
  );
};

export default Hero;