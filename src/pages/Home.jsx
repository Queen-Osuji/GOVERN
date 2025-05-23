// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AIStore from '../components/AIStore';
import DigitalShop from '../components/DigitalShop';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Services />
        <AIStore />
        <DigitalShop />
        {/* <Courses /> */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
