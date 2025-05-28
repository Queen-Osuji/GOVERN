
// src/pages/DigitalShop.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DigitalShop from '../components/DigitalShop';

export default function DigitalShopPage() {
  return (
    <div className="text-white flex flex-col">
      <main className="flex-grow pt-10">
        <DigitalShop />
      </main>

      <Footer />
    </div>
  );
}