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
        return "WordPress Development involves the creation, customization, and maintenance of websites and applications using the WordPress content management system (CMS). As an open-source platform, WordPress enables developers to craft user-friendly, easily maintainable, and updatable websites and applications. Services in WordPress development encompass custom theme and plugin development, search engine optimization (SEO), website security, hosting, maintenance, and more.";
      
      case 1:
        return "Custom Website Development involves creating a website uniquely tailored to a company or client's requirements. This process encompasses designing, coding, and deploying a custom website specifically crafted to address the organization's distinct needs. The development journey typically includes planning, designing, coding, testing, and deployment stages. Custom website development serves various purposes such as establishing an online presence, enhancing customer service, or enabling ecommerce functionalities. Our custom websites are responsive and optimized for both desktop and mobile viewing. Additionally, we offer custom web applications that optimize business operations. Understanding the uniqueness of each business, we strive to deliver tailored web development solutions that precisely meet individual needs."
      
      case 2:
        return "OpenCart Development involves leveraging the OpenCart open-source e-commerce platform to establish online stores and shopping carts. Renowned for its user-friendliness, rich feature set, and extensive customization options, OpenCart empowers business owners to tailor their online stores to meet specific needs. It's an ideal solution for businesses seeking a quick and straightforward online store setup. Our proficient team of OpenCart developers excels in creating stunning online stores tailored to your requirements."
      
      case 3:
        return "eCommerce Development encompasses designing, building, and maintaining an online store, enabling customers to conveniently purchase products or services from anywhere. This process involves creating websites or apps tailored for seamless transactions. Key components of eCommerce development include website design and development, payment gateway integration, hosting, content management, and customer support, ensuring a comprehensive online shopping experience."
      
      case 4:
        return "A Progressive Web App (PWA) is a web application leveraging modern web technologies to offer users an app-like experience. It merges the strengths of web and mobile apps, delivering an immersive experience without necessitating a download from an app store. PWAs are engineered to function across various platforms with standards-compliant browsers, ensuring compatibility with both desktop and mobile devices."
      
      case 5:
        return "Full stack web development refers to a web developer proficient in both front-end and back-end development. Such developers possess expertise across all layers of web development, encompassing client-side, server-side, database, network, and user interface elements. Responsible for the entire lifecycle of web application development, full stack web developers handle tasks from coding to testing and deployment."
      
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

export default WebDevCapabilities;
