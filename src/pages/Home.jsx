// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import DigitalShop from '../components/DigitalShop';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <DigitalShop />
        <CTABanner />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
