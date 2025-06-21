import { useState, useEffect, ChangeEvent, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Countdown from 'react-countdown';
import { FaGift } from "react-icons/fa";
import React from "react";
import { Input } from "../components/ui/input";
import book1 from "../assets/images/books/book1.jpg";
import book2 from "../assets/images/books/book2.png";
import book3 from "../assets/images/books/book3.jpg";

interface PaystackWindow extends Window {
  PaystackPop?: {
    setup: (options: any) => { openIframe: () => void };
  };
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
const EbookLanding: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [showGift, setShowGift] = useState<boolean>(false);
  const launchDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000); // Set your launch date and time here

  useEffect(() => {
    // This useEffect is now only for the Paystack script
  });
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePurchase = (): void => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const paystackWindow = window as PaystackWindow;

    if (paystackWindow.PaystackPop) {
      paystackWindow.PaystackPop.setup({
        key: process.env.PAYSTACK_SECRET_KEY,
        email: email,
        amount: 1499900, // Amount in kobo (14999 Nairas)
        currency: 'NGN',
        callback: async (response: any) => {
          // Payment successful, now send the ebook
          try {
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

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
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
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black text-white flex flex-col items-center justify-center pt-40">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">VXP EBook Bundle</h1>
      <p className="text-center text-base md:text-xl mb-8 max-w-2xl px-4">
        Get powerful knowledge from VXP in one digital bundle. Learn about AI, business strategy, and media manipulation all in one place.
      </p>

      <div className="relative flex items-center justify-center mb-10 mt-20">
          <img
          src={book1}
          alt="AI Symbiosis"
          className="w-32 md:w-60 rounded-xl shadow-lg transform rotate-2"
          />
          <img
          src={book2}
          alt="Tabloid Ebook"
          className="w-25 md:w-55 rounded-xl shadow-lg absolute left-1/2 transform -translate-x-5 bottom-5 md:-bottom-6 rotate-10"
          />
          <img
          src={book3}
          alt="Tabloid Ebook"
          className="w-25 md:w-55 rounded-xl shadow-lg absolute right-1/2 transform -translate-x-5 bottom-5 md:-bottom-6 -rotate-10"
          />
      </div>

      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle Launches In:</h2>
        <Countdown
          date={launchDate}
          renderer={renderer}
        />
      </div>


      <Card className="bg-white w-full text-black max-w-sm md:max-w-lg w-full py-10">
        <CardContent className="p-6 space-y-8">
          <h2 className="text-xl font-semibold text-center">Purchase the Bundle</h2>
          <div className="flex md:flex-row gap-5">
            <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className='my-2 p-4'
            />
          {/* Replace this with real payment integration */}
          <Input 
            type="text" 
            placeholder="Card Number" 
            className='my-2 p-4'
          />
          </div>
          <div className="flex md:flex-row gap-5">
          <Input 
            type="text" 
            placeholder="Expiry MM/YY" 
            className='my-2 p-4'
            />
          <Input 
            type="text" 
            placeholder="CVV" 
            className='my-2 p-4'
            />
          </div>
          <Button className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-md" onClick={handlePurchase}>
            Pay ₦14,999 & Receive Instantly
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