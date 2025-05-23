import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header'; // Import the Header component
import { useLocation } from 'react-router-dom'; // Import useLocation

function App() {
 const location = useLocation(); // Get the current location

 return (
  <div className="bg-black"> 
 {!location.pathname.includes('/getstarted') && <Header />} {/* Conditionally render Header */}
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