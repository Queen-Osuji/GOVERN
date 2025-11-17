import React, { useState, useEffect } from 'react';

// Placeholder images - replace with your actual imports
import book1 from "../assets/books/book1.jpg";
import book2 from "../assets/books/book2.png";
import book3 from "../assets/books/book3.jpg";
import book4 from "../assets/books/book4.png";
import book5 from "../assets/books/book5.jpg";
import book6 from "../assets/books/book6.png";
import book7 from "../assets/books/book7.jpg";
import book8 from "../assets/books/book8.png";
import book9 from "../assets/books/book9.png";
import book10 from "../assets/books/book10.png";
import book12 from "../assets/books/book12.jpg";
import book13 from "../assets/books/book13.png";
import book14 from "../assets/books/book14.jpg";

const productCategories = ['All', 'AI & Machine Learning', 'Billionaire & Strategy', 'Women & Babies'];

// PayPal SDK loader function
const loadPayPalScript = (clientId) => {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve(window.paypal);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error('PayPal SDK failed to load'));
    document.body.appendChild(script);
  });
};

const DigitalShop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [showGift, setShowGift] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [purchasedEmail, setPurchasedEmail] = useState('');

  useEffect(() => {
    if (!modalOpen || !selectedProduct) return;

    let paypalButtons = null;
    const containerId = `paypal-button-container-${selectedProduct.title.replace(/\s/g, '')}`;

    // Replace with your actual PayPal client ID
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID; // Use: import.meta.env.VITE_PAYPAL_CLIENT_ID in your project

    loadPayPalScript(clientId)
      .then((paypal) => {
        const container = document.getElementById(containerId);
        if (container && !container.hasChildNodes()) {
          paypalButtons = paypal.Buttons({
            createOrder: (data, actions) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!email || !emailRegex.test(email)) {
                setError('Please enter a valid email address before proceeding with payment.');
                return Promise.reject(new Error('Invalid email'));
              }
              setError('');
              setIsLoading(true);

              // Extract numeric price from the product price string
              const priceValue = selectedProduct.price.usd.replace(/[^\d.]/g, '');

              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: priceValue,
                    currency_code: 'USD'
                  },
                  description: selectedProduct.title
                }]
              });
            },
            onApprove: async (data, actions) => {
              try {
                const order = await actions.order.capture();
                setPurchasedEmail(email);
                await sendEbook(
                  email,
                  order.purchase_units[0].payments.captures[0].id,
                  selectedProduct.title
                );
              } catch (err) {
                console.error('PayPal approval error:', err);
                setError('Payment failed. Please try again.');
                setIsLoading(false);
              }
            },
            onError: (err) => {
              console.error('PayPal error:', err);
              setError('An error occurred with the payment. Please try again.');
              setIsLoading(false);
            }
          });
          paypalButtons.render(`#${containerId}`);
        }
      })
      .catch((err) => {
        console.error('Failed to load PayPal script:', err);
        setError('PayPal is currently unavailable. Please try again later.');
      });

    return () => {
      if (paypalButtons && paypalButtons.close) {
        paypalButtons.close();
      }
    };
  }, [modalOpen, selectedProduct, email]);

  const sendEbook = async (email, orderId, productTitle) => {
    setIsLoading(true);
    try {
      // Use the new attachment-based email endpoint
      const apiUrl = '/api/email/send-with-attachment';

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          orderId,
          productTitle
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
      }

      setShowGift(true);
      setEmail('');
      setError('');
      console.log('Ebook sent successfully with attachment');
    } catch (error) {
      console.error('Error sending ebook:', error.message);
      setError(`Failed to send ebook: ${error.message}. Please contact support.`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const allProducts = [
      {
        title: "100 Prompts",
        author: "Versatile.co",
        price: { usd: "$50" },
        image: book1,
        category: "AI & Machine Learning",
        rating: 5,
      },
      {
        title: "The Influencer Playbook",
        author: "Versatile.co",
        price: { usd: "$1,200" },
        image: book2,
        category: "Billionaire & Strategy",
        rating: 4.5,
      },
      {
        title: "AI for Business (Beginner's Guide)",
        author: "Versatile.co",
        price: { usd: "$299" },
        image: book3,
        rating: 4,
        category: "AI & Machine Learning",
      },
      {
        title: "Lazy Genius",
        author: "Versatile.co",
        price: { usd: "$500" },
        image: book5,
        rating: 3.5,
        category: "AI & Machine Learning",
      },
      {
        title: "AI SYMBIOSIS",
        author: "Versatile.co",
        price: { usd: "$1,499" },
        image: book4,
        category: "AI & Machine Learning",
        rating: 5,
      },
      {
        title: "TABLOIDS",
        author: "Versatile.co",
        price: { usd: "$1,999" },
        image: book6,
        category: "Billionaire & Strategy",
        rating: 4.5,
      },
      {
        title: "AI Agent Fundamentals",
        author: "Versatile.co",
        price: { usd: "$00" },
        image: book7,
        category: "AI & Machine Learning",
        rating: 4.5,
        isFree: true,
      },
      {
        title: "How to Build Smart Business with Agentic AI",
        author: "Versatile.co",
        price: { usd: "$999" },
        image: book8,
        category: "AI & Machine Learning",
        rating: 4.5,
      },
      {
        title: "First Time Mum",
        author: "Versatile.co",
        price: { usd: "$20" },
        image: book9,
        category: "Women & Babies",
        rating: 4.5,
      },
      {
        title: "How to Finish Any eBook",
        author: "Versatile.co",
        price: { usd: "$17" },
        image: book10,
        category: "Billionaire & Strategy",
        rating: 4.5,
      },
      {
        title: "Agentic AI Playbook",
        author: "Versatile.co",
        price: { usd: "$999" },
        image: book12,
        category: "AI & Machine Learning",
        rating: 4.5,
      },
      {
        title: "The Hidden Truth of Motherhood",
        author: "Versatile.co",
        price: { usd: "$39" },
        image: book13,
        category: "Women & Babies",
        rating: 4.5,
      },
      {
        title: "The Sacred Choice",
        author: "Versatile.co",
        price: { usd: "$29.99" },
        image: book14,
        category: "Women & Babies",
        rating: 4.5,
      }
    ];
    setProducts(allProducts);
    setCategories(productCategories);
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleFreeDownload = async (product) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address before downloading.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await sendEbook(email, 'FREE-' + Date.now(), product.title);
    } catch (error) {
      setError('Failed to send free ebook. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <section id="digital-shop" className="py-20 bg-black px-4 sm:px-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Shop</span>
          </h2>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12x">
          {filteredProducts.map((product, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => { setSelectedProduct(product); setModalOpen(true); setShowGift(false); setError(''); }}>
              {/* 3D Book Container */}
              <div className="relative mx-auto w-48 h-64 perspective-1000">
                <div className={`book-3d relative w-full h-full transform-gpu transition-all duration-700 ${
                  isLoading && selectedProduct?.title === product.title ? 'animate-book-processing' : 'group-hover:animate-book-hover'
                }`}>
                  {/* Book Cover */}
                  <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
                    boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
                  }}>
                    <div className={`w-full h-full ${
                      product.image === book13 || product.image === book14 ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-black' : ''
                    }`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className={`w-full h-full transition-all duration-500 group-hover:brightness-110 ${
                          product.image === book13 || product.image === book14 ? 'object-contain' : 'object-fill'
                        }`}
                      />
                    </div>

                    {/* Magical Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>

                    {/* Floating Sparkles on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 right-8 w-1 h-1 bg-yellow-300 rounded-full animate-sparkle-1"></div>
                      <div className="absolute top-12 left-6 w-1 h-1 bg-purple-300 rounded-full animate-sparkle-2"></div>
                      <div className="absolute bottom-8 right-4 w-1 h-1 bg-blue-300 rounded-full animate-sparkle-3"></div>
                    </div>

                    {/* Book Spine Shadow */}
                    <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>

                    {/* Price Badge */}
                    {product.isFree ? (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 animate-pulse">
                        FREE
                      </div>
                    ) : (
                      <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold z-10 group-hover:animate-bounce">
                        {product.price.usd}
                      </div>
                    )}
                  </div>

                  {/* Book Pages Effect */}
                  <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
                  <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>

                  {/* Book Spine */}
                  <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 transform origin-left -rotate-y-90 translate-z-1"></div>
                </div>
              </div>

              {/* Book Info */}
              <div className="mt-4 text-center px-2">
                <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-xs mb-2">{product.author}</p>

                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'
                    }`}>
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400 text-xs ml-1">({product.rating})</span>
                </div>

                <div className="text-purple-400 font-medium text-sm mb-2">
                  {product.price.usd}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }

          .book-3d {
            transform-style: preserve-3d;
          }

          .book-cover {
            transform-style: preserve-3d;
          }

          @keyframes book-hover {
            0% { transform: rotateY(0deg) scale(1) translateY(0px); }
            100% { transform: rotateY(-8deg) scale(1.05) translateY(-5px); }
          }

          @keyframes book-processing {
            0% { transform: rotateY(0deg) scale(1) translateY(0px); }
            25% { transform: rotateY(-15deg) scale(1.1) translateY(-10px); }
            50% { transform: rotateY(15deg) scale(1.1) translateY(-10px); }
            75% { transform: rotateY(-15deg) scale(1.1) translateY(-10px); }
            100% { transform: rotateY(0deg) scale(1) translateY(0px); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes sparkle-1 {
            0%, 100% { opacity: 0; transform: scale(0) translateY(0px); }
            50% { opacity: 1; transform: scale(1) translateY(-10px); }
          }

          @keyframes sparkle-2 {
            0%, 100% { opacity: 0; transform: scale(0) translateY(0px); }
            60% { opacity: 1; transform: scale(1) translateY(-8px); }
          }

          @keyframes sparkle-3 {
            0%, 100% { opacity: 0; transform: scale(0) translateY(0px); }
            40% { opacity: 1; transform: scale(1) translateY(-12px); }
          }

          .animate-book-hover {
            animation: book-hover 0.7s ease-out forwards;
          }

          .animate-book-processing {
            animation: book-processing 2s ease-in-out infinite;
          }

          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }

          .animate-sparkle-1 {
            animation: sparkle-1 2s ease-in-out infinite;
          }

          .animate-sparkle-2 {
            animation: sparkle-2 2.5s ease-in-out infinite;
          }

          .animate-sparkle-3 {
            animation: sparkle-3 1.8s ease-in-out infinite;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .-rotate-y-90 {
            transform: rotateY(-90deg);
          }

          .translate-z-1 {
            transform: translateZ(1px);
          }
        `}</style>

        {/* PayPal Modal */}
        {modalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-purple-900/90 to-black rounded-lg shadow-xl p-8 w-full max-w-md relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                onClick={() => {
                  setModalOpen(false);
                  setEmail('');
                  setError('');
                  setShowGift(false);
                }}
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {selectedProduct.isFree ? 'Get' : 'Buy'} {selectedProduct.title}
              </h3>
              <p className="text-purple-400 mb-4 text-lg">
                Price: <span className="font-bold">{selectedProduct.price.usd}</span>
              </p>

              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email address"
                className="w-full mb-4 px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-800/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {selectedProduct.isFree ? (
                <button
                  onClick={() => handleFreeDownload(selectedProduct)}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-green-700 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-white disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Download Free Ebook'}
                </button>
              ) : (
                <div id={`paypal-button-container-${selectedProduct.title.replace(/\s/g, '')}`} className="mb-4"></div>
              )}

              {error && <div className="text-red-400 mb-2 text-sm mt-2">{error}</div>}
              {isLoading && !selectedProduct.isFree && (
                <div className="text-purple-400 mb-2 text-center animate-pulse flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <span className="ml-2">Processing payment and preparing your PDF...</span>
                </div>
              )}

              {showGift && (
                <div className="bg-purple-800 text-white p-4 rounded-xl shadow-xl mt-4 text-center">
                  <h4 className="text-lg font-bold">📚 Thank You for Your Purchase!</h4>
                  <p className="mt-2 text-sm">
                    Your ebook "<strong>{selectedProduct.title}</strong>" has been sent directly to <strong>{purchasedEmail}</strong> as a PDF attachment.
                  </p>
                  <p className="mt-1 text-xs text-purple-200">
                    Check your email inbox (and spam folder) for the PDF file.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DigitalShop;