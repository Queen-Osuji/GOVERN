import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import Home from './pages/Home';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import Header from './components/Header';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Default volume
    }
  }, []);

  const togglePlayPause = () => {
    console.log("togglePlayPause called");
    if (audioRef.current) {
      console.log("togglePlayPause called. isPlaying (before):", isPlaying);
      console.log("togglePlayPause called. audioRef.current:", audioRef.current);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(prevState => !prevState);
      console.log("setIsPlaying called. isPlaying (after):", !isPlaying);
    }
  };

 console.log("App component rendering. isPlaying:", isPlaying);
 return (
  <div className="bg-[#080808] min-h-screen"> 
    <audio ref={audioRef} src="/audio/background_audio.mp3" loop />
    <Header isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/digital-shop" element={<DigitalShop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  </div>
 );
}
export default App;