// Product Data for ReAa Vogue
// Replace image URLs with your actual product images

const products = [
    // Women's Ethnic - Sarees
    {
        id: 1,
        name: "Elegant Silk Saree",
        category: "womens-ethnic",
        subcategory: "sarees",
        price: 2999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
            "https://images.unsplash.com/photo-1583391733981-5aec7c0e8b30?w=500",
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500"
        ],
        description: "Beautiful handwoven silk saree with traditional motifs. Perfect for weddings and special occasions. Comes with matching blouse piece.",
        sizes: ["Free Size"],
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Designer Banarasi Saree",
        category: "womens-ethnic",
        subcategory: "sarees",
        price: 3499,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1583391733981-5aec7c0e8b30?w=500",
        images: [
            "https://images.unsplash.com/photo-1583391733981-5aec7c0e8b30?w=500",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"
        ],
        description: "Exquisite Banarasi silk saree with zari work. A timeless piece for your ethnic collection.",
        sizes: ["Free Size"],
        inStock: true,
        featured: false
    },

    // Women's Ethnic - Kurtis
    {
        id: 3,
        name: "Floral Print Kurti",
        category: "womens-ethnic",
        subcategory: "kurtis",
        price: 899,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
            "https://images.unsplash.com/photo-1583391733981-5aec7c0e8b30?w=500"
        ],
        description: "Comfortable cotton kurti with beautiful floral prints. Perfect for casual wear and office.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: true,
        featured: true
    },
    {
        id: 4,
        name: "Embroidered Straight Kurti",
        category: "womens-ethnic",
        subcategory: "kurtis",
        price: 1299,
        originalPrice: 2199,
        image: "https://images.unsplash.com/photo-1585927263728-345ba497c0c4?w=500",
        images: [
            "https://images.unsplash.com/photo-1585927263728-345ba497c0c4?w=500"
        ],
        description: "Elegant embroidered kurti with thread work. Ideal for festive occasions.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        featured: false
    },

    // Women's Ethnic - Lehengas
    {
        id: 5,
        name: "Bridal Lehenga Set",
        category: "womens-ethnic",
        subcategory: "lehengas",
        price: 12999,
        originalPrice: 19999,
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500",
        images: [
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"
        ],
        description: "Stunning bridal lehenga with heavy embroidery and sequin work. Includes blouse and dupatta.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        featured: true
    },
    {
        id: 6,
        name: "Festive Lehenga Choli",
        category: "womens-ethnic",
        subcategory: "lehengas",
        price: 5999,
        originalPrice: 9999,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=500",
        images: [
            "https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=500"
        ],
        description: "Beautiful festive lehenga with mirror work. Perfect for sangeet and mehendi functions.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        featured: false
    },

    // Women's Western
    {
        id: 7,
        name: "Classic White Shirt",
        category: "womens-western",
        subcategory: "tops",
        price: 799,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
        images: [
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500"
        ],
        description: "Crisp white cotton shirt for the modern woman. Versatile and timeless.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        featured: true
    },
    {
        id: 8,
        name: "Denim Jacket",
        category: "womens-western",
        subcategory: "jackets",
        price: 1999,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
        ],
        description: "Classic blue denim jacket. A wardrobe essential for every season.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        featured: false
    },
    {
        id: 9,
        name: "Black Skinny Jeans",
        category: "womens-western",
        subcategory: "jeans",
        price: 1499,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
        ],
        description: "High-waisted black skinny jeans with stretch comfort. Perfect fit guaranteed.",
        sizes: ["28", "30", "32", "34", "36"],
        inStock: true,
        featured: true
    },

    // Men's Wear
    {
        id: 10,
        name: "Slim Fit Formal Shirt",
        category: "mens-wear",
        subcategory: "shirts",
        price: 999,
        originalPrice: 1799,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
        ],
        description: "Premium cotton formal shirt with slim fit. Perfect for office and business meetings.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: true,
        featured: true
    },
    {
        id: 11,
        name: "Classic Kurta Set",
        category: "mens-wear",
        subcategory: "ethnic",
        price: 2499,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
        images: [
            "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500"
        ],
        description: "Traditional kurta pajama set. Ideal for festivals and weddings.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: true,
        featured: false
    },
    {
        id: 12,
        name: "Navy Blue Blazer",
        category: "mens-wear",
        subcategory: "blazers",
        price: 3999,
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1593030651767-e29e61ed5c6a?w=500",
        images: [
            "https://images.unsplash.com/photo-1593030651767-e29e61ed5c6a?w=500"
        ],
        description: "Sophisticated navy blue blazer. Tailored to perfection for the modern gentleman.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        featured: true
    },

    // Kids
    {
        id: 13,
        name: "Kids Party Dress",
        category: "kids",
        subcategory: "girls",
        price: 899,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500",
        images: [
            "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500"
        ],
        description: "Beautiful party dress for girls. Comfortable and stylish.",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        inStock: true,
        featured: true
    },
    {
        id: 14,
        name: "Boys Casual T-Shirt",
        category: "kids",
        subcategory: "boys",
        price: 399,
        originalPrice: 699,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
        images: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500"
        ],
        description: "Comfortable cotton t-shirt for boys. Perfect for daily wear.",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        inStock: true,
        featured: false
    },
    {
        id: 15,
        name: "Kids Ethnic Set",
        category: "kids",
        subcategory: "ethnic",
        price: 1299,
        originalPrice: 2199,
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500",
        images: [
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500"
        ],
        description: "Traditional ethnic wear set for kids. Ideal for festive occasions.",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        inStock: true,
        featured: true
    }
];

// Helper function to get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Helper function to get featured products
function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

// Helper function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Helper function to search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
    );
}
