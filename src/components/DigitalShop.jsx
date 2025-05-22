import React from 'react';

const DigitalShop = () => {
  return (
    <section id="digital-shop" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Shop</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore our collection of digital books to empower your journey.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              // Placeholder book data - replace with your actual book information
              // You can add more properties relevant to books like author, genre, etc.
              title: "Business Website Template",
              category: "Website Template",
              description: "Modern, responsive website template perfect for business and corporate websites.",
              price: {
                ngn: "₦45,000",
                usd: "$99"
              },
              features: ["Responsive Design", "5 Page Templates", "Contact Form", "SEO Optimized"],
              image: "https://readdy.ai/api/search-image?query=Modern%20and%20elegant%20business%20website%20template%20mockup%20displayed%20on%20multiple%20devices%2C%20featuring%20purple%20and%20gold%20accents%2C%20clean%20minimal%20interface%20design%20with%20professional%20layout%2C%20high-end%20website%20presentation%20on%20dark%20background&width=600&height=400&seq=digital-1&orientation=landscape"
            },
            {
              // Placeholder book data
              title: "Social Media Kit",
              category: "Marketing",
              description: "Complete social media template pack with 50+ customizable designs.",
              price: {
                ngn: "₦27,000",
                usd: "$59"
              },
              features: ["50+ Templates", "Instagram Posts", "Story Templates", "Brand Guidelines"],
              image: "https://readdy.ai/api/search-image?query=Collection%20of%20elegant%20social%20media%20templates%20and%20posts%20displayed%20in%20a%20grid%20layout%2C%20featuring%20purple%20and%20gold%20color%20scheme%2C%20modern%20design%20elements%2C%20professional%20marketing%20materials%20on%20dark%20background&width=600&height=400&seq=digital-2&orientation=landscape"
            },
            {
              // Placeholder book data
              title: "E-commerce Starter Pack",
              category: "E-commerce",
              description: "Complete e-commerce solution with product templates and marketing materials.",
              price: {
                ngn: "₦67,500",
                usd: "$149"
              },
              features: ["Product Templates", "Email Templates", "Banner Sets", "Product Cards"],
              image: "https://readdy.ai/api/search-image?query=Professional%20e-commerce%20website%20template%20mockup%20with%20product%20displays%20and%20shopping%20cart%20interface%2C%20purple%20and%20gold%20accents%2C%20modern%20minimal%20design%2C%20complete%20online%20store%20presentation%20on%20dark%20background&width=600&height=400&seq=digital-3&orientation=landscape"
            },
            {
              // Placeholder book data
              title: "Digital Marketing Planner",
              category: "Planning",
              description: "Comprehensive digital marketing planner with strategy templates and tracking tools.",
              price: {
                ngn: "₦22,500",
                usd: "$49"
              },
              features: ["Strategy Templates", "Analytics Tracker", "Content Calendar", "ROI Calculator"],
              image: "https://readdy.ai/api/search-image?query=Digital%20marketing%20planner%20interface%20with%20analytics%20dashboard%20and%20planning%20tools%2C%20featuring%20purple%20and%20gold%20elements%2C%20professional%20business%20planning%20layout%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=600&height=400&seq=digital-4&orientation=landscape"
            },
            {
              // Placeholder book data
              title: "Brand Identity Pack",
              category: "Branding",
              description: "Complete brand identity package with logo templates and brand guidelines.",
              price: {
                ngn: "₦54,000",
                usd: "$119"
              },
              features: ["Logo Templates", "Brand Guidelines", "Social Media Kit", "Business Cards"],
              image: "https://readdy.ai/api/search-image?query=Professional%20brand%20identity%20package%20presentation%20with%20logo%20designs%20and%20brand%20guidelines%2C%20purple%20and%20gold%20color%20scheme%2C%20elegant%20branding%20materials%20layout%2C%20modern%20minimal%20design%20on%20dark%20background&width=600&height=400&seq=digital-5&orientation=landscape"
            },
            {
              // Placeholder book data
              title: "Lead Generation Kit",
              category: "Marketing",
              description: "High-converting lead generation templates and landing pages.",
              price: {
                ngn: "₦36,000",
                usd: "$79"
              },
              features: ["Landing Pages", "Email Templates", "Lead Magnets", "Analytics Setup"],
              image: "https://readdy.ai/api/search-image?query=Lead%20generation%20landing%20page%20templates%20and%20marketing%20materials%20displayed%20on%20devices%2C%20purple%20and%20gold%20accents%2C%20professional%20conversion%20optimization%20layout%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=600&height=400&seq=digital-6&orientation=landscape"
            }
          ].map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-purple-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-purple-300">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="bg-purple-900/30 px-3 py-1 rounded-full text-xs text-purple-300">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="block text-purple-400 font-medium">{product.price.ngn}</span>
                    <span className="text-sm text-gray-400">{product.price.usd}</span>
                  </div>
                  <button className="bg-purple-700/20 hover:bg-purple-700/40 text-purple-300 px-4 py-2 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer">
                    Preview
                  </button>
                </div>
                <button
                  onClick={() => { window.location.href = '/checkout'; }}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
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