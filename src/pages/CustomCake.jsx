import { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './CustomCake.css';

const CustomCake = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    cakeSize: '',
    flavor: '',
    layers: '',
    frosting: '',
    filling: '',
    color: '',
    theme: '',
    message: '',
    specialRequests: '',
    budget: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build WhatsApp message
    let message = `Hi Tosha Bakery! 👋\n\n`;
    message += `I'd like to order a custom cake!\n\n`;
    
    message += `📋 *CONTACT INFORMATION*\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• Event Date: ${formData.eventDate}\n\n`;
    
    message += `🎂 *CAKE DETAILS*\n`;
    message += `• Size: ${formData.cakeSize}\n`;
    message += `• Layers: ${formData.layers}\n`;
    message += `• Flavor: ${formData.flavor}\n`;
    message += `• Frosting: ${formData.frosting}\n`;
    if (formData.filling) message += `• Filling: ${formData.filling}\n`;
    if (formData.budget) message += `• Budget: ${formData.budget}\n`;
    message += `\n`;
    
    message += `🎨 *DESIGN PREFERENCES*\n`;
    if (formData.color) message += `• Color Scheme: ${formData.color}\n`;
    if (formData.theme) message += `• Theme: ${formData.theme}\n`;
    if (formData.message) message += `• Message on Cake: "${formData.message}"\n`;
    message += `\n`;
    
    if (formData.specialRequests) {
      message += `📝 *SPECIAL REQUESTS*\n`;
      message += `${formData.specialRequests}\n\n`;
    }
    
    if (imageFile) {
      message += `📷 I have an inspiration image that I'll share with you.\n\n`;
    }
    
    message += `Looking forward to hearing from you! 😊`;
    
    // Open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919457649813?text=${encodedMessage}`, '_blank');
    
    // Show success message
    setSubmitStatus({
      type: 'success',
      message: 'Opening WhatsApp... Please send the message to complete your order!',
    });
  };

  return (
    <div className="custom-cake-page">
      <div className="custom-cake-container">
        <div className="custom-cake-header">
          <h1>Order Your Custom Cake</h1>
          <p>
            Create the perfect cake for your special occasion. Fill out the form below,
            and our bakers will bring your vision to life!
          </p>
        </div>

        <form className="custom-cake-form" onSubmit={handleSubmit}>
          {/* Contact Information */}
          <section className="form-section">
            <h2>Contact Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Cake Details */}
          <section className="form-section">
            <h2>Cake Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cakeSize">Cake Size *</label>
                <select
                  id="cakeSize"
                  name="cakeSize"
                  value={formData.cakeSize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Size</option>
                  <option value="6-inch">6 inch (8-10 servings)</option>
                  <option value="8-inch">8 inch (16-20 servings)</option>
                  <option value="10-inch">10 inch (30-40 servings)</option>
                  <option value="12-inch">12 inch (50-60 servings)</option>
                  <option value="multi-tier">Multi-tier</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="layers">Number of Layers *</label>
                <select
                  id="layers"
                  name="layers"
                  value={formData.layers}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Layers</option>
                  <option value="1">1 Layer</option>
                  <option value="2">2 Layers</option>
                  <option value="3">3 Layers</option>
                  <option value="4+">4+ Layers</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="flavor">Cake Flavor *</label>
                <select
                  id="flavor"
                  name="flavor"
                  value={formData.flavor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Flavor</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="chocolate">Chocolate</option>
                  <option value="red-velvet">Red Velvet</option>
                  <option value="carrot">Carrot</option>
                  <option value="lemon">Lemon</option>
                  <option value="strawberry">Strawberry</option>
                  <option value="other">Other (specify in notes)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="frosting">Frosting Type *</label>
                <select
                  id="frosting"
                  name="frosting"
                  value={formData.frosting}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Frosting</option>
                  <option value="buttercream">Buttercream</option>
                  <option value="cream-cheese">Cream Cheese</option>
                  <option value="whipped-cream">Whipped Cream</option>
                  <option value="fondant">Fondant</option>
                  <option value="ganache">Ganache</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="filling">Filling</label>
                <input
                  type="text"
                  id="filling"
                  name="filling"
                  value={formData.filling}
                  onChange={handleChange}
                  placeholder="e.g., Raspberry jam, Chocolate mousse"
                />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-300">$200 - $300</option>
                  <option value="300+">$300+</option>
                </select>
              </div>
            </div>
          </section>

          {/* Design Preferences */}
          <section className="form-section">
            <h2>Design Preferences</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="color">Color Scheme</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="e.g., Pink and gold"
                />
              </div>
              <div className="form-group">
                <label htmlFor="theme">Theme</label>
                <input
                  type="text"
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  placeholder="e.g., Birthday, Wedding, Baby Shower"
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message on Cake</label>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g., Happy Birthday Sarah!"
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="specialRequests">Special Requests / Additional Details</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about any specific design elements, dietary restrictions, or special requirements..."
              />
            </div>
          </section>

          {/* Image Upload */}
          <section className="form-section">
            <h2>Inspiration Image (Optional)</h2>
            <div className="image-upload">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="image" className="upload-label">
                <FiUpload />
                <span>Upload inspiration image</span>
              </label>
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" />
                </div>
              )}
            </div>
          </section>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              <FaWhatsapp /> Order on WhatsApp
            </button>
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div className={`status-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CustomCake;

