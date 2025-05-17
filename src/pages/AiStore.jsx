import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import NavBar from '../components/navbar';
import Footer from '../components/footer';

function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary:
      'bg-white text-purple-700 border border-purple-600 hover:bg-purple-100 focus:ring-purple-500',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className} px-4 py-2`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function AIStore() {
  const products = [
    {
      title: 'AI Customer Profiler',
      desc: 'A powerful script that segments and profiles your ideal clients using behavior, preferences, and purchase history.',
      price: '$79',
    },
    {
      title: 'NLP Resume Analyzer',
      desc: 'HR automation tool that scans, ranks, and scores resumes with NLP-powered insights.',
      price: '$59',
    },
    {
      title: 'Ecommerce Upsell Recommender',
      desc: 'Boost cart value by suggesting high-converting product combinations using smart recommendations.',
      price: '$99',
    },
    {
      title: 'Freelancer Earnings Predictor',
      desc: 'Predict and plan monthly income using client type, season, and offer history.',
      price: '$49',
    },
    {
      title: 'AI Email Subject Generator',
      desc: 'Generates 10 subject line variants using tone, intent, and brand voice — instantly.',
      price: '$29',
    },
    {
      title: 'PDF Pricing Calculator',
      desc: 'Smart form for calculating ebook and template pricing tiers with licensing logic.',
      price: '$39',
    },
  ]

  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <NavBar/>

    <main className="flex-grow pt-20 px-6 md:px-16 lg:px-32 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold py-4 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent mb-2"
      >
        AI Algorithm Store
      </motion.h2>
      <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto">
        Explore our premium collection of plug-and-play AI kits — built for entrepreneurs, freelancers, and tech-forward creators.
      </p>
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#1a1a1d] p-6 border border-purple-700 rounded-2xl shadow hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-200 mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-purple-400 font-semibold text-lg">{product.price}</span>
              <Button variant="primary" className="gap-2 text-sm">
                <ShoppingCart size={16} /> Buy Now
              </Button>
            </div>
          </motion.div>
        ))}
      </section>
    </main>

    <Footer/>
    </div>
  )
}
