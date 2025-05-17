import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Services from './pages/Services';
import AiStore from './pages/AiStore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/ai-store' element={<AiStore />} />
      </Routes>
    </Router>
  );
}

export default App;
