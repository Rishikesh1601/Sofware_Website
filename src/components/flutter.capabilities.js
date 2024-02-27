import React, { useState } from 'react';

const FlutterCapabilities = () => {
  const buttonNames = ['Flutter App Development', 'UI/UX Design', 'Cross-Platform Development', 'Custom Widget Development', 'Integration Services', 'Quality Assurance and Testing'];

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
        return "Our experienced team of Flutter developers can build fully customized, cross-platform mobile applications from scratch. Whether you need a simple utility app, a feature-rich consumer application, or a complex enterprise solution, we have the expertise to bring your ideas to life.";
      
      case 1:
        return "We understand the importance of a captivating and intuitive user interface. Our skilled designers work closely with you to create visually appealing and user-friendly interfaces that reflect your brand identity. We focus on creating seamless navigation, engaging animations, and responsive layouts to provide an exceptional user experience."
      
      case 2:
        return "Flutter offers a distinct advantage with its capability to develop applications that seamlessly operate on both Android and iOS platforms using a single codebase. This efficiency not only streamlines the development process but also ensures consistent performance and user experience across diverse devices, ultimately saving time and resources for businesses."
      
      case 3:
        return "Flutter's flexible architecture empowers us to create custom widgets precisely tailored to your unique requirements. By developing and seamlessly integrating custom widgets, we enhance the functionality and user experience of your application, ensuring it stands out in the competitive market landscape. Trust us to leverage Flutter's capabilities to deliver a truly bespoke mobile solution that exceeds your expectations and resonates with your target audience."
      
      case 4:
        return "If you have existing systems or APIs that need to be integrated into your Flutter application, we have the expertise to seamlessly integrate them. Whether it’s integrating third-party APIs, backend systems, or databases, we ensure smooth data flow and connectivity to provide a cohesive user experience."
      
      case 5:
        return "We have a dedicated team of quality assurance professionals who conduct rigorous testing to ensure the stability, reliability, and security of your Flutter application. We perform functional testing, UI/UX testing, performance testing, and compatibility testing across different devices and platforms."
      
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

export default FlutterCapabilities;
