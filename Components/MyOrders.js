// MyOrders.js
import React, { useState, useEffect } from 'react';
import './MyOrders.css';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    // Function to generate a random 10-digit order ID
    const generateOrderId = () => {
        return Math.floor(1000000000 + Math.random() * 9000000000); // Random 10-digit number
    };

    return (
        <div>
            <h2>My Orders</h2>
            {orders.length > 0 ? (
                orders.map((order, index) => {
                    const orderId = generateOrderId(); // Generate order ID for each order
                    const orderDate = new Date().toLocaleString(); // Get current date and time

                    return (
                        <div key={index}>
                            <h4>Order #{index + 1}</h4>
                            <p>Order ID: {orderId}</p>
                            <p>Date: {orderDate}</p>
                            <p>Total: ${order.total}</p>
                            <ul>
                                {order.cartItems.map((item, i) => (
                                    <li key={i}>
                                        {item.name} - {item.quantity} x ${item.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })
            ) : (
                <p>No orders placed yet.</p>
            )}
        </div>
    );
};

export default MyOrders;
