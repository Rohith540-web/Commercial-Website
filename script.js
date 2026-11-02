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