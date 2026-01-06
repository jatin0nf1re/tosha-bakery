import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import CustomCake from './pages/CustomCake';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  return (
    <Router basename="/tosha-bakery">
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route path="/custom-cake" element={<CustomCake />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
