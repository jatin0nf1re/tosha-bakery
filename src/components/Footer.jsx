import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Tosha Bakery</h3>
          <p className="footer-description">
            Crafting delicious baked goods with love since 2020. 
            Fresh ingredients, traditional recipes, and a passion for perfection.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/saloni.singh.177968" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="https://www.instagram.com/tosha.bakery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/custom-cake">Custom Cakes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FiMapPin />
              <span>Sector 16B, Avas Vikas Colony, Sikandra, Agra</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>(+91) 94576 49813</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>hello@toshabakery.in</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Opening Hours</h4>
          <div className="opening-hours">
            <p><strong>Monday - Friday:</strong> 7am - 8pm</p>
            <p><strong>Saturday:</strong> 8am - 9pm</p>
            <p><strong>Sunday:</strong> 8am - 6pm</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tosha Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

