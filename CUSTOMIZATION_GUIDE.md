# Quick Customization Guide for ReAa Vogue

## 🎯 Most Common Changes (Quick Reference)

### 1️⃣ Change WhatsApp Number
**File:** `script.js` (Line 15)
```javascript
const WHATSAPP_NUMBER = '919876543210';  // ← Change this
```
Format: CountryCode + Phone (no spaces, no +)

---

### 2️⃣ Add New Products
**File:** `products.js`

Copy this template and add to the products array:
```javascript
{
    id: 16,                                    // ← Increment ID
    name: "Your Product Name",
    category: "womens-ethnic",                 // womens-ethnic, womens-western, mens-wear, kids
    subcategory: "sarees",
    price: 2999,                               // Selling price
    originalPrice: 4999,                       // Original price
    image: "https://your-image-url.jpg",       // Main image
    images: [
        "https://image1.jpg",
        "https://image2.jpg"
    ],
    description: "Your product description here",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false                            // true = shows on homepage
}
```

---

### 3️⃣ Change Brand Name
**File:** `index.html`

**In Navigation (Line 32):**
```html
<span class="logo-text">Your Brand Name</span>
```

**In Hero (Line 74):**
```html
<h1 class="hero-title">Your Tagline</h1>
```

**In Footer (Line 331):**
```html
<h3>Your Brand Name</h3>
```

---

### 4️⃣ Add Your Logo Image
**File:** `index.html` (Line 32)

Replace:
```html
<span class="logo-text">ReAa Vogue</span>
```

With:
```html
<img src="your-logo.png" alt="Brand Logo" style="height: 40px;">
```

---

### 5️⃣ Change Contact Details
**File:** `index.html` (Footer section, around line 371)

```html
<li><i class="fas fa-phone"></i> +91 YOUR NUMBER</li>
<li><i class="fas fa-envelope"></i> your@email.com</li>
<li><i class="fas fa-map-marker-alt"></i> Your City, Country</li>
```

---

### 6️⃣ Update Social Media Links
**File:** `index.html` (Line 339)

```html
<a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/yourpage"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/yourpage"><i class="fab fa-twitter"></i></a>
```

---

### 7️⃣ Change Colors
**File:** `style.css` (Lines 11-22)

```css
:root {
    --primary-black: #000000;      /* Main dark color */
    --primary-white: #FFFFFF;      /* Background */
    --accent-gold: #C19A6B;        /* Accent color */
}
```

---

### 8️⃣ Change Hero Banner Image
**File:** `index.html` (Line 82)

```html
<img src="your-banner-image.jpg" alt="Fashion Banner">
```

Recommended size: 1920x800px

---

### 9️⃣ Change Category Images
**File:** `index.html` (Lines 92-116)

```html
<img src="your-category-image.jpg" alt="Category">
```

Recommended size: 800x800px

---

### 🔟 Upload Your Product Images

**Option A: Local Images**
1. Create `images` folder in project
2. Add your images: `images/product1.jpg`
3. In `products.js`, use: `image: "images/product1.jpg"`

**Option B: Online Images**
1. Upload to [Imgur.com](https://imgur.com) or [Cloudinary.com](https://cloudinary.com)
2. Copy direct image URL
3. Paste in `products.js`

---

## 🚀 Deploy Your Website (Free)

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your project folder
3. Done! Get free URL

### GitHub Pages
1. Create GitHub account
2. Create new repository
3. Upload files
4. Enable GitHub Pages in Settings
5. Get URL: `username.github.io/reaavogue`

---

## ✅ Pre-Launch Checklist

- [ ] Changed WhatsApp number to yours
- [ ] Updated brand name everywhere
- [ ] Added your logo
- [ ] Replaced all product images
- [ ] Updated contact information
- [ ] Added social media links
- [ ] Tested on mobile (use Chrome DevTools)
- [ ] Tested WhatsApp order button
- [ ] Checked that cart saves items
- [ ] Verified all links work

---

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| Products not showing | Check `products.js` for syntax errors (missing commas) |
| WhatsApp not opening | Verify number format in `script.js` (no spaces, no +) |
| Images not loading | Check image URLs, make sure they're accessible |
| Cart not saving | Test on web server, not file:// URL |
| Mobile menu stuck | Clear browser cache, refresh |

---

## 📱 Test on Mobile

### Using Chrome DevTools:
1. Open website in Chrome
2. Press `F12` (or right-click → Inspect)
3. Click device icon (or press `Ctrl+Shift+M`)
4. Select "iPhone" or "Galaxy" from dropdown
5. Test navigation, cart, and all features

---

## 🎨 Want Different Look?

### Change Font
**File:** `index.html` (Line 10)

Replace Google Fonts link with your choice from [fonts.google.com](https://fonts.google.com)

Then in `style.css`:
```css
:root {
    --font-heading: 'YourFont', serif;
    --font-body: 'YourFont', sans-serif;
}
```

---

## 📞 Need Help?

1. Open browser console (`F12`) to see errors
2. Check README.md for detailed documentation
3. Verify all file names are correct
4. Test in Chrome (best compatibility)

---

**Remember:** Save all files after editing, then refresh browser to see changes!

---

*Built for ReAa Vogue with modern design and clean code* ✨
