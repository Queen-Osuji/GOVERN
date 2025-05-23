// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutComponent from '../components/About'; // Import the About component

export default function About() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {/* Integrate the existing About component */}
        <AboutComponent />

        {/* More detailed sections */}
        <section className="py-16 border-t border-gray-700">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mb-10"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
              Our mission is to empower entrepreneurs, particularly women in Africa and globally, with the knowledge, skills, and AI-driven tools necessary to thrive in the rapidly evolving digital economy. We are committed to bridging the digital divide and fostering innovation through accessible education and cutting-edge technology.
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-gray-700 bg-gradient-to-b from-purple-950/20 to-black">
           <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Values</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mb-10"></div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg border border-purple-800/30 bg-purple-900/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Innovation</h3>
                <p className="text-gray-300">Constantly exploring and implementing the latest advancements in AI and digital technology.</p>
              </div>
               <div className="p-6 rounded-lg border border-purple-800/30 bg-purple-900/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Empowerment</h3>
                <p className="text-gray-300">Providing individuals with the tools, knowledge, and confidence to succeed.</p>
              </div>
               <div className="p-6 rounded-lg border border-purple-800/30 bg-purple-900/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Excellence</h3>
                <p className="text-gray-300">Delivering high-quality products, services, and educational content.</p>
              </div>
            </div>
           </div>
        </section>

        <section className="py-16 border-t border-gray-700">
           <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our History</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mb-10"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
              Founded by Queen Osuji, VXP and Verve began with a vision to leverage technology for economic advancement and empowerment. Starting with a focus on digital skills training, we quickly expanded into AI solutions and digital product development, serving a growing community of entrepreneurs and businesses. Over the years, we have helped hundreds of clients achieve their digital goals and continue to innovate at the forefront of the tech industry.
          </p>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
