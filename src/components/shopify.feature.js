// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const ShopifyFeature = () => {
  const cardData = [
    { number: '01', title: 'Customizing the store', paragraph: "Customizing the store involves modifying the look, feel, and functionality of the store to meet the needs of a specific business. This includes adding custom themes, changing page layouts, adding payment options, integrating third-party services such as shipping providers or accounting software, and more. shopify development company customizing a shop can take time depending on how complex the changes are but it allows for a unique shopping experience for customers." },
    { number: '02', title: 'Creating integrations', paragraph: "Creating integrations is another important part of Shopify development. Integrations allow merchants to connect their stores with other services or platforms such as accounting software or social media networks. Shopify development company helps streamline processes such as managing orders or marketing campaigns across multiple platforms. Creating integrations requires knowledge of APIs (Application Programming Interfaces) which allow two systems to communicate with each other in order to exchange data or perform actions on each other’s behalf." },
    { number: '03', title: 'Developing applications', paragraph: "The final area within Shopify development is creating applications that extend the functionality of a store beyond what is available out-of-the-box from Shopify itself. These apps can be used for anything from marketing automation to customer service tools or even custom checkout flows tailored towards specific audiences or regions. Developing apps requires knowledge of web technologies such as HTML/CSS/JavaScript as well as programming languages like Ruby on Rails or NodeJS depending on what type of app you are building."},
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Shopify Development Analysis</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default ShopifyFeature;
