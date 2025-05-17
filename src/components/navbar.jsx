import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-[#080808] bg-opacity-90 backdrop-blur-lg shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-black tracking-widest">
          VXP<span className="text-purple-500">|</span>Verve
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className={`md:flex gap-8 text-sm font-medium text-white ${isOpen ? 'block mt-6' : 'hidden'} md:block`}>
          {/* <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li> */}
          <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-purple-400 transition">Services</Link></li>
          <li><Link to="/ai-store" className="hover:text-purple-400 transition">AI Store</Link></li>
          <li><Link to="/shop" className="hover:text-purple-400 transition">Digital Shop</Link></li>
          <li><Link to="/courses" className="hover:text-purple-400 transition">Courses</Link></li>
          <li><Link to="/blog" className="hover:text-purple-400 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
