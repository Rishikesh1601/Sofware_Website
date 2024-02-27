import React, { useState } from 'react';

const ShopifyCapabilities = () => {
  const buttonNames = ['Customizable themes', 'Powerful ecommerce tools', 'Analytics to track sales', 'Tools for marketing', 'Multiple languages', 'Mobile app for managing store'];

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
        return "Shopify has a wide range of customizable themes to choose from. These themes allow you to customize the look and feel of your store, including fonts, colors, and page layouts. You can also add additional features such as product filters, product reviews, and more. With Shopify’s drag-and-drop editor, you can easily tweak your store’s design without any coding knowledge.";
      
      case 1:
        return "Shopify is a powerful ecommerce platform that provides businesses with the tools they need to create and manage their online stores. Shopify offers a wide range of features, including product management, payment processing, marketing tools, analytics, and more. It also provides 24/7 support and access to hundreds of apps to help you customize your store. With Shopify, you can easily set up an online store in minutes and start selling products quickly."
      
      case 2:
        return "Shopify Analytics is a powerful tool that allows you to track and analyze your store’s sales, customers, products, and more. With Shopify Analytics you can gain insight into which products are selling best, which customers are purchasing the most, and which marketing campaigns are driving the most revenue. You can also use the data to detect trends in customer behavior and identify opportunities for improvement."
      
      case 3:
        return "This is a powerful tool for sending automated emails to customers. It allows you to customize messages, create targeted campaigns, and track the performance of your emails. Shopify enables customers to leave reviews on products they’ve purchased from your store and helps build trust with potential buyers. Real time Chat is also available on shopify."
      
      case 4:
        return "Shopify supports multiple languages and currencies out of the box. Merchants can add additional languages in their store’s settings, and customers can switch between them using a drop-down menu in the top right corner of the page. Shopify also allows merchants to set up multiple currencies and provide localized pricing for each currency. Customers can then choose which currency they want to use when checking out."
      
      case 5:
        return "Yes, there is a Shopify Mobile app available for managing your store. The app allows you to manage orders, products, customers and analytics on the go. It is available for both iOS and Android devices. Dreamz shopify development company can also build mobile app of your store. "
      
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

export default ShopifyCapabilities;
