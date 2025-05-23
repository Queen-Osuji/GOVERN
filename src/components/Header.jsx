import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 z-50 w-full transition-all duration-300 ${
    scrollPosition > 50 ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
  } border-b border-purple-900/30`;

  const mobileMenuClasses = `fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
              VXP<span className="text-white">.</span>
            </h1>
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300 font-medium">
            <a href="/about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="/digital-shop" className="hover:text-purple-400 transition-colors">Digital Shop</a>
            <a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a>
 </nav>
 <a href="/getstarted" className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">Get Started</a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={mobileMenuClasses}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-gray-800">VXP.</span> {/* Updated Logo in mobile menu */}
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-gray-800"> {/* Text color adjusted for mobile menu */}
            <a href="#home" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Home</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">About</a>
            <a href="/about" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">About</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Contact</a>
            <a href="#ai-store" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">AI Store</a> {/* Added missing links to mobile menu */}
            <a href="#digital-shop" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Digital Shop</a>
            <a href="#courses" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Courses</a>
            <a href="#blog" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Blog</a>
 <a href="/get-started" onClick={toggleMenu} className="mt-4 bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-2 rounded-full text-white text-sm font-medium text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all">Get Started</a> {/* Added Get Started button to mobile menu */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;