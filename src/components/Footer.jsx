import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-purple-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400 mb-4">
              VXP<span className="text-white">.</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Pioneering the digital frontier with cutting-edge AI solutions and premium digital services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'AI Store', 'Digital Shop'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-purple-400 transition-all cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Courses', 'Case Studies', 'FAQ', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-all cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-purple-900/30 border border-purple-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex items-center space-x-4">
              <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
              <i className="fab fa-paypal text-2xl text-gray-400"></i>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VXP & Verve. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Cookie Policy</a>
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;