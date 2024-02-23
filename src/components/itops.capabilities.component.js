import React, { useState } from 'react';

const ItOpsCapabilities = () => {
  const buttonNames = ['Managing resources', 'Optimizing IT infrastructure', 'Ensuring application performance', 'Service desk support', 'Incident and security management', 'Problem-solving'];

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
        return "Allocating and monitoring IT resources is critical for a successful IT operation. Many factors must be considered when allocating resources, including the business goals and mission of the organization, the level of service required, and the availability of resources. Managers must also monitor the performance of IT resources to ensure that they are used efficiently and in accordance with business goals.";
      
      case 1:
        return "Optimizing IT infrastructure IT operations are critical to the success of any business. By optimizing the IT infrastructure, your business can improve its efficiency, reduce costs, and improve its responsiveness to customer needs. In addition, optimizing your IT infrastructure can help protect against cyberattacks. System performance can be improved by implementing performance tuning mechanisms, optimizing system architecture, and deploying hardware and software that is optimized for the specific workloads and system requirements. System architecture can be optimized by incorporating features such as load balancers, distributed file systems, and optimized network infrastructure."
      
      case 2:
        return "The support desk operations position is responsible for providing customer service, resolving technical issues, and maintaining the support desk infrastructure. This position frequently liaises with other departments, including sales, marketing, and technical support. This position also oversees the day-to-day operations of the support desk, ensuring that all customer requests are processed in a timely and effective manner."
      
      case 3:
        return "Blockchain security audits and testing involve the evaluation of a blockchain system to identify potential risks and vulnerabilities. This involves analyzing the code, architecture, and implementation of the system to identify potential weaknesses and bugs, as well as any security measures that should be taken. Testing may also be done to ensure the security of the system, and to verify that it is functioning as expected. Additionally, blockchain security audits and testing can be used to identify any potential compliance issues with applicable regulations or laws."
      
      case 4:
        return "An incident or security management IT ops process focuses on detecting, investigating and managing security incidents, protecting information assets and ensuring regulatory compliance. Incident response and security management IT ops strategies. Security measures include protective measures used to protect an organization’s assets from unauthorized access, use, or destruction. Security personnel include employees who are responsible for protecting an organization’s assets from unauthorized access, use, or destruction."
      
      case 5:
        return "Problem-solving IT operations (IT ops) is a process of systematically and proactively addressing issues and problems that can impact the organization’s IT systems and infrastructure. The goal is to minimize the impact of problems, minimize the time needed to address problems, and reduce the overall cost of addressing problems."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>RESPONSIBILITIES OF ITOPS</h6>
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

export default ItOpsCapabilities;
