import React, { useState, useEffect } from 'react';
import book1 from "../assets/images/books/book1.jpg"
import book2 from "../assets/images/books/book2.png"
import book3 from "../assets/images/books/book3.jpg"
import book4 from "../assets/images/books/book4.png"

const DigitalShop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const allProducts = [
      {
        title: "100 Prompts",
        author: "vxp",
        price: { usd: "$300.56" },
        gumroadLink: "https://qosuji.gumroad.com/l/100promptsforprof",
        image: book1,
        category: "Creative Prompts",
      },
      {
        title: "The Influence Playbook",
        author: "vxp",
        price: { usd: "$387.00" },
        gumroadLink: "https://qosuji.gumroad.com/l/influncerplaybook",
        image: book2,
        category: "Business & Strategy",
      },
      {
        title: "Beginner's Guide to Machine Learning",
        author: "vxp",
        price: { usd: "$300.00" },
        gumroadLink: "https://qosuji.gumroad.com/l/aiforbusiness",
        image: book3,
        category: "AI & Machine Learning",
      },
      // Add more books with categories here
      {
        title: "Lazy Genuis",
        author: "VXP",
        price: { usd: "$500.00" },
        gumroadLink: "https://vxpturf.gumroad.com/l/lazygen",
        image: book4, // Replace with actual image
        category: "AI & Machine Learning",
      },
      {
        title: "Startup Success Stories",
        author: "Entrepreneur X",
        price: { usd: "$250.00" },
        gumroadLink: "https://example.gumroad.com/l/startupsuccess",
        image: "/images/books/book5.jpg", // Replace with actual image
        category: "Business & Strategy",
      },
      {
        title: "The Art of Digital Painting",
        author: "Pixel Master",
        price: { usd: "$150.00" },
        gumroadLink: "https://example.gumroad.com/l/digitalpainting",
        image: "/images/books/book6.jpg", // Replace with actual image
        category: "Creative Prompts", 
      },
    ];
    setProducts(allProducts);
    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(allProducts.map(p => p.category))];
    setCategories(uniqueCategories);
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="digital-shop" className="py-30 bg-black px-10 mt-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12"> {/* Adjusted margin */} 
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Shop</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore our collection of digital books to empower your journey.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Category Filters */} 
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12 flex-wrap"> 
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mb-2 sm:mb-0 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ease-in-out 
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
              <div className="relative h-60 w-40 mx-auto mt-6 overflow-hidden rounded-md"> {/* Adjusted size and added margin */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" // Changed object-cover to object-contain
                />
                {product.salePrice && ( // Conditionally render "Sale" tag
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded-md text-xs text-white font-bold">
                    Sale
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.author}</p> {/* Placeholder author */}
                <div className="flex items-center mb-3">
                  {/* Placeholder Rating */}
                  {[...Array(4)].map((_, i) => ( // Changed to 4 stars as in the image
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                  ))}
 <span className="ml-2 text-sm text-gray-400">(4.5)</span> {/* Placeholder rating value */}
                </div>

                <div className="flex justify-between items-center mb-4">
                  {/* Prices */}
                  <div className="flex items-baseline">
                    {product.salePrice ? (
                      <>
                        <span className="text-purple-400 font-medium mr-2">{product.salePrice.usd}</span>
                        <span className="text-gray-500 text-xs line-through">{product.price.usd}</span>
                      </>
                    ) : (
                      <span className="text-purple-400 font-medium">{product.price.usd}</span>
                    )}
                  </div>
                </div>
                <button
                  // Add to Cart functionality will be added here
                  // onClick={() => { console.log('Add to Cart clicked for:', product.title); }}
                  onClick={() => window.open(product.gumroadLink, '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Purchase Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enrollment Modal */}
        <div id="enrollment-modal" className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden">
          <div className="min-h-screen px-4 text-center">
            <div className="inline-block align-bottom bg-gradient-to-br from-purple-900/90 to-black backdrop-blur-sm rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-6 pt-6 pb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 id="modal-course-title" className="text-2xl font-bold"></h3>
                    <p className="text-purple-400 mt-1">Instructor: <span id="modal-instructor"></span></p>
                    <p className="text-yellow-400 mt-1">Price: <span id="modal-price"></span></p>
                  </div>
                  <button
                    onClick={() => {
                      const modal = document.getElementById('enrollment-modal');
                      if (modal) modal.classList.add('hidden');
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>

                <form id="enrollment-form" className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="student-name"
                      required
                      className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="student-email"
                      required
                      className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="student-phone"
                      required
                      className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Payment Method</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        className="flex flex-col items-center justify-center bg-purple-900/30 border border-purple-800/30 rounded-lg p-3 hover:bg-purple-900/50 transition-all group"
                      >
                        <i className="fab fa-cc-visa text-2xl mb-1"></i>
                        <span className="text-xs">Credit Card</span>
                      </button>
                      <button
                        type="button"
                        className="flex flex-col items-center justify-center bg-purple-900/30 border border-purple-800/30 rounded-lg p-3 hover:bg-purple-900/50 transition-all group"
                      >
                        <i className="fab fa-paypal text-2xl mb-1"></i>
                        <span className="text-xs">PayPal</span>
                      </button>
                      <button
                        type="button"
                        className="flex flex-col items-center justify-center bg-purple-900/30 border border-purple-800/30 rounded-lg p-3 hover:bg-purple-900/50 transition-all group"
                      >
                        <i className="fas fa-university text-2xl mb-1"></i>
                        <span className="text-xs">Bank Transfer</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="bg-black/50 px-6 py-4 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    const modal = document.getElementById('enrollment-modal');
                    if (modal) modal.classList.add('hidden');
                  }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all !rounded-button whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const form = document.getElementById('enrollment-form');
                    if (form && form.checkValidity()) {
                      // Handle form submission here
                      const modal = document.getElementById('enrollment-modal');
                      if (modal) modal.classList.add('hidden');
                    } else {
                      form?.reportValidity();
                    }
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap"
                >
                  Confirm Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalShop;