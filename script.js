let shoppingCart = [];

function initializeCart() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    shoppingCart = JSON.parse(cartData);
    updateCartUI();
  }
}

// Call the initializeCart function when the page loads
initializeCart();

// Function to add a product to the cart
function addToCart(productName, price) {
  shoppingCart.push({
    name: productName,
    price: price,
  });
  alert(`Added "${productName}" to the cart. Price: $${price}`);
  // Store the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
  updateCartUI();
}

// Function to update the cart user interface
function updateCartUI() {
  console.log("Cart Contents:");
  for (const item of shoppingCart) {
    console.log(`${item.name} - $${item.price}`);
  }
}
