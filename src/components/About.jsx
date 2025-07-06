import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { peopleData } from '../data/peopleData'; // Import the people data
import ceoImage from '../assets/images/about3.jpg'

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
    <section id="about" className="py-15 bg-black px-10 ">
      <div className="container mx-auto px-6 my-30">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">VXP & Verve</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden drop-shadow-2xl shadow-purple-500/20">
              <img
                src={ceoImage}
                alt="Queen Osuji"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-74 h-64 bg-gradient-to-tr from-purple-600 to-purple-800 rounded-full blur-3xl opacity-30 z-0"></div>
            {/* <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-bl from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-10 z-0"></div> */}
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
                <h5 className="text-3xl font-bold text-purple-400">20+</h5>
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
        <div className="mt-30">
          <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">


              <h3 className="text-2xl font-bold mb-6 text-center">What Our Clients Say</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {peopleData.map((testimonial, index) => ( // Use the imported peopleData
                  <div key={index} className="bg-purple-950/50 backdrop-blur-sm rounded-lg p-6 border border-purple-800/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
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