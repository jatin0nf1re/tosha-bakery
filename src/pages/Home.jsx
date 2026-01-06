import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured);

  const handleFestiveOrder = () => {
    const message = encodeURIComponent(
      `Hi Tosha Bakery! 👋\n\n` +
      `I'm interested in placing a bulk order for an upcoming festival/celebration.\n\n` +
      `Could you please share details about:\n` +
      `• Bulk order discounts\n` +
      `• Available quantities\n` +
      `• Delivery options\n` +
      `• Custom packaging\n\n` +
      `Thank you! 😊`
    );
    window.open(`https://wa.me/919457649813?text=${message}`, '_blank');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Tosha Bakery</h1>
          <p className="hero-subtitle">
            Freshly baked goods made with love and the finest ingredients
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              View Menu
            </Link>
            <Link to="/custom-cake" className="btn btn-secondary">
              Order Custom Cake
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80"
            alt="Bakery showcase"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Since 2020, Tosha Bakery has been bringing joy to our community through
            the art of baking. Founded by Saloni Singh, every morning we start fresh, 
            creating delicious treats using traditional recipes and the finest ingredients. 
            From our classic croissants to custom celebration cakes, each item is crafted
            with passion and attention to detail.
          </p>
          <div className="features">
            <div className="feature">
              <h3>🌾 Fresh Ingredients</h3>
              <p>We source locally and use only the finest ingredients</p>
            </div>
            <div className="feature">
              <h3>👨‍🍳 Expert Bakers</h3>
              <p>Our team brings years of expertise and passion</p>
            </div>
            <div className="feature">
              <h3>🎂 Custom Orders</h3>
              <p>Create your dream cake for any special occasion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Try our most popular items</p>
        </div>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="section-footer">
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Festive Orders Section */}
      <section className="festive-section">
        <div className="festive-content">
          <div className="festive-text">
            <h2>🎉 Planning a Big Celebration?</h2>
            <p>
              Make your festivals and special occasions memorable with our bulk orders! 
              Whether it's Diwali, Christmas, weddings, or corporate events, we've got you covered.
            </p>
            <ul className="festive-features">
              <li>✨ Special bulk order discounts</li>
              <li>📦 Custom packaging available</li>
              <li>🚚 Reliable delivery for large orders</li>
              <li>🎨 Personalization options</li>
            </ul>
            <button onClick={handleFestiveOrder} className="btn btn-festive">
              <FaWhatsapp /> Contact for Bulk Orders
            </button>
          </div>
          <div className="festive-image">
            <img
              src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80"
              alt="Festive celebration"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Something Special?</h2>
          <p>
            Let us create a custom cake that perfectly matches your vision.
            Our bakers work with you to design the cake of your dreams.
          </p>
          <Link to="/custom-cake" className="btn btn-light">
            Order Custom Cake
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

