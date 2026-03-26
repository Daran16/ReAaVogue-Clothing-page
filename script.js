/* ===================================
   REAA VOGUE - MAIN JAVASCRIPT
   Handles all functionality
   =================================== */

// ===== GLOBAL STATE =====
let cart = JSON.parse(localStorage.getItem('reaavogue_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('reaavogue_wishlist')) || [];
let currentProduct = null;
let selectedSize = null;
let quantity = 1;

// ===== WHATSAPP CONFIGURATION =====
// IMPORTANT: Replace this with your actual WhatsApp number (include country code without + or spaces)
// Example: For +91 98765 43210, use: 919876543210
const WHATSAPP_NUMBER = '918754578463';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateCartCount();
    updateWishlistCount();
    loadFeaturedProducts();
    setupEventListeners();
    showPage('home');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            if (e.target.value.length > 2) {
                performSearch(e.target.value);
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.target.value.length > 2) {
                performSearch(e.target.value);
            }
        });
    }

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
        }
    });
}

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const pageMap = {
        'home': 'homePage',
        'products': 'productListingPage',
        'detail': 'productDetailPage',
        'cart': 'cartPage',
        'wishlist': 'wishlistPage'
    };

    const targetPage = document.getElementById(pageMap[pageName]);
    if (targetPage) {
        targetPage.classList.add('active');

        // Load content based on page
        if (pageName === 'cart') {
            loadCartPage();
        } else if (pageName === 'wishlist') {
            loadWishlistPage();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
}

// ===== PRODUCT DISPLAY =====
function loadFeaturedProducts() {
    const featuredProducts = getFeaturedProducts();
    const container = document.getElementById('featuredProducts');
    if (container) {
        container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
}

function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
        <div class="product-card">
            <div class="product-image" onclick="showProductDetail(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="wishlist-icon ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <i class="fa${isInWishlist ? 's' : 'r'} fa-heart"></i>
                </div>
            </div>
            <div class="product-card-content">
                <h3 onclick="showProductDetail(${product.id})">${product.name}</h3>
                <div class="product-card-price">
                    <span class="current-price">₹${product.price}</span>
                    <span class="original-price">₹${product.originalPrice}</span>
                    <span class="discount">${discount}% OFF</span>
                </div>
                <button class="add-to-cart-btn" onclick="quickAddToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// ===== CATEGORY FILTERING =====
function filterByCategory(category) {
    const categoryTitles = {
        'womens-ethnic': "Women's Ethnic Wear",
        'womens-western': "Women's Western Wear",
        'mens-wear': "Men's Collection",
        'kids': "Kids Collection"
    };

    // Show product listing page
    showPage('products');

    // Update title
    const titleElement = document.getElementById('categoryTitle');
    if (titleElement) {
        titleElement.textContent = categoryTitles[category] || 'All Products';
    }

    // Filter and display products
    const filteredProducts = getProductsByCategory(category);
    displayProducts(filteredProducts);

    // Update filter radio button
    const filterRadio = document.querySelector(`input[name="category"][value="${category}"]`);
    if (filterRadio) {
        filterRadio.checked = true;
    }
}

function displayProducts(productsArray) {
    const container = document.getElementById('productGrid');
    if (container) {
        if (productsArray.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #757575;">No products found.</p>';
        } else {
            container.innerHTML = productsArray.map(product => createProductCard(product)).join('');
        }
    }
}

// ===== SEARCH FUNCTIONALITY =====
function performSearch(query) {
    const results = searchProducts(query);

    showPage('products');

    const titleElement = document.getElementById('categoryTitle');
    if (titleElement) {
        titleElement.textContent = `Search Results for "${query}"`;
    }

    displayProducts(results);
}

// ===== FILTERS =====
function toggleFilters() {
    const sidebar = document.getElementById('filtersSidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

function applyFilters() {
    // Get selected category
    const categoryRadio = document.querySelector('input[name="category"]:checked');
    const category = categoryRadio ? categoryRadio.value : 'all';

    // Get selected price ranges
    const priceCheckboxes = document.querySelectorAll('.filter-section input[type="checkbox"]:checked');
    const priceRanges = Array.from(priceCheckboxes).map(cb => cb.value);

    // Start with all products or filtered by category
    let filtered = category === 'all' ? products : getProductsByCategory(category);

    // Apply price filters
    if (priceRanges.length > 0) {
        filtered = filtered.filter(product => {
            return priceRanges.some(range => {
                const [min, max] = range.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });
        });
    }

    displayProducts(filtered);
}

// ===== PRODUCT DETAIL PAGE =====
function showProductDetail(productId) {
    const product = getProductById(productId);
    if (!product) return;

    currentProduct = product;
    selectedSize = null;
    quantity = 1;

    showPage('detail');

    // Update product images
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = product.images[0];
    }

    // Update thumbnails
    const thumbnailContainer = document.getElementById('thumbnailImages');
    if (thumbnailContainer && product.images) {
        thumbnailContainer.innerHTML = product.images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                <img src="${img}" alt="Product view ${index + 1}">
            </div>
        `).join('');
    }

    // Update product info
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = `₹${product.price}`;
    document.getElementById('productOriginalPrice').textContent = `₹${product.originalPrice}`;

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    document.getElementById('productDiscount').textContent = `${discount}% OFF`;
    document.getElementById('productDescription').textContent = product.description;

    // Update size options
    const sizeContainer = document.getElementById('sizeOptions');
    if (sizeContainer) {
        sizeContainer.innerHTML = product.sizes.map(size => `
            <div class="size-option" onclick="selectSize('${size}')">${size}</div>
        `).join('');
    }

    // Reset quantity
    document.getElementById('quantityInput').value = 1;
}

function changeMainImage(imageSrc, thumbnailElement) {
    document.getElementById('mainProductImage').src = imageSrc;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnailElement.classList.add('active');
}

function selectSize(size) {
    selectedSize = size;

    // Update active size button
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('active');
        if (option.textContent === size) {
            option.classList.add('active');
        }
    });
}

function updateQuantity(change) {
    const input = document.getElementById('quantityInput');
    let newQuantity = parseInt(input.value) + change;

    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > 10) newQuantity = 10;

    quantity = newQuantity;
    input.value = newQuantity;
}

// ===== CART FUNCTIONALITY =====
function quickAddToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    // For products with sizes, prompt user to view details
    if (product.sizes.length > 1) {
        showProductDetail(productId);
        return;
    }

    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.sizes[0],
        quantity: 1
    };

    addItemToCart(cartItem);
    showNotification('Added to cart!');
}

function addToCartFromDetail() {
    if (!currentProduct) return;

    // Check if size is selected (if product has multiple sizes)
    if (currentProduct.sizes.length > 1 && !selectedSize) {
        showNotification('Please select a size', 'error');
        return;
    }

    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        size: selectedSize || currentProduct.sizes[0],
        quantity: quantity
    };

    addItemToCart(cartItem);
    showNotification('Added to cart!');
}

function addItemToCart(item) {
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size
    );

    if (existingItemIndex !== -1) {
        // Update quantity
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Add new item
        cart.push(item);
    }

    saveCart();
    updateCartCount();
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartCount();
    loadCartPage();
}

function updateCartItemQuantity(productId, size, newQuantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity = Math.max(1, Math.min(10, newQuantity));
        saveCart();
        loadCartPage();
    }
}

function saveCart() {
    localStorage.setItem('reaavogue_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) {
        badge.textContent = totalItems;
    }
}

function loadCartPage() {
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    const cartItemsList = document.getElementById('cartItemsList');

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartContent.style.display = 'grid';

        // Display cart items
        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p>Quantity:
                        <div class="quantity-selector" style="display: inline-flex; margin-left: 10px;">
                            <button onclick="updateCartItemQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">-</button>
                            <input type="number" value="${item.quantity}" readonly style="width: 50px;">
                            <button onclick="updateCartItemQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
                        </div>
                    </p>
                    <p class="cart-item-price">₹${item.price * item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `).join('');

        // Update cart summary
        updateCartSummary();
    }
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate discount (difference from original price if available)
    let discount = 0;
    cart.forEach(item => {
        const product = getProductById(item.id);
        if (product) {
            discount += (product.originalPrice - product.price) * item.quantity;
        }
    });

    const total = subtotal;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal + discount}`;
    document.getElementById('cartDiscount').textContent = `-₹${discount}`;
    document.getElementById('cartTotal').textContent = `₹${total}`;
}

// ===== WISHLIST FUNCTIONALITY =====
function toggleWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);

    if (index !== -1) {
        // Remove from wishlist
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        // Add to wishlist
        const product = getProductById(productId);
        if (product) {
            wishlist.push({ id: product.id });
            showNotification('Added to wishlist!');
        }
    }

    saveWishlist();
    updateWishlistCount();

    // Refresh current page display
    const currentPage = document.querySelector('.page.active');
    if (currentPage && currentPage.id === 'homePage') {
        loadFeaturedProducts();
    } else if (currentPage && currentPage.id === 'wishlistPage') {
        loadWishlistPage();
    } else if (currentPage && currentPage.id === 'productListingPage') {
        applyFilters();
    }
}

function toggleWishlistFromDetail() {
    if (!currentProduct) return;
    toggleWishlist(currentProduct.id);
}

function saveWishlist() {
    localStorage.setItem('reaavogue_wishlist', JSON.stringify(wishlist));
}

function updateWishlistCount() {
    const badge = document.getElementById('wishlistCount');
    if (badge) {
        badge.textContent = wishlist.length;
    }
}

function loadWishlistPage() {
    const emptyWishlist = document.getElementById('emptyWishlist');
    const wishlistGrid = document.getElementById('wishlistGrid');

    if (wishlist.length === 0) {
        emptyWishlist.style.display = 'block';
        wishlistGrid.innerHTML = '';
    } else {
        emptyWishlist.style.display = 'none';

        const wishlistProducts = wishlist.map(item => getProductById(item.id)).filter(p => p);
        wishlistGrid.innerHTML = wishlistProducts.map(product => createProductCard(product)).join('');
    }
}

// ===== WHATSAPP CHECKOUT =====
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }

    // Build order message
    let message = 'Hello ReAa Vogue! I would like to order the following items:\n\n';

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Size: ${item.size}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: ₹${item.price * item.quantity}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `Total Amount: ₹${total}\n\n`;
    message += 'Please confirm my order. Thank you!';

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#000' : '#E74C3C'};
        color: white;
        padding: 16px 24px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with loading attribute
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== UTILITY: FORMAT CURRENCY =====
function formatCurrency(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
}

// ===== LOG INITIALIZATION =====
console.log('ReAa Vogue - E-commerce website loaded successfully!');
console.log('Cart items:', cart.length);
console.log('Wishlist items:', wishlist.length);
