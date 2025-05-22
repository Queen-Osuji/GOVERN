import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const About = () => {
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

  return (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;