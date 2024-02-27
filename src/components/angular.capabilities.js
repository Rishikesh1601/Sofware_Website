import React, { useState } from 'react';

const AngularCapabilities = () => {
  const buttonNames = ['Angular application development', 'Enhanced Security', 'Angular customization', 'Existing Data', 'Angular maintenance and support', 'Enterprise Web Apps'];

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
        return "Dreamz offers comprehensive end-to-end development services for custom web applications using Angular. This includes front-end and back-end development, thorough testing, and seamless deployment processes.";
      
      case 1:
        return "Dreamz Angular Development Company provides a wide array of services aimed at bolstering the security of web applications built with Angular. We offer expert guidance on secure coding practices and assist clients in implementing industry best practices to mitigate common security vulnerabilities like cross-site scripting (XSS) and SQL injection attacks. Additionally, we specialize in implementing robust authentication and authorization mechanisms to safeguard sensitive data, ensuring that only authorized users can access it. Trust Dreamz to fortify your web applications against potential security threats, delivering peace of mind and safeguarding your digital assets."
      
      case 2:
        return "Customizing Angular applications involves adapting their layout, design, and functionality to meet clients' business objectives. Dreamz Angular Development Company specializes in tailoring Angular apps to match branding, offer personalized user experiences, and integrate new features effectively."
      
      case 3:
        return "Dreamz Angular Development Company empowers clients to harness Angular's potential for data visualization, analytics, and integration. With Angular's robust features such as data binding, pipes, and filters, we enable developers to create dynamic and interactive web applications that optimize existing data for enhanced accessibility and actionable insights. Partner with us to unlock the full potential of your data-driven initiatives and propel your business forward."
      
      case 4:
        return "Dreamz offers comprehensive maintenance services, including bug fixes, security updates, and performance optimizations, to ensure clients' Angular applications run smoothly. Additionally, we provide expert guidance on maintenance best practices and assist in implementing robust backup and recovery strategies to minimize downtime and data loss, ensuring uninterrupted business operations. Trust Dreamz for reliable support and maintenance solutions tailored to your specific needs."
      
      case 5:
        return "Dreamz Angular Development Company specializes in building highly sustainable enterprise web applications with Angular. Leveraging Angular's powerful and flexible front-end framework, we empower developers to create complex, scalable, and reliable web applications capable of supporting large-scale enterprise operations. Trust Dreamz to deliver robust solutions that meet your business needs and drive sustainable growth."
      
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

export default AngularCapabilities;
