# Tosha Bakery - Website

A beautiful, static showcase website for Tosha Bakery with WhatsApp and Instagram integration. Built with React and Vite, featuring a pastel green and pink color scheme.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (required by Vite)
- Use nvm to manage Node versions

### Development
```bash
cd /Users/jatinsingh/Documents/Jatin/Projects/tosha-bakery
source ~/.nvm/nvm.sh && nvm use 20.19.6
npm run dev
```
**Access:** http://localhost:5173

### Production Build
```bash
source ~/.nvm/nvm.sh && nvm use 20.19.6
npm run build
```

---

## ⚙️ Configuration

### 🔧 Update Your Contact Information

**IMPORTANT:** Before launching, update these 2 locations:

#### WhatsApp Number
Update in **2 files:**
- `src/pages/ProductInfo.jsx` (Line 71)
- `src/components/Navbar.jsx` (Line 22)

```javascript
window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
                          ^^^^^^^^^^^^
                          Replace with your number (country code + number, no spaces)
```

#### Instagram Handle
Update in **2 files:**
- `src/pages/ProductInfo.jsx` (Line 75)
- `src/components/Navbar.jsx` (Line 26)

```javascript
window.open('https://instagram.com/tosha.bakery', '_blank');
                                  ^^^^^^^^^^^
                                  Replace with your Instagram handle
```

### 🖼️ Update Logo
Replace `public/tosha-logo.png` with your logo
- Recommended size: 200x80px
- Format: PNG with transparency

---

## 🎨 Customization

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-green: #4a5f54;      /* Dark green for text/headers */
  --pastel-green: #a8c5b8;       /* Light green for buttons */
  --pastel-pink: #e7bfb3;        /* Pink accents */
  /* Update these to match your brand */
}
```

### Add/Edit Products
Edit `src/data/products.js`:
```javascript
{
  id: 20,  // Next available ID
  name: "Your Product Name",
  category: "cakes",  // cakes, cupcakes, brownies, cake-jars
  price: 599.00,
  description: "Product description",
  image: "https://...",  // Image URL
  featured: false,  // true to show on home page
  dietaryOptions: {
    egg: true,
    eggless: true,
    gluten: true,
    glutenFree: false
  },
  addOns: [
    { name: "Extra Frosting", price: 50 },
    { name: "Custom Message", price: 50 }
  ]
}
```

---

## 📱 How It Works

### Customer Journey
1. Customer browses products on website
2. Clicks on a product to see details
3. Selects preferences (egg/eggless, gluten, add-ons)
4. Clicks "Order on WhatsApp"
5. WhatsApp opens with pre-filled message
6. Customer sends message to you
7. You discuss quantity, delivery, and finalize order via WhatsApp

### WhatsApp Message Format
```
Hi Tosha Bakery! 👋

I'm interested in ordering "Chocolate Fudge Cake"

My preferences:
• Egg: With Egg
• Gluten: Regular
• Add-ons: Extra Frosting

Base Price: ₹649.00

Could you please share more details about availability, 
quantity options, and delivery? Thank you! 😊
```

### Instagram Integration
**Mobile:**
- Opens Instagram app directly to your DM
- If app not installed, opens web DM link
- Customer just needs to type their message

**Desktop:**
- Opens your Instagram profile
- Customer clicks "Message" button
- Then types their message

**Note:** Instagram doesn't support pre-filled messages (platform limitation by Instagram/Meta). We've optimized it to open DMs as directly as possible.

---

## 📂 Project Structure

```
tosha-bakery/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          → Navigation with social media buttons
│   │   ├── ProductCard.jsx     → Product display cards
│   │   └── Footer.jsx          → Site footer
│   ├── pages/
│   │   ├── Home.jsx            → Homepage with featured products + festive orders
│   │   ├── Products.jsx        → Product catalog with filtering
│   │   ├── ProductInfo.jsx     → Product details + WhatsApp/Instagram
│   │   ├── CustomCake.jsx      → Custom cake order form
│   │   ├── Testimonials.jsx    → Customer reviews & photo gallery
│   │   └── Contact.jsx         → Contact information
│   ├── data/
│   │   └── products.js         → ⭐ ALL PRODUCTS HERE (19 products)
│   ├── index.css               → ⭐ COLORS & GLOBAL STYLES
│   └── App.jsx                 → Main app component
├── public/
│   └── tosha-logo.png          → ⭐ YOUR LOGO HERE
├── .env                         → Configuration
└── dist/                        → Production build (after npm run build)
```

---

## 🎯 Features

### ✅ Current Features (V1)
- 19 products across 4 categories (Cakes, Cupcakes, Brownies, Cake Jars)
- Product filtering by category
- Product detail pages with customization options
- Dietary options (egg/eggless, gluten/gluten-free)
- Add-ons selection
- WhatsApp ordering with pre-filled messages
- Instagram integration
- **Bulk/Festive orders section** - Special section for big celebrations
- **Testimonials page** - Customer reviews and ratings
- **Customer photo gallery** - Share and showcase customer moments
- Custom cake order form
- Contact page
- Fully responsive design
- Pastel green & pink theme

### 🚫 Not Included (Coming in V2)
- Shopping cart
- Online checkout/payment
- User accounts
- Order management
- Backend integration

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
Then: `npm run deploy`

---

## 🐛 Troubleshooting

### Node.js Version Error
```bash
source ~/.nvm/nvm.sh && nvm use 20.19.6
```

### Logo Not Showing
- Ensure file exists: `public/tosha-logo.png`
- Use PNG, JPG, or WebP format

### WhatsApp Not Opening
- Check phone number format: `919999999999`
- Format: country code + number, no spaces or dashes
- Example: India +91 9876543210 → `919876543210`

### Products Not Displaying
- Check `src/data/products.js` for syntax errors
- Ensure all required fields are present
- Check browser console for errors

---

## 💡 Pro Tips

### WhatsApp Business
- Download WhatsApp Business app
- Set up quick replies for common questions
- Add product catalog
- Enable auto-replies for off-hours
- Respond within 1 hour during business hours

### Instagram Strategy
- Post product photos daily
- Use Stories for daily specials
- Add "Order via link in bio" to posts
- Create Highlights for categories (Cakes, Cupcakes, etc.)
- Tag your location
- Use hashtags: #ToshaBakery #FreshBaked #OrderNow
- Repost customer photos

### Response Templates
Save these in WhatsApp Business:

**Available:**
```
Hi! 😊 Great choice! This is available!

Quantity options:
• 500g - ₹649
• 1kg - ₹1,200
• Custom size? Let me know!

When do you need it by?
```

**Custom Quote:**
```
Hello! Thanks for reaching out! 👋

How many people are you serving? I can recommend the perfect size!

Delivery or pickup?
```

---

## 🔄 Future: V2 with Backend

A Medusa backend is already set up and ready at:
`/Users/jatinsingh/Documents/Jatin/Projects/tosha-bakery-backend`

When ready for V2 (online cart, checkout, payments):
1. Start backend: `cd tosha-bakery-backend && npx medusa develop`
2. Update `.env`: Set `VITE_USE_MEDUSA=true`
3. Add remaining products via Medusa admin
4. Enable payment gateway (Razorpay)

---

## 📊 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Icons** - Icon library (including WhatsApp, Instagram)
- **CSS3** - Modern styling with custom properties

---

## ✅ Pre-Launch Checklist

- [ ] Update WhatsApp number (2 files)
- [ ] Update Instagram handle (2 files)
- [ ] Replace logo (`public/tosha-logo.png`)
- [ ] Test all pages locally
- [ ] Test WhatsApp button (check message on your phone)
- [ ] Test Instagram button
- [ ] Test on mobile device
- [ ] Build production version (`npm run build`)
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Add website link to Instagram bio

---

## 📞 Support

For technical issues or questions about this website, refer to:
- React: https://react.dev
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com

---

## 📝 License

This project is created for Tosha Bakery.

---

**Version:** 1.0.0  
**Status:** ✅ Production Ready  
**Last Updated:** January 5, 2026

Built with ❤️ for Tosha Bakery
