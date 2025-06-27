let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

function addToCart(id) {
  cart = { ...cart, [id]: 1 };
  render();
}

function increment(id) {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
  render();
}

function decrement(id) {
  if (cart[id] > 1) {
    cart = { ...cart, [id]: cart[id] - 1 };
  } else {
    delete cart[id];
  }
  render();
}

function render() {
  const root = document.getElementById("root");
  root.innerHTML = ""; 

  // Product List
  const productSection = document.createElement("div");
  productSection.innerHTML = "<h2>Products</h2>";

  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <strong>${p.name}</strong><br>
      Price: $${p.price}
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productSection.appendChild(div);
  });

  root.appendChild(productSection);

  // Cart Section
  const cartSection = document.createElement("div");
  cartSection.innerHTML = "<h2>Cart</h2>";

  let total = 0;

  products.forEach((p) => {
    if (cart[p.id]) {
      const div = document.createElement("div");
      div.className = "cart-item";

      const quantity = cart[p.id];
      const itemTotal = p.price * quantity;
      total += itemTotal;

      div.innerHTML = `
        ${p.name} - $${p.price} × ${quantity} = $${itemTotal}
        <button onclick="increment(${p.id})">+</button>
        <button onclick="decrement(${p.id})">–</button>
      `;

      cartSection.appendChild(div);
    }
  });

  const totalDisplay = document.createElement("h3");
  totalDisplay.textContent = `Order Value: $${total}`;

  root.appendChild(cartSection);
  root.appendChild(totalDisplay);
}

render(); 
