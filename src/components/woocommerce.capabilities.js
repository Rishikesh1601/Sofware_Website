import React, { useState } from 'react';

const WooCommerceCapabilities = () => {
  const buttonNames = ['Custom WooCommerce Development', 'Theme Development', 'Plugin Development', 'Responsive Design', 'Performance Optimization', 'Security'];

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
        return "Specializing in crafting bespoke WooCommerce solutions, we excel at meeting your specific business needs. Whether it's creating unique product displays or customizing checkout processes, we're dedicated to bringing your ideas to life. With our expertise and attention to detail, we ensure that your WooCommerce store reflects your brand identity and drives success in the competitive e-commerce landscape. Trust us to be your partner in achieving your online business goals.";
      
      case 1:
        return "At Dreamz, our designers and developers collaborate closely to produce stunning and user-friendly themes. Whether you require a custom theme crafted from the ground up or seek to enhance an existing one, we're here to meet your needs. With our combined expertise and creative flair, we ensure that your WooCommerce store boasts a visually captivating and intuitive design that resonates with your target audience. Trust us to elevate your online presence and drive engagement with our top-notch theme development services."
      
      case 2:
        return "Looking to expand your store's functionality? Look no further! We specialize in developing custom WooCommerce plugins tailored to your specific requirements. Whether you need additional payment gateways, shipping solutions, or any other feature, we've got the expertise to bring your ideas to life. Our dedicated team of developers will work closely with you to understand your needs and deliver plugins that seamlessly integrate with your WooCommerce store, enhancing its capabilities and providing an exceptional shopping experience for your customers. Trust Dreamz to be your partner in extending the capabilities of your online store."
      
      case 3:
        return "In today's mobile-centric world, the importance of a responsive website cannot be overstated. At Dreamz, we prioritize ensuring that your WooCommerce store looks and functions flawlessly across all devices. By adopting responsive design principles, we enhance user satisfaction and improve SEO rankings, ensuring that your store remains accessible and engaging to a wide audience. With our expertise in crafting responsive web experiences, you can rest assured that your WooCommerce store will deliver a seamless and optimized browsing experience, regardless of the device used. Trust Dreamz to elevate your online presence and drive success in the digital landscape."
      
      case 4:
        return "In today's fast-paced digital environment, slow websites can deter customers and harm your business. That's why at Dreamz, we prioritize optimizing your WooCommerce store for speed. By implementing best practices and performance optimization techniques, we ensure fast page loading times and a seamless shopping experience for your customers. Our meticulous approach to speed optimization enhances user satisfaction, reduces bounce rates, and ultimately drives conversions. Trust Dreamz to fine-tune your WooCommerce store for optimal performance, ensuring that every visitor enjoys a swift and enjoyable shopping journey."
      
      case 5:
        return "At Dreamz, we understand the paramount importance of security for your e-commerce store. That's why our dedicated team takes security seriously, implementing the latest measures to safeguard your business and customer data from threats and vulnerabilities. From robust encryption protocols to regular security audits and updates, we ensure that your WooCommerce store remains fortified against potential risks. With our proactive approach to security, you can rest assured that your customers' sensitive information is protected, fostering trust and confidence in your brand. Trust Dreamz to prioritize the security of your e-commerce store, allowing you to focus on growing your business with peace of mind."
      
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

export default WooCommerceCapabilities;
