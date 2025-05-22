// src/pages/Home.jsx
import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import { Book } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-20 px-6 md:px-16 lg:px-32">
        <section className="text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold py-4 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent"
          >
            Empowering Tomorrow’s Digital Leaders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            VXP and Verve deliver elite digital services and AI solutions designed to transform your business and amplify your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            {/* <a href="#services" className="px-6 py-3 bg-purple-600 rounded-2xl text-white shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2">
              <Book className="w-5 h-5" /> Explore Services
            </a> */}
            <a href="#shop" className="px-6 py-3 border border-purple-600 text-purple-400 rounded-2xl hover:bg-purple-800 hover:text-white transition-all">
              Shop eBooks
            </a>
          </motion.div>
        </section>

        <section id="services" className="py-10">
          {/* <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Services</h2> */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Algorithm Kits',
                desc: 'Sellable ML models and scripts ready for deployment, including user guides and demos.',
              },
              {
                title: 'Web Development',
                desc: 'Full websites, landing pages, and portfolio sites designed to convert and impress.',
              },
              {
                title: 'Graphic Design & Branding',
                desc: 'Complete brand identity kits: logos, social templates, packaging, and brand guidelines.',
              },
              {
                title: 'Digital Products',
                desc: 'Ready-to-sell eBooks, templates, and planners that generate income on autopilot.',
              },
              {
                title: 'Workshops & Trainings',
                desc: 'Live sessions on AI, freelancing, branding, and creative skills — taught by Queen Osuji herself.',
              },
              {
                title: 'AI Strategy Consulting',
                desc: 'Private sessions and B2B offers to integrate AI into your workflow or brand roadmap.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="border border-purple-700 p-6 rounded-2xl shadow hover:shadow-lg transition-all bg-[#1a1a1d]"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <button className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all flex items-center gap-2">
                  <Book className="w-4 h-4" /> Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
