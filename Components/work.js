import React, { useState } from 'react';
import MenuImage from "../Assets/pick-meals-image.png";

const Work = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuChartUrl = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-menu-for-cafeteria%2C-restaurant-%26-canteen-design-template-d565ba9d91e1c5c38ddfa9ccd3d37455_screen.jpg?ts=1697230971";

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <h1 className='primary-subheading'>How It Works</h1>
                <p className='primaries-text'>
                    Our restaurant website makes dining easy and delightful from the moment you visit.
                    Explore our beautifully crafted menu with high-quality images and detailed descriptions
                    that will tantalize your taste buds. Easily make reservations through our seamless booking
                    system, ensuring your table is ready when you arrive. Order online for a quick and convenient
                    takeaway or delivery experience, perfect for busy days or cozy nights in. Stay updated with our
                    latest promotions and events, and join our loyalty program for exclusive rewards. Discover the
                    perfect blend of convenience and culinary excellence with every click.
                </p>
            </div>
            <div className='work-section-bottom'>
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={MenuImage} alt="Menu" />
                    </div>
                    <h2>
                        Show Menu
                        <span onClick={handleMenuToggle} style={{ cursor: 'pointer' }}>
                            {isMenuOpen ? '−' : '+'}
                        </span>
                    </h2>
                    {isMenuOpen && (
                        <div className='menu-chart'>
                            <img src={menuChartUrl} alt="Menu Chart" className='menu-chart-image' />
                        </div>
                    )}
                </div>
            </div>
            <div className='fastest-delivery-fact'>
                <h2>Fun Fact: Fastest Delivery</h2>
                <p>We pride ourselves on offering the fastest delivery service in the area. Our dedicated team ensures that your food arrives piping hot and fresh, often within 30 minutes of placing your order. Experience the convenience and reliability of our rapid delivery network, designed to bring you exceptional dining experiences right to your doorstep.</p>
            </div>
        </div>
    );
};

export default Work;
