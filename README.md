# ReAa Vogue - E-Commerce Website Documentation

## 📁 Project Structure

```
ReAavogue/
│
├── index.html          # Main HTML file with all pages
├── style.css           # Premium styling (Myntra/AJIO inspired)
├── script.js           # All JavaScript functionality
├── products.js         # Product data array
└── README.md           # This documentation file
```

---

## ✨ Features Implemented

✅ **Premium UI/UX Design** - Inspired by AJIO and Myntra
✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
✅ **Home Page** - Hero banner, category cards, featured products, Instagram lookbook
✅ **Product Listing** - Grid layout with filters and search
✅ **Product Detail Page** - Image gallery, size selector, reviews
✅ **Shopping Cart** - Add/remove items, quantity control, localStorage
✅ **Wishlist** - Save favorite products, localStorage
✅ **WhatsApp Checkout** - Direct order placement via WhatsApp
✅ **Search Functionality** - Real-time product search
✅ **Smooth Animations** - Professional hover effects and transitions

---

## 🚀 How to Use the Website

### 1. **Open Locally**
Simply double-click `index.html` to open the website in your browser.

### 2. **Test All Features**
- Browse products by category
- Search for products
- Add items to cart
- Save items to wishlist
- View product details
- Proceed to checkout (redirects to WhatsApp)

---

## 🛠️ Customization Guide

### **A. Change Brand Name**

**In `index.html`:**
- Find: `<span class="logo-text">ReAa Vogue</span>`
- Replace with your brand name

**In `index.html` (footer):**
- Find: `<h3>ReAa Vogue</h3>` in footer section
- Replace with your brand name

**In browser tab:**
- Find: `<title>ReAa Vogue - Premium Fashion Store</title>`
- Change to your preferred title

---

### **B. Add/Edit/Remove Products**

**Open `products.js` and modify the products array:**

```javascript
{
    id: 1,                          // Unique ID (increment for new products)
    name: "Product Name",           // Product name
    category: "womens-ethnic",      // Category: womens-ethnic, womens-western, mens-wear, kids
    subcategory: "sarees",          // Subcategory
    price: 2999,                    // Selling price
    originalPrice: 4999,            // Original price (for discount calculation)
    image: "URL",                   // Main product image URL
    images: ["URL1", "URL2"],       // Array of images for product detail page
    description: "Description",     // Product description
    sizes: ["S", "M", "L", "XL"],  // Available sizes
    inStock: true,                  // Stock status
    featured: true                  // Show on homepage (true/false)
}
```

**To Add a New Product:**
1. Copy an existing product block
2. Change the `id` to a unique number
3. Update all fields with your product data
4. Add your product image URLs
5. Save the file

**To Remove a Product:**
- Delete the entire product object from the array
- Or set `inStock: false` to hide it

---

### **C. Change Logo**

**Option 1: Text Logo (Current)**
- Already set up as "ReAa Vogue"
- Change text in `index.html` as shown in section A

**Option 2: Image Logo**
1. Save your logo image (e.g., `logo.png`)
2. In `index.html`, find:
```html
<span class="logo-text">ReAa Vogue</span>
```
3. Replace with:
```html
<img src="logo.png" alt="ReAa Vogue" style="height: 40px;">
```

---

### **D. Update WhatsApp Number**

**In `script.js`:**

Find this line (around line 15):
```javascript
const WHATSAPP_NUMBER = '919876543210';
```

Replace with your WhatsApp number:
- Include country code (e.g., 91 for India)
- No spaces, no + symbol
- Example: For +91 98765 43210, use: `'919876543210'`

---

### **E. Change Product Images**

**Method 1: Use Your Own Images**
1. Create an `images` folder in your project
2. Add your product images
3. In `products.js`, change image URLs:
```javascript
image: "images/product1.jpg"
```

**Method 2: Use Image Hosting**
- Upload images to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)
- Copy the direct image URL
- Paste in `products.js`

**Current Images:**
- Using Unsplash placeholder images
- Replace with your actual product photos

---

### **F. Update Contact Information**

**In `index.html` (footer section):**

Find:
```html
<li><i class="fas fa-phone"></i> +91 98765 43210</li>
<li><i class="fas fa-envelope"></i> info@reaavogue.com</li>
<li><i class="fas fa-map-marker-alt"></i> Mumbai, India</li>
```

Replace with your actual contact details.

---

### **G. Social Media Links**

**In `index.html` (footer):**

Find:
```html
<div class="social-links">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-pinterest"></i></a>
</div>
```

Replace `#` with your social media profile URLs:
```html
<a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
```

---

### **H. Change Color Scheme**

**In `style.css`, modify CSS variables:**

Find this section at the top:
```css
:root {
    --primary-black: #000000;
    --primary-white: #FFFFFF;
    --accent-gold: #C19A6B;
    /* ... more colors */
}
```

Change color codes to your brand colors.

---

### **I. Update Hero Banner**

**In `index.html`, find:**

```html
<div class="hero-section">
    <div class="hero-content">
        <h1 class="hero-title">Elevate Your Style</h1>
        <p class="hero-subtitle">Discover the finest collection...</p>
        <button class="hero-btn" onclick="filterByCategory('womens-ethnic')">Shop Now</button>
    </div>
    <div class="hero-image">
        <img src="IMAGE_URL" alt="Fashion Banner">
    </div>
</div>
```

- Change text in `<h1>` and `<p>`
- Replace `IMAGE_URL` with your banner image

---

## 🌐 Deployment Guide

### **Option 1: Netlify (Recommended - FREE)**

1. Go to [Netlify.com](https://netlify.com)
2. Sign up for free
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your project folder
5. Your site will be live in seconds!
6. You'll get a free URL like: `yoursite.netlify.app`
7. **Optional:** Connect a custom domain

### **Option 2: GitHub Pages (FREE)**

1. Create a [GitHub](https://github.com) account
2. Create a new repository (name it anything, e.g., `reaavogue`)
3. Upload all your files to the repository
4. Go to repository Settings → Pages
5. Select "main" branch → Save
6. Your site will be live at: `yourusername.github.io/reaavogue`

### **Option 3: Vercel (FREE)**

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository or drag folder
5. Click "Deploy"
6. Done! Get a free URL

### **Option 4: Traditional Web Hosting**

1. Buy hosting from providers like:
   - Hostinger
   - Bluehost
   - GoDaddy
2. Upload files via FTP/cPanel File Manager
3. Access via your domain

---

## 📱 Testing Checklist

- [ ] Open website on desktop browser
- [ ] Test on mobile (Chrome DevTools → Toggle device toolbar)
- [ ] Click all navigation links
- [ ] Search for products
- [ ] Add products to cart
- [ ] Add products to wishlist
- [ ] Update cart quantities
- [ ] Remove items from cart
- [ ] Test WhatsApp checkout (should open WhatsApp with order details)
- [ ] Check that cart/wishlist persists after page refresh
- [ ] Verify all images load correctly
- [ ] Test filters on product listing page

---

## 💡 Tips for Success

### **1. High-Quality Product Images**
- Use professional photos (minimum 1000x1000 px)
- Consistent white/light background
- Show product from multiple angles
- Compress images for faster loading (use [TinyPNG](https://tinypng.com))

### **2. Product Descriptions**
- Write clear, detailed descriptions
- Mention fabric, care instructions, and features
- Use bullet points for readability

### **3. Pricing Strategy**
- Always show original price vs. sale price
- Highlight discount percentage
- Keep prices competitive

### **4. SEO Optimization**
In `index.html`, add inside `<head>`:
```html
<meta name="description" content="ReAa Vogue - Premium ethnic and western fashion store">
<meta name="keywords" content="sarees, kurtis, lehengas, women fashion, ethnic wear">
```

### **5. Performance**
- Compress all images
- Use lazy loading (already implemented)
- Host images on CDN if possible

---

## 🔧 Troubleshooting

### **Problem: Products not showing**
- Check `products.js` for syntax errors (missing commas, brackets)
- Open browser console (F12) to see errors

### **Problem: Cart not saving**
- Make sure you're testing on a web server (not file://)
- Check if localStorage is enabled in browser

### **Problem: WhatsApp not opening**
- Verify WHATSAPP_NUMBER format in `script.js`
- Ensure number includes country code

### **Problem: Images not loading**
- Check image URLs are correct
- Verify image files exist
- Check for typos in file names

### **Problem: Mobile menu not working**
- Clear browser cache
- Test in incognito/private mode

---

## ⚙️ Browser Compatibility

✅ Chrome (Recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📞 Support

For questions or issues:
1. Check the browser console (F12) for errors
2. Verify all file names match exactly
3. Ensure no syntax errors in JavaScript files
4. Test in a different browser

---

## 🎨 Design Credits

- Inspired by: AJIO, Myntra
- Fonts: Google Fonts (Playfair Display, Inter)
- Icons: Font Awesome
- Images: Unsplash (replace with your own)

---

## 📝 License

This is a custom-built project for personal/commercial use.
Feel free to modify and use as needed.

---

## 🚀 Next Steps

1. Replace all placeholder images with your real product photos
2. Update the WhatsApp number
3. Customize brand colors and fonts
4. Add your actual product data
5. Test thoroughly on mobile devices
6. Deploy to your preferred hosting platform
7. Share your website link!

---

**Built with ❤️ for ReAa Vogue**

*Premium fashion, now online.*
#   R e A a V o g u e  
 