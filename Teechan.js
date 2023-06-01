// Select the Add to Cart button and the cart items container
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');

// Add a click event listener to the Add to Cart button
addToCartBtn.addEventListener('click', () => {
  // Get the item name from the data-item attribute
  const itemName = addToCartBtn.getAttribute('data-item');

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerText = itemName;

  // Create a remove button for the cart item
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-cart-item-btn');
  removeBtn.innerText = 'Remove';

  // Add a click event listener to the remove button
  removeBtn.addEventListener('click', () => {
    // Remove the cart item from the cart items container
    cartItemsContainer.removeChild(cartItem);
  });

  // Append the remove button to the cart item
  cartItem.appendChild(removeBtn);

  // Append the cart item to the cart items container
  cartItemsContainer.appendChild(cartItem);
});
