
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
const App = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrollPosition, setScrollPosition] = useState(0);
const [activeCategory, setActiveCategory] = useState('All');
const filterServices = (category) => {
setActiveCategory(category);
};
useEffect(() => {
const handleScroll = () => {
setScrollPosition(window.scrollY);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
useEffect(() => {
const chartDom = document.getElementById('stats-chart');
if (chartDom) {
const myChart = echarts.init(chartDom);
const option = {
animation: false,
tooltip: {
trigger: 'axis',
axisPointer: {
type: 'shadow'
}
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
xAxis: {
type: 'category',
data: ['2020', '2021', '2022', '2023', '2024', '2025'],
axisLine: {
lineStyle: {
color: '#6b21a8'
}
}
},
yAxis: {
type: 'value',
axisLine: {
lineStyle: {
color: '#6b21a8'
}
}
},
series: [
{
name: 'Growth',
type: 'bar',
data: [120, 200, 280, 380, 490, 600],
itemStyle: {
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{ offset: 0, color: '#9333ea' },
{ offset: 1, color: '#6b21a8' }
])
}
}
]
};
myChart.setOption(option);
window.addEventListener('resize', () => {
myChart.resize();
});
return () => {
myChart.dispose();
window.removeEventListener('resize', () => {
myChart.resize();
});
};
}
}, []);
const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};
return (
<div className="min-h-screen bg-black text-white font-sans">
{/* Header */}
<header className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center">
<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
VXP<span className="text-white">.</span>
</h1>
</div>
<nav className="hidden md:flex items-center space-x-8">
{['Home', 'About', 'Services', 'AI Store', 'Digital Shop', 'Courses', 'Blog', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase().replace(' ', '-')}`}
className="text-sm uppercase tracking-wider hover:text-purple-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full cursor-pointer"
>
{item}
</a>
))}
</nav>
<div className="flex items-center space-x-4">
<a href="/GetStarted" data-readdy="true" className="hidden md:block">
<button className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Get Started
</button>
</a>
<button
className="md:hidden text-2xl cursor-pointer"
onClick={toggleMenu}
aria-label="Toggle menu"
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>
</div>
</div>
</header>
{/* Mobile Menu */}
<div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
<div className="flex flex-col items-center justify-center h-full">
{['Home', 'About', 'Services', 'AI Store', 'Digital Shop', 'Courses', 'Blog', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase().replace(' ', '-')}`}
className="text-xl py-4 uppercase tracking-wider hover:text-purple-400 cursor-pointer"
onClick={() => setIsMenuOpen(false)}
>
{item}
</a>
))}
<button className="mt-8 bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Get Started
</button>
</div>
</div>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=Futuristic%20digital%20landscape%20with%20purple%20and%20gold%20color%20scheme%2C%20abstract%20geometric%20shapes%20and%20light%20particles%20floating%20in%20space%2C%20modern%20tech%20aesthetic%20with%20soft%20glow%20effects%2C%20minimalist%20design%20with%20depth%20and%20dimension%2C%20perfect%20for%20a%20high-end%20tech%20brand%20background%20with%20space%20for%20text%20on%20the%20left%20side&width=1440&height=900&seq=hero-bg-1&orientation=landscape"
alt="Futuristic digital landscape"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h2 className="text-4xl md:text-6xl font-bold leading-tight">
<span className="block">Envision the</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Future of Digital</span>
<span className="block">Experience</span>
</h2>
<p className="text-lg text-gray-300 max-w-lg">
Pioneering the digital frontier with cutting-edge AI solutions and premium digital services designed for visionary women in business and tech.
</p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Explore Services
</button>
<button className="bg-transparent border-2 border-purple-500 px-8 py-3 rounded-full text-base font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer">
AI Solutions
</button>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-2">
{[1, 2, 3, 4].map((i) => (
<div key={i} className="w-10 h-10 rounded-full border-2 border-purple-800 overflow-hidden">
<img
src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20diverse%20business%20woman%20with%20elegant%20style%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20business%20attire%2C%20professional%20appearance&width=100&height=100&seq=client-${i}&orientation=squarish`}
alt="Client"
className="w-full h-full object-cover"
/>
</div>
))}
</div>
<div>
<p className="text-sm text-gray-300">Trusted by <span className="text-purple-400 font-medium">2,000+</span> visionary leaders</p>
</div>
</div>
</div>
<div className="hidden md:block">
{/* This div is intentionally left empty as the background image serves as the right side content */}
</div>
</div>
</div>
<div className="absolute bottom-10 left-0 right-0 flex justify-center">
<a href="#about" className="text-white/70 hover:text-white animate-bounce cursor-pointer">
<i className="fas fa-chevron-down text-2xl"></i>
</a>
</div>
</section>
{/* About Section */}
<section id="about" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">VXP & Verve</span></h2>
<div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20">
<img
src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20elegant%20African%20businesswoman%20in%20modern%20office%20setting%2C%20confident%20pose%20with%20laptop%2C%20wearing%20stylish%20business%20attire%20in%20purple%20or%20gold%20tones%2C%20soft%20professional%20lighting%2C%20clean%20minimal%20background%2C%20high-end%20corporate%20aesthetic&width=600&height=800&seq=founder-img&orientation=portrait"
alt="Queen Osuji"
className="w-full h-full object-cover"
/>
</div>
<div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-tr from-purple-600 to-purple-800 rounded-full blur-3xl opacity-20 z-0"></div>
<div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-bl from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-10 z-0"></div>
</div>
<div className="space-y-6">
<h3 className="text-2xl md:text-3xl font-bold">Queen Osuji</h3>
<h4 className="text-xl text-purple-400">Founder & CEO</h4>
<p className="text-gray-300">
A visionary leader at the intersection of technology and business, Queen Osuji has pioneered innovative digital solutions for forward-thinking entrepreneurs and businesses across Africa and beyond.
</p>
<p className="text-gray-300">
With expertise in AI, digital strategy, and business transformation, Queen founded VXP and Verve to empower women in tech and business with cutting-edge tools and knowledge to thrive in the digital economy.
</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
<div className="text-center">
<h5 className="text-3xl font-bold text-purple-400">500+</h5>
<p className="text-sm text-gray-400">Projects Completed</p>
</div>
<div className="text-center">
<h5 className="text-3xl font-bold text-purple-400">200+</h5>
<p className="text-sm text-gray-400">AI Solutions</p>
</div>
<div className="text-center">
<h5 className="text-3xl font-bold text-purple-400">50+</h5>
<p className="text-sm text-gray-400">Digital Products</p>
</div>
<div className="text-center">
<h5 className="text-3xl font-bold text-purple-400">2K+</h5>
<p className="text-sm text-gray-400">Happy Clients</p>
</div>
</div>
<div className="pt-6">
<div id="stats-chart" className="w-full h-64"></div>
</div>
</div>
</div>
<div className="mt-20">
<div className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-6 text-center">What Our Clients Say</h3>
<div className="grid md:grid-cols-3 gap-8">
{[
{
name: "Sarah Johnson",
role: "Tech Entrepreneur",
quote: "VXP transformed my business with their AI solutions. The ROI has been incredible, and their team's expertise is unmatched."
},
{
name: "Amara Okafor",
role: "Startup Founder",
quote: "Working with Queen and the Verve team gave my startup the digital edge we needed. Their strategic approach to digital presence is revolutionary."
},
{
name: "Lisa Chen",
role: "Creative Director",
quote: "The digital products from VXP have streamlined our creative processes and helped us scale our agency beyond what we thought possible."
}
].map((testimonial, index) => (
<div key={index} className="bg-purple-950/50 backdrop-blur-sm rounded-lg p-6 border border-purple-800/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
<div className="flex items-center mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
<img
src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20diverse%20business%20woman%20with%20elegant%20style%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20business%20attire%2C%20professional%20appearance&width=100&height=100&seq=testimonial-${index}&orientation=squarish`}
alt={testimonial.name}
className="w-full h-full object-cover"
/>
</div>
<div>
<h4 className="font-medium">{testimonial.name}</h4>
<p className="text-sm text-purple-400">{testimonial.role}</p>
</div>
</div>
<p className="text-gray-300 italic">{testimonial.quote}</p>
<div className="mt-4 text-yellow-400">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
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
</div>
</div>
</div>
</div>
</section>
{/* Services Section */}
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
{[
{
icon: "palette",
title: "Premium Graphic Design",
description: "Elevate your brand with stunning visuals crafted by our expert designers.",
price: "From $499",
category: "Design"
},
{
icon: "laptop-code",
title: "Web Development",
description: "Custom websites and applications built with cutting-edge technology.",
price: "From $1,999",
category: "Development"
},
{
icon: "brain",
title: "AI Integration",
description: "Implement powerful AI solutions to automate and enhance your business processes.",
price: "From $2,499",
category: "AI"
},
{
icon: "chart-line",
title: "Digital Strategy",
description: "Comprehensive digital strategies to position your business for growth and success.",
price: "From $1,499",
category: "Strategy"
},
{
icon: "mobile-alt",
title: "Mobile App Development",
description: "Intuitive and powerful mobile applications designed for your specific business needs.",
price: "From $3,999",
category: "Development"
},
{
icon: "robot",
title: "Custom AI Solutions",
description: "Tailored artificial intelligence solutions to solve your unique business challenges.",
price: "From $4,999",
category: "AI"
},
{
icon: "search",
title: "SEO Optimization",
description: "Boost your online visibility and drive organic traffic with our SEO expertise.",
price: "From $899",
category: "Strategy"
},
{
icon: "pencil-ruler",
title: "UI/UX Design",
description: "Create seamless user experiences with our intuitive and beautiful interface designs.",
price: "From $1,299",
category: "Design"
},
{
icon: "bullhorn",
title: "Digital Marketing",
description: "Strategic digital marketing campaigns to reach your target audience and drive conversions.",
price: "From $1,199",
category: "Strategy"
}
].map((service, index) => (
activeCategory === 'All' || service.category === activeCategory ? (
<div
key={index}
className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all group cursor-pointer"
>
<div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all">
<i className={`fas fa-${service.icon} text-2xl`}></i>
</div>
<h3 className="text-xl font-bold mb-3">{service.title}</h3>
<p className="text-gray-300 mb-6">{service.description}</p>
<div className="flex justify-between items-center">
<span className="text-purple-400 font-medium">{service.price}</span>
<button className="bg-purple-700/20 hover:bg-purple-700/40 text-purple-300 px-4 py-2 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer">
Learn More
</button>
</div>
</div>
) : null
))}
</div>
</div>
</section>
{/* AI Store Section */}
<section id="ai-store" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold mb-4">Verve <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">AI Store</span></h2>
<p className="text-gray-300 max-w-2xl mx-auto">Cutting-edge AI algorithms and solutions designed to transform your business operations and decision-making processes.</p>
<div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
</div>
<div className="relative">
<div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="overflow-x-auto pb-6 hide-scrollbar">
<div className="flex space-x-6 min-w-max px-10">
{[
{
title: "Predictive Analytics Engine",
description: "Advanced algorithm for forecasting business trends and customer behavior with 94% accuracy.",
price: {
ngn: "₦450,000",
usd: "$999"
},
image: "https://readdy.ai/api/search-image?query=Futuristic%20data%20visualization%20of%20predictive%20analytics%20with%20purple%20and%20gold%20color%20scheme%2C%20abstract%203D%20representation%20of%20data%20points%20and%20connections%2C%20modern%20tech%20aesthetic%20with%20glowing%20elements%2C%20clean%20minimal%20design%20on%20dark%20background&width=400&height=300&seq=ai-product-1&orientation=landscape"
},
{
title: "Customer Segmentation AI",
description: "Intelligent segmentation tool that categorizes your customers for targeted marketing campaigns.",
price: {
ngn: "₦225,000",
usd: "$499"
},
image: "https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20customer%20segmentation%20with%20different%20colored%20clusters%20of%20data%20points%2C%20modern%20tech%20aesthetic%20with%20purple%20and%20gold%20highlights%2C%203D%20representation%20of%20market%20segments%2C%20clean%20minimal%20design%20on%20dark%20background&width=400&height=300&seq=ai-product-2&orientation=landscape"
},
{
title: "NLP Content Generator",
description: "AI-powered content creation tool that generates high-quality, SEO-optimized content for your business.",
price: {
ngn: "₦315,000",
usd: "$699"
},
image: "https://readdy.ai/api/search-image?query=Futuristic%20representation%20of%20natural%20language%20processing%20with%20text%20flowing%20through%20digital%20neural%20networks%2C%20purple%20and%20gold%20color%20scheme%2C%20abstract%20visualization%20of%20AI%20writing%20content%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=400&height=300&seq=ai-product-3&orientation=landscape"
},
{
title: "Business Intelligence Dashboard",
description: "Comprehensive BI solution that transforms your data into actionable insights through intuitive visualizations.",
price: {
ngn: "₦540,000",
usd: "$1,199"
},
image: "https://readdy.ai/api/search-image?query=Futuristic%20business%20intelligence%20dashboard%20with%20multiple%20data%20visualizations%2C%20charts%20and%20graphs%20with%20purple%20and%20gold%20color%20scheme%2C%203D%20holographic%20interface%20concept%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=400&height=300&seq=ai-product-4&orientation=landscape"
},
{
title: "Sentiment Analysis Tool",
description: "Monitor and analyze customer sentiment across social media and review platforms in real-time.",
price: {
ngn: "₦180,000",
usd: "$399"
},
image: "https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20sentiment%20analysis%20showing%20positive%20and%20negative%20emotions%20in%20data%2C%20purple%20and%20gold%20color%20scheme%20with%20flowing%20data%20streams%2C%20modern%20tech%20aesthetic%20representing%20social%20media%20monitoring%2C%20clean%20minimal%20design%20on%20dark%20background&width=400&height=300&seq=ai-product-5&orientation=landscape"
}
].map((product, index) => (
<div
key={index}
className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden w-80 flex-shrink-0 hover:shadow-xl hover:shadow-purple-500/10 transition-all group"
>
<div className="h-48 overflow-hidden">
<img
src={product.image}
alt={product.title}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2">{product.title}</h3>
<p className="text-gray-300 text-sm mb-4">{product.description}</p>
<div className="flex justify-between items-center mb-4">
<div>
<span className="block text-purple-400 font-medium">{product.price.ngn}</span>
<span className="text-sm text-gray-400">{product.price.usd}</span>
</div>
<div className="bg-purple-900/30 px-3 py-1 rounded-full text-xs text-purple-300">
Verve AI
</div>
</div>
<button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Purchase with Paystack
</button>
<button className="w-full mt-2 bg-transparent border border-purple-500 py-3 rounded-lg font-medium hover:bg-purple-500/10 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Request Demo
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
</div>
</div>
</div>
</section>
{/* Digital Shop Section */}
<section id="digital-shop" className="py-20 bg-black">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold mb-4">Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Shop</span></h2>
<p className="text-gray-300 max-w-2xl mx-auto">Premium digital products and templates to accelerate your business growth and online presence.</p>
<div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mt-4"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
title: "Business Website Template",
category: "Website Template",
description: "Modern, responsive website template perfect for business and corporate websites.",
price: {
ngn: "₦45,000",
usd: "$99"
},
features: ["Responsive Design", "5 Page Templates", "Contact Form", "SEO Optimized"],
image: "https://readdy.ai/api/search-image?query=Modern%20and%20elegant%20business%20website%20template%20mockup%20displayed%20on%20multiple%20devices%2C%20featuring%20purple%20and%20gold%20accents%2C%20clean%20minimal%20interface%20design%20with%20professional%20layout%2C%20high-end%20website%20presentation%20on%20dark%20background&width=600&height=400&seq=digital-1&orientation=landscape"
},
{
title: "Social Media Kit",
category: "Marketing",
description: "Complete social media template pack with 50+ customizable designs.",
price: {
ngn: "₦27,000",
usd: "$59"
},
features: ["50+ Templates", "Instagram Posts", "Story Templates", "Brand Guidelines"],
image: "https://readdy.ai/api/search-image?query=Collection%20of%20elegant%20social%20media%20templates%20and%20posts%20displayed%20in%20a%20grid%20layout%2C%20featuring%20purple%20and%20gold%20color%20scheme%2C%20modern%20design%20elements%2C%20professional%20marketing%20materials%20on%20dark%20background&width=600&height=400&seq=digital-2&orientation=landscape"
},
{
title: "E-commerce Starter Pack",
category: "E-commerce",
description: "Complete e-commerce solution with product templates and marketing materials.",
price: {
ngn: "₦67,500",
usd: "$149"
},
features: ["Product Templates", "Email Templates", "Banner Sets", "Product Cards"],
image: "https://readdy.ai/api/search-image?query=Professional%20e-commerce%20website%20template%20mockup%20with%20product%20displays%20and%20shopping%20cart%20interface%2C%20purple%20and%20gold%20accents%2C%20modern%20minimal%20design%2C%20complete%20online%20store%20presentation%20on%20dark%20background&width=600&height=400&seq=digital-3&orientation=landscape"
},
{
title: "Digital Marketing Planner",
category: "Planning",
description: "Comprehensive digital marketing planner with strategy templates and tracking tools.",
price: {
ngn: "₦22,500",
usd: "$49"
},
features: ["Strategy Templates", "Analytics Tracker", "Content Calendar", "ROI Calculator"],
image: "https://readdy.ai/api/search-image?query=Digital%20marketing%20planner%20interface%20with%20analytics%20dashboard%20and%20planning%20tools%2C%20featuring%20purple%20and%20gold%20elements%2C%20professional%20business%20planning%20layout%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=600&height=400&seq=digital-4&orientation=landscape"
},
{
title: "Brand Identity Pack",
category: "Branding",
description: "Complete brand identity package with logo templates and brand guidelines.",
price: {
ngn: "₦54,000",
usd: "$119"
},
features: ["Logo Templates", "Brand Guidelines", "Social Media Kit", "Business Cards"],
image: "https://readdy.ai/api/search-image?query=Professional%20brand%20identity%20package%20presentation%20with%20logo%20designs%20and%20brand%20guidelines%2C%20purple%20and%20gold%20color%20scheme%2C%20elegant%20branding%20materials%20layout%2C%20modern%20minimal%20design%20on%20dark%20background&width=600&height=400&seq=digital-5&orientation=landscape"
},
{
title: "Lead Generation Kit",
category: "Marketing",
description: "High-converting lead generation templates and landing pages.",
price: {
ngn: "₦36,000",
usd: "$79"
},
features: ["Landing Pages", "Email Templates", "Lead Magnets", "Analytics Setup"],
image: "https://readdy.ai/api/search-image?query=Lead%20generation%20landing%20page%20templates%20and%20marketing%20materials%20displayed%20on%20devices%2C%20purple%20and%20gold%20accents%2C%20professional%20conversion%20optimization%20layout%2C%20modern%20tech%20aesthetic%20on%20dark%20background&width=600&height=400&seq=digital-6&orientation=landscape"
}
].map((product, index) => (
<div key={index} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
<div className="relative h-48 overflow-hidden">
<img
src={product.image}
alt={product.title}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
<div className="absolute top-4 left-4 bg-purple-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-purple-300">
{product.category}
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2">{product.title}</h3>
<p className="text-gray-300 text-sm mb-4">{product.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
{product.features.map((feature, i) => (
<span key={i} className="bg-purple-900/30 px-3 py-1 rounded-full text-xs text-purple-300">
{feature}
</span>
))}
</div>
<div className="flex justify-between items-center mb-4">
<div>
<span className="block text-purple-400 font-medium">{product.price.ngn}</span>
<span className="text-sm text-gray-400">{product.price.usd}</span>
</div>
<button className="bg-purple-700/20 hover:bg-purple-700/40 text-purple-300 px-4 py-2 rounded-full text-sm transition-all !rounded-button whitespace-nowrap cursor-pointer">
Preview
</button>
</div>
<button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Purchase Now
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
</div>
</section>
{/* Courses Section */}
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
{/* Footer */}
<footer className="bg-black pt-20 pb-10 border-t border-purple-900/30">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-10">
<div className="md:col-span-1">
<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400 mb-4">
VXP<span className="text-white">.</span>
</h1>
<p className="text-gray-400 mb-6">
Pioneering the digital frontier with cutting-edge AI solutions and premium digital services.
</p>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700 transition-all cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700 transition-all cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700 transition-all cursor-pointer">
<i className="fab fa-youtube"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700 transition-all cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-bold mb-4">Quick Links</h4>
<ul className="space-y-2">
{['Home', 'About', 'Services', 'AI Store', 'Digital Shop'].map((item) => (
<li key={item}>
<a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-purple-400 transition-all cursor-pointer">
{item}
</a>
</li>
))}
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-4">Resources</h4>
<ul className="space-y-2">
{['Blog', 'Courses', 'Case Studies', 'FAQ', 'Support'].map((item) => (
<li key={item}>
<a href="#" className="text-gray-400 hover:text-purple-400 transition-all cursor-pointer">
{item}
</a>
</li>
))}
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
<p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
<form className="space-y-3">
<div className="relative">
<input
type="email"
placeholder="Your email address"
className="w-full bg-purple-900/20 border border-purple-800/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
/>
</div>
<button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all !rounded-button whitespace-nowrap cursor-pointer">
Subscribe
</button>
</form>
<div className="mt-6 flex items-center space-x-4">
<i className="fab fa-cc-visa text-2xl text-gray-400"></i>
<i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
<i className="fab fa-paypal text-2xl text-gray-400"></i>
</div>
</div>
</div>
<div className="border-t border-purple-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">
© {new Date().getFullYear()} VXP & Verve. All rights reserved.
</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Terms of Service</a>
<a href="#" className="text-gray-400 hover:text-purple-400 text-sm cursor-pointer">Cookie Policy</a>
</div>
</div>
</div>
<button
className="fixed bottom-6 right-6 w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all z-20 cursor-pointer"
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
<i className="fas fa-arrow-up"></i>
</button>
</footer>
</div>
);
};
export default App