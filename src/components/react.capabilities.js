import React, { useState } from 'react';

const ReactCapabilities = () => {
  const buttonNames = ['Custom React Application Development', 'Responsive UI/UX Design', 'Front-end', 'React Native', 'Component Library Development', 'Testing and Quality Assurance'];

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
        return "We specialize in building custom web and mobile applications using React. Our team of skilled React developers works closely with you to understand your business requirements and design scalable and intuitive applications tailored to your needs.";
      
      case 1:
        return "Our experienced UI/UX designers create visually stunning and user-friendly interfaces for React applications. We focus on delivering exceptional user experiences by designing intuitive navigation, engaging interactions, and visually appealing layouts."
      
      case 2:
        return "Our expertise shines in front-end development with React, where we leverage cutting-edge technologies and industry best practices to deliver exceptional solutions."
      
      case 3:
        return "With React Native, we specialize in developing cross-platform mobile applications for iOS and Android, leveraging a single codebase for efficient development and seamless deployment."
      
      case 4:
        return "We create reusable React component libraries tailored to your design system and brand guidelines. This allows for consistent UI across multiple projects, faster development, and easier maintenance."
      
      case 5:
        return "We seamlessly integrate React applications with backend services and APIs, guaranteeing smooth data flow and real-time updates for enhanced user experiences."
      
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

export default ReactCapabilities;
