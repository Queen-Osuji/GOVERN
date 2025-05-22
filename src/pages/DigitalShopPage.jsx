
// src/pages/DigitalShop.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DigitalShop from '../components/DigitalShop';

export default function DigitalShopPage() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <DigitalShop />
      </main>

      <Footer />
    </div>
  );
}