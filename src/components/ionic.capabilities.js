import React, { useState } from 'react';

const IonicCapabilities = () => {
  const buttonNames = ['Ionic App Development', 'Custom Mobile App Development', 'UI/UX Design', 'Cross-Platform Compatibility', 'Plugin Integration', 'Performance Optimization'];

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
        return "Leverage the power of the Ionic framework to create versatile mobile applications that effortlessly span across iOS, Android, and web platforms, ensuring maximum reach and accessibility for your audience.";
      
      case 1:
        return "Craft bespoke mobile applications meticulously tailored to your client's unique requirements, business objectives, and industry standards, ensuring optimal alignment with their vision and goals."
      
      case 2:
        return "Create intuitive and visually stunning user interfaces that elevate user experience and engagement, ensuring a memorable and delightful interaction for every user."
      
      case 3:
        return "Guarantee flawless functionality of your Ionic app across diverse platforms using a single, unified codebase, ensuring a consistent and seamless user experience across all devices."
      
      case 4:
        return "Effortlessly integrate and tailor plugins to incorporate distinctive features and functionalities into your Ionic apps, enhancing their value and usability for your users."
      
      case 5:
        return "Optimize app performance to deliver unparalleled speed, responsiveness, and efficient resource utilization, ensuring a seamless and enjoyable user experience."
      
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

export default IonicCapabilities;
