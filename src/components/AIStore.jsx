import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AIStore = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="ai-store" className="py-20 bg-gradient-to-b from-black to-purple-950/15">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Verve <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">AI Store</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Cutting-edge AI algorithms and solutions designed to transform your business operations and decision-making processes.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pb-6">
            <Slider {...settings} className="px-10">
                {[
                  {
                    title: "Predictive Analytics Engine",
                    description: "Advanced algorithm for forecasting business trends and customer behavior with 94% accuracy.",
                    price: {
                      ngn: "₦450,000",
                      usd: "$999"
                    },
                    image: "https://readdy.ai/api/search-image?query=Futuristic%20data%20visualization%20of%20predictive%20analytics%20with%20purple%20and%20gold%20color%20scheme%2C%20abstract%203D%20representation%20of%20data%20points%20and%20connections%2C%20modern%20tech%20aesthetic%20with%20glowing%20elements%2C%20clean%20minimal%20design%20on%20dark%20background&width=400&height=300&seq=ai-product-1&orientation=landscape"
                  },
                  {
                    title: "Customer Segmentation AI",
                    description: "Intelligent segmentation tool that categorizes your customers for targeted marketing campaigns.",
                    price: {
                      ngn: "₦225,000",
                      usd: "$499"
                    },
                    image: "https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20customer%20segmentation%20with%20different%20colored%20clusters%20of%20data%20points%2C%20modern%20tech%20aesthetic%20with%20purple%20and%20gold%20highlights%2C%203D%20representation%20of%20market%20segments%2C%20clean%20minimal%20design%20on%20dark%20background&width=400&height=300&seq=ai-product-2&orientation=landscape"
                  },
                  {
                    title: "NLP Content Generator",
                    description: "AI-powered content creation tool that generates high-quality, SEO-optimized content for your business.",
                    price: {
                      ngn: "₦315,000",
                      usd: "$699"
                    },
                    image: "https://readdy.ai/api/search-image?query=Futuristic%20representation%20of%20natural%20language%20processing%20with%20text%20flowing%20through%20digital%20neural%20networks%2C%20purple%20and%20gold%20color%20scheme%2C%20abstract%20visualization%20of%20AI%20writing%20content%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=400&height=300&seq=ai-product-3&orientation=landscape"
                  },
                  {
                    title: "Business Intelligence Dashboard",
                    description: "Comprehensive BI solution that transforms your data into actionable insights through intuitive visualizations.",
                    price: {
                      ngn: "₦540,000",
                      usd: "$1,199"
                    },
                    image: "https://readdy.ai/api/search-image?query=Futuristic%20business%20intelligence%20dashboard%20with%20multiple%20data%20visualizations%2C%20charts%20and%20graphs%20with%20purple%20and%20gold%20color%20scheme%2C%203D%20holographic%20interface%20concept%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=400&height=300&seq=ai-product-4&orientation=landscape"
                  },
                  {
                    title: "Sentiment Analysis Tool",
                    description: "Monitor and analyze customer sentiment across social media and review platforms in real-time.",
                    price: {
                      ngn: "₦180,000",
                      usd: "$399"
                    },
                    image: "https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20sentiment%20analysis%20showing%20positive%20and%20negative%20emotions%20in%20data%2C%20purple%20and%20gold%20color%20scheme%20with%20flowing%20data%20streams%2C%20modern%20tech%20aesthetic%20representing%20social%20media%20monitoring%2C%20clean%20minimal%20design%20on%20dark%20background&width=400&height=300&seq=ai-product-5&orientation=landscape"
                  }
                ].map((product, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden w-80 flex-shrink-0 hover:shadow-xl hover:shadow-purple-500/10 transition-all group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="block text-purple-400 font-medium">{product.price.ngn}</span>
                          <span className="text-sm text-gray-400">{product.price.usd}</span>
                        </div>
                        <div className="bg-purple-900/30 px-3 py-1 rounded-full text-xs text-purple-300">
                          Verve AI
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                        Purchase with Paystack
                      </button>
                      <button className="w-full mt-2 bg-transparent border border-purple-500 py-3 rounded-lg font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                        Request Demo
                      </button>
                    </div>
                  </div>
                ))}
            </Slider>

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
        </div>
      </div>
    </section>
  );
};

export default AIStore;