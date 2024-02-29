import React, { useState } from 'react';

const OpenCartCapabilities = () => {
  const buttonNames = ['Customizable themes', 'Powerful ecommerce tools', 'Inbuild Sales Track', 'Tools for marketing', 'multiple languages', 'SEO Friendly'];

  const [activeButton, setActiveButton] = useState(null);
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = (index) => {
    setActiveButton(index);

    // Perform any additional actions here with the button text
    const textContent = getTextContent(index);
    setDisplayText(textContent);
  };

  const getTextContent = (index) => {
    // You can customize this function to return different text for each button
    switch (index) {
      case 0:
        return "Dreamz Open Cart development company work with several free and paid themes that you can install on your store. Each theme includes customizable content such as images, text, colors, fonts, etc., which you can customize to fit your brand’s style and personality. Additionally, there are many third-party themes available for purchase that offer even more customization options. OpenCart is an open-source eCommerce platform that allows you to create a fully customizable online store. Themes are the foundation of your store and give it a unique look and feel.";
      
      case 1:
        return "OpenCart is an open source e-commerce platform that provides powerful tools for creating and managing an online store. It is designed to be user-friendly and provides a wide range of features, including product management, order processing, payment gateways, shipping methods, and more. OpenCart also includes support for multiple languages and currencies. With its intuitive interface and comprehensive feature set, OpenCart makes it easy to set up an online store quickly and efficiently."
      
      case 2:
        return "OpenCart has built-in sales tracking which can be accessed from the Reports > Sales section of the admin panel. This feature allows you to view the total number of orders, total sales, average order value, and other useful information. Additionally, you can filter your reports by date range and order status to get more detailed insights into your store’s performance."
      
      case 3:
        return "Abandoned Cart Recovery tool helps to recover abandoned carts by sending automated emails to customers who left products in their shopping cart without making a purchase. Customer Segmentation tool allows you to segment customers into different groups based on their purchase history and other factors so that you can target them with more relevant offers and communications."
      
      case 4:
        return "OpenCart is a free open-source eCommerce platform that provides support for multiple languages and currencies. It allows store owners to easily add language packs and currency options to their stores, giving customers the ability to view and purchase products in their own language and currency. OpenCart also supports multiple payment gateway."
      
      case 5:
        return "Open Cart is a SEO Friendly content management system, designed to help you create and manage an online store. It is a free, open-source platform that allows users to easily set up an online store with minimal effort. Open Cart has a wide range of features including product management, payment gateway integration, multi-currency support, customer reviews and ratings, and more. It also provides a number of built-in SEO tools to help improve your website’s visibility in search engines."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>What we offer</h6>
        </div>
      <div className="mb-4">
        {buttonNames.map((buttonName, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`px-4 py-2 rounded-3xl mr-2 mb-2 ${
              activeButton === index
                ? 'bg-gray-100 text-blue-600 font-semibold border-b-2 border-blue-500'
                : 'bg-gray-300 text-gray-700 shadow-sm border border-gray-300 hover:border-gray-400'
            }`}   
          >
            {buttonName}
          </button>
        ))}
      </div>
      {activeButton !== null && (
        <div className="max-w-md border p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2" style={{
          background: `linear-gradient(115deg, #00c4cc, #6420ff, #7d2ae7)`,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>
          {buttonNames[activeButton]}
        </h2>
        <p className="text-gray-700 text-justify">{displayText}</p>
      </div>
      )}
    </div>
  );
};

export default OpenCartCapabilities;
