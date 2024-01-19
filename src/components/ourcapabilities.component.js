import React, { useState } from 'react';

const ButtonComponent = () => {
  const buttonNames = ['Enterprises Products', 'Mobile Application', 'Website Development', 'SaaS Development', 'Enterprises Solutions', 'Business Excellence'];

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
        return "Dreamz is a web development agency that specializes in designing and building innovative websites for businesses of all sizes. We provide a comprehensive range of services, from website design and development to content management systems and ecommerce solutions.";
      
      case 1:
        return "Dreamz is available for both Android and iOS devices. Download the app today and start managing your dreams and goals in one place. Our app is designed to be user friendly and intuitive, so you can get started right away."
      
      case 2:
        return "We understand that a website is an essential tool for businesses of all sizes, and we will work hard to create a website that meets your specific needs and objectives."
      
      case 3:
        return "Dreamz offers a wide variety of software and services that can help you manage your business, increase productivity, and save money. With Dreamz, you will get access to a wide range of popular software and services, including accounting, project management, customer relationship management (CRM), and more."
      
      case 4:
        return "Dreamz is an enterprise software development company that specializes in building custom software applications for businesses of all sizes. Our experienced team of developers, designers and project managers can help you create a high–quality product that will achieve your business goals."
      
      case 5:
        return "We develop Business Excellence Software is designed to help you become more efficient and productive. With comprehensive reporting capabilities, you can easily identify areas where you can improve and make changes to help your business reach its goals."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Our Software Capabilities</h6>
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

export default ButtonComponent;
