// // let iconCart = document.querySelector('.icon-cart');
// // let closeCart = document.querySelector('.close');
// // let body = document.querySelector('body');
// // let listProductHTML = document.querySelector('.listProduct');

// // let listProducts = [];

// // iconCart.addEventListener('click',() => {
// //     body.classList.toggle('showCart')
    
// // })
// // closeCart.addEventListener('click', () => {
// //     body.classList.toggle('showCart')

// // })
// // const initApp = () => {
// //     //get data from json
// //     fetch('products.json')
// //     .then(response => response.json())
// //     .then(data => {
// //         listProducts = data;
// //     })
// // }

// let products = [];
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Load products from JSON
// fetch("products.json")
//   .then(response => response.json())
//   .then(data => {
//     products = data;
//     setupAddToCartButtons();
//   });

// // Function to set up event listeners for all "Add to Cart" buttons
// function setupAddToCartButtons() {
//   const buttons = document.querySelectorAll(".add-to-cart");
//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const id = parseInt(button.getAttribute("data-id"));
//       addToCart(id);
//     });
//   });
// }

// // Add item to cart
// function addToCart(id) {
//   const product = products.find(p => p.id === id);
//   if (!product) return;

//   const existing = cart.find(item => item.id === id);
//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${product.name} added to cart! 🛒`);
//   updateCartCount();
// }

// // Update cart count (optional)
// function updateCartCount() {
//   const count = cart.reduce((sum, item) => sum + item.quantity, 0);
//   document.getElementById("cart-count").textContent = count;
// }

// // When page loads
// document.addEventListener("DOMContentLoaded", updateCartCount);
