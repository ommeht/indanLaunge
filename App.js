// import React, { useState } from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Components/home';
// import About from './Components/about';
// import Work from './Components/work';
// import Feedback from './Components/Feedback';
// import Contact from './Components/contact';
// // import { OrdersProvider } from './Context/OrdersContext';
// import Address from './Components/Address'; // Import the Address component
// // import Navbar from './Components/Navbar'; 
// import MyOrders from './Components/MyOrders';
// import Layout from './Layout';
// import RegistrationForm from './Components/RegistrationForm';
// import Welcome from './Components/Welcome';
// import BookingRooms from './Components/BookingRooms';
// import SpecialOrder from './Components/SpecialOrder';
// import Cart from './Components/Cart';
// import ClientDetails from './Components/ClientDetails'; // Import ClientDetails

// function App() {
//   const [cartItems, setCartItems] = useState([]);  // Manage cart state

//   const handleRegister = (formData) => {
//     console.log('Registered data:', formData);
//   };

//   const handleSellItem = (item) => {
//     console.log('Selling item:', item); // Implement the selling functionality here
//   };

//   const handleClientSubmit = (clientInfo, item) => {
//     console.log('Client info:', clientInfo);
//     console.log('Item being sold:', item);
//     // You can add logic here to save the sale or further process the data
//   };

//   return (
//     <div className="App">
//       <Routes>
//         {/* Layout component wraps all pages and ensures Navbar & Footer are present */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={
//             <>
//               <Home />
//               <About />
//               <Work />
//               <Feedback />
//               <Contact />
//             </>
//           } />
//           <Route path="/my-orders" element={<MyOrders />} />
//           <Route path="/address" element={<Address />} />
        
//           <Route path="about" element={<About />} />
//           <Route path="work" element={<Work />} />
//           <Route path="testimonials" element={<Feedback />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="special-order" element={<SpecialOrder cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route path="registration" element={<RegistrationForm onRegister={handleRegister} />} />
//           <Route path="welcome" element={<Welcome />} />
//           <Route path="booking-rooms" element={<BookingRooms />} />
//           <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} onSellItem={handleSellItem} />} />
//           <Route path="client-details/:item" element={<ClientDetails onSubmit={handleClientSubmit} />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;



// App.js

import React, { useState, useContext } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Work from './Components/work';
import Feedback from './Components/Feedback';
import Contact from './Components/contact';
import Address from './Components/Address'; 
import MyOrders from './Components/MyOrders';
import Layout from './Layout';
import RegistrationForm from './Components/RegistrationForm';
import Welcome from './Components/Welcome';
import BookingRooms from './Components/BookingRooms';
import SpecialOrder from './Components/SpecialOrder';
import Cart from './Components/Cart';
import ClientDetails from './Components/ClientDetails'; 
import Login from './Components/Login';  // Import Login
import Signup from './Components/Signup'; 

// Import the authentication context
import { AuthContext, AuthProvider } from './Components/AuthContext'; // Adjusted import for the components folder

function App() {
  const { isAuthenticated } = useContext(AuthContext);  // Accessing auth state from AuthContext

  const [cartItems, setCartItems] = useState([]);  // Manage cart state

  const handleRegister = (formData) => {
    console.log('Registered data:', formData);
  };

  const handleSellItem = (item) => {
    console.log('Selling item:', item);
  };

  const handleClientSubmit = (clientInfo, item) => {
    console.log('Client info:', clientInfo);
    console.log('Item being sold:', item);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Home />
              <About />
              <Work />
              <Feedback />
              <Contact />
            </>
          } />
          
          {/* Protected routes that require authentication */}
          <Route path="/my-orders" element={isAuthenticated ? <MyOrders /> : <Navigate to="/login" />} />
          <Route path="/address" element={isAuthenticated ? <Address /> : <Navigate to="/login" />} />
          <Route path="/special-order" element={isAuthenticated ? <SpecialOrder cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/login" />} />
          
          {/* Other routes */}
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="testimonials" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
          <Route path="registration" element={<RegistrationForm onRegister={handleRegister} />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="booking-rooms" element={<BookingRooms />} />
          <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} onSellItem={handleSellItem} />} />
          <Route path="client-details/:item" element={<ClientDetails onSubmit={handleClientSubmit} />} />

          {/* Login and Signup Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

// Wrap App with AuthProvider to provide authentication context
const AppWithAuthProvider = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithAuthProvider;
