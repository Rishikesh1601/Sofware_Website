// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const WooCommerceFeature = () => {
  const cardData = [
    { number: '01', title: 'User-Friendly Interface', paragraph: "WooCommerce provides an intuitive and user-friendly dashboard, making it easy to manage products, orders, and customers, even for those without technical expertise." },
    { number: '02', title: 'Customizable Design', paragraph: "You can customize the look and feel of your online store with various themes and templates. Tailor your store’s appearance to match your brand’s identity." },
    { number: '03', title: 'Product Management', paragraph: "Easily add, edit, and categorize products. WooCommerce supports various product types, including simple, variable, downloadable, and virtual products."},
    { number: '04', title: 'Inventory Management', paragraph: "Keep track of your stock levels, get low-stock alerts, and manage your inventory efficiently to avoid overselling or running out of products."},
    { number: '05', title: 'Secure Checkout', paragraph: "WooCommerce offers a secure and seamless checkout process, including options for one-page checkout and guest checkout, enhancing the user experience."},
    { number: '06', title: 'Payment Gateways', paragraph: "It supports a wide range of payment gateways, including PayPal, Stripe, Square, and more, allowing you to offer multiple payment options to your customers."},
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Woocommerce Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default WooCommerceFeature;
