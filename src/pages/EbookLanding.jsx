import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import Countdown from 'react-countdown';
import { FaGift } from 'react-icons/fa';
import book4 from '../assets/books/book4.png';
import book8 from '../assets/books/book8.png';
import book11 from '../assets/books/book11.jpg';
import book5 from '../assets/books/book5.jpg';
import book2 from '../assets/books/book2.png';
import { loadScript } from '@paypal/paypal-js';

const EbookLanding = () => {
  const [email, setEmail] = useState('');
  const [showGift, setShowGift] = useState(false);
  const [purchasedEmail, setPurchasedEmail] = useState('');
  // Fixed launch date (e.g., August 15, 2025)
  const launchDate = new Date('2025-08-15T00:00:00Z');

  useEffect(() => {
    let paypalButtons = null;
    loadScript({ 'client-id':import.meta.env.VITE_PAYPAL_CLIENT_ID, currency: 'USD' })
      .then((paypal) => {
        if (!document.getElementById('paypal-button-container').hasChildNodes()) {
          paypalButtons = paypal.Buttons({
            createOrder: (data, actions) => {
              if (!email) {
                alert('Please enter your email address.');
                return actions.reject();
              }
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '85',
                    currency_code: 'USD'
                  }
                }]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log('Order approved:', order);
              setPurchasedEmail(email);
              sendEbook(email, order.purchase_units[0].payments.captures[0].id);
            },
            onError: (err) => {
              console.error('PayPal error:', err);
              alert('An error occurred with the payment. Please try again.');
            }
          });
          paypalButtons.render('#paypal-button-container');
        }
      })
      .catch((err) => {
        console.error('Failed to load PayPal script:', err);
        alert('PayPal is currently unavailable. Please try again later.');
      });
    return () => {
      if (paypalButtons && paypalButtons.close) paypalButtons.close();
    };
  }, []); // Only run once

  const sendEbook = async (email, reference) => {
    try {
  const apiUrl = import.meta.env.VITE_API_URL || '/api/email/send-ebook';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reference })
      }).catch(error => {
        console.error('Fetch error:', error.message, 'URL:', apiUrl);
        throw error;
      });
      if (res.ok) {
        setShowGift(true);
        setEmail('');
        console.log('Ebook sent successfully');
      } else {
        const errorText = await res.text();
        alert(`Error sending ebook (${res.status}): ${errorText}`);
      }
    } catch (error) {
      console.error('Error sending ebook:', error.message);
      alert('An error occurred after payment. Please contact support.');
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return <span className="text-purple-400">The bundle has launched!</span>;
    return (
      <div className="flex justify-center space-x-5 my-5 text-3xl font-mono py-4 px-6 rounded-md backdrop-filter backdrop-blur-md bg-gray-900 bg-opacity-50">
        <div>{days}: <span className="text-lg block">Days</span></div>
        <div>{hours}: <span className="text-lg block">Hours</span></div>
        <div>{minutes}: <span className="text-lg block">Minutes</span></div>
        <div>{seconds} <span className="text-lg block">Seconds</span></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-black via-purple-900 to-black text-white flex flex-col items-center justify-center pt-40 pb-10 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 flexn max-w-md md:max-w-xl">The $80K Blueprint : Unlock the Digital Stack That Works While You Sleep</h1>
      <p className="flex text-center text-base md:text-xl mb-8 max-w-md md:max-w-xl px-4">
        5 Ebooks. 1 mission. Escape poverty, reclaim time, and outsmart Silicon Valley, starting now
      </p>
      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle Launches In :</h2>
        <Countdown date={launchDate} renderer={renderer} />
      </div>
      <div className="relative flex gap-0 md:gap-5 items-center justify-center mb-10 mt-10">
        <img src={book5} alt="Lazy Genius book cover" className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform -rotate-6 md:rotate-2" aria-label="Lazy Genius book" />
        <img src={book8} alt="AGENTIC AI OS book cover" className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform -rotate-3" aria-label="Agentic AI OS book" />
        <img src={book4} alt="AI Symbiosis book cover" className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1" aria-label="AI Symbiosis book" />
        <img src={book2} alt="Influencer Guide book cover" className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1" aria-label="Influencer Guide book" />
        <img src={book11} alt="Corporate Ninjutsu Ebook book cover" className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform rotate-2 md:-rotate-2" aria-label="Corporate Ninjutsu book" />
      </div>
      <div className="flex flex-col max-w-md text-center mb-20">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-4">What you are getting :</h2>
        <div className="flex flex-col text-left gap-2 mx-4 font-sans">
          <p>AI Symbiosis – A high-level blueprint that rivals $1,500 courses</p>
          <p>Lazy Genius – Passive revenue breakthroughs</p>
          <p>Influencer Playbook – Grow even with zero followers</p>
          <p>Agentic OS in Business – Monetize machine learning in your business without watching long video courses and living in tutorial hell</p>
        </div>
        <div className="flex flex-col justify-center align-center mt-5 gap-2">
          <h2 className="text-xl font-bold">Bonus</h2>
          <p>VXP Escape Checklist:</p>
          <p>Roadmap to your rebel launch & Corporate Ninjutsu</p>
          <div className="flex justify-center align-center">
            <p className="gap-2">If you use these tactics, you will make <span className="text-red-500 font-semibold text-lg">enemies.</span> Be ready</p>
          </div>
        </div>
      </div>
      <Card className="bg-white w-full text-black max-w-sm md:max-w-lg py-10">
        <CardContent className="p-6 space-y-8">
          <h2 className="text-xl font-semibold text-center">Purchase the Bundle</h2>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-2 p-4 w-full bg-gray-100 rounded-md focus:rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
          />
        </CardContent>
      </Card>
      <div id="paypal-button-container" className="mb-4"></div>
      {showGift && (
        <div className="mt-10 text-center" role="alert" aria-live="polite">
          <div className="bg-purple-800 text-white p-8 rounded-2xl shadow-xl inline-block">
            <FaGift size={48} className="mx-auto mb-4" aria-label="Gift icon" />
            <h3 className="text-xl font-bold">Thank You for Your Purchase!</h3>
            <p className="mt-2 text-sm">The VXP eBooks have been delivered to <strong>{purchasedEmail}</strong>.</p>
            <p className="text-sm mt-1">Enjoy your journey into powerful knowledge, from our team to your growth. 💜</p>
          </div>
        </div>
      )}
      <p className="text-xs text-center mt-8 text-purple-400">
        <a href="/terms-and-conditions" className="underline" rel="noopener noreferrer">Terms and Conditions</a> |
        <a href="/privacy-policy" className="underline ml-2" rel="noopener noreferrer">Privacy Policy</a> |
        Powered by VXP – Creating the Future with Intelligence™
      </p>
    </div>
  );
};

export default EbookLanding;