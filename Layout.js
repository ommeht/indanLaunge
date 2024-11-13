import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area where nested routes will render */}
      <main className="content">
        <Outlet />
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
