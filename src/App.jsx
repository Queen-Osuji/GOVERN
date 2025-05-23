import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import DigitalShop from './pages/DigitalShopPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header'; // Import the Header component
import { useLocation } from 'react-router-dom'; // Import useLocation

function App() {
 const location = useLocation(); // Get the current location

 return (
  <div className="bg-black"> 
        <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/digital-shop" element={<DigitalShop />} />
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>
 );
}

export default App;