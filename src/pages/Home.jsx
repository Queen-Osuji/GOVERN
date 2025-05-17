// src/pages/Home.jsx
import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Code2, Palette } from 'lucide-react';
import {Button} from '../components/ui/Button'

const services = [
  {
    title: 'AI Algorithm Kits',
    icon: <Rocket className="text-purple-400 w-6 h-6" />,
    desc: 'Sellable ML models and scripts with guides and demos.',
  },
  {
    title: 'Web Development',
    icon: <Code2 className="text-purple-400 w-6 h-6" />,
    desc: 'Beautiful, responsive websites that convert and impress.',
  },
  {
    title: 'Graphic Design & Branding',
    icon: <Palette className="text-purple-400 w-6 h-6" />,
    desc: 'Logos, templates, brand kits, and stunning visuals.',
  },
]

const testimonials = [
  {
    name: 'Adaeze I.',
    role: 'Startup Founder',
    feedback:
      'Working with VXP changed everything. The AI tools alone tripled my conversion rate. Queen Osuji is a genius.',
  },
  {
    name: 'Daniel K.',
    role: 'Freelance Designer',
    feedback:
      'The branding kit was beyond premium. I felt seen, understood, and empowered — all from one service!',
  },
  {
    name: 'Lola A.',
    role: 'Digital Product Coach',
    feedback:
      'I sold 100+ copies of my ebook in 1 week after using the tools from the AI Store. The results are real.',
  },
]

export default function Home() {
  return (
    <div className="bg-[#080808] text-white min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-20 px-6 md:px-16 lg:px-32">
        {/* a cinematic video is to be playing here */}
        <section className="text-center py-20 my-60">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent">
            Empowering Tomorrow’s Digital Leaders
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            VXP and Verve deliver elite digital services and AI solutions designed to transform your business and amplify your brand.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#services" className="px-6 py-3 bg-purple-600 rounded-2xl text-white shadow-lg hover:bg-purple-700 transition-all">
              Explore Services
            </a>
            <a href="#shop" className="px-6 py-3 border border-purple-600 text-purple-400 rounded-2xl hover:bg-purple-800 hover:text-white transition-all">
              Shop eBooks
            </a>
          </div>
        </section>

        {/* <section id="vision" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
          <p className="text-gray-400 max-w-3xl">
            At VXP, we believe in a future where African talent and innovation lead the digital frontier. Our sub-brand Verve pushes this mission further with algorithmic products and AI consultancy tailored for a tech-forward world.
          </p>
        </section> */}

        {/* about preview */}
        <section className="py-16 px-4 md:px-10 lg:px-20 text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">
          About Queen Osuji & VXP
        </h2>
        <p className="text-gray-400 mb-6">
          Meet the visionary behind VXP and Verve. As a digital creator, AI strategist, and women’s empowerment leader, Queen Osuji is building the future one powerful idea at a time.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-purple-400 hover:underline font-medium text-sm"
        >
          Learn More <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>

    {/* signature services */}
    <section className="py-20 px-4 md:px-10 lg:px-20 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300">Signature Services</h2>
        <p className="text-gray-400 mt-2">Explore our most in-demand solutions</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-[#1a1a1d] border border-purple-700 p-6 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-4">{service.icon}<h3 className="text-lg font-semibold">{service.title}</h3></div>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium transition"
        >
          See All Services
        </Link>
      </div>
    </section>

    {/* testimonials */}
    <section className="py-20 px-4 md:px-10 lg:px-20  text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300">Success Story</h2>
        <p className="text-gray-400 mt-2">What people are saying about VXP & Verve</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-[#1a1a1d] p-6 rounded-2xl border border-purple-700 shadow hover:shadow-md transition-all"
          >
            <p className="text-gray-300 italic mb-4">“{item.feedback}”</p>
            <div className="text-sm font-semibold text-purple-400">{item.name}</div>
            <div className="text-xs text-gray-500">{item.role}</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Hero CTA */}
    <section className="bg-gradient-to-br from-purple-900 via-black to-purple-950 py-50 my-30 px-4 md:px-10 lg:px-20 text-center text-gray-100 rounded-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-purple-300">
          Ready to Build with Queen Osuji?
        </h2>
        <p className="text-gray-400 mb-8">
          Book a strategy call, custom training, or creative project. Let’s activate your next level — together.
        </p>
        <Button variant="primary" className="text-lg px-6 py-3">
          Book Now
        </Button>
      </motion.div>
    </section>
      </main>

      <Footer />
    </div>
  );
}
