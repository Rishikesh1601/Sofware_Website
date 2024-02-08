import React, { useState } from 'react';

const MobileAppCapabilities = () => {
  const buttonNames = ['Ecommerce App Development', 'Enterprise App Development', 'Hybrid App Development', 'Cross-Platform App Development', 'Web Progressive App', 'Full Stack Web Development'];

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
        return "Ecommerce app development is gaining momentum among businesses seeking to broaden their reach and customer base. These apps enable customers to shop conveniently from anywhere, anytime, simplifying the shopping experience. Furthermore, ecommerce apps offer businesses a plethora of features, including push notifications, loyalty programs, and secure payment processing, to enhance sales and customer engagement effectively.";
      
      case 1:
        return "The demand for enterprise app development is surging as businesses increasingly adopt mobile solutions to streamline processes, cut operational costs, and enhance customer experience. These apps streamline and automate tasks, slashing manual labor and time expended, thereby boosting efficiency. Ultimately, this can translate into heightened productivity, lowered operational expenses, and heightened customer satisfaction."
      
      case 2:
        return "Hybrid app development involves crafting mobile applications compatible with multiple platforms, including iOS, Android, and Windows. These apps are essentially web-based, constructed using HTML, CSS, and JavaScript, and enclosed within a native container. The native container grants access to device features such as GPS, camera, contacts, accelerometer, and others."
      
      case 3:
        return "Cross-platform app development involves creating applications compatible with various platforms like iOS, Android, and Windows. This approach ensures broad accessibility for users and minimizes the requirement for multiple code bases, thereby streamlining the development process."
      
      case 4:
        return "PWAs (Progressive Web Apps) leverage contemporary web technologies and design principles to provide users with an experience akin to mobile apps. They function seamlessly across devices like smartphones, tablets, and desktops, without requiring installation or downloads. PWAs are crafted using technologies like HTML, CSS, and JavaScript and are commonly hosted on web server."
      
      case 5:
        return "Custom mobile app development involves crafting bespoke mobile applications precisely tailored to the unique requirements of a business or organization. These apps can encompass a wide array of functionalities, including customer relationship management (CRM), eCommerce platforms, productivity tools, data tracking, and analytics solutions, among others. Developed for compatibility across various mobile devices and operating systems like iOS, Android, and Windows, custom mobile apps are designed to address specific business needs effectively."
      
      default:
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Dreamz as a Mobile App Services</h6>
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
        <p className="text-gray-700 text-justify">{displayText}</p>
      </div>
      )}
    </div>
  );
};

export default MobileAppCapabilities;
