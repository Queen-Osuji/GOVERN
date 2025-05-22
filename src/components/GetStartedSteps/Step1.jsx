import React from 'react';

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
const Step1 = ({ nextStep }) => {
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
 
           <div className="space-y-4 mb-8">
            {[{"icon":"rocket","title":"Cutting-edge AI Solutions","desc":"Harness the power of artificial intelligence to automate and optimize your business processes."},{"icon":"paint-brush","title":"Premium Design Services","desc":"Stand out with stunning visuals and intuitive user experiences that captivate your audience."},{"icon":"code","title":"Custom Development","desc":"Tailored web and mobile applications built with the latest technologies to meet your specific needs."},{"icon":"chart-line","title":"Strategic Digital Growth","desc":"Comprehensive strategies to position your business for sustainable growth and success."}]
            .map((feature, index) => (
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
            {/* ... */}
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
};

export default Step1;