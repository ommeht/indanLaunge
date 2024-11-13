import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

function Cart({ cartItems, setCartItems, onSellItem }) {
  const navigate = useNavigate(); // useNavigate hook to navigate to the address page

  // Function to increase the quantity by 1
  const increaseQuantity = (index) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      const item = newItems[index];

      // Increase quantity by 1
      item.quantity = (item.quantity || 0) + 1;

      return newItems;
    });
  };

  // Function to decrease the quantity
  const decreaseQuantity = (index) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      const item = newItems[index];

      // Decrease quantity, ensuring it doesn't go below 1
      if (item.quantity > 1) {
        item.quantity -= 1;
      }

      return newItems;
    });
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity || 0;
      return !isNaN(price) ? total + price * quantity : total;
    }, 0);

    return total.toFixed(2);
  };

  // Handle the "Order Now" button click
  const handleOrderNow = () => {
    // Redirect to the address page and pass the cartItems as state
    navigate('/address', { state: { cartItems, total: calculateTotal() } });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="image-container">
              <img src={item.src} alt={item.alt} className="cart-image" />
              <p>{item.name}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Quantity:</strong> {item.quantity || 1}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
          <button onClick={handleOrderNow} className="order-now-button">
            Order Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
