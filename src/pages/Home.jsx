// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col overflow-x-hidden">

      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
