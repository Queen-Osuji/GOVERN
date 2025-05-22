// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import Step1 from '../components/GetStartedSteps/Step1';
import Step2 from '../components/GetStartedSteps/Step2';
import Step3 from '../components/GetStartedSteps/Step3';
import Step4 from '../components/GetStartedSteps/Step4';
import Step5 from '../components/GetStartedSteps/Step5';
import Step6 from '../components/GetStartedSteps/Step6';


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
        [category]: [...(formData[category]), value]
      });
    } else {
      setFormData({
        ...formData,
        [category]: (formData[category]).filter(item => item !== value)
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
      "Complete Your Registration",
      "Registration Complete!"
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
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 selectedPlan={selectedPlan} handlePlanSelect={handlePlanSelect} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4 formData={formData} handleCheckboxChange={handleCheckboxChange} handleSelectChange={handleSelectChange} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5 selectedPlan={selectedPlan} formData={formData} handleInputChange={handleInputChange} handleTermsChange={handleTermsChange} prevStep={prevStep} setCurrentStep={setCurrentStep} />;
      case 6:
        return <Step6 formData={formData} selectedPlan={selectedPlan} />;
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
            href="/"
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
