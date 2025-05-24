
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
 const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: '1. What is VXP?',
      answer: 'VXP (Versatile Expert) is a digital platform led by Queen Osuji, offering powerful, course-style eBooks, expert consultations, and innovation-driven solutions that empower individuals and businesses. We\'re here to simplify your path to success with clarity, speed, and trust.'
    },
    {
      question: '2. How are VXP eBooks different from others?',
      answer: 'VXP eBooks are not just “books” — they’re compact courses packed with real-world examples, step-by-step guidance, and powerful insights. We cut out the noise, save your data, and skip long, confusing tutorials so you can take immediate action.'
    },
    {
      question: '3. Where can I read your blog or find updates?',
      answer: 'You can explore expert insights, tech breakdowns, product updates, and community stories on our official blog at:\n👉 blog.vxp-website.vercel.app'
    },
    {
      question: '4. Who is “AI Symbiosis” for?',
      answer: 'AI Symbiosis is for anyone ready to use artificial intelligence to gain an edge — creators, freelancers, tech enthusiasts, and entrepreneurs. It’s rated 5 stars and designed to be easy, practical, and deeply transformative.'
    },
    {
      question: '5. Can I get personal support or consultation?',
      answer: 'Yes. VXP offers direct consultation to help you choose your learning path. We ask smart, strategic questions to understand you — even if you’re unsure or feeling stuck. Lazy start? We’ll still help you win.'
    },
    {
      question: '6. Do I need any tech skills to use your eBooks?',
      answer: 'Nope. VXP eBooks are written for beginners and up — with clear language, real examples, and step-by-step instructions. No jargon. Just progress.'
    },
    {
      question: '7. What formats are your digital products in?',
      answer: 'Our main products are in PDF, making them easy to read on any device — phone, laptop, or tablet — without large downloads or streaming.'
    },
      {
      question: '8. Do you offer refunds?',
      answer: 'Due to the digital nature of our products, all sales are final. However, we’re committed to your success , if you have issues, contact us for solutions or bonuses that suit your needs.'
    }
  ]

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-10 md:mt-20 mx-auto max-w-xl md:max-w-4xl px-4 md:px-6 mb-10 md:mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-300">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-4">
          <div className="flex justify-between items-center cursor-pointer text-white hover:text-blue-400 transition-colors duration-200" onClick={() => handleAccordionClick(index)}>
            <h3 className="text-lg font-semibold">{item.question}</h3>
            {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          <div className={`mt-2 text-gray-300 overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="whitespace-pre-line">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;