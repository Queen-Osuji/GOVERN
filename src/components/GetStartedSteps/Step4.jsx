import React from 'react';

const Step4 = ({
  formData,
  handleCheckboxChange,
  handleSelectChange,
  nextStep,
  prevStep,
}) => {
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
                  onChange={(e) => handleCheckboxChange(e, "businessGoals")}
                  checked={formData.businessGoals.includes(goal)}
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
                  onChange={(e) => handleCheckboxChange(e, "challenges")}
                  checked={formData.challenges.includes(challenge)}
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
                  onChange={(e) => handleCheckboxChange(e, "requiredServices")}
                  checked={formData.requiredServices.includes(service)}
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
};

export default Step4;