import React, { useState } from 'react';

const WebDevCapabilities = () => {
  const buttonNames = ['WordPress Development', 'Custom Website Development', 'OpenCart Development', 'eCommerce Development', 'Web Progressive App', 'Full Stack Web Development'];

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
        return "WordPress development is the process of creating, customizing, and maintaining websites and applications using the WordPress content management system (CMS). WordPress is an open-source CMS platform that allows developers to create websites and applications that are easy to use, maintain and update. WordPress development services include custom theme and plugin development, search engine optimization (SEO), website security, website hosting, website maintenance, and more. ";
      
      case 1:
        return "Custom website development is a process of creating a website that is tailored to meet the individual needs of a company or client. This type of website creation involves designing, coding, and deploying a custom website that is tailored to the specific needs of the individual organization. The development process typically includes the following steps: planning, designing, coding, testing, and deployment. Custom website development can be used to create an online presence for a company, improve customer service, or provide an ecommerce platform. We create custom websites that can be viewed on any device and are optimized for both desktop and mobile. We can create custom web applications that streamline the way your business works. we understand that each business is unique and we strive to provide the most tailored web development solutions that meet your individual needs."
      
      case 2:
        return "Opencart is an open source e-commerce platform that is used to create online stores and shopping carts. It is easy to use, feature rich and provides a wide range of features and customization options to create an online store that meets the needs of business owners. Opencart is a great solution for businesses looking to create an online store quickly and easily. We have a team of highly skilled Opencart developers who can help you create a stunning online store."
      
      case 3:
        return "eCommerce development is the process of designing, building, and maintaining an online store. It involves creating a website or an app to enable customers to purchase products or services from the comfort of their homes or on the go. eCommerce development typically includes a variety of different processes such as website design and development, payment gateway integration, hosting, content management, and customer support."
      
      case 4:
        return "A Progressive Web App (PWA) is a web application that uses modern web technologies to deliver an app-like experience to users. It combines the best of both web and mobile apps by providing users with an app-like experience without requiring them to download an app from an app store. PWAs are designed to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices."
      
      case 5:
        return "Full stack web development is a term used to describe a web developer who specializes in both front-end and back-end development. A full stack web developer is well-versed in all the layers of web development, including the client-side, server-side, database, network, and user interface layers. A full stack web developer is often responsible for developing the entire web application from start to finish, including coding, testing, and deploying."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Dreamz As a Web Services</h6>
        </div>
      <div className="mb-4">
        {buttonNames.map((buttonName, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`px-4 py-2 rounded-xl mr-2 mb-2 ${
                activeButton === index
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 text-white shadow-md'
                  : 'filter grayscale hover:grayscale-0 bg-gray-300 text-gray-700 shadow-sm'
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
        <p className="text-gray-700">{displayText}</p>
      </div>
      )}
    </div>
  );
};

export default WebDevCapabilities;
