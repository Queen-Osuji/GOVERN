import { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Countdown from 'react-countdown';
import { FaGift } from "react-icons/fa";
import { Input } from "../components/ui/input";
import book4 from "../assets/books/book4.png";
import book8 from "../assets/books/book8.png";
import book11 from "../assets/books/book11.jpg";
import book5 from "../assets/books/book5.jpg";
import book2 from "../assets/books/book2.png";

const EbookLanding = () => {
  const [email, setEmail] = useState("");
  const [showGift, setShowGift] = useState(false);
  const [useUSD, setUseUSD] = useState(false); // Toggle between NGN and USD for Paystack

  // Load launchDate from localStorage or set initial value (5 days from first load)
  const [launchDate, setLaunchDate] = useState(() => {
    const savedDate = localStorage.getItem('launchDate');
    if (savedDate) {
      return new Date(savedDate);
    } else {
      const newLaunchDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
      localStorage.setItem('launchDate', newLaunchDate);
      return newLaunchDate;
    }
  });

  useEffect(() => {
    // Load Paystack script
    const paystackScript = document.createElement('script');
    paystackScript.src = 'https://js.paystack.co/v1/inline.js';
    paystackScript.async = true;
    paystackScript.onload = () => {
      console.log('Paystack script loaded');
    };
    paystackScript.onerror = () => {
      console.error('Failed to load Paystack script');
    };
    document.body.appendChild(paystackScript);

    // Load Flutterwave script
    const flutterwaveScript = document.createElement('script');
    flutterwaveScript.src = 'https://checkout.flutterwave.com/v3.js';
    flutterwaveScript.async = true;
    flutterwaveScript.onload = () => {
      console.log('Flutterwave script loaded');
    };
    flutterwaveScript.onerror = () => {
      console.error('Failed to load Flutterwave script');
    };
    document.body.appendChild(flutterwaveScript);

    return () => {
      document.body.removeChild(paystackScript);
      document.body.removeChild(flutterwaveScript);
    };
  }, []);

  const sendEbook = async (email, reference) => {
    try {
      console.log(`Sending ebook to ${email} with reference ${reference}`);
      const apiUrl = 'http://localhost:5000/api/email/send-ebook';
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
        setEmail(""); // Clear the email field on success
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

  const handlePaystackPurchase = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (typeof PaystackPop === 'undefined') {
      alert("Paystack is not available. Please try again later.");
      return;
    }

    const currency = useUSD ? 'USD' : 'NGN';
    const amount = useUSD ? 8500 : 12750000; // $85 in cents (8500) or ₦12,750,000 in kobo

    console.log('Initiating Paystack payment with email:', email, 'Currency:', currency, 'Amount:', amount);
    const handler = PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: amount,
      currency: currency,
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

  const handleFlutterwavePurchase = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (typeof FlutterwaveCheckout === 'undefined') {
      alert("Flutterwave is not available. Please try again later.");
      return;
    }

    FlutterwaveCheckout({
      public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: `tx-${Date.now()}`, // Unique transaction reference
      amount: 85, // $85
      currency: 'USD',
      payment_options: 'card, ussd, account, mobilemoneyghana, mobilemoneyuganda, mobilemoneyfranco',
      customer: {
        email: email,
        name: 'Customer Name',
      },
      callback: (response) => {
        console.log('Flutterwave callback triggered with response:', response);
        if (response.status === 'successful') {
          sendEbook(email, response.transaction_id);
        } else {
          alert('Payment was not successful. Please try again.');
        }
      },
      onClose: () => {
        console.log('Flutterwave payment window closed');
      },
    });
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 flexn max-w-md md:max-w-xl">The $80K Blueprint : Unlock the Digital Stack That Works While You Sleep</h1>
      <p className="flex text-center text-base md:text-xl mb-8 max-w-md md:max-w-xl px-4">
        5 Ebooks. 1 mission. Escape poverty, reclaim time, and outsmart Silicon Valley, starting now
      </p>

      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle Launches In :</h2>
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
          alt="Influencer Guide"
          className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1"
        />
        <img
          src={book11}
          alt="Corporate Ninjutsu Ebook"
          className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform rotate-2 md:-rotate-2"
        />
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
            <p className="gap-2">If you use these tactics, you will make <span className="text-red-500 font-semibold text-lg">enemies.</span> Be ready
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
            className="my-2 p-4 w-full bg-gray-100 rounded-md focus:rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
          />
          {/* Toggle button to switch between NGN and USD for Paystack */}
          <button
            className="w-full py-2 text-purple-600 rounded-md max-w-md mb-2"
            onClick={() => setUseUSD(!useUSD)}
          >
            Switch to {useUSD ? 'NGN (₦12,750,000)' : 'USD ($85)'}
          </button>
          {/* Paystack button */}
          <Button
            className="w-full py-4 text-white bg-purple-600 rounded-md max-w-md mb-2"
            onClick={handlePaystackPurchase}
          >
            Pay {useUSD ? '$85' : '₦12,750,000'} with Paystack
          </Button>
          {/* Flutterwave button for USD */}
          <Button
            className="w-full py-4 text-white bg-purple-600 rounded-md max-w-md"
            onClick={handleFlutterwavePurchase}
          >
            Pay $85 with Flutterwave
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