import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import Header from './components/Header';
import Home from './pages/Home'; // Make sure to import Home component
import GetStartedPage from './pages/GetStartedPage';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
 if (audioRef.current) {
 if (isPlaying) {
 audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      } else {
 audioRef.current.pause();
      }
    } else {
      console.warn("Audio element not found."); // Add a warning if audioRef.current is null
    }
  }, [isPlaying]);

 return (
  <div className="bg-[#080808] min-h-screen"> 
    <audio ref={audioRef} src="/audio/background_audio.mp3" loop />
    <Header isPlaying={isPlaying} togglePlay={togglePlay} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/digital-shop" element={<DigitalShop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
    </Routes>
  </div>
 );
}
export default App;