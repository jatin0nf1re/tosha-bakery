import { useState } from 'react';
import { FaStar, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import customerPhoto1 from '../assets/customer-photos/1.JPEG';
import customerPhoto2 from '../assets/customer-photos/2.JPG';
import customerPhoto3 from '../assets/customer-photos/3.jpg';
import customerPhoto4 from '../assets/customer-photos/4.jpg';
import customerPhoto5 from '../assets/customer-photos/5.jpg';
import customerPhoto6 from '../assets/customer-photos/6.jpg';
import './Testimonials.css';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Absolutely loved the Red Velvet Cake! It was fresh, delicious, and beautifully decorated. Perfect for our anniversary celebration!",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80",
      date: "December 2025"
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      text: "Ordered brownies for a corporate event. Everyone loved them! Great quality and timely delivery. Highly recommend!",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&q=80",
      date: "November 2025"
    },
    {
      id: 3,
      name: "Anjali Patel",
      rating: 5,
      text: "The custom cake for my daughter's birthday was beyond our expectations! Beautiful design and tasted amazing. Thank you!",
      image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&q=80",
      date: "December 2025"
    }
  ];

  // Sample customer photos
  const customerPhotos = [
    {
      id: 1,
      image: customerPhoto1,
      caption: "Birthday celebration cake"
    },
    {
      id: 2,
      image: customerPhoto2,
      caption: "Anniversary special"
    },
    {
      id: 3,
      image: customerPhoto3,
      caption: "Cupcakes for office party"
    },
    {
      id: 4,
      image: customerPhoto4,
      caption: "Wedding dessert table"
    },
    {
      id: 5,
      image: customerPhoto5,
      caption: "Brownie box"
    },
    {
      id: 6,
      image: customerPhoto6,
      caption: "Custom cake design"
    }
  ];

  const handleSharePhoto = () => {
    const message = encodeURIComponent(
      `Hi Tosha Bakery! 👋\n\n` +
      `I'd love to share a photo of your amazing product I ordered!\n\n` +
      `Can I send it to you? 😊`
    );
    window.open(`https://wa.me/919457649813?text=${message}`, '_blank');
  };

  const handleShareTestimonial = () => {
    const message = encodeURIComponent(
      `Hi Tosha Bakery! 👋\n\n` +
      `I'd like to share my experience with your products!\n\n` +
      `[Please share your feedback here] 😊`
    );
    window.open(`https://wa.me/919457649813?text=${message}`, '_blank');
  };

  const handleFollowInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open('instagram://user?username=tosha.bakery', '_blank');
      setTimeout(() => {
        window.open('https://ig.me/m/tosha.bakery', '_blank');
      }, 500);
    } else {
      window.open('https://instagram.com/tosha.bakery', '_blank');
    }
  };

  return (
    <div className="testimonials-page">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h1>Customer Love ❤️</h1>
          <p>See what our happy customers are saying and sharing!</p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            📝 Testimonials
          </button>
          <button
            className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            📸 Customer Photos
          </button>
        </div>

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="testimonials-content">
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Share Testimonial CTA */}
            <div className="share-cta">
              <h3>Had a great experience?</h3>
              <p>We'd love to hear from you! Share your feedback with us.</p>
              <button onClick={handleShareTestimonial} className="share-btn whatsapp">
                <FaWhatsapp /> Share Your Feedback
              </button>
            </div>
          </div>
        )}

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="photos-content">
            <div className="photos-grid">
              {customerPhotos.map((photo) => (
                <div key={photo.id} className="photo-card">
                  <img src={photo.image} alt={photo.caption} />
                  <div className="photo-overlay">
                    <p>{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Share Photo CTA */}
            <div className="share-cta">
              <h3>Share Your Sweet Moments! 📸</h3>
              <p>Tag us or send your photos via WhatsApp or Instagram!</p>
              <div className="share-buttons">
                <button onClick={handleSharePhoto} className="share-btn whatsapp">
                  <FaWhatsapp /> Send via WhatsApp
                </button>
                <button onClick={handleFollowInstagram} className="share-btn instagram">
                  <FaInstagram /> Follow & Tag Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;

