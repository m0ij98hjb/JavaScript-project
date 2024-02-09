let productsInCart = localStorage.getItem("productsInCart");
let allproducts = document.querySelector(".products");

if (productsInCart) {
  let items = JSON.parse(productsInCart);
  drawCartproduct(items);
}

function drawCartproduct(products) {
  let y = products.map((item) => {
    return `
      <div class="product_item">
        <img class="product_item img" src="${item.imageurl}">
        <div class="product-item_dosc">
          <h2>${item.title}</h2>
          <p>${item.About}</p>
          <span>${item.color}</span>
          <p>${item.Price}</p>
        </div>
        <div class="product-item_action">
          <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
        </div>
      </div>
    `;
  }).join(""); // Join the array elements into a string

  allproducts.innerHTML = y;
}

function removeFromCart(itemId) {
  let productsInCart = localStorage.getItem("productsInCart");

  if (productsInCart) {
    let cartItems = JSON.parse(productsInCart);
    let itemIndex = cartItems.findIndex((item) => item.id === itemId);
    
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      drawCartproduct(cartItems);

      // Reload the page from the server when the "Remove" button is clicked
      location.reload();
    }
  }
}

