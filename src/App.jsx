import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/digital-shop" element={<DigitalShop />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;