import React, { useState } from 'react';

const AboutCapabilities = () => {
  const buttonNames = ['Highly skilled people', 'Proven and tested process', 'Unmatched ROI'];

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
        return "Dreamz is recognized for its highly talented, top-of-the-line team in its field and technology. We take great care when it comes to selecting our team members. We only employ people in line with our strict standards of quality and our company’s culture. We also focus on investing in our staff and keeping them current with the most recent skills and latest trends. Therefore, working with Dreamz means you’re working alongside the most talented professionals in the field.";
      
      case 1:
        return "With the help of hundreds of projects completed over the past decade, We have refined and tested our method to maximize effectiveness. We will ensure that you receive speedy delivery, flexibility, predictability, and tangible outcomes. Overall the product development process will be managed to maximize the benefits."
      
      case 2:
        return "It is well known that product development is a significant investment. However, if you’re doing it right and with the right partner for development, the rewards you earn are more substantial. At Dreamz, we’re dedicated to helping you achieve this. We offer unbeatable quality knowledge and knowledge to each of our clients to maximize ROI."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>What are you going to get from us?</h6>
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

export default AboutCapabilities;
