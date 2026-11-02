# Ex02 Commercial Website
## Date:02-11-2026

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
# html
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopEase - Online Shopping</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>ShopEase</h1>
    <nav>
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#offers">Offers</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="cart">🛒 Cart: <span id="cart-count">0</span></div>
</header>

<!-- Hero -->
<section class="hero" id="home">
    <div>
        <h2>Discover Your Style</h2>
        <p>Find the best products at amazing prices.</p>
        <a href="#products" class="btn">Shop Now</a>
    </div>
</section>

<!-- Categories -->
<section id="categories">
    <h2>Shop By Categories</h2>
    <div class="flex-container">
        <div class="category">👕<h3>Fashion</h3></div>
        <div class="category">📱<h3>Electronics</h3></div>
        <div class="category">⌚<h3>Watches</h3></div>
        <div class="category">👟<h3>Footwear</h3></div>
        <div class="category">🏠<h3>Home Decor</h3></div>
        <div class="category">🎒<h3>Accessories</h3></div>
    </div>
</section>

<!-- Offers -->
<section id="offers" class="offers">
    <h2>Today's Special Offers</h2>
    <div class="offer-container">
        <div class="offer">
            <h3>Fashion Sale</h3>
            <p>Up to 50% OFF</p>
            <a href="#products">Explore Now</a>
        </div>
        <div class="offer">
            <h3>Electronics Sale</h3>
            <p>Up to 40% OFF</p>
            <a href="#products">Explore Now</a>
        </div>
        <div class="offer">
            <h3>Home Essentials</h3>
            <p>Up to 30% OFF</p>
            <a href="#products">Explore Now</a>
        </div>
    </div>
</section>

<!-- Trending Products -->
<section id="products">
    <h2>Trending Products</h2>
    <div class="product-container">

        <div class="product">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" alt="Watch">
            <h3>Smart Watch</h3>
            <p>₹1,499</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" alt="Headphones">
            <h3>Wireless Headphones</h3>
            <p>₹999</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500" alt="Camera">
            <h3>Digital Camera</h3>
            <p>₹5,499</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt="Shoes">
            <h3>Sports Shoes</h3>
            <p>₹1,299</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

    </div>
</section>

<!-- Best Sellers -->
<section>
    <h2>Best Selling Products</h2>
    <div class="product-container">

        <div class="product">
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" alt="Smart Watch">
            <h3>Premium Smart Watch</h3>
            <p>₹2,499</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500" alt="Fashion">
            <h3>Fashion Collection</h3>
            <p>₹1,899</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500" alt="Clothes">
            <h3>Casual Clothing</h3>
            <p>₹799</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=500" alt="Chair">
            <h3>Modern Home Chair</h3>
            <p>₹3,499</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

    </div>
</section>

<!-- Discount Banner -->
<section class="discount">
    <h2>Mega Shopping Festival</h2>
    <p>Get up to 60% discount on selected products!</p>
    <a href="#products" class="btn">Grab Your Deal</a>
</section>

<!-- New Arrivals -->
<section>
    <h2>New Arrivals</h2>
    <div class="product-container">

        <div class="product">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500" alt="Shoes">
            <h3>Running Shoes</h3>
            <p>₹1,599</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500" alt="Earbuds">
            <h3>Wireless Earbuds</h3>
            <p>₹1,199</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt="Sneakers">
            <h3>Casual Sneakers</h3>
            <p>₹1,799</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

        <div class="product">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" alt="Headphones">
            <h3>Premium Headphones</h3>
            <p>₹2,199</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>

    </div>
</section>

<!-- About -->
<section id="about" class="about">
    <h2>About ShopEase</h2>
    <p>
        ShopEase is an online shopping destination designed to make
        shopping simple, convenient and enjoyable. We offer a wide
        range of fashion, electronics, accessories and home products
        at affordable prices.
    </p>
</section>

<!-- Customer Reviews -->
<section class="reviews">
    <h2>What Our Customers Say</h2>
    <div class="review-container">
        <div class="review">
            <h3>Customer 1</h3>
            <p>"Great products and excellent shopping experience!"</p>
            ⭐⭐⭐⭐⭐
        </div>
        <div class="review">
            <h3>Customer 2</h3>
            <p>"Affordable prices and a wonderful collection."</p>
            ⭐⭐⭐⭐⭐
        </div>
        <div class="review">
            <h3>Customer 3</h3>
            <p>"Easy to use website with quality products."</p>
            ⭐⭐⭐⭐⭐
        </div>
    </div>
</section>

<!-- Newsletter -->
<section class="newsletter">
    <h2>Subscribe to Our Newsletter</h2>
    <p>Get updates about new products and special offers.</p>
    <form onsubmit="subscribe(event)">
        <input type="email" placeholder="Enter your email" required>
        <button type="submit">Subscribe</button>
    </form>
</section>

<!-- Footer -->
<footer id="contact">
    <h2>ShopEase</h2>
    <p>Your one-stop destination for online shopping.</p>
    <p>Email: support@shopease.com</p>
    <p>Phone: +91 98765 43210</p>
    <p>Address: Chennai, Tamil Nadu, India</p>
    <p>© 2026 ShopEase. All Rights Reserved.</p>
</footer>

<script src="script.js"></script>
</body>
</html>

```
# css
```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #f5f6fa;
    color: #333;
}

header {
    background: #172554;
    color: white;
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

header h1 {
    color: #facc15;
}

nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #facc15;
}

.cart {
    font-weight: bold;
}

section {
    padding: 55px 6%;
}

section h2 {
    text-align: center;
    color: #172554;
    margin-bottom: 30px;
}

/* Hero */
.hero {
    min-height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background: linear-gradient(120deg, #172554, #2563eb);
}

.hero h2 {
    font-size: 48px;
    color: white;
}

.hero p {
    font-size: 19px;
    margin: 20px 0;
}

.btn {
    display: inline-block;
    background: #facc15;
    color: #172554;
    padding: 13px 28px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
}

/* Categories */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.category {
    flex: 1 1 150px;
    padding: 35px 15px;
    background: white;
    border-radius: 10px;
    text-align: center;
    font-size: 35px;
    box-shadow: 0 3px 12px #ddd;
}

.category h3 {
    font-size: 17px;
    margin-top: 12px;
}

/* Offers */
.offers {
    background: #e8edff;
}

.offer-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.offer {
    flex: 1 1 220px;
    background: white;
    padding: 35px 20px;
    text-align: center;
    border-radius: 10px;
}

.offer h3 {
    color: #172554;
    margin-bottom: 15px;
}

.offer p {
    color: #e11d48;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.offer a {
    color: #2563eb;
    text-decoration: none;
}

/* Products */
.product-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.product {
    flex: 1 1 220px;
    max-width: 280px;
    padding: 15px;
    background: white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 3px 12px #ddd;
    transition: transform 0.3s;
}

.product:hover {
    transform: translateY(-7px);
}

.product img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    border-radius: 8px;
}

.product h3 {
    margin: 15px 0 10px;
}

.product p {
    color: #2563eb;
    font-weight: bold;
    margin-bottom: 15px;
}

button {
    background: #172554;
    color: white;
    border: none;
    padding: 11px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #2563eb;
}

/* Discount */
.discount {
    background: linear-gradient(120deg, #1e3a8a, #2563eb);
    color: white;
    text-align: center;
}

.discount h2 {
    color: white;
    font-size: 35px;
}

.discount p {
    margin-bottom: 25px;
    font-size: 19px;
}

/* About */
.about {
    background: white;
    text-align: center;
}

.about p {
    max-width: 850px;
    margin: auto;
    line-height: 1.9;
    font-size: 17px;
}

/* Reviews */
.review-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.review {
    flex: 1 1 220px;
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 3px 10px #ddd;
}

.review h3 {
    margin-bottom: 15px;
}

.review p {
    line-height: 1.7;
    margin-bottom: 15px;
}

/* Newsletter */
.newsletter {
    background: #e8edff;
    text-align: center;
}

.newsletter p {
    margin-bottom: 20px;
}

.newsletter form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.newsletter input {
    padding: 13px;
    width: 280px;
    border: 1px solid #aaa;
    border-radius: 5px;
}

/* Footer */
footer {
    background: #172554;
    color: white;
    text-align: center;
    padding: 40px 15px;
    line-height: 2;
}

footer h2 {
    color: #facc15;
}

/* Responsive design */
@media (max-width: 650px) {
    header {
        flex-direction: column;
    }

    nav {
        justify-content: center;
    }

    .hero h2 {
        font-size: 32px;
    }

    .newsletter input {
        width: 100%;
    }
}

```
# javaScript
```

let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("Product added to cart successfully!");
}

let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert("Product added to cart successfully!");
}

function subscribe(event) {
    event.preventDefault();
    alert("Thank you for subscribing to ShopEase!");
}

```
## OUTPUT

![alt text](<../Screenshot 2026-11-02 155107.png>)
![alt text](<../Screenshot 2026-11-02 155127.png>)
![alt text](<../Screenshot 2026-11-02 155141.png>)
![alt text](<../Screenshot 2026-11-02 160045.png>)

## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.