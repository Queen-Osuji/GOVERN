import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Countdown from 'react-countdown';
import { FaGift } from "react-icons/fa";
import { Input } from "../components/ui/input";
import book4 from "/images/books/book4.png";
import book8 from "/images/books/book8.png";
import book11 from "/images/books/book11.jpg";
import book5 from "/images/books/book5.jpg";
import book2 from "/images/books/book2.png";
import { loadScript } from "@paypal/paypal-js";

const EbookLanding = () => {
  const [email, setEmail] = useState("");
  const [showGift, setShowGift] = useState(false);
  const [paypalError, setPaypalError] = useState(null);
  const paypalButtonRef = useRef(null);

  // Load launchDate from localStorage with fallback
  const [launchDate, setLaunchDate] = useState(() => {
    try {
      const savedDate = localStorage.getItem('launchDate');
      if (savedDate) {
        return new Date(savedDate);
      }
    } catch (error) {
      console.warn('localStorage access failed:', error.message);
    }
    const newLaunchDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
    try {
      localStorage.setItem('launchDate', newLaunchDate.toISOString());
    } catch (error) {
      console.warn('Failed to save launchDate to localStorage:', error.message);
    }
    return newLaunchDate;
  });

  // Load PayPal SDK
  useEffect(() => {
    if (!document.querySelector(`script[src*="paypal.com/sdk/js"]`)) {
      const paypalScript = document.createElement('script');
      paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(import.meta.env.VITE_PAYPAL_CLIENT_ID)}&currency=USD&disable-funding=card`;
      paypalScript.async = true;
      paypalScript.onload = () => {
        console.log('PayPal SDK loaded');
        if (window.paypal) {
          initPayPalButton();
        }
      };
      paypalScript.onerror = () => {
        console.error('Failed to load PayPal SDK');
        setPaypalError('Failed to load PayPal. Please check your browser settings, disable ad blockers, and try again.');
      };
      document.body.appendChild(paypalScript);
    }

    // Initialize PayPal button if SDK is already loaded
    if (window.paypal && !paypalButtonRef.current) {
      initPayPalButton();
    }

    // Cleanup PayPal button only
    return () => {
      if (paypalButtonRef.current) {
        paypalButtonRef.current.close().catch(() => {});
        paypalButtonRef.current = null;
      }
    };
  }, []);

  // Initialize PayPal Button
  const initPayPalButton = () => {
    if (!window.paypal || paypalButtonRef.current) {
      console.warn('PayPal SDK not loaded or button already initialized');
      return;
    }

    try {
      paypalButtonRef.current = window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '85.00',
                currency_code: 'USD',
              },
            }],
          });
        },
        onApprove: async (data, actions) => {
          console.log('PayPal payment approved:', data);
          try {
            const order = await actions.order.capture();
            console.log('PayPal order captured:', order);
            sendEbook(email, order.id);
          } catch (err) {
            console.error('PayPal capture error:', err);
            setPaypalError('Failed to capture PayPal payment. Please try again.');
          }
        },
        onError: (err) => {
          console.error('PayPal button error:', err);
          setPaypalError('An error occurred with PayPal. Please check your browser settings, disable ad blockers, and try again.');
        },
      });

      paypalButtonRef.current.render('#paypal-button-container').catch(err => {
        console.error('Failed to render PayPal button:', err);
        setPaypalError('Failed to render PayPal button. Please check your browser settings, disable ad blockers, and try again.');
      });
    } catch (err) {
      console.error('Error initializing PayPal button:', err);
      setPaypalError('Error initializing PayPal. Please check your browser settings, disable ad blockers, and try again.');
    }
  };

  // Send ebook after payment
  const sendEbook = async (email, orderId) => {
    try {
      console.log(`Sending ebook to ${email} with order ID ${orderId}`);
      const apiUrl = 'http://localhost:5000/api/email/send-ebook';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, orderId }),
      });

      if (res.ok) {
        setShowGift(true);
        setEmail("");
        console.log('Ebook sent successfully');
      } else {
        const errorText = await res.text();
        alert(`Payment successful, but there was an error sending the ebook (${res.status}): ${errorText}. Please contact support.`);
      }
    } catch (error) {
      console.error("Error sending ebook:", error.message);
      alert("An error occurred after payment. Please contact support.");
    }
  };

  // Handle purchase
  const handlePurchase = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (!window.paypal) {
      setPaypalError("PayPal is not available. Please check your browser settings, disable ad blockers, and try again.");
      return;
    }

    document.getElementById('paypal-button-container')?.scrollIntoView({ behavior: 'smooth' });
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 max-w-md md:max-w-xl">
        The $80K Blueprint: Unlock the Digital Stack That Works While You Sleep
      </h1>
      <p className="text-center text-base md:text-xl mb-8 max-w-md md:max-w-xl px-4">
        5 Ebooks. 1 mission. Escape poverty, reclaim time, and outsmart Silicon Valley, starting now
      </p>

      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle Launches In:</h2>
        <Countdown date={launchDate} renderer={renderer} />
      </div>

      <div className="relative flex gap-0 md:gap-5 items-center justify-center mb-10 mt-10">
        <img src={book5} alt="Lazy Genius" className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform -rotate-6 md:rotate-2" />
        <img src={book8} alt="AGENTIC AI OS" className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform -rotate-3" />
        <img src={book4} alt="AI Symbiosis" className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1" />
        <img src={book2} alt="Influencer Guide" className="w-20 md:w-60 rounded-xl shadow-xl drop-shadow-md transform rotate-1" />
        <img src={book11} alt="Corporate Ninjutsu Ebook" className="w-20 md:w-56 rounded-xl shadow-xl drop-shadow-md transform rotate-2 md:-rotate-2" />
      </div>

      <div className="flex flex-col max-w-md text-center mb-20">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-4">What you are getting:</h2>
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
            <p className="gap-2">
              If you use these tactics, you will make <span className="text-red-500 font-semibold text-lg">enemies.</span> Be ready
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
          {/* <Button
            className="w-full py-4 text-white bg-purple-600 rounded-md max-w-md"
            onClick={handlePurchase}
            disabled={paypalError}
          >
            Pay $85 (PayPal)
          </Button> */}
          <div id="paypal-button-container" className="mt-4"></div>
          {paypalError && (
            <p className="text-red-500 text-sm mt-2">{paypalError}</p>
          )}
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