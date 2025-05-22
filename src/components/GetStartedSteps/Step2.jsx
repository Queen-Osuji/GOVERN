import React from 'react';

const Step2 = ({
  formData,
  handleInputChange,
  handleSelectChange,
  nextStep,
  prevStep,
}) => {

  return (
    <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-800/30">
      <h3 className="text-xl font-bold mb-6">Personal Information</h3>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
            <div className="relative">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleSelectChange}
                className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select your industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Retail">Retail</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Media">Media & Entertainment</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i className="fas fa-chevron-down text-purple-400"></i>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="pt-6 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-transparent border border-purple-500 px-6 py-3 rounded-full text-base font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={!formData.fullName || !formData.email}
            className={`bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer ${(!formData.fullName || !formData.email) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continue <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;