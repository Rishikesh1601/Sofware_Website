import React, { useState } from 'react';

const NodeCapabilities = () => {
  const buttonNames = ['API Development', 'Real-time Applications', 'Microservices Architecture', 'Single-page Applications', 'Data Streaming', 'Command-line Tools'];

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
        return "Node.js is well-suited for building robust and scalable APIs (Application Programming Interfaces). You can develop RESTful APIs or GraphQL APIs to expose your application’s functionality to clients, such as web or mobile applications.";
      
      case 1:
        return "Node.js, combined with frameworks like Socket.IO or WebSockets, enables you to build real-time applications. Whether it’s a chat application, collaborative tools, or live data streaming, Node.js allows for bidirectional communication between the server and the client, facilitating instant updates and interactive experiences."
      
      case 2:
        return "Node.js is well-suited for building microservices, which are small, independent services that work together to form a larger application. With its lightweight nature and non-blocking I/O, Node.js can handle a high volume of requests and communicate efficiently with other microservices."
      
      case 3:
        return "Node.js can be used to develop server-side components or APIs for single-page applications. SPAs rely heavily on JavaScript on the client-side, and Node.js can serve as a backend to provide data, handle authentication, and perform server-side rendering to enhance the performance and SEO-friendliness of the application."
      
      case 4:
        return "Node.js, you can process and stream data efficiently. Whether it’s reading large files, processing data in real-time, or building data pipelines, Node.js provides features and modules like streams and event emitters that enable efficient data handling."
      
      case 5:
        return "Node.js offers a rich ecosystem of modules and libraries that allow you to build powerful command-line tools and utilities. Whether it’s automating tasks, performing data transformations, or creating interactive command-line interfaces, Node.js provides the necessary tools to build efficient and cross-platform command-line applications."
      
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

export default NodeCapabilities;
