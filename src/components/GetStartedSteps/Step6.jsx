import React from 'react';

const Step6 = ({ formData, selectedPlan }) => {
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
};

export default Step6;