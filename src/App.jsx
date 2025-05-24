import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
 return (
  <div className="bg-black"> 
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/digital-shop" element={<DigitalShop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
 );
}
export default App;