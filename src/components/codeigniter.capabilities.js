import React, { useState } from 'react';

const CodeIgniterCapabilities = () => {
  const buttonNames = ['Custom Development', 'CodeIgniter Consulting', 'CodeIgniter Integration', 'Module Development', 'API Development', 'E-commerce Solutions'];

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
        return "At Dreamz, we specialize in designing, developing, and deploying web applications meticulously tailored to meet our clients' specific requirements and business objectives. Our dedicated team ensures that every aspect of the web application aligns perfectly with your vision, delivering a solution that not only meets but exceeds your expectations. Experience bespoke excellence with Dreamz, where your goals are our top priority.";
      
      case 1:
        return "At Dreamz, we offer expert guidance and consulting services to assist clients in planning and strategizing their web development projects using CodeIgniter. Our seasoned consultants work closely with you to understand your unique needs and objectives, providing tailored recommendations and strategies to ensure the success of your project. With our wealth of experience and deep understanding of CodeIgniter, we empower you to make informed decisions and achieve your web development goals effectively. Partner with Dreamz for comprehensive guidance and consulting services that pave the way for your project's success."
      
      case 2:
        return "At Dreamz, we specialize in seamlessly integrating CodeIgniter solutions into clients’ existing systems and technologies, guaranteeing compatibility and efficient data flow. Our skilled team ensures a smooth transition, leveraging the power of CodeIgniter to enhance your existing infrastructure without disruptions. With meticulous attention to detail and a focus on efficiency, we ensure that your systems work harmoniously together, maximizing productivity and minimizing downtime. Trust Dreamz for seamless integration solutions that elevate your business capabilities to new heights."
      
      case 3:
        return "At Dreamz, we excel in creating custom modules and extensions to extend the functionality of CodeIgniter applications, enriching them with unique features and capabilities. Our expert developers meticulously analyze your requirements to craft bespoke solutions that perfectly align with your vision and objectives. Whether you need enhanced functionality, specialized features, or tailored extensions, we have the expertise to deliver. Experience the power of customization with Dreamz, where we turn your ideas into reality, one module at a time."
      
      case 4:
        return "Dreamz specializes in developing robust APIs using CodeIgniter to facilitate seamless data exchange, third-party integrations, and scalability. Our experienced developers leverage the flexibility and power of CodeIgniter to create APIs that meet your specific requirements and enable smooth communication between different systems and platforms. Whether you need to integrate with external services, mobile applications, or other web applications, our APIs are designed to ensure reliability, security, and efficiency. Trust Dreamz to deliver API solutions that empower your business to thrive in the digital landscape."
      
      case 5:
        return "At Dreamz, we specialize in developing e-commerce websites and applications using CodeIgniter, encompassing essential features such as shopping carts, payment gateways, and product catalogs. Our experienced team ensures that your e-commerce platform is tailored to your specific requirements, providing a seamless and intuitive shopping experience for your customers. From user-friendly interfaces to secure payment processing, we leverage the power of CodeIgniter to create robust and scalable e-commerce solutions that drive conversions and growth. Partner with Dreamz to transform your e-commerce vision into reality, one line of code at a time."
      
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

export default CodeIgniterCapabilities;
