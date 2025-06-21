import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import AIModelsPage from './pages/AIModelsPage'; // Import the AIModelsPage component
import Header from './components/Header';
import Home from './pages/Home';
import EbookLanding from './pages/EbookLanding'

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
      <Route path="/ai-models" element={<AIModelsPage />} /> 
      <Route path="/ebook-bundle" element={<EbookLanding />} />
    </Routes>
  </div>
 );
}
export default App;