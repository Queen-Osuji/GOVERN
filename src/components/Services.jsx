import React, { useState } from 'react';
import ServiceDetailModal from './ui/ServiceDetailModal'; // Adjust path if needed

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filterServices = (category) => {
    setActiveCategory(category);
  };

  const services = [
    {
      icon: "palette",
      title: "Premium Graphic Design",
      description: "Elevate your brand with stunning visuals crafted by our expert designers. Our design process involves understanding your brand's core values to deliver impactful and memorable graphics that resonate with your target audience.",
      price: "From $499",
      category: "Design"
    },
    {
      icon: "laptop-code",
      title: "Web Development",
      description: "Custom websites and applications built with cutting-edge technology. We specialize in responsive design, ensuring your site looks and performs flawlessly on all devices, from desktops to smartphones.",
      price: "From $1,999",
      category: "Development"
    },
    {
      icon: "brain",
      title: "AI Integration",
      description: "Implement powerful AI solutions to automate and enhance your business processes. We help you leverage machine learning, natural language processing, and computer vision to gain a competitive edge.",
      price: "From $2,499",
      category: "AI"
    },
    {
      icon: "chart-line",
      title: "Digital Strategy",
      description: "Comprehensive digital strategies to position your business for growth and success. Our approach includes market analysis, competitor research, and a tailored roadmap to achieve your online objectives.",
      price: "From $1,499",
      category: "Strategy"
    },
    {
      icon: "mobile-alt",
      title: "Mobile App Development",
      description: "Intuitive and powerful mobile applications designed for your specific business needs. We develop for both iOS and Android, focusing on user experience and robust functionality.",
      price: "From $3,999",
      category: "Development"
    },
    {
      icon: "robot",
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence solutions to solve your unique business challenges. From predictive analytics to custom AI models, we build solutions that deliver measurable results.",
      price: "From $4,999",
      category: "AI"
    },
    {
      icon: "search",
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our SEO expertise. We employ white-hat techniques to improve your search engine rankings and attract qualified leads.",
      price: "From $899",
      category: "Strategy"
    },
    {
      icon: "pencil-ruler",
      title: "UI/UX Design",
      description: "Create seamless user experiences with our intuitive and beautiful interface designs. Our user-centered design philosophy ensures your digital products are both engaging and easy to use.",
      price: "From $1,299",
      category: "Design"
    },
    {
      icon: "bullhorn",
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to reach your target audience and drive conversions. We cover everything from social media marketing to PPC and content strategy.",
      price: "From $1,199",
      category: "Strategy"
    }
  ];

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Services</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Comprehensive digital solutions tailored for visionary businesses and entrepreneurs ready to make their mark in the digital landscape.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-purple-900/20 backdrop-blur-sm rounded-full p-1">
            {['All', 'Design', 'Development', 'AI', 'Strategy'].map((category) => (
              <button
                key={category}
                onClick={() => filterServices(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'} !rounded-button whitespace-nowrap cursor-pointer`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            activeCategory === 'All' || service.category === activeCategory ? (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all">
                  <i className={`fas fa-${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 h-20 overflow-hidden text-ellipsis">{service.description}</p> {/* Added height and overflow for consistency */}
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-medium">{service.price}</span>
                  <button 
                    onClick={() => handleLearnMoreClick(service)} 
                    className="bg-purple-700/20 hover:bg-purple-700/40 text-purple-300 px-4 py-2 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
      <ServiceDetailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        service={selectedService} 
      />
    </section>
  );
};

export default Services;