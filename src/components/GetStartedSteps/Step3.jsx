import React, { useState } from 'react';

const Step3 = ({ selectedPlan, handlePlanSelect, nextStep, prevStep }) => {
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
};

export default Step3;