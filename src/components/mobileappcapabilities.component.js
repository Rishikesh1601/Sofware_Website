import React, { useState } from 'react';

const MobileAppCapabilities = () => {
  const buttonNames = ['Ecommerce App Development', 'Enterprise App Development', 'Hybrid App Development', 'Cross-Platform App Development', 'Web Progressive App', 'Full Stack Web Development'];

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
        return "Ecommerce app development is becoming increasingly popular for businesses looking to expand their reach and customer base. It allows customers to shop from anywhere, anytime, making shopping easier and more convenient. Additionally, ecommerce apps can provide businesses with a variety of features that can help increase sales and customer engagement, such as push notifications, loyalty programs, and secure payment processing.";
      
      case 1:
        return "The need for enterprise app development is growing as businesses are increasingly turning to mobile solutions to help streamline their processes, reduce operational costs, and improve customer experience. Enterprise apps can help streamline and automate processes, reducing manual labor and time spent on tasks, thereby improving efficiency. This can ultimately lead to increased productivity, reduced operational costs, and increased customer satisfaction. Enterprise apps can help facilitate communication between teams, departments, and customers. This can help to improve collaboration, leading to better customer service and increased customer satisfaction."
      
      case 2:
        return "Hybrid app development is a process of creating mobile applications that run on multiple platforms such as iOS, Android and Windows. Hybrid apps are basically web-based applications that are built using HTML, CSS and JavaScript and are then wrapped in a native container. The native container allows the app to access device features like GPS, camera, contacts, accelerometer and more."
      
      case 3:
        return "Cross-platform app development refers to the process of developing applications that can be used across multiple platforms, such as iOS, Android, and Windows. This type of development is often necessary to ensure that apps are accessible to the widest range of users possible. It can also reduce the need for multiple code bases and help streamline the development process."
      
      case 4:
        return "PWA (Progressive Web Apps) are web applications that use modern web technologies and design principles to deliver a mobile app-like experience to users. These apps are designed to work on any device, including smartphones, tablets, and desktops, without any installation or downloads. They are built with technologies such as HTML, CSS, and JavaScript, and are typically hosted on a web server."
      
      case 5:
        return "Custom mobile app development is the process of creating a custom, tailored mobile application to meet the specific needs of a business or organization. Custom mobile apps can include anything from customer relationship management (CRM) tools, to eCommerce platforms, to productivity apps, to data-tracking and analytics tools, and more. These apps are typically developed for use on a variety of mobile devices and operating systems, such as iOS, Android, and Windows."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Dreamz as a Mobile App Services</h6>
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

export default MobileAppCapabilities;
