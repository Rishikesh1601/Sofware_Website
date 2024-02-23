import React, { useState } from 'react';

const BlockChainCapabilities = () => {
  const buttonNames = ['Consulting and advisory', 'Blockchain development', 'Smart contract development', 'Blockchain security audits and testing', 'Algorithm Analysis', 'Blockchain API Services'];

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
        return "Consulting and advisory blockchain services offer advice and assistance to businesses and organizations that are looking to utilize blockchain technology in their operations. These services can include helping companies define their blockchain strategy, developing blockchain-based applications, and providing training and education on blockchain technology. Additionally, they can help organizations identify and manage regulatory and compliance issues, as well as advise them on how to best use blockchain technology to improve their operations.";
      
      case 1:
        return "Blockchain development is the process of designing, building, and maintaining distributed ledger technology-based applications that leverage blockchain technology. Blockchain applications typically involve the use of a public ledger to securely store, share and manage data, as well as execute digital transactions. Blockchain technology is rapidly evolving, and developers will need to stay up-to-date on the latest advancements in order to keep their applications competitive. Blockchain development requires a high level of expertise in coding and cryptography, as well as a deep understanding of distributed ledger technology. Additionally, developers must have an awareness of the potential legal and regulatory implications of their applications."
      
      case 2:
        return "Smart contract blockchain development is the process of creating secure, self-executing blockchain contracts that can be used for a variety of purposes such as digital asset management, legal agreements, financial transactions, and more. Smart contracts are digital documents that contain code that executes when certain conditions are met."
      
      case 3:
        return "Blockchain security audits and testing involve the evaluation of a blockchain system to identify potential risks and vulnerabilities. This involves analyzing the code, architecture, and implementation of the system to identify potential weaknesses and bugs, as well as any security measures that should be taken. Testing may also be done to ensure the security of the system, and to verify that it is functioning as expected. Additionally, blockchain security audits and testing can be used to identify any potential compliance issues with applicable regulations or laws."
      
      case 4:
        return "The algorithm analysis of this problem would involve analyzing the different operations that are performed and the time complexity of each of those operations. The operations that are performed include reading in the data from the input file, sorting the data, and then outputting the sorted data to a new file."
      
      case 5:
        return "BlockCypher is a blockchain infrastructure provider that offers an API for developers to interact with its blockchain platform. The API can be used to build applications for blockchain payments, asset management, and more. IBM’s Blockchain Platform provides an API that enables developers to build and deploy blockchain applications. The API includes tools for building and managing distributed ledgers, smart contracts, and more."
      
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
        <p className="text-gray-700">{displayText}</p>
      </div>
      )}
    </div>
  );
};

export default BlockChainCapabilities;
