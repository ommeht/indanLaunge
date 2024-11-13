import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecialOrder.css';

function SpecialOrder({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(null); // Track expanded category
  const [notification, setNotification] = useState(''); // Notification state

  // Handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setNotification(`${item.name} added to cart!`); // Show the notification
    console.log(`${item.name} added to cart!`); // Log for debugging
  
    setTimeout(() => {
      setNotification('');
    }, 3000); // Hide the notification after 3 seconds
  };
  

  // Toggle the category expansion
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };
  const items = [
    { src: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2023-12-milk-tea%2Fmilk-tea-587', alt: 'Milk Tea', name: 'Milk Tea', category: 'Beverages', subcategory: '' , price: 99, },
    { src: 'https://imgs.search.brave.com/4AgeCHZ7aqlExncCReeNyE6OVrd-cS1Ew65wIZgRJSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MTQ0MjA4L3Bob3Rv/L2N1cC1vZi1ncmVl/bi10ZWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWExLW1s/TTdTT3RDSnByODBn/WFFLWWc3QVlDWVpz/UjFCWjRmdG1pR3Nw/SFU9', alt: 'Green Tea', name: 'Green Tea', category: 'Beverages', subcategory: '' , price: 39},
    { src: 'https://imgs.search.brave.com/btU78aXeXpuPEcpG-rRRRNRmZHaYaZnojXWm8vSyNP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQxLzI5LzEy/LzM2MF9GXzg0MTI5/MTI5N19ldHJXOWFO/ejloWFVWa0FiSjhJ/dzVZY0w0QUY0M3N2/Vy5qcGc', alt: 'Iced Tea', name: 'Iced Tea', category: 'Beverages', subcategory: '' , price: 149},
    { src: 'https://imgs.search.brave.com/Wx8h7OULSZkfLv2NRCNCelQl9147yzcqPZFULnd3bhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NzE3NzQ2L3Bob3Rv/L2VzcHJlc3NvLWNv/ZmZlZS1jdXAtY29s/b3ItaW1hZ2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUxH/ZVlsTTBoMzFyYlFk/RmdZZHQ4ODM4Nmx3/NzFwVS02SThfeTVY/RE5YdjQ9', alt: 'Coffee', name: 'Coffee', category: 'Beverages', subcategory: '',price: 99 },
    { src: 'https://www.staterbros.com/wp-content/uploads/2023/01/DessertCroissantLarge_C002_SB.png', alt: 'Croissant', name: 'Croissant', category: 'Starters', subcategory: ' ' , price: 479},
    { src: 'https://imgs.search.brave.com/FuYPwCqFYn2vkoDs-6kxN7g7B9urpioml8wBoK2fAnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzExL3BhbmVlci10/aWtrYS53ZWJw', alt: 'Panner Tika', name: 'Panner Tikka', category: 'Starters', subcategory: ' ' , price: 499},
    { src: 'https://imgs.search.brave.com/ji7oMj19ZJulPH155XPLpkb2w4mNSCSoket9nk19VJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVuZm9vZGZyb2xp/Yy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDgvU295/YS1DaGFhcC0xLmpw/Zw', alt: 'Soya Chaap', name: 'Soya Chaap', category: 'Starters', subcategory: ' ' , price: 799},
    { src: 'https://imgs.search.brave.com/Ig34qYUwLakfvt-Yk85Ytz8xuGbBpVTcFqmyyrAhn_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb29k/LmZuci5zbmRpbWcu/Y29tL2NvbnRlbnQv/ZGFtL2ltYWdlcy9m/b29kL2Z1bGxzZXQv/MjAyMS8wMi8wNS9C/YWtlZC1GZXRhLVBh/c3RhLTRfczR4My5q/cGcucmVuZC5oZ3R2/Y29tLjc5MS42MzMu/c3VmZml4LzE2MTU5/MTY1MjQ1NjcuanBl/Zw', alt: 'Pasta', name: 'Pasta', category: 'Starters', subcategory: ' ' , price: 399},
    { src: 'https://images.picxy.com/cache/2020/7/11/544810bdd17aba461bff2d596a472d32.jpg', alt: 'Main Course Dish', name: 'Main Course Dish', category: 'Main Course' , price: 239},
    { src: 'https://imgs.search.brave.com/ZJu7H53WvR3tpAq8B2bWT7OHhZ1Es_WPOmniHdCEAyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbWVkaXRlcnJh/bmVhbmRpc2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAzL0dyZWVrLUxl/bW9uLVJpY2UtUmVj/aXBlLTEuanBn', alt: 'Lemon Rice', name: 'Lemon Rice', category: 'Main Course' , price: 379},
    { src: 'https://imgs.search.brave.com/varrhqGBHemHfDCKRNSkz7iiG8X2hTZj78B55f7BEjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzI0LzM1Lzg3/LzM2MF9GXzgyNDM1/ODcxMl8zMnhHQTMw/WTFYTmVnWXE1ME16/Rk1HQkpoeWswNFB5/di5qcGc', alt: 'Shahi Panner', name: 'Shahi Panner', category: 'Main Course' , price: 789},
    { src: 'https://imgs.search.brave.com/35-FEhkCecHDTxR8Tj0hm1V7Q4i42YgUFuJsDfa2HXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFybGFkYWxhbC5j/b20vdGRfY29udF9p/bWcvVGF2YS1QYW5l/ZXIuSlBH', alt: 'Allo ki Sabji', name: 'Allo ki Sabji', category: 'Main Course', price: 569 },
    { src: 'https://imgs.search.brave.com/_4zBywmcGnI4FWagQeM5sJ2AJqNFs4cMCa-Mt4FTd4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/NDg0NDQ0MC9waG90/by9yb3RpLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz14aTkz/NV9xWVFTWGV3cURh/VUlkeE51bFpOYmRC/aElUb2gxYTc5OHRk/SWNVPQ', alt: 'Roti', name: 'Roti', category: 'Main Course' , price: 159},
    { src: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/06/LINK-TRAFFIC-18.jpg?im=AspectCrop=(16,9);Resize,width=742;', alt: 'Cheesecake', name: 'Cheesecake', category: 'Dessert', subcategory: '' , price: 459},
    { src: 'https://imgs.search.brave.com/_AXcCwCYdX-SyIUF24ZOHUXNqlcG9-mS2TN4jcPF31M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aG9tZW1hZGUtaW5k/aWFuLWRlc3NlcnQt/Z3VsYWItamFtdW4t/djAtZzBiN2V3MDEx/b3g5MS5qcGc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9ZjVkMmM1/M2Q3NjcxMDI0MTQy/ZWJmNzA4MjIzN2Vm/MTkwMDU5OTg4MQ', alt: 'Gulab Jamun', name: 'Gulab Jamun', category: 'Dessert', subcategory: '',price: 899 },
    { src: 'https://imgs.search.brave.com/bc9m-7UHV2D5G8mYdFVnmAZOhEuffPiAv5_RkvtA48c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/OC8xNi8yMi81OS9p/Y2UtY3JlYW0tMzYx/MTY5OF82NDAuanBn', alt: 'Ice Cream', name: 'Ice Cream', category: 'Dessert', subcategory: '' , price: 299},
    { src: 'https://imgs.search.brave.com/npy0-mD14l2jWDnQKcUSjHfV9Ka1vv_XgPI40hhHDQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y3VwY2FrZS1jcmVh/bS1jaGVlc2UtaWNp/bmcuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA', alt: 'Cup cake', name: 'Cup Cake', category: 'Dessert', subcategory: '' , price: 79},
    { src: 'https://imgs.search.brave.com/r1GTCDFl3id2P0HzThVGkGVbFCBQChlJGyeUNEUogL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/MzcxOTU0Ni9waG90/by9nYWphci1rYS1o/YWx3YS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bl9YbG1h/UXd0TldIRTB1YlpK/MXJrT0F5VjJGOFd1/MV9KLW5OXzRrTllQ/OD0', alt: 'Halwa', name: 'Halwa', category: 'Dessert', subcategory: '' , price: 259},
  ];

  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div className="special-order">
      <h2>Special Orders</h2>

      {/* Notification Popup */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      {categories.map((category, index) => {
        const categoryItems = items.filter(item => item.category === category);
        const subcategories = [...new Set(categoryItems.map(item => item.subcategory))];

        return (
          <div key={index} className="category-section">
            <h3 onClick={() => toggleCategory(category)} style={{ cursor: 'pointer' }}>
              {category} {expandedCategory === category ? '-' : '+'}
            </h3>

            {expandedCategory === category && (
              subcategories.map((subcategory, idx) => (
                <div key={idx} className="subcategory-section">
                  <h4>{subcategory || "No Subcategory"}</h4>
                  <div className="images">
                    {categoryItems
                      .filter(item => item.subcategory === subcategory || subcategory === '')
                      .map((item, itemIdx) => (
                        <div key={itemIdx} className="image-container">
                          <img src={item.src} alt={item.alt} />
                          <p>{item.name}</p>
                          <p>Price: Rs. {item.price}</p>
                          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SpecialOrder;