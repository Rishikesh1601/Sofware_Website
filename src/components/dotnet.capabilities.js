import React, { useState } from 'react';

const DotNetCapabilities = () => {
  const buttonNames = ['Custom Development', 'Integration Services', 'Maintenance and Support', 'Application Modernization', 'Migration Services', 'Performance Optimization'];

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
        return "Dreamz specializes in providing bespoke .NET development services meticulously crafted to meet the unique requirements of each client. Our offerings include the development of custom web applications, desktop applications, and mobile applications leveraging the latest .NET technologies. Partner with Dreamz to transform your vision into reality with tailor-made .NET solutions designed to drive your business forward.";
      
      case 1:
        return "Dreamz provides seamless .NET integration services enabling clients to effortlessly integrate their current systems and applications with advanced .NET technologies. Our services encompass integrating with third-party tools and services, as well as seamlessly integrating with various platforms and frameworks. Trust Dreamz to optimize your business processes with expert .NET integration solutions tailored to your unique requirements."
      
      case 2:
        return "Dreamz delivers reliable .NET maintenance and support services to ensure the smooth functioning and up-to-date performance of clients' applications. Our services include regular maintenance, updates, bug fixing, and troubleshooting to address any issues promptly. Count on Dreamz for proactive support and maintenance to keep your .NET applications running smoothly."
      
      case 3:
        return "Dreamz provides .NET application modernization services to clients who need to update their legacy applications to the latest .NET technologies. This includes analyzing clients’ existing applications, identifying areas that need improvement, and modernizing the application to meet current business needs and stay competitive."
      
      case 4:
        return "Dreamz offers comprehensive .NET migration services to clients seeking to transition their existing applications to .NET technologies seamlessly. Our process involves meticulous analysis of clients' current applications, determining the optimal migration approach, and executing the migration plan with precision. Trust Dreamz to facilitate a smooth and efficient transition to .NET, ensuring enhanced performance and scalability for your applications."
      
      case 5:
        return "Dreamz offers .NET performance optimization services to clients who need to improve the performance of their applications. This includes analyzing clients’ existing applications, identifying performance issues, and implementing optimization strategies to improve application speed, scalability, and reliability."
      
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

export default DotNetCapabilities;
