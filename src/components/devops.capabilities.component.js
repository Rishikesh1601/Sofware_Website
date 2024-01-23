import React, { useState } from 'react';

const DevOpsCapabilities = () => {
  const buttonNames = ['Automation', 'Continuous Integration/Continuous Delivery (CI/CD)', 'Infrastructure as Code (IaC)', 'Monitoring and Logging', 'Security', 'Monitoring and Logging'];

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
        return "We provide automation solutions for our clients’ applications and environments, allowing them to improve their efficiency and reduce manual effort. Our automation solutions can help our clients to reduce risk, improve quality and speed up time to market.";
      
      case 1:
        return "We offer CI/CD solutions that help our clients to integrate changes into their applications quickly and easily. We provide end-to-end solutions to automate the release process, including build, test and deployment."
      
      case 2:
        return "We provide IaC solutions that allow our clients to define their infrastructure as code, making it easier to manage and deploy applications."
      
      case 3:
        return "We offer monitoring and logging solutions that help our clients to monitor their applications and infrastructure in real-time. We provide solutions to collect and analyze logs, giving our clients insight into their systems."
      
      case 4:
        return "We provide comprehensive security solutions to ensure our clients’ applications and data are secure. Our solutions include security best practices and tools to identify and remediate vulnerabilities."
      
      case 5:
        return "We provide robust monitoring & auditing infrastructure service engaging the latest tools like NewRelic, Datadog, & Cloudwatch to make your operations teams work together closely and transparently."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>DevOps As a Services</h6>
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

export default DevOpsCapabilities;
