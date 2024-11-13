import React, { createContext, useState, useContext } from 'react';

// Create a context for orders
const OrdersContext = createContext();

// Custom hook to use the Orders context
export const useOrders = () => {
  return useContext(OrdersContext);
};

// Provider component to wrap around the app or specific parts of the app
export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // To store orders

  // Function to add a new order
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  // Function to remove an order (optional)
  const removeOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  };

  // Function to clear all orders (optional)
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder, clearOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
