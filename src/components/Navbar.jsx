import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import toshaLogo from '/tosha-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/custom-cake', label: 'Custom Cakes' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919457649813', '_blank');
  };

  const handleInstagramClick = () => {
    // Instagram doesn't support pre-filled messages (platform limitation)
    // This opens Instagram Direct Messages to your account
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Try to open Instagram DM directly on mobile
      window.open('instagram://user?username=tosha.bakery', '_blank');
      // Fallback to web if app not installed
      setTimeout(() => {
        window.open('https://ig.me/m/tosha.bakery', '_blank');
      }, 500);
    } else {
      // Desktop: Open Instagram profile
      window.open('https://instagram.com/tosha.bakery', '_blank');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={toshaLogo} alt="Tosha Bakery" className="logo-image" />
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="social-button whatsapp"
            onClick={handleWhatsAppClick}
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp />
          </button>

          <button
            className="social-button instagram"
            onClick={handleInstagramClick}
            aria-label="Follow on Instagram"
          >
            <FaInstagram />
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

