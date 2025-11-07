
import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import Countdown from 'react-countdown';
import { FaGift } from 'react-icons/fa';
import book4 from '../assets/books/book4.png';
import book8 from '../assets/books/book8.png';
import book11 from '../assets/books/book11.jpg';
import book5 from '../assets/books/book5.jpg';
import book2 from '../assets/books/book2.png';
import book12 from '../assets/books/book12.jpg'
import { loadScript } from '@paypal/paypal-js';
import './EbookLanding.css';

const EbookLanding = () => {
  const [email, setEmail] = useState('');
  const [showGift, setShowGift] = useState(false);
  const [purchasedEmail, setPurchasedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for payment/API
  const [error, setError] = useState(''); // Error state for user feedback
  const [isLaunched, setIsLaunched] = useState(false);
  const [bundlePrice, setBundlePrice] = useState('95');
  const launchDate = new Date('2025-10-31:00:00Z');

  useEffect(() => {
    const now = new Date();
    const launched = now > launchDate;
    setIsLaunched(launched);
    setBundlePrice(launched ? '195' : '95');
  }, []);

  useEffect(() => {
    let paypalButtons = null;
    loadScript({ 'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID, currency: 'USD' })
      .then((paypal) => {
        if (!document.getElementById('paypal-button-container').hasChildNodes()) {
          paypalButtons = paypal.Buttons({
            createOrder: (data, actions) => {
              // Validate email before creating order
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!email || !emailRegex.test(email)) {
                setError('Please enter a valid email address before proceeding with payment.');
                return Promise.reject(new Error('Invalid email'));
              }
              setError(''); // Clear error
              setIsLoading(true); // Show loading
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: bundlePrice,
                    currency_code: 'USD'
                  }
                }]
              });
            },
            onApprove: async (data, actions) => {
              try {
                const order = await actions.order.capture();
                console.log('Order approved:', order);
                setPurchasedEmail(email);
                await sendEbook(email, order.purchase_units[0].payments.captures[0].id);
              } catch (err) {
                console.error('PayPal approval error:', err);
                setError('Payment failed. Please try again.');
                setIsLoading(false);
              }
            },
            onError: (err) => {
              console.error('PayPal error:', err);
              setError('An error occurred with the payment. Please enter your email before payment.');
              setIsLoading(false);
            }
          });
          paypalButtons.render('#paypal-button-container');
        }
      })
      .catch((err) => {
        console.error('Failed to load PayPal script:', err);
        setError('PayPal is currently unavailable. Please try again later.');
      });

    return () => {
      if (paypalButtons && paypalButtons.close) {
        paypalButtons.close();
      }
    };
  }, [email, bundlePrice]); // Depend on email and bundlePrice to re-render if needed

  const sendEbook = async (email, orderId) => {
    setIsLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api/email/send-ebook';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, orderId }) // Match backend expected key
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
      }
      setShowGift(true);
      setEmail('');
      setError('');
      console.log('Ebook sent successfully');
    } catch (error) {
      console.error('Error sending ebook:', error.message);
      setError(`Failed to send ebook: ${error.message}. Please contact support.`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="flex justify-center space-x-5 my-5 text-3xl font-mono py-4 px-6 rounded-md backdrop-filter backdrop-blur-md bg-gray-900 bg-opacity-50">
          <span className="text-purple-400">The bundle has launched!</span>
        </div>
      );
    }
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
      <div className="flex-col mx-auto mt-0 justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 max-w-md md:max-w-xl">
        The $100K Digital Stack Outsmart the System. Build Your Freedom
      </h1>
      <p className="flex text-center text-base md:text-xl mb-2 max-w-md md:max-w-xl px-4">
        6 EBooks + 1 mission: escape the grind, master AI, and build income that doesn’t rely on luck or endless hustle
      </p>
        <p className="flex text-center justify-center text-base md:text-md mb-8 text-yellow-300">Already read by 2,000+ creators worldwide  you could be next</p>
      </div>
      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-2">Bundle has been Launched </h2>
        {/* <Countdown date={launchDate} renderer={renderer} /> */}
        {isLaunched && (
          <p className="text-2xl font-bold text-green-400 mt-2">Now available for ${bundlePrice}!</p>
        )}
         <Card className="bg-white w-full text-black max-w-sm md:max-w-lg py-10">
        <CardContent className="p-6 space-y-8">
          <div className=" flex flex-col items-center justify-center mx-auto gap-2">
             <h2 className="text-xl font-semibold text-center">Let me in — ${bundlePrice} Access</h2>
                <p className='text-sm'>Goes up To $195 in 4 days</p>

          </div>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(''); // Clear error on input change
            }}
            className="my-2 p-4 w-full bg-gray-100 rounded-md focus:rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
          />
          {error && (
            <p className="text-red-500 text-sm text-center" role="alert">
              {error}
            </p>
          )}
          <div id="paypal-button-container" className="">
            {isLoading && <p className="text-center text-gray-600">Processing payment...</p>}
          </div>
        </CardContent>
      </Card>
      </div>
      <div className="relative flex gap-2 md:gap-5 items-center justify-center mb-10 mt-10 perspective-1000">
        {/* Book 1 */}
        <div className="group cursor-pointer">
          <div className="book-3d relative w-20 md:w-56 h-28 md:h-72 transform-gpu transition-all duration-700 group-hover:animate-book-hover" style={{ transform: 'rotateY(-6deg) rotateZ(-6deg)' }}>
            <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
              boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
            }}>
              <img src={book5} alt="Lazy Genius book cover" className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
            <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>
          </div>
        </div>

        {/* Book 2 */}
        <div className="group cursor-pointer">
          <div className="book-3d relative w-20 md:w-60 h-28 md:h-76 transform-gpu transition-all duration-700 group-hover:animate-book-hover" style={{ transform: 'rotateY(-3deg) rotateZ(-3deg)' }}>
            <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
              boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
            }}>
              <img src={book8} alt="AGENTIC AI OS book cover" className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
            <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>
          </div>
        </div>

        {/* Book 3 */}
        <div className="group cursor-pointer">
          <div className="book-3d relative w-20 md:w-60 h-28 md:h-76 transform-gpu transition-all duration-700 group-hover:animate-book-hover" style={{ transform: 'rotateY(1deg) rotateZ(1deg)' }}>
            <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
              boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
            }}>
              <img src={book4} alt="AI Symbiosis book cover" className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
            <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>
          </div>
        </div>

        {/* Book 4 */}
        <div className="group cursor-pointer">
          <div className="book-3d relative w-20 md:w-60 h-28 md:h-76 transform-gpu transition-all duration-700 group-hover:animate-book-hover" style={{ transform: 'rotateY(1deg) rotateZ(1deg)' }}>
            <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
              boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
            }}>
              <img src={book2} alt="Influencer Guide book cover" className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
            <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>
          </div>
        </div>

        {/* Book 5 */}
        <div className="group cursor-pointer">
          <div className="book-3d relative w-20 md:w-56 h-28 md:h-72 transform-gpu transition-all duration-700 group-hover:animate-book-hover" style={{ transform: 'rotateY(2deg) rotateZ(2deg)' }}>
            <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
              boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
            }}>
              <img src={book11} alt="Corporate Ninjutsu Ebook book cover" className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
            <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>
          </div>
        </div>

        {/* Book 6 */}
        <div className="group cursor-pointer">
          <div className="book-3d relative w-20 md:w-56 h-28 md:h-72 transform-gpu transition-all duration-700 group-hover:animate-book-hover" style={{ transform: 'rotateY(2deg) rotateZ(-2deg)' }}>
            <div className="book-cover relative w-full h-full rounded-r-lg overflow-hidden" style={{
              boxShadow: '8px 8px 25px rgba(0,0,0,0.7), inset -3px 0 6px rgba(0,0,0,0.4)'
            }}>
              <img src={book12} alt="Agentic AI Ebook book cover" className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-1 top-1 w-full h-full bg-white/90 rounded-r-lg transform translate-x-1 -translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2"></div>
            <div className="absolute -right-2 top-2 w-full h-full bg-gray-100/70 rounded-r-lg transform translate-x-2 -translate-y-2 -z-20 transition-all duration-500 group-hover:translate-x-3"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-md text-center mb-20">
        <h2 className="text-xl md:text-2xl font-bold mt-5 mb-4">Inside The Bundle</h2>
        <div className="flex flex-col text-left gap-2 mx-4 font-sans">
          <div className="flex-col gap-2">
            <p className="font-medium">AI Symbiosis –</p>
                <p className="italic justify-end ">Understand how to think like AI — and use it to amplify your creativity, money flow, and decision-making.
  This book alone can replace 10 random online courses.</p>
            </div>
          <div className="flex-col gap-2">
            <p className="font-medium">Lazy Genius –</p>
                <p className="italic justify-end ">Discover how to earn without burnout. Learn to build systems that work for you — even when you’re offline</p>
            </div>
          <div className="flex-col gap-2">
            <p className="font-medium">Influencer Playbook –</p>
                <p className="italic justify-end ">Build authority and sell digital products even if you have zero followers.
Learn the psychology of influence — not just the tactics</p>
            </div>
          <div className="flex-col gap-2">
            <p className="font-medium">Agentic OS in Business –</p>
                <p className="italic justify-end ">Create micro-products, automate workflows, and use AI like a digital business partner.
It’s the entrepreneur’s shortcut to becoming 10x more productive.</p>
            </div>
          <div className="flex-col gap-2">
            <p className="font-medium">Agentic OS in Business –</p>
                <p className="italic justify-end ">Create micro-products, automate workflows, and use AI like a digital business partner.
It’s the entrepreneur’s shortcut to becoming 10x more productive.</p>
            </div>
          <div className="flex-col gap-2">
            <p className="font-medium">Agentic AI Playbook –</p>
                <p className="italic justify-end ">A behind-the-scenes look at power, control, and strategy in the digital world.
How the smartest people play the game of wealth without being seen</p>
            </div>
          <div className="flex-col gap-2">
            <p className="font-medium">Corporate Ninjutsu –</p>
                <p className="italic justify-end ">A behind-the-scenes look at power, control, and strategy in the digital world.
How the smartest people play the game of wealth without being seen.</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-2">
          <h2 className="text-xl font-bold">Bonus</h2>
          <p className='font-medium'>VXP Escape Checklist:</p>
          <p>Your roadmap for digital freedom</p>
          <p className='font-medium'>Certificate of Completion:</p>
          <p>Signed by Osuji Precious, CEO – VXP Global</p>
          <p className='font-medium'>Lifetime Access:</p>
          <p>Once you buy, it’s yours forever</p>
          <div className="flex flex-col justify-center items-center mt-6 gap-2">
                <p className="font-medium">You don’t need permission to build your empire.
You just need the blueprint</p>
               <p className="text-red-500 font-semibold text-2xl">Grab the $100K Digital Stack now — $95 today (goes up soon)</p>
          </div>
        </div>
      </div>

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
        <a href="/terms-and-conditions" className="underline ml-2" rel="noopener noreferrer">Privacy Policy</a> |
        Powered by VXP – Creating the Future with Intelligence™
      </p>
    </div>
  );
};

export default EbookLanding;
