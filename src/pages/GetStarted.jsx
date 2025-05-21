// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    industry: '',
    phoneNumber: '',
    businessGoals: [],
    challenges: [],
    requiredServices: [],
    timeline: '',
    budget: '',
    paymentMethod: '',
    termsAccepted: false
  });
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        [category]: [...(formData[category as keyof typeof formData] as string[]), value]
      });
    } else {
      setFormData({
        ...formData,
        [category]: (formData[category as keyof typeof formData] as string[]).filter(item => item !== value)
      });
    }
  };

  const handleTermsChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-10">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${
                currentStep === step
                  ? 'bg-purple-600 text-white'
                  : currentStep > step
                    ? 'bg-purple-900 text-white'
                    : 'bg-purple-900/20 text-purple-300'
              }`}
            >
              {currentStep > step ? <i className="fas fa-check"></i> : step}
            </div>
            {step < 5 && (
              <div
                className={`w-16 h-1 ${
                  currentStep > step ? 'bg-purple-600' : 'bg-purple-900/20'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStepTitle = () => {
    const titles = [
      "Welcome to VXP",
      "Tell Us About Yourself",
      "Choose Your Service Plan",
      "Needs Assessment",
      "Complete Your Registration"
    ];

    return (
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">
            {titles[currentStep - 1]}
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-800/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Elevate Your Digital Presence</h3>
                <p className="text-gray-300 mb-6">
                  Welcome to VXP, where we transform your vision into digital reality. Our comprehensive suite of services is designed to help visionary entrepreneurs and businesses thrive in the digital landscape.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: "rocket", title: "Cutting-edge AI Solutions", desc: "Harness the power of artificial intelligence to automate and optimize your business processes." },
                    { icon: "paint-brush", title: "Premium Design Services", desc: "Stand out with stunning visuals and intuitive user experiences that captivate your audience." },
                    { icon: "code", title: "Custom Development", desc: "Tailored web and mobile applications built with the latest technologies to meet your specific needs." },
                    { icon: "chart-line", title: "Strategic Digital Growth", desc: "Comprehensive strategies to position your business for sustainable growth and success." }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-purple-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <i className={`fas fa-${feature.icon} text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Get Started <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Futuristic%2520digital%2520business%2520concept%2520with%2520purple%2520and%2520gold%2520color%2520scheme%252C%2520showing%2520abstract%2520representation%2520of%2520AI%2520and%2520digital%2520transformation%252C%2520elegant%2520visual%2520with%2520flowing%2520data%2520streams%2520and%2520geometric%2520elements%252C%2520professional%2520business%2520aesthetic%2520on%2520dark%2520background%2520with%2520soft%2520lighting%2520effects&width=600&height=600&seq=welcome-img&orientation=squarish"
                  alt="Digital Transformation"
                  className="w-full h-auto rounded-lg shadow-2xl shadow-purple-500/20"
                />
              </div>
            </div>
          </div>
        );

      case 2:
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

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the service plan that best fits your business needs. All plans include our premium support and can be customized to your specific requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "$999",
                  description: "Essential digital services for businesses starting their digital journey.",
                  features: [
                    "Standard Website Design",
                    "Basic SEO Optimization",
                    "Social Media Setup",
                    "Email Marketing Integration",
                    "3 Months Support"
                  ],
                  recommended: false
                },
                {
                  name: "Professional",
                  price: "$2,499",
                  description: "Comprehensive digital solutions for growing businesses seeking to expand their online presence.",
                  features: [
                    "Custom Website Development",
                    "Advanced SEO Strategy",
                    "Content Marketing Plan",
                    "Basic AI Integration",
                    "Social Media Management",
                    "Email Marketing Campaigns",
                    "6 Months Priority Support"
                  ],
                  recommended: true
                },
                {
                  name: "Enterprise",
                  price: "$4,999",
                  description: "Full-scale digital transformation for established businesses requiring sophisticated solutions.",
                  features: [
                    "Custom Web & Mobile App Development",
                    "Complete Digital Strategy",
                    "Advanced AI Solutions",
                    "Data Analytics & BI Dashboard",
                    "Content Creation & Management",
                    "Comprehensive Digital Marketing",
                    "12 Months Premium Support",
                    "Dedicated Account Manager"
                  ],
                  recommended: false
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-purple-900/20 to-black border rounded-xl overflow-hidden transition-all ${
                    selectedPlan === plan.name
                      ? 'border-purple-500 shadow-xl shadow-purple-500/20 scale-105'
                      : 'border-purple-800/20 hover:border-purple-500/50'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-yellow-400 text-black text-xs font-bold px-4 py-1 transform rotate-45 translate-x-[30%] translate-y-[40%] shadow-md">
                        RECOMMENDED
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-purple-400">{plan.price}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">{plan.description}</p>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <i className="fas fa-check text-purple-400 mr-3"></i>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`w-full py-3 rounded-lg font-medium transition-all !rounded-button whitespace-nowrap cursor-pointer ${
                        selectedPlan === plan.name
                          ? 'bg-gradient-to-r from-purple-600 to-purple-800 hover:shadow-lg hover:shadow-purple-500/30'
                          : 'bg-purple-900/30 hover:bg-purple-900/50 text-white'
                      }`}
                    >
                      {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-between">
              <button
                onClick={prevStep}
                className="bg-transparent border border-purple-500 px-6 py-3 rounded-full text-base font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!selectedPlan}
                className={`bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer ${!selectedPlan ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Continue <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-800/30">
            <h3 className="text-xl font-bold mb-6">Help Us Understand Your Needs</h3>
            <form className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">What are your primary business goals? (Select all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Increase online visibility",
                    "Generate more leads",
                    "Improve customer engagement",
                    "Automate business processes",
                    "Launch new products/services",
                    "Expand to new markets",
                    "Enhance brand reputation",
                    "Improve internal operations"
                  ].map((goal, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`goal-${index}`}
                        value={goal}
                        onChange={(e) => handleCheckboxChange(e, 'businessGoals')}
                        className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 rounded focus:ring-purple-500"
                      />
                      <label htmlFor={`goal-${index}`} className="ml-2 text-sm text-gray-300">
                        {goal}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">What challenges are you currently facing? (Select all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Limited online presence",
                    "Outdated website/applications",
                    "Low conversion rates",
                    "Inefficient manual processes",
                    "Difficulty reaching target audience",
                    "Limited technical expertise",
                    "Competitive market pressure",
                    "Budget constraints"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`challenge-${index}`}
                        value={challenge}
                        onChange={(e) => handleCheckboxChange(e, 'challenges')}
                        className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 rounded focus:ring-purple-500"
                      />
                      <label htmlFor={`challenge-${index}`} className="ml-2 text-sm text-gray-300">
                        {challenge}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Which services are you most interested in? (Select all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Website Development",
                    "Mobile App Development",
                    "AI Integration",
                    "Digital Strategy",
                    "UI/UX Design",
                    "SEO Optimization",
                    "Content Creation",
                    "Digital Marketing",
                    "Business Intelligence",
                    "E-commerce Solutions"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`service-${index}`}
                        value={service}
                        onChange={(e) => handleCheckboxChange(e, 'requiredServices')}
                        className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 rounded focus:ring-purple-500"
                      />
                      <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-300">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What is your expected timeline?</label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleSelectChange}
                      className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                      <option value="Short-term (1-2 months)">Short-term (1-2 months)</option>
                      <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
                      <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="fas fa-chevron-down text-purple-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What is your budget range?</label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleSelectChange}
                      className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="fas fa-chevron-down text-purple-400"></i>
                    </div>
                  </div>
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
                  className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Continue <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        );

      case 5:
        return (
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-800/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Complete Your Registration</h3>

                <div className="bg-purple-900/20 rounded-lg p-6 mb-6">
                  <h4 className="font-medium mb-3">Selected Plan: <span className="text-purple-400">{selectedPlan}</span></h4>
                  <p className="text-sm text-gray-400 mb-4">You can change your plan or request customizations after consultation.</p>

                  <div className="border-t border-purple-800/30 pt-4">
                    <h5 className="font-medium mb-2">Consultation Options</h5>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="schedule-call"
                          name="consultOption"
                          value="schedule"
                          className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 focus:ring-purple-500"
                        />
                        <label htmlFor="schedule-call" className="ml-2 text-sm text-gray-300">
                          Schedule a consultation call
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="email-proposal"
                          name="consultOption"
                          value="email"
                          className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 focus:ring-purple-500"
                        />
                        <label htmlFor="email-proposal" className="ml-2 text-sm text-gray-300">
                          Receive a detailed proposal via email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Payment Method</h4>
                  <div className="space-y-4">
                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 flex items-center cursor-pointer hover:border-purple-500/50 transition-all">
                      <input
                        type="radio"
                        id="payment-card"
                        name="paymentMethod"
                        value="card"
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="payment-card" className="ml-3 flex items-center cursor-pointer w-full">
                        <span className="text-sm">Credit/Debit Card</span>
                        <div className="ml-auto flex space-x-2">
                          <i className="fab fa-cc-visa text-lg text-gray-400"></i>
                          <i className="fab fa-cc-mastercard text-lg text-gray-400"></i>
                          <i className="fab fa-cc-amex text-lg text-gray-400"></i>
                        </div>
                      </label>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 flex items-center cursor-pointer hover:border-purple-500/50 transition-all">
                      <input
                        type="radio"
                        id="payment-paypal"
                        name="paymentMethod"
                        value="paypal"
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="payment-paypal" className="ml-3 flex items-center cursor-pointer w-full">
                        <span className="text-sm">PayPal</span>
                        <i className="fab fa-paypal text-lg text-gray-400 ml-auto"></i>
                      </label>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 flex items-center cursor-pointer hover:border-purple-500/50 transition-all">
                      <input
                        type="radio"
                        id="payment-bank"
                        name="paymentMethod"
                        value="bank"
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 bg-purple-900/20 border-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="payment-bank" className="ml-3 flex items-center cursor-pointer w-full">
                        <span className="text-sm">Bank Transfer</span>
                        <i className="fas fa-university text-lg text-gray-400 ml-auto"></i>
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.termsAccepted}
                        onChange={handleTermsChange}
                        className="w-4 h-4 mt-1 text-purple-600 bg-purple-900/20 border-purple-500 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                        I agree to the <a href="#" className="text-purple-400 hover:underline cursor-pointer">Terms of Service</a> and <a href="#" className="text-purple-400 hover:underline cursor-pointer">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-800/30 rounded-xl p-8 sticky top-8">
                  <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>

                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Confirmation",
                        desc: "You'll receive an immediate confirmation of your registration via email."
                      },
                      {
                        step: 2,
                        title: "Consultation Scheduling",
                        desc: "Our team will reach out within 24 hours to schedule your consultation call."
                      },
                      {
                        step: 3,
                        title: "Custom Solution",
                        desc: "We'll develop a tailored proposal based on your specific needs and requirements."
                      },
                      {
                        step: 4,
                        title: "Implementation",
                        desc: "Once approved, our team will begin implementing your digital solution."
                      }
                    ].map((item) => (
                      <div key={item.step} className="flex">
                        <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center mr-4 flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
                    <div className="flex items-center mb-3">
                      <i className="fas fa-headset text-purple-400 mr-3 text-lg"></i>
                      <h4 className="font-medium">Need Help?</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Our support team is available to assist you with any questions.
                    </p>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <i className="fas fa-envelope text-purple-400 mr-2"></i>
                        <span>support@vxp.com</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-phone text-purple-400 mr-2"></i>
                        <span>+1 (234) 567-8900</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="bg-transparent border border-purple-500 px-6 py-3 rounded-full text-base font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
              <button
                onClick={() => setCurrentStep(6)}
                disabled={!formData.termsAccepted}
                className={`bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer ${!formData.termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Complete Registration
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-12 border border-purple-800/30 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-3xl"></i>
            </div>

            <h2 className="text-3xl font-bold mb-4">Registration Complete!</h2>
            <p className="text-gray-300 max-w-lg mx-auto mb-8">
              Thank you for choosing VXP. We've received your information and will be in touch shortly to discuss your project.
            </p>

            <div className="bg-purple-900/20 rounded-lg p-6 max-w-md mx-auto mb-8">
              <h4 className="font-medium mb-4">Registration Details</h4>
              <div className="text-left space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Selected Plan:</span>
                  <span className="text-purple-400">{selectedPlan}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://readdy.ai/home/7189d3a9-4602-4798-8251-677e7ae3f387/81fcb3e4-dedc-4748-84ec-1ff26fbc073e"
                data-readdy="true"
                className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer"
              >
                Return to Home
              </a>
              <button className="bg-transparent border border-purple-500 px-8 py-3 rounded-full text-base font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                Download Receipt
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md py-4 border-b border-purple-900/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
              VXP<span className="text-white">.</span>
            </h1>
          </div>

          <a
            href="https://readdy.ai/home/7189d3a9-4602-4798-8251-677e7ae3f387/81fcb3e4-dedc-4748-84ec-1ff26fbc073e"
            data-readdy="true"
            className="flex items-center text-sm hover:text-purple-400 transition-all cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          {renderStepIndicator()}
          {renderStepTitle()}
          {renderStepContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-purple-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
                VXP<span className="text-white">.</span>
              </h1>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Contact Us</a>
            </div>

            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} VXP & Verve. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
