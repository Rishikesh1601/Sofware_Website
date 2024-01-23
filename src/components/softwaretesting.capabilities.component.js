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
        return "Automated testing services are designed to automate the process of running tests on software applications. By automating the testing process, developers and Quality Assurance (QA) teams can ensure that their software meets the highest standards of quality and is ready to launch. Automated testing services can be used to test a wide variety of software applications, including web applications, mobile apps, games, enterprise applications, and more.";
      
      case 1:
        return "Manual software testing is the process of manually testing software for defects. It requires a tester to play the role of an end-user and use most of all features of the application to ensure correct behavior. To ensure completeness of testing, the tester often follows a written test plan that leads them through a set of important test cases. Manual software testing is the most laborious and time consuming of all testing types. It can be performed at any stage of the software development process and is usually done at the end of the development cycle. Although manual testing is an important part of the software development process."
      
      case 2:
        return "Penetration testing services are designed to help organizations identify and mitigate potential security vulnerabilities. These services provide detailed assessments and reports of identified issues, and can provide recommendations for remediating any identified security weaknesses. Depending on the scope of the engagement, these services may include network penetration testing, application penetration testing, wireless penetration testing."
      
      case 3:
        return "Performance Testing Services involve testing the speed, scalability and stability of an application, system or network. This type of testing is used to ensure that the application meets its performance requirements. Performance testing services can include load testing, stress testing, volume testing, endurance testing, and more. These tests are conducted to evaluate if the application can handle the expected user load and traffic."
      
      case 4:
        return "API testing is the process of testing application programming interfaces (APIs) to make sure they meet expectations for functionality, performance, reliability, and security. API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security."
      
      case 5:
        return "Automated mobile app testing is the use of automated tools to execute tests on a mobile app. These tools help identify and fix any bugs or issues with the app before it goes live. Automated testing can help save time and money, as manual testing of mobile apps can be very time-consuming and expensive. Automated tests can also be used to better understand the user experience and identify usability issues. Commonly used automated mobile app testing tools include Appium, TestFairy, and Robotium."
      
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

export default SoftwareTestingCapabilities;
