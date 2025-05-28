import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react'; // Import icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial volume (optional, if you want to default it)
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Default volume
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Removed volume from dependency array

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Removed handleVolumeChange and toggleMute functions

  const headerClasses = `fixed top-0 z-50 w-full transition-all duration-300 ${
    scrollPosition > 50 ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
  } border-b border-purple-900/30`;

  const mobileMenuClasses = `fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  // Glowing effect class
  const glowingButtonClass = `
    text-white hover:text-purple-400 transition-colors 
    rounded-full p-2 
    focus:outline-none 
    ${isPlaying 
      ? 'shadow-[0_0_15px_5px_rgba(192,132,252,0.4)] hover:shadow-[0_0_20px_7px_rgba(192,132,252,0.5)]' 
      : 'shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_7px_rgba(255,255,255,0.3)]'}
  `;

  return (
    <header className={headerClasses}>
      <audio ref={audioRef} src="/audio/background-music.mp3" loop />
      <div className="container mx-auto px-4 md:px-20 py-3 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
                VXP<span className="text-white">.</span>
              </h1>
            </a>
          </div>

          {/* Simplified Audio Control - Desktop */}
          <div className="hidden md:flex items-center space-x-3 mr-4">
            <button onClick={togglePlayPause} className={glowingButtonClass}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-gray-300 font-medium">
            <a href="/about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="/digital-shop" className="hover:text-purple-400 transition-colors">Digital Shop</a>
            <a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>

          <div className="md:hidden flex items-center space-x-3">
            {/* Simplified Audio Control - Mobile */}
            <button onClick={togglePlayPause} className={glowingButtonClass}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={mobileMenuClasses}>
        <div className="p-6 bg-black min-h-screen">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-800">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">VXP</span>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-gray-800">
            <a href="/" onClick={toggleMenu} className="text-gray-200 hover:text-blue-500">Home</a>
            <a href="/about" onClick={toggleMenu} className="text-gray-200 hover:text-blue-500">About</a>
            <a href="/digital-shop" onClick={toggleMenu} className="text-gray-200 hover:text-blue-500">Digital Shop</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-200 hover:text-blue-500">Contact</a>
          </nav>

          {/* Simplified Audio Control - Inside Mobile Menu (Optional, or remove if only needed next to hamburger) */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-center">
            <button onClick={() => { togglePlayPause(); toggleMenu(); }} className={glowingButtonClass}>
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;