import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Futuristic%20digital%20landscape%20with%20purple%20and%20gold%20color%20scheme%2C%20abstract%20geometric%20shapes%20and%20light%20particles%20floating%20in%20space%2C%20modern%20tech%20aesthetic%20with%20soft%20glow%20effects%2C%20minimalist%20design%20with%20depth%20and%20dimension%2C%20perfect%20for%20a%20high-end%20tech%20brand%20background%20with%20space%20for%20text%20on%20the%20left%20side&width=1440&height=900&seq=hero-bg-1&orientation=landscape"
          alt="Futuristic digital landscape"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block">Envision the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Future of Digital</span>
              <span className="block">Experience</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-lg">
              Pioneering the digital frontier with cutting-edge AI solutions and premium digital services designed for visionary women in business and tech.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                Explore Services
              </button>
              <button className="bg-transparent border-2 border-purple-500 px-8 py-3 rounded-full text-base font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                AI Solutions
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-purple-800 overflow-hidden">
                    <img
                      src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20diverse%20business%20woman%20with%20elegant%20style%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20business%20attire%2C%20professional%20appearance&width=100&height=100&seq=client-${i}&orientation=squarish`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-300">Trusted by <span className="text-purple-400 font-medium">2,000+</span> visionary leaders</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {/* This div is intentionally left empty as the background image serves as the right side content */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="text-white/70 hover:text-white animate-bounce cursor-pointer">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;