# 🎨 ReAa Vogue - Luxury Color Palette Reference

## BRAND COLORS

```css
/* === MAROON TONES === */
--primary-maroon: #4b0f0f      /* Main brand color - navbar, text, accents */
--deep-maroon: #3a0a0a         /* Darker shade - gradients, depth */

/* === GOLD TONES === */
--accent-gold: #d4af37         /* Primary gold - buttons, highlights */
--light-gold: #f4e5b8          /* Soft gold - text, overlays */
--dark-gold: #b8941f           /* Rich gold - gradients, depth */

/* === NEUTRALS === */
--off-white: #faf8f5           /* Main background */
--cream: #f5f1ea               /* Card backgrounds */
--light-beige: #e8e4dc         /* Subtle accents */

/* === TEXT === */
--text-primary: #2c1810        /* Main text */
--text-secondary: #6b5d52      /* Secondary text */
--text-light: #8a7a6d          /* Light text */
```

---

## COLOR USAGE GUIDE

### 🟥 **MAROON (#4b0f0f)**
**Use for:**
- Navigation bar background
- Footer background
- Section headings
- Category overlays
- Cart summary box
- Primary brand elements

**Examples:**
```css
background: var(--primary-maroon);
color: var(--primary-maroon);
```

---

### 🟡 **GOLD (#d4af37)**
**Use for:**
- Logo/brand name
- All buttons
- Prices
- Call-to-action elements
- Active states
- Highlights
- Icon accents

**Examples:**
```css
background: linear-gradient(135deg, var(--accent-gold), var(--dark-gold));
color: var(--accent-gold);
border-color: var(--accent-gold);
```

---

### 🟨 **LIGHT GOLD (#f4e5b8)**
**Use for:**
- Navigation links
- Footer text
- Subtle text overlays
- Secondary information
- Hover text states

**Examples:**
```css
color: var(--light-gold);
```

---

### ⬜ **CREAM/BEIGE (#f5f1ea)**
**Use for:**
- Product card backgrounds
- Product image containers
- Filter sidebar
- Review boxes
- Alternate sections

**Examples:**
```css
background-color: var(--cream);
```

---

### ⬜ **OFF-WHITE (#faf8f5)**
**Use for:**
- Main page background
- Body background
- Spacer areas

**Examples:**
```css
background-color: var(--off-white);
```

---

## GRADIENT RECIPES

### **Maroon Gradient** (Navbar, Footer)
```css
background: linear-gradient(135deg, var(--primary-maroon) 0%, var(--deep-maroon) 100%);
```

### **Gold Gradient** (Buttons)
```css
background: linear-gradient(135deg, var(--accent-gold), var(--dark-gold));
```

### **Hero Overlay**
```css
background: linear-gradient(135deg,
    rgba(75, 15, 15, 0.85) 0%,
    rgba(58, 10, 10, 0.75) 50%,
    rgba(75, 15, 15, 0.85) 100%);
```

### **Category Overlay**
```css
background: linear-gradient(to top,
    rgba(75, 15, 15, 0.95),
    rgba(75, 15, 15, 0.7) 70%,
    transparent);
```

---

## WHERE EACH COLOR APPEARS

### **Navigation Bar**
- Background: Maroon gradient
- Logo text: Gold
- Links: Light gold → Gold on hover
- Icons: Light gold → Gold on hover
- Search border: Gold (on focus)
- Badges: Gold gradient background

### **Hero Section**
- Background: Maroon gradient + overlay
- Title: Gold with shadow
- Subtitle: Light gold
- Button: Gold gradient

### **Product Cards**
- Background: Cream
- Borders/shadows: Maroon tint
- Product name: Dark text
- Price: Gold
- Discount tag: Gold background
- Add to Cart button: Gold gradient

### **Category Cards**
- Overlay: Maroon gradient
- Title: Gold
- Description: Light gold
- Hover border: Gold

### **Section Titles**
- Text: Maroon
- Underline: Gold gradient

### **Buttons**
- Primary: Gold gradient + maroon text
- Secondary: Gold border + maroon text → Gold fill on hover

### **Product Detail Page**
- Heading: Maroon
- Price: Gold (large)
- Size active: Gold gradient
- Add to Cart: Gold gradient
- Thumbnail active border: Gold

### **Cart**
- Item cards: Cream
- Item price: Gold
- Summary box: Maroon gradient
- Summary text: Light gold
- Total: Gold
- Checkout button: Gold gradient

### **Footer**
- Background: Maroon gradient
- Brand name: Gold
- Links: Light gold → Gold on hover
- Icons: Light gold → Gold gradient on hover

### **Wishlist Icon**
- Default: White background
- Active/Hover: Gold gradient

### **Reviews**
- Card background: Cream
- Left border: Gold
- Stars: Gold
- Author: Maroon

---

## QUICK CUSTOMIZATION

### To Make Button More Prominent:
Add brighter gold:
```css
background: linear-gradient(135deg, #f4e5b8, #d4af37);
```

### To Make Navbar Darker:
```css
background: linear-gradient(135deg, #3a0a0a, #2a0505);
```

### To Lighten Background:
```css
background-color: #ffffff;
```

### To Change Gold Accent:
Replace `#d4af37` with:
- Rose Gold: `#b76e79`
- Bronze: `#cd7f32`
- Champagne: `#f7e7ce`

---

## COLOR TESTING CHECKLIST

✅ Check these elements display correctly:
- [ ] Navbar is maroon with gold text
- [ ] Hero title is gold
- [ ] Hero button is gold
- [ ] Product prices are gold
- [ ] Add to Cart buttons are gold
- [ ] Section titles are maroon
- [ ] Cart summary is maroon
- [ ] Footer is maroon
- [ ] All hover effects work

---

## RGBA COLOR VALUES (for transparency)

### Maroon with Opacity:
```css
rgba(75, 15, 15, 0.85)   /* 85% opacity */
rgba(75, 15, 15, 0.7)    /* 70% opacity */
rgba(75, 15, 15, 0.3)    /* 30% opacity */
```

### Gold with Opacity:
```css
rgba(212, 175, 55, 0.4)  /* 40% opacity - shadows */
rgba(212, 175, 55, 0.3)  /* 30% opacity - borders */
rgba(212, 175, 55, 0.2)  /* 20% opacity - subtle */
```

---

## CONTRAST RATIOS (Accessibility)

### Gold (#d4af37) on Maroon (#4b0f0f)
✅ WCAG AAA compliant (high contrast)

### Maroon (#4b0f0f) on Off-white (#faf8f5)
✅ WCAG AAA compliant (high contrast)

### Light Gold (#f4e5b8) on Maroon (#4b0f0f)
✅ WCAG AA compliant (good contrast)

---

## BROWSER SUPPORT

All colors work in:
✅ Chrome, Firefox, Safari, Edge
✅ Mobile browsers (iOS Safari, Chrome Mobile)
✅ IE11 (gradients supported)

---

*Quick reference for maintaining brand consistency* 🎨
