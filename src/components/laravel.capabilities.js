import React, { useState } from 'react';

const LaravelCapabilities = () => {
  const buttonNames = ['Customized Laravel Development', 'Extension Development', 'Enterprise Development', 'eCommerce App Development', 'Web Development', 'Development Team'];

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
        return "DreamzTechnology Solutions has a team of experienced Laravel developers who can help businesses build high-quality web applications using the Laravel framework. Their Laravel development services include custom web application development, enterprise web application development, e-commerce web application development, and more.";
      
      case 1:
        return "DreamzTechnology Solutions is a software development company that offers Laravel extension development services. Laravel is an open-source PHP web application framework that offers a wide range of features and functionalities. Laravel extensions are plugins that can be added to Laravel to extend its functionality. DreamzTech Solutions has a team of experienced Laravel developers who can help businesses develop custom Laravel extensions that are tailored to their specific needs. They can help businesses add new functionalities to their existing Laravel applications or build custom Laravel extensions from scratch."
      
      case 2:
        return "Some of the Laravel enterprise development services that DreamzTechnology Solutions provides include custom web application development, e-commerce web application development, enterprise web application development, and more. They can help businesses build high-quality web applications that are scalable, secure, and easy to maintain."
      
      case 3:
        return "If you are looking for a Laravel eCommerce app development company, DreamzTechnology Solutions may be a good fit for your project. They have a proven track record of delivering high-quality eCommerce applications and have a team of skilled Laravel developers who can help you build a custom solution that meets your business needs."
      
      case 4:
        return "Laravel web development services that DreamzTechnology Solutions provides include custom web application development, enterprise web application development, e-commerce web application development, API development, and more. They have experience working with Laravel versions 5.x to 8.x and can provide ongoing support and maintenance for the web applications they develop."
      
      case 5:
        return "DreamzTech Solutions can provide businesses with a dedicated Laravel development team that can help them build custom web applications using the Laravel framework. The team can work on a project from start to finish, or they can work on specific stages of the project, depending on the client’s needs."
      
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

export default LaravelCapabilities;
