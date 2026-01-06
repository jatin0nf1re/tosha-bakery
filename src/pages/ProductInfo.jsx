import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { products } from '../data/products';
import './ProductInfo.css';

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedOptions, setSelectedOptions] = useState({
    eggOption: 'egg',
    glutenOption: 'gluten',
    sizeOption: '',
  });
  
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (!product) return;
    
    // Find the size option with the lowest price (default selection)
    let defaultSize = '';
    if (product.sizeOptions && product.sizeOptions.length > 0) {
      const lowestPriceSize = product.sizeOptions.reduce((min, current) => 
        current.price < min.price ? current : min
      );
      defaultSize = lowestPriceSize.name;
    }
    
    // Set default options based on availability
    const defaultOptions = {
      eggOption: product.dietaryOptions?.egg ? 'egg' : 'eggless',
      glutenOption: product.dietaryOptions?.gluten ? 'gluten' : 'glutenFree',
      sizeOption: defaultSize,
    };
    
    setSelectedOptions(defaultOptions);
  }, [product]);

  if (!product) {
    return (
      <div className="product-info-page">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/products')} className="back-btn">
            <FiArrowLeft /> Back to Products
          </button>
        </div>
      </div>
    );
  }

  const toggleAddOn = (addOnName) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnName)
        ? prev.filter((item) => item !== addOnName)
        : [...prev, addOnName]
    );
  };

  // Carousel navigation
  const productImages = product?.images || [product?.image];
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const calculateTotal = () => {
    // Get base price from selected size or product base price
    let basePrice = product.price;
    
    if (product.sizeOptions && product.sizeOptions.length > 0) {
      const selectedSizeObj = product.sizeOptions.find(
        size => size.name === selectedOptions.sizeOption
      );
      if (selectedSizeObj) {
        basePrice = selectedSizeObj.price;
      }
    }
    
    // Calculate add-ons total
    let addOnPrice = 0;
    if (product.addOns && product.addOns.length > 0) {
      selectedAddOns.forEach(addOnName => {
        const addOn = product.addOns.find(a => a.name === addOnName);
        if (addOn) {
          addOnPrice += addOn.price;
        }
      });
    }
    
    return (basePrice + addOnPrice).toFixed(2);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi Tosha Bakery! 👋\n\n` +
      `I'm interested in ordering "${product.name}"\n\n` +
      `My preferences:\n` +
      `${selectedOptions.sizeOption ? `• Size: ${selectedOptions.sizeOption}\n` : ''}` +
      `• Egg: ${selectedOptions.eggOption === 'egg' ? 'With Egg' : 'Eggless'}\n` +
      `• Gluten: ${selectedOptions.glutenOption === 'gluten' ? 'Regular' : 'Gluten-Free'}\n` +
      `${selectedAddOns.length > 0 ? `• Add-ons: ${selectedAddOns.join(', ')}\n` : ''}` +
      `\nBase Price: ₹${calculateTotal()}\n\n` +
      `Could you please share more details about availability, quantity options, and delivery? Thank you! 😊`
    );
    window.open(`https://wa.me/919457649813?text=${message}`, '_blank');
  };

  const handleInstagramOrder = () => {
    // Instagram doesn't support pre-filled messages (platform limitation)
    // This opens Instagram Direct Messages to your account
    // Mobile app: Opens DM directly
    // Desktop: Opens profile (user clicks "Message")
    
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
    <div className="product-info-page">
      <div className="product-info-container">
        <div className="product-detail-grid">
          

          {/* Product Image Carousel */}
          <div className="product-image-section">
            <div className="image-carousel">
              <img 
                src={productImages[currentImageIndex]} 
                alt={`${product.name} - Image ${currentImageIndex + 1}`} 
                className="carousel-image"
              />
              
              {productImages.length > 1 && (
                <>
                  {/* Navigation Arrows */}
                  <button 
                    className="carousel-btn carousel-btn-prev" 
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <FiChevronLeft />
                  </button>
                  <button 
                    className="carousel-btn carousel-btn-next" 
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <FiChevronRight />
                  </button>

                  {/* Dot Indicators */}
                  <div className="carousel-indicators">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details-section">
            <div className="product-header">
              <h1>{product.name}</h1>
              {/* <p className="product-price">₹{product.price.toFixed(2)}</p> */}
            </div>

            <p className="product-description">{product.description}</p>

            {/* Size Options */}
            {product.sizeOptions && product.sizeOptions.length > 0 && (
              <div className="customization-section">
                <h3>Choose Size</h3>
                <div className="option-group">
                  <div className="option-buttons">
                    {product.sizeOptions.map((size) => (
                      <button
                        key={size.name}
                        className={`option-btn ${
                          selectedOptions.sizeOption === size.name ? 'active' : ''
                        }`}
                        onClick={() =>
                          setSelectedOptions({ ...selectedOptions, sizeOption: size.name })
                        }
                      >
                        <span className="size-name">{size.name}</span>
                        <span className="size-price">₹{size.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Dietary Options */}
            {product.dietaryOptions && (
              <div className="customization-section">
                <h3>Dietary Options</h3>
                
                <div className="option-group">
                  <label className="option-label">Egg Preference:</label>
                  <div className="option-buttons">
                    {product.dietaryOptions.egg && (
                      <button
                        className={`option-btn ${
                          selectedOptions.eggOption === 'egg' ? 'active' : ''
                        }`}
                        onClick={() =>
                          setSelectedOptions({ ...selectedOptions, eggOption: 'egg' })
                        }
                      >
                        With Egg
                      </button>
                    )}
                    {product.dietaryOptions.eggless && (
                      <button
                        className={`option-btn ${
                          selectedOptions.eggOption === 'eggless' ? 'active' : ''
                        }`}
                        onClick={() =>
                          setSelectedOptions({ ...selectedOptions, eggOption: 'eggless' })
                        }
                      >
                        Eggless
                      </button>
                    )}
                  </div>
                </div>

                <div className="option-group">
                  <label className="option-label">Gluten Preference:</label>
                  <div className="option-buttons">
                    {product.dietaryOptions.gluten && (
                      <button
                        className={`option-btn ${
                          selectedOptions.glutenOption === 'gluten' ? 'active' : ''
                        }`}
                        onClick={() =>
                          setSelectedOptions({ ...selectedOptions, glutenOption: 'gluten' })
                        }
                      >
                        Regular
                      </button>
                    )}
                    {product.dietaryOptions.glutenFree && (
                      <button
                        className={`option-btn ${
                          selectedOptions.glutenOption === 'glutenFree' ? 'active' : ''
                        }`}
                        onClick={() =>
                          setSelectedOptions({
                            ...selectedOptions,
                            glutenOption: 'glutenFree',
                          })
                        }
                      >
                        Gluten Free
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Add-ons */}
            {product.addOns && product.addOns.length > 0 && (
              <div className="customization-section">
                <h3>Add-ons</h3>
                <p className="addon-note">Select any extras to customize your order</p>
                <div className="addon-grid">
                  {product.addOns.map((addOn) => (
                    <button
                      key={addOn.name}
                      className={`addon-btn ${
                        selectedAddOns.includes(addOn.name) ? 'selected' : ''
                      }`}
                      onClick={() => toggleAddOn(addOn.name)}
                    >
                      {selectedAddOns.includes(addOn.name) && (
                        <FiCheck className="check-icon" />
                      )}
                      <span className="addon-name">{addOn.name}</span>
                      {addOn.price > 0 && (
                        <span className="addon-price">+₹{addOn.price}</span>
                      )}
                      {addOn.price === 0 && (
                        <span className="addon-price">Free</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Floating Bottom Bar */}
        <div className="floating-bottom-bar">
          <div className="bottom-bar-content">
            <div className="bottom-bar-price">
              <span className="price-label">Total Price</span>
              <span className="price-value">₹{calculateTotal()}</span>
            </div>
            <div className="bottom-bar-buttons">
              <button
                className="whatsapp-order-btn-bottom"
                onClick={handleWhatsAppOrder}
              >
                <FaWhatsapp /> Order on WhatsApp
              </button>
              <button
                className="instagram-order-btn-bottom"
                onClick={handleInstagramOrder}
              >
                <FaInstagram /> Order on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

