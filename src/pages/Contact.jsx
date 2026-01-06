import { useState } from 'react';
import { FiPhone, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hi Tosha Bakery! 👋\n\n` +
      `I have a question about your products/services.\n\n` +
      `Thank you! 😊`
    );
    window.open(`https://wa.me/919457649813?text=${message}`, '_blank');
  };

  const handleInstagramMessage = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // In production, this would call your backend API
      console.log('Contact Form:', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Uncomment below when backend is ready:
      // const response = await apiService.submitContactForm(formData);

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you! Reach out with any questions or concerns.</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <h3>Call Us</h3>
                <p>(+91) 94576 49813</p>
                <p>Mon-Fri: 7am - 8pm</p>
              </div>

              <div className="contact-card clickable" onClick={handleWhatsAppMessage}>
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <h3>WhatsApp</h3>
                <p>+91 94576 49813</p>
                <p>Quick response</p>
              </div>

              <div className="contact-card clickable" onClick={handleInstagramMessage}>
                <div className="contact-icon">
                  <FaInstagram />
                </div>
                <h3>Instagram</h3>
                <p>@tosha.bakery</p>
                <p>DM us anytime</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiClock />
                </div>
                <h3>Opening Hours</h3>
                <p>Mon-Fri: 7am - 8pm</p>
                <p>Sat-Sun: 8am - 9pm</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4398.563113120644!2d77.9700368!3d27.205939599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471dc580807e2479%3A0xf4432e0b7a9a0f34!2sTosha%20Bakery!5e1!3m2!1sen!2sin!4v1767617804624!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tosha Bakery Location"
              ></iframe>
              <p className="map-address">
                📍 Saptrishi Apartments, Sector 16B, Avas Vikas Colony, Sikandra, Agra
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus.message && (
                <div className={`status-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

