
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Checkout</h2>
          <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 relative overflow-hidden text-gray-300">
            <p>This is the checkout page.</p>
            <p>Your checkout form and payment details will go here.</p>
            {/* Placeholder for checkout form */}
            <div className="mt-8 p-6 border border-purple-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <p>Item 1: $XX.XX</p>
              <p>Item 2: $XX.XX</p>
              <p className="font-bold mt-4">Total: $XX.XX</p>
            </div>
            <div className="mt-8 p-6 border border-purple-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <p>[Shipping address form goes here]</p>
            </div>
            <div className="mt-8 p-6 border border-purple-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
              <p>[Payment form goes here (e.g., credit card details)]</p>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 rounded-full text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;