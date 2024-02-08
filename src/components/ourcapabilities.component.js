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
        return "Dreamz is a leading web development agency dedicated to crafting innovative websites tailored to businesses of all sizes. Our extensive suite of services includes website design and development, content management systems, and ecommerce solutions. With a focus on delivering exceptional results, we collaborate closely with our clients to transform their visions into reality.";
      
      case 1:
        return "Dreamz is now available on both Android and iOS devices. Download the app today to seamlessly manage your dreams and goals in one convenient location. Our user-friendly and intuitive app ensures you can dive in and start using it right away."
      
      case 2:
        return "At Dreamz, we recognize the pivotal role a website plays as a vital tool for businesses of all sizes. Our dedicated team is committed to working diligently to craft a tailored website that aligns with your specific needs and objectives."
      
      case 3:
        return "Dreamz provides a diverse array of software and services designed to streamline business operations, boost productivity, and optimize cost-efficiency. With Dreamz, you gain access to an extensive selection of popular software and services, encompassing accounting, project management, customer relationship management (CRM), and beyond."
      
      case 4:
        return "Dreamz is a premier enterprise software development company renowned for crafting bespoke software applications tailored to businesses of all sizes. Our seasoned team of developers, designers, and project managers possesses the expertise to collaborate with you in creating a high-quality product that aligns seamlessly with your business objectives."
      
      case 5:
        return "Our Business Excellence Software is meticulously crafted to enhance your efficiency and productivity. Equipped with robust reporting features, it empowers you to effortlessly pinpoint areas for improvement and implement changes conducive to achieving your business objectives."
      
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
        <p className="text-gray-700 text-justify">{displayText}</p>
      </div>
      )}
    </div>
  );
};

export default ButtonComponent;
