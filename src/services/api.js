// API Service for backend integration
// Supports both local data and Medusa backend

import { products as localProducts, productCategories } from '../data/products';

const USE_MEDUSA = import.meta.env.VITE_USE_MEDUSA === 'true';
const MEDUSA_URL = import.meta.env.VITE_MEDUSA_URL || 'http://localhost:9000';
const MEDUSA_PUBLISHABLE_KEY = import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY;
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

console.log('API Configuration:', {
  useMedusa: USE_MEDUSA,
  medusaUrl: MEDUSA_URL,
  hasPublishableKey: !!MEDUSA_PUBLISHABLE_KEY,
});

// Helper function to transform Medusa product to our format
const transformMedusaProduct = (medusaProduct) => {
  // Get the first variant and its price
  const firstVariant = medusaProduct.variants?.[0];
  const firstPrice = firstVariant?.calculated_price?.calculated_amount || 
                     firstVariant?.prices?.[0]?.amount || 
                     0;
  
  // Determine category from type or collection
  const category = medusaProduct.type?.value?.toLowerCase() || 
                   medusaProduct.collection?.handle || 
                   'cakes';
  
  return {
    id: medusaProduct.id,
    name: medusaProduct.title,
    category: category,
    price: firstPrice / 100, // Convert from cents/paise to main currency unit
    description: medusaProduct.description || medusaProduct.subtitle || '',
    image: medusaProduct.thumbnail || medusaProduct.images?.[0]?.url || '',
    featured: medusaProduct.metadata?.featured || false,
    dietaryOptions: medusaProduct.metadata?.dietaryOptions || {
      egg: true,
      eggless: false,
      gluten: true,
      glutenFree: false,
    },
    addOns: medusaProduct.metadata?.addOns || [],
  };
};

class ApiService {
  constructor() {
    this.baseUrl = API_BASE_URL;
    this.medusaUrl = MEDUSA_URL;
    this.useMedusa = USE_MEDUSA;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Medusa request method
  async medusaRequest(endpoint, options = {}) {
    const url = `${this.medusaUrl}${endpoint}`;
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    // Add publishable API key for Medusa authentication
    if (MEDUSA_PUBLISHABLE_KEY) {
      headers['x-publishable-api-key'] = MEDUSA_PUBLISHABLE_KEY;
    }
    
    const config = {
      headers,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Medusa API Error:', response.status, errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Medusa request failed:', error);
      throw error;
    }
  }

  // Products
  async getProducts() {
    if (!this.useMedusa) {
      // Return local products
      return { products: localProducts };
    }

    try {
      const data = await this.medusaRequest('/store/products');
      return {
        products: data.products.map(transformMedusaProduct),
      };
    } catch (error) {
      console.warn('Failed to fetch from Medusa, using local data');
      return { products: localProducts };
    }
  }

  async getProduct(id) {
    if (!this.useMedusa) {
      const product = localProducts.find(p => p.id === parseInt(id) || p.id === id);
      return { product };
    }

    try {
      const data = await this.medusaRequest(`/store/products/${id}`);
      return {
        product: transformMedusaProduct(data.product),
      };
    } catch (error) {
      console.warn('Failed to fetch from Medusa, using local data');
      const product = localProducts.find(p => p.id === parseInt(id) || p.id === id);
      return { product };
    }
  }

  async getProductsByCategory(category) {
    if (!this.useMedusa) {
      const filtered = localProducts.filter(p => p.category === category);
      return { products: filtered };
    }

    try {
      const data = await this.medusaRequest(`/store/products?collection_id[]=${category}`);
      return {
        products: data.products.map(transformMedusaProduct),
      };
    } catch (error) {
      console.warn('Failed to fetch from Medusa, using local data');
      const filtered = localProducts.filter(p => p.category === category);
      return { products: filtered };
    }
  }

  // Cart Service (Medusa)
  async createCart() {
    return this.medusaRequest('/store/carts', { method: 'POST' });
  }

  async addToCart(cartId, variantId, quantity = 1) {
    return this.medusaRequest(`/store/carts/${cartId}/line-items`, {
      method: 'POST',
      body: JSON.stringify({ variant_id: variantId, quantity }),
    });
  }

  async updateCartItem(cartId, lineItemId, quantity) {
    return this.medusaRequest(`/store/carts/${cartId}/line-items/${lineItemId}`, {
      method: 'POST',
      body: JSON.stringify({ quantity }),
    });
  }

  async removeFromCart(cartId, lineItemId) {
    return this.medusaRequest(`/store/carts/${cartId}/line-items/${lineItemId}`, {
      method: 'DELETE',
    });
  }

  async getCart(cartId) {
    return this.medusaRequest(`/store/carts/${cartId}`);
  }

  // Orders
  async createOrder(orderData) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrder(orderId) {
    if (this.useMedusa) {
      return this.medusaRequest(`/store/orders/${orderId}`);
    }
    return this.request(`/orders/${orderId}`);
  }

  // Custom Cake Orders
  async createCustomCakeOrder(customCakeData) {
    return this.request('/custom-cakes', {
      method: 'POST',
      body: JSON.stringify(customCakeData),
    });
  }

  // Contact Form
  async submitContactForm(contactData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // Checkout (Medusa)
  async completeCheckout(cartId) {
    return this.medusaRequest(`/store/carts/${cartId}/complete`, {
      method: 'POST',
    });
  }

  async addPaymentSession(cartId) {
    return this.medusaRequest(`/store/carts/${cartId}/payment-sessions`, {
      method: 'POST',
    });
  }

  async setPaymentSession(cartId, providerId) {
    return this.medusaRequest(`/store/carts/${cartId}/payment-session`, {
      method: 'POST',
      body: JSON.stringify({ provider_id: providerId }),
    });
  }

  // Legacy checkout (non-Medusa)
  async checkout(checkoutData) {
    return this.request('/checkout', {
      method: 'POST',
      body: JSON.stringify(checkoutData),
    });
  }

  // File upload (for custom cake images)
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    return this.request('/upload', {
      method: 'POST',
      headers: {}, // Let browser set Content-Type for FormData
      body: formData,
    });
  }
}

export const apiService = new ApiService();
export default apiService;
