import React from 'react';

const Step5 = ({ formData, selectedPlan, handleInputChange, handleTermsChange, setCurrentStep, prevStep }) => {
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
};

export default Step5;