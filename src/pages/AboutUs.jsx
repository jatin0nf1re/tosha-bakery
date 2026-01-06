import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hi Tosha Bakery! 👋\n\n` +
      `I'd like to know more about your products and services.\n\n` +
      `Thank you! 😊`
    );
    window.open(`https://wa.me/919457649813?text=${message}`, '_blank');
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Tosha Bakery</h1>
          <p>Where passion meets perfection in every bite</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-image">
            <img
              src="src/assets/founder.jpg"
              alt="Founder of Tosha Bakery"
            />
            <div className="founder-quote">
              "Baking is not just my profession, it's my passion and my way of spreading happiness."
            </div>
          </div>
          <div className="founder-content">
            <h2>Meet Our Founder</h2>
            <h3 className="founder-name">Saloni Singh</h3>
            <p className="founder-title">Founder & Head Baker</p>
            
            <div className="founder-story">
              <p>
                Saloni's journey into the world of baking began in her grandmother's kitchen, 
                where she learned that the secret ingredient to any recipe is love. What started 
                as a childhood passion transformed into a lifelong dream when she founded 
                Tosha Bakery in 2020.
              </p>
              <p>
                With a degree in Culinary Arts and years of experience training under renowned 
                pastry chefs, Saloni brings both traditional techniques and modern innovation to 
                every creation. Her vision was simple yet powerful: to create a bakery where 
                quality, creativity, and customer satisfaction come first.
              </p>
              <p>
                Today, Tosha Bakery stands as a testament to her dedication and passion. Every 
                product that leaves our kitchen carries her commitment to excellence and her 
                belief that baked goods should not only taste amazing but also create lasting 
                memories.
              </p>
            </div>

            <div className="founder-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2020</span>
                <span className="highlight-label">Founded</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">1000+</span>
                <span className="highlight-label">Happy Customers</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">50+</span>
                <span className="highlight-label">Custom Recipes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <h3>The Beginning</h3>
              <p>
                In 2020, during uncertain times, Tosha decided to follow her heart and turn 
                her passion into a business. What began as home-baked treats for friends and 
                family quickly grew into something much bigger. Word spread about the delicious 
                cakes, cookies, and pastries, and soon Tosha Bakery was born.
              </p>
              
              <h3>Our Philosophy</h3>
              <p>
                At Tosha Bakery, we believe in three core principles: Quality, Creativity, and 
                Care. We use only the finest ingredients, sourced locally whenever possible. 
                Each recipe is carefully crafted and perfected, combining traditional techniques 
                with innovative flavors. But most importantly, we put our heart into everything 
                we bake.
              </p>

              <h3>Growing Together</h3>
              <p>
                Over the years, we've grown from a small home kitchen to a beloved local bakery, 
                but our commitment has remained the same. We're not just baking cakes and cookies; 
                we're creating moments of joy for birthdays, weddings, celebrations, and everyday 
                treats. Our customers have become part of our family, and their smiles are what 
                keep us going.
              </p>
            </div>
            
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80"
                alt="Tosha Bakery kitchen"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>What We Stand For</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌾</div>
            <h3>Quality Ingredients</h3>
            <p>
              We use only the finest, freshest ingredients sourced from trusted suppliers. 
              No compromises, no shortcuts – just pure, quality ingredients in every bite.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">👨‍🍳</div>
            <h3>Expert Craftsmanship</h3>
            <p>
              Our team of skilled bakers brings years of experience and training. Every 
              product is handcrafted with precision, care, and attention to detail.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Made with Love</h3>
            <p>
              We believe that love is the secret ingredient. Every recipe is prepared with 
              passion and a genuine desire to bring joy to our customers.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">🎨</div>
            <h3>Creative Innovation</h3>
            <p>
              While honoring traditional baking methods, we're not afraid to innovate. 
              We constantly experiment with new flavors and designs to surprise and delight.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Customer First</h3>
            <p>
              Your satisfaction is our priority. We listen to your needs, customize to your 
              preferences, and ensure every order exceeds expectations.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainable Practices</h3>
            <p>
              We're committed to sustainability – from sourcing local ingredients to using 
              eco-friendly packaging. We care about our planet and our community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Join Our Sweet Journey</h2>
          <p>
            Whether you're celebrating a special occasion or just craving something delicious, 
            we're here to make your day a little sweeter.
          </p>
          <div className="about-cta-buttons">
            <Link to="/products" className="btn btn-primary">
              View Our Menu
            </Link>
            <button onClick={handleWhatsAppContact} className="btn btn-primary">
              <FaWhatsapp /> Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

