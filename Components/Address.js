import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To access passed state
import './Address.css';
const Address = () => {
  const location = useLocation();
  const { cartItems, total } = location.state || {}; // Extract cartItems and total from the state

  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  // Local state to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.street || !formData.city || !formData.state || !formData.zipCode || !formData.country || !formData.phone) {
      alert('Please fill in all fields.');
      return;
    }

    const order = { cartItems, total, address: formData };
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    storedOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(storedOrders));

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
};

  return (
    <div className="address">
      <h2>Address Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Street Address</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Order Summary:</h3>
        {cartItems && cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} x ${item.price}
                </li>
              ))}
            </ul>
            <h4>Total: ${total}</h4>
          </div>
        )}

        <button type="submit">Place Order</button>
      </form>

      {showPopup && (
        <div className="popup-notification">
          <p>Your order was placed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Address;
