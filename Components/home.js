// import React from 'react';
// import { Link } from 'react-router-dom';
// import resphoto from '../Assets/restaurant_photo.jpg';
// import { FiArrowRight } from 'react-icons/fi';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-banner-container">
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Savor Your Favorite Dishes, Delivered Piping Hot and Incredibly Fresh
//           </h1>
//           <p className="primary-text">
//             Indulge in the ultimate dining experience from the comfort of your home. 
//             Our expertly prepared meals arrive at your doorstep, ensuring each bite 
//             is as delicious and fresh as if you were dining with us in person.
//           </p>
          
//             <button className="secondary-button">
//             <Link to="/special-order">Order Now <FiArrowRight /></Link>
//             </button>
          
//         </div>
//         <div className="rounded-image">
//           <img src={resphoto} alt="Restaurant" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import resphoto from '../Assets/restaurant_photo.jpg';
import { FiArrowRight } from 'react-icons/fi';
import { AuthContext } from '../Components/AuthContext'; // Ensure the path matches

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOrderNow = () => {
    if (isAuthenticated) {
      navigate('/special-order');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Savor Your Favorite Dishes, Delivered Piping Hot and Incredibly Fresh
          </h1>
          <p className="primary-text">
            Indulge in the ultimate dining experience from the comfort of your home. 
            Our expertly prepared meals arrive at your doorstep, ensuring each bite 
            is as delicious and fresh as if you were dining with us in person.
          </p>
          <button className="secondary-button" onClick={handleOrderNow}>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="rounded-image">
          <img src={resphoto} alt="Restaurant" />
        </div>
      </div>
    </div>
  );
};

export default Home;
