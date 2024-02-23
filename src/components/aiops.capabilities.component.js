import React, { useState } from 'react';

const AIopsCapabilities = () => {
  const buttonNames = ['Automate routine practices', 'Greater accuracy', 'Ensuring application performance'];

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
        return "AI for IT operations can automate routine practices such as system monitoring, automated patching, incident response, log analysis and more. AI-driven automation can reduce the amount of manual labor needed to complete tasks such as system maintenance and troubleshooting, allowing IT teams to focus on more strategic tasks. AI can also provide insights into system performance and alert IT teams to potential issues before they become bigger problems.";
      
      case 1:
        return "Artificial Intelligence for IT Operations (AIOps) can be used to provide greater accuracy and efficiency when it comes to IT operations. AIOps uses algorithms and machine learning to identify patterns and correlations in data, and then uses these to detect anomalies, predict issues, and recommend solutions. This helps to reduce IT costs, improve service performance, and ensure compliance with regulatory requirements. Additionally, AIOps can automate routine IT maintenance tasks, freeing up resources for more complex tasks."
      
      case 2:
        return "AI for IT Operations is an AI-powered platform that enables IT operations teams to quickly and accurately answer operational queries. It uses machine learning algorithms to analyze operational data from multiple sources in order to identify patterns, detect anomalies, and provide meaningful insights. AI-powered solutions help IT operations teams optimize their performance, reduce costs, and increase efficiency."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Why AIOPS Solutions</h6>
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

export default AIopsCapabilities;
