import React from 'react';

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Courses</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Master digital skills with our expert-led courses designed for modern business leaders and entrepreneurs.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Business Mastery",
              instructor: "Queen Osuji",
              duration: "8 weeks",
              level: "Advanced",
              students: "2,450+",
              rating: "4.9",
              price: {
                ngn: "₦225,000",
                usd: "$499"
              },
              image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20teaching%20in%20modern%20digital%20classroom%20setting%20with%20holographic%20displays%2C%20purple%20and%20gold%20color%20scheme%2C%20elegant%20educational%20environment%20with%20tech%20elements%2C%20high-end%20learning%20space%20on%20dark%20background&width=600&height=400&seq=course-1&orientation=landscape"
            },
            {
              title: "AI for Business Leaders",
              instructor: "Dr. Sarah Chen",
              duration: "6 weeks",
              level: "Intermediate",
              students: "1,890+",
              rating: "4.8",
              price: {
                ngn: "₦180,000",
                usd: "$399"
              },
              image: "https://readdy.ai/api/search-image?query=Futuristic%20AI%20learning%20interface%20with%20business%20analytics%20and%20machine%20learning%20visualizations%2C%20purple%20and%20gold%20accents%2C%20modern%20tech%20classroom%20environment%2C%20professional%20educational%20setting%20on%20dark%20background&width=600&height=400&seq=course-2&orientation=landscape"
            },
            {
              title: "Digital Marketing Excellence",
              instructor: "Mark Williams",
              duration: "10 weeks",
              level: "All Levels",
              students: "3,200+",
              rating: "4.9",
              price: {
                ngn: "₦157,500",
                usd: "$349"
              },
              image: "https://readdy.ai/api/search-image?query=Digital%20marketing%20strategy%20session%20in%20modern%20office%20with%20data%20visualizations%20and%20campaign%20analytics%2C%20purple%20and%20gold%20color%20scheme%2C%20professional%20marketing%20classroom%20environment%20on%20dark%20background&width=600&height=400&seq=course-3&orientation=landscape"
            },
            {
              title: "E-commerce Strategy",
              instructor: "Lisa Zhang",
              duration: "8 weeks",
              level: "Intermediate",
              students: "1,750+",
              rating: "4.7",
              price: {
                ngn: "₦202,500",
                usd: "$449"
              },
              image: "https://readdy.ai/api/search-image?query=E-commerce%20business%20training%20with%20online%20store%20interfaces%20and%20sales%20analytics%20displays%2C%20purple%20and%20gold%20accents%2C%20modern%20digital%20retail%20classroom%20environment%20on%20dark%20background&width=600&height=400&seq=course-4&orientation=landscape"
            },
            {
              title: "Tech Leadership",
              instructor: "Queen Osuji",
              duration: "12 weeks",
              level: "Advanced",
              students: "980+",
              rating: "5.0",
              price: {
                ngn: "₦315,000",
                usd: "$699"
              },
              image: "https://readdy.ai/api/search-image?query=Technology%20leadership%20training%20in%20futuristic%20classroom%20with%20holographic%20displays%20showing%20tech%20trends%20and%20innovation%20metrics%2C%20purple%20and%20gold%20color%20scheme%2C%20professional%20tech%20education%20environment%20on%20dark%20background&width=600&height=400&seq=course-5&orientation=landscape"
            },
            {
              title: "Brand Building Masterclass",
              instructor: "Emma Thompson",
              duration: "6 weeks",
              level: "All Levels",
              students: "2,100+",
              rating: "4.8",
              price: {
                ngn: "₦135,000",
                usd: "$299"
              },
              image: "https://readdy.ai/api/search-image?query=Brand%20strategy%20workshop%20in%20modern%20creative%20space%20with%20brand%20identity%20examples%20and%20marketing%20displays%2C%20purple%20and%20gold%20accents%2C%20professional%20branding%20classroom%20environment%20on%20dark%20background&width=600&height=400&seq=course-6&orientation=landscape"
            }
          ].map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-black font-medium">
                  {course.rating} <i className="fas fa-star text-black ml-1"></i>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20business%20instructor%20with%20confident%20expression%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=instructor-${index}&orientation=squarish`}
                      alt={course.instructor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{course.instructor}</h4>
                    <p className="text-purple-400 text-xs">{course.level}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span><i className="far fa-clock mr-2"></i>{course.duration}</span>
                  <span><i className="far fa-user mr-2"></i>{course.students}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="block text-purple-400 font-medium">{course.price.ngn}</span>
                    <span className="text-sm text-gray-400">{course.price.usd}</span>
                  </div>
                  <button className="bg-purple-700/20 hover:bg-purple-700/40 text-purple-300 px-4 py-2 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer">
                    Preview Course
                  </button>
                </div>
                <button
                  id={`enroll-btn-${index}`}
                  onClick={() => {
                    const modal = document.getElementById('enrollment-modal');
                    const courseTitle = document.getElementById('modal-course-title');
                    const instructor = document.getElementById('modal-instructor');
                    const price = document.getElementById('modal-price');
                    if (modal && courseTitle && instructor && price) {
                      courseTitle.textContent = course.title;
                      instructor.textContent = course.instructor;
                      price.textContent = `${course.price.ngn} / ${course.price.usd}`;
                      modal.classList.remove('hidden');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Enroll Now
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
        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-purple-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;