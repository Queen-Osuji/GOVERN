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
import book13 from "../assets/books/book13.jpg";

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
      // Replace with your actual API endpoint
      const apiUrl = '/api/email/send-ebook'; // or import.meta.env.VITE_API_URL

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
      console.log('Ebook sent successfully');
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
        price: { usd: "$299.00" },
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
        price: { usd: "$299.00" },
        image: book3,
        rating: 4,
        category: "AI & Machine Learning",
      },
      {
        title: "Lazy Genius",
        author: "Versatile.co",
        price: { usd: "$500.00" },
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
        price: { usd: "$0" },
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
        price: { usd: "$50" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
              <div className="relative h-60 w-40 mx-auto mt-6 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {product.isFree && (
                  <div className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-md text-xs text-white font-bold">
                    FREE
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.author}</p>
                {(() => {
                  const rating = product.rating || 0;
                  const filledStars = Math.floor(rating);
                  const hasHalfStar = rating % 1 !== 0;
                  return (
                    <div className="flex items-center mb-3">
                      {[...Array(filledStars)].map((_, i) => (
                        <svg key={`filled-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                        </svg>
                      ))}
                      {hasHalfStar && (
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0.587L12 22.028L4.583 25.999L6.064 17.721L0 11.996L8.332 10.845L12 2.587Z"/>
                        </svg>
                      )}
                      <span className="ml-2 text-sm text-gray-400">({rating.toFixed(1)})</span>
                    </div>
                  );
                })()}

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-baseline">
                    <span className="text-purple-400 font-medium text-xl">{product.price.usd}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setModalOpen(true);
                    setShowGift(false);
                    setError('');
                  }}
                  className="w-full bg-gradient-to-r to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer text-white"
                >
                  {product.isFree ? 'Get Free Ebook' : 'Let Me In '}
                </button>
              </div>
            </div>
          ))}
        </div>

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
                <div className="text-purple-400 mb-2 text-center">Processing payment...</div>
              )}

              {showGift && (
                <div className="bg-purple-800 text-white p-4 rounded-xl shadow-xl mt-4 text-center">
                  <h4 className="text-lg font-bold">Thank You for Your Purchase!</h4>
                  <p className="mt-2 text-sm">
                    The ebook has been delivered to <strong>{purchasedEmail}</strong>.
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