import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-gray-300 pt-10 pb-6 px-6 md:px-16 lg:px-32 mt-12 border-t border-gray-800">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">VXP<span className="text-purple-500 px-[1px]">|</span>Verve</h3>
          <p className="text-sm text-gray-400">
            Empowering women, startups, and creators with futuristic digital services and AI products.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>
            <li><Link to="/ai-store" className="hover:text-purple-400">AI Store</Link></li>
            <li><Link to="/shop" className="hover:text-purple-400">Shop</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-purple-400">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
              <Instagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
              <Twitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-purple-500">
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VXP & Verve. Built with purpose by Queen Osuji.
      </div>
    </footer>
  );
}
