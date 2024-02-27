import React, { useState } from 'react';

const WordPressCapabilities = () => {
  const buttonNames = ['Customizable themes', 'Powerful ecommerce tools', 'Analytics to track sales', 'Tools for marketing', 'Multiple languages', 'SEO Friendly'];

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
        return "WordPress custom theme development is a process of creating a website design tailored to the specific needs of a client. It involves creating a unique design that is tailored to the client’s needs and preferences. To create a custom theme, a theme developer will first create a child theme based on an existing WordPress theme. The custom theme will usually require custom coding, such as PHP, HTML, CSS, and JavaScript. The end result is a unique, custom WordPress theme that fits the client’s needs and preferences.";
      
      case 1:
        return "WordPress Responsive website design is an approach to website design and development that allows for a website to adjust its layout and content according to the size of the device it is being viewed on. This means that the website will automatically adjust to the size of the user’s device, whether it is a desktop, laptop, tablet, or mobile phone. This ensures that users have an optimal experience regardless of the device they are using to access the website. This type of design is becoming increasingly important as the number of mobile users continues to grow."
      
      case 2:
        return "WordPress eCommerce integration is the process of connecting your existing WordPress website to an eCommerce platform such as Shopify, WooCommerce, BigCommerce, or Magento. By integrating your WordPress website with an eCommerce platform, you can create an online store where customers can purchase products directly from your website. This integration also allows for a seamless experience for customers, as they can easily navigate between your WordPress website and your store."
      
      case 3:
        return "WordPress is a great platform for integrating social media into your website. With a variety of plugins and tools available, you can easily add social media accounts, share buttons, and more to your WordPress site. When it comes to integrating social media with WordPress, the most popular solution is the Jetpack plugin. It offers a variety of features, such as the ability to automatically post your content to social media accounts, add social media follow buttons, and display a publicize widget on your site."
      
      case 4:
        return "A web application firewall (WAF) can help protect your WordPress website from malicious attacks and potential vulnerabilities. A WAF works by filtering and monitoring inbound traffic for malicious requests and blocking any malicious activity. Keeping WordPress and its plugins up-to-date is essential for security. Outdated plugins and themes can lead to security vulnerabilities that can be exploited. It’s important to regularly check for updates and install them as soon as possible."
      
      case 5:
        return "Installing a SEO plugin such as Yoast SEO or All in One SEO Pack can help you easily optimize your website’s content for search engines. These plugins provide an easy to use interface that allows you to easily add meta tags, generate sitemaps, and more. Using a theme that is optimized for SEO is a must. There are plenty of SEO friendly WordPress themes available. These themes are designed to be optimized for search engines and make it easier to implement SEO best practices."
      
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

export default WordPressCapabilities;
