import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
 return (
  <div className="bg-black"> 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/digital-shop" element={<DigitalShop />} />
    <Route path="/getstarted" element={<GetStarted />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>
 );
}

export default App;