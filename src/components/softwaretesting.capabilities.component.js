import React, { useState } from 'react';

const SoftwareTestingCapabilities = () => {
  const buttonNames = ['Automated Testing Services', 'Manual Software Testing', 'Penetration Testing Services', 'Performance Testing Services', 'API Testing', 'Automated Mobile App Testing'];

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
        return "Automated testing services streamline the testing of software applications by automating test execution. This approach enables developers and Quality Assurance (QA) teams to verify software quality efficiently, ensuring readiness for launch. These services are versatile, suitable for testing various applications like web apps, mobile apps, games, and enterprise solutions.";
      
      case 1:
        return "Manual software testing involves the manual examination of software for defects, with testers acting as end-users to verify correct behavior. Testers typically follow a written test plan, executing important test cases to ensure thorough testing. This method, though laborious and time-consuming, is integral to the software development process, ensuring quality at any stage. Manual testing is often conducted towards the end of the development cycle to assess software readiness."
      
      case 2:
        return "Penetration testing services aim to assist organizations in pinpointing and addressing potential security vulnerabilities. These services entail comprehensive assessments and reports, detailing identified issues and offering remediation recommendations. Depending on the scope, services may cover network, application, and wireless penetration testing."
      
      case 3:
        return "Performance Testing Services assess the speed, scalability, and stability of applications, systems, or networks to ensure they meet performance requirements. These services encompass various tests like load testing, stress testing, volume testing, and endurance testing. The goal is to evaluate if the application can effectively manage anticipated user load and traffic."
      
      case 4:
        return "API testing involves evaluating application programming interfaces (APIs) to ensure they meet predefined criteria for functionality, reliability, performance, and security. It is a type of software testing that examines APIs directly and as part of integration testing to ascertain their effectiveness in meeting these expectations."
      
      case 5:
        return "Automated mobile app testing involves utilizing automated tools to execute tests on a mobile app, aiding in identifying and resolving bugs or issues before the app's launch. This approach saves time and money compared to manual testing, which can be laborious and costly. Automated tests also provide insights into the user experience and usability issues. Popular tools for automated mobile app testing include Appium, TestFairy, and Robotium."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Dreamz as a Quality Assurance Services</h6>
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

export default SoftwareTestingCapabilities;
