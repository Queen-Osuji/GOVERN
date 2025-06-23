import { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Countdown from 'react-countdown';
import { FaGift } from "react-icons/fa";
import { Input } from "../components/ui/input";
import book4 from "../assets/images/books/book4.png";
import book8 from "../assets/images/books/book8.png";
import book11 from "../assets/images/books/book11.jpg";
import book5 from "../assets/images/books/book5.jpg";
import book2 from "../assets/images/books/book2.png";

const EbookLanding = () => {
  const [email, setEmail] = useState("");
  const [showGift, setShowGift] = useState(false);
  const launchDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => {
      console.log('Paystack script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load Paystack script');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sendEbook = async (email, reference) => {
    try {
      console.log(`Sending ebook to ${email} with reference ${reference}`);
      const apiUrl = 'http://localhost:5000/api/email/send-ebook'; // Hardcoded for local
      console.log(`Fetching from: ${apiUrl}`);
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, reference }),
      }).catch(error => {
        console.error('Fetch error:', error.message, 'URL:', apiUrl);
        throw error;
      });

      console.log(`API response status: ${res.status}, URL: ${apiUrl}`);
      if (res.ok) {
        setShowGift(true);
        console.log('Ebook sent successfully, showing gift');
      } else {
        const errorText = await res.text();
        alert(`Payment successful, but there was an error sending the ebook (${res.status}): ${errorText}. Please contact support.`);
        console.error(`API error: ${res.status} - ${errorText} at ${apiUrl}`);
      }
    } catch (error) {
      console.error("Error sending ebook:", error.message);
      alert("An error occurred after payment. Please contact support.");
    }
  };

  const handlePurchase = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (typeof PaystackPop === 'undefined') {
      alert("Paystack is not available. Please try again later.");
      return;
    }

    console.log('Initiating Paystack payment with email:', email);
    const handler = PaystackPop.setup({
      key: import.meta.env.VITE_TEST_PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: 12750000,
      currency: 'NGN',
      callback: (response) => {
        console.log('Paystack callback triggered with response:', response);
        sendEbook(email, response.reference);
      },
      onClose: () => {
        console.log('Payment window closed');
      },
    });
    handler.openIframe();
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-purple-400">The bundle has launched!</span>;
    } else {
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 flexn max-w-md md:max-w-xl">The $80,000 Escape Plan Built in a Toxic House With Nothing But Truth</h1>
      <p className="flex text-center text-base md:text-xl mb-8 max-w-md md:max-w-xl px-4">
      5 Ebooks. 1 mission. Escape poverty, reclaim time, and outsmart Silicon Valley , starting now
      </p>

      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle Launches In:</h2>
        <Countdown
          date={launchDate}
          renderer={renderer}
        />
      </div>

      <div className="relative flex gap-0 md:gap-5 items-center justify-center mb-10 mt-10">
        <img
          src={book5}
          alt="Lazy Genius"
          className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform -rotate-6 md:rotate-2"
        />
        <img
          src={book8}
          alt="AGENTIC AI OS"
          className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform -rotate-3"
        />
        <img
          src={book4}
          alt="AI Symbiosis"
          className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1"
        />
        <img
          src={book2}
          alt="Influncer guide"
          className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1"
        />
        <img
          src={book11}
          alt="Corporate Ninjutsu Ebook"
          className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform rotate-2 md:-rotate-2"
        />
      </div>

      <div className="flex flex-col max-w-md text-center mb-20">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-4">🎁 what you are getting:</h2>
        <div className="flex flex-col text-left gap-2 mx-4 font-sans">
          <p>✅AI Symbiosis – A high-level blueprint that rivals $1,500 courses</p>
          <p>✅Lazy Genius – Passive revenue breakthroughs</p>
          <p>✅Influencer Playbook– Grow even with zero followers</p>
          <p>✅Agentic os in business – Monetize machine learning in your business without watching long video courses and living in tutorial hell.</p>
          </div>
        <div className="flex flex-col justify-center align-center mt-5 gap-2">
          <h2 className='text-xl font-bold'>Bonus</h2>
          <p>VXP Escape Checklist:</p>
          <p>Roadmap to your rebel launch & corporate ninjutsu </p>

          <div className="flex justify-center align-center">
            <p className='gap-2'>If you use these tactics, you will make <span className='text-red-500 font-semibold text-lg'>enemies.😡</span>Be ready
            </p>

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
            className="my-2 p-4 w-full"
          />
          <Button
            className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-md max-w-md"
            onClick={handlePurchase}
          >
            Pay ₦127,500
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
};

export default EbookLanding;