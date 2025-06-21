import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Countdown from 'react-countdown';
import { FaGift } from "react-icons/fa";
import React from "react";
import { Input } from "../components/ui/input";
import book4 from "../assets/images/books/book4.png";
import book8 from "../assets/images/books/book8.png";
import book11 from "../assets/images/books/book11.jpg";
import book5 from "../assets/images/books/book5.jpg";

const EbookLanding = () => {
  const [email, setEmail] = useState("");
  const [showGift, setShowGift] = useState(false);
  const launchDate = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000); // Set your launch date and time here

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // This useEffect is responsible for loading the Paystack script dynamically.
  });

  const handlePurchase = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const paystackWindow = window;

    if (paystackWindow.PaystackPop) { 
      paystackWindow.PaystackPop.setup({
        key: process.env.PAYSTACK_SECRET_KEY,
        email: email,
        amount: 85, 
        currency: 'USD',
        callback: async (response) => {
          // Payment successful, now send the ebook
          try { // Removed type annotation
            const res = await fetch('/api/send-ebook', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: email, reference: response.reference }),
            });

            if (res.ok) {
              setShowGift(true);
            } else {
              alert("Payment successful, but there was an error sending the ebook. Please contact support.");
            }
          } catch (error) {
            console.error("Error sending ebook:", error);
            alert("An error occurred after payment. Please contact support.");
          }
        },
      }).openIframe();
    } else {
      alert("Paystack is not available. Please try again later.");
    }
  };

  // const handleEmailChange = (e) => { // Removed type annotations
  //   setEmail(e.target.value);
  // };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span className="text-purple-400">The bundle has launched!</span>;
    } else {
      // Render a countdown
      return (
        <div className="flex justify-center space-x-5 my-5 text-3xl font-mono py-4 px-6 rounded-md backdrop-filter backdrop-blur-md bg-gray-900 bg-opacity-50">
          <div>{days}: <span className="text-lg block">Days</span></div>
          <div>{hours}: <span className="text-lg block">Hours</span></div>
          <div>{minutes}: <span className="text-lg block">Minutes</span></div>
          <div>{seconds} <span className="text-lg block">Seconds</span></div>
        </div>
      );
    }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black text-white flex flex-col items-center justify-center pt-40 pb-10 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">VXP EBook Bundle</h1>
      <p className="text-center text-base md:text-xl mb-8 max-w-2xl px-4">
        Get powerful knowledge from VXP in one digital bundle. Learn about AI, business strategy, and media manipulation all in one place.
      </p>

      <div className="relative flex gap-5 items-center justify-center mb-10 mt-20">
        <img
          src={book5} // Assuming book5 is correctly imported
          alt="lazy Genius"
          className="w-28 md:w-56 rounded-xl shadow-xl drop-shadow-md= transform rotate-2"
          />
          <img
          src={book8} // Assuming book8 is correctly imported
          alt="AGENTIC AI OS"
          className="w-32 md:w-60 rounded-xl shadow-xl drop-shadow-md transform -rotate-3"
          />
          <img
          src={book4} // Assuming book4 is correctly imported
          alt="AI Symbiosis"
          className="w-32 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1"
          />
          <img
          src={book11} // Assuming book11 is correctly imported
          alt="Corporate Ninjutsu Ebook"
          className="w-28 md:w-56 rounded-xl shadow-xl drop-shadow-md transform -rotate-2"
          />
          
      </div>

      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle Launches In:</h2>
        <Countdown
          date={launchDate}
          renderer={renderer}
        />
      </div>


      <Card className="bg-white w-full text-black max-w-sm md:max-w-lg py-10">
        <CardContent className="p-6 space-y-8">
          <h2 className="text-xl font-semibold text-center">Purchase the Bundle</h2>
          {/* Removed unnecessary card details inputs */}
          <div className='flex md:flex-row gap-5'>
            <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            className='my-2 p-4'
            />
          {/* Replace this with real payment integration */}
          <Input 
            type="text" 
            placeholder="Card Number" 
            className='my-2 p-4'
          />
          </div>
          <div className='flex md:flex-row gap-5'>
            <Input
            type="text"
            placeholder="MM/DD"
            value={email}
            className='my-2 p-4'
            />
          {/* Replace this with real payment integration */}
          <Input 
            type="text" 
            placeholder="CVV" 
            className='my-2 p-4'
          />
          </div>
          <Button className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-md max-w-md" onClick={handlePurchase}>
            Pay $85
          </Button>
        </CardContent>
      </Card>

      {showGift && (
        <div className="mt-10 text-center">
          <div className="bg-purple-800 text-white p-8 rounded-2xl shadow-xl inline-block">
            <FaGift size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">Thank You for Your Purchase!</h3>
            <p className="mt-2 text-sm">The VXP eBooks have been delivered to <strong>{email}</strong>.</p>
            <p className="text-sm mt-1">Enjoy your journey into powerful knowledge, from our team to your growth. 💜</p>
          </div>
        </div>
       )}

      <p className="text-xs text-center mt-8 text-purple-400">
        Powered by VXP – Creating the Future with Intelligence™
      </p>
    </div>
  );
}

export default EbookLanding;