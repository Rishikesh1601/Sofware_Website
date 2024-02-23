import React, { useState } from 'react';

const ApiCapabilities = () => {
  const buttonNames = ['Custom API Development', 'Third-party API Integrations', 'API Testing Automation', 'Payment API Integration', 'Web Application API Development', 'Cloud API Services'];

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
        return "Custom API development helps businesses create solutions that are tailored to their specific needs. It’s a process that involves developing APIs from scratch, or customizing existing APIs to meet the needs of the business. The process of custom API development involves creating the API architecture, designing the API endpoints, and integrating the API with the necessary systems. It also includes testing the API to ensure it meets the business’s requirements and that the data is secure and reliable.";
      
      case 1:
        return "Third-party API integrations allow businesses to easily access data, functionality and services from external sources. This type of integration helps businesses build complex systems and expand their capabilities in a cost-effective and timely manner. Examples of third-party API integrations include payment gateways, social media data, email services, customer relationship management (CRM) systems, and more."
      
      case 2:
        return "API testing automation is the process of using automated scripts and tools to test application programming interfaces (APIs) to ensure they are functioning correctly. It is an important part of the software development life cycle (SDLC) and can help ensure that APIs are functioning properly, performing optimally, and are secure. By automating API testing, developers can save time and money, reduce the number of manual testing cycles, and increase the quality of the product."
      
      case 3:
        return "We provide secure, reliable, and hassle-free Payment API integration services to businesses of all sizes. Our experienced and certified developers can help you integrate your existing payment gateway or develop a new one that meets your requirements. Our Payment API integration services include features such as payment processing, fraud prevention, credit card and debit card processing, bank transfer processing, and more. We have extensive experience in integrating various payment solutions including PayPal, Stripe, Authorize.net, and many more."
      
      case 4:
        return "Web Application API Development is the process of developing application programming interfaces (APIs) for web applications. An API is a set of protocols, routines, and tools for building software applications. It defines how different components of a web application interact with each other. Web application APIs provide a way for web applications to interact with other web applications, web services, and databases. They are commonly used to integrate web applications with external systems, such as payment processors, social media platforms, and third-party services. They also provide an easy way for developers to add features and functionality to their web applications."
      
      case 5:
        return "Cloud API Services are web services that allow applications to access cloud-based applications and data. They allow organizations to access cloud-based services, such as databases, storage, compute, and analytics, without having to install and manage the underlying infrastructure. Cloud API Services are a key component of cloud computing, allowing applications to access and interact with cloud-based services through a set of programming interfaces and protocols."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>API Integration Services</h6>
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
        <p className="text-gray-700">{displayText}</p>
      </div>
      )}
    </div>
  );
};

export default ApiCapabilities;
