// src/pages/About.jsx
import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-20 px-6 md:px-16 lg:px-32">
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            About VXP & Verve
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Founded by Queen Osuji, VXP is a powerhouse for elite digital skills, while Verve brings cutting-edge AI innovation to the global stage.
          </p>
        </section>

        <section className="py-16 border-t border-gray-700">
          <h2 className="text-3xl font-semibold mb-4 text-white">Who We Are</h2>
          <p className="text-gray-400 max-w-3xl">
            VXP stands for Versatile Experts — a Nigerian-led digital brand that empowers women and future-focused creators through AI, web design, and digital products. From premium eBooks to client-ready machine learning models, we help brands evolve into tech-forward forces.
          </p>
        </section>

        <section className="py-16 border-t border-gray-700">
          <h2 className="text-3xl font-semibold mb-4 text-white">Our Founder</h2>
          <p className="text-gray-400 max-w-3xl">
            Queen Osuji, a visionary digital expert and certified AI strategist, built VXP from passion, resilience, and community empowerment. Her mission is to create wealth, wellness, and opportunity for African talents — starting with you.
          </p>
        </section>

        <section className="py-16 border-t border-gray-700">
          <h2 className="text-3xl font-semibold mb-4 text-white">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>AI algorithm products and ML model kits</li>
            <li>Graphic design and branding services</li>
            <li>Web design and development</li>
            <li>Premium eBooks on empowerment and business</li>
            <li>Workshops, webinars, and training for skill growth</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
