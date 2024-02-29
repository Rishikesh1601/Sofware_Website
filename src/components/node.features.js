// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const NodeFeatures = () => {
  const cardData = [
    { number: '01', title: 'V8 JavaScript Engine', paragraph: "Node.js utilizes the V8 JavaScript engine, developed by Google, which provides high-performance execution of JavaScript code. V8 compiles JavaScript into machine code, optimizing the execution speed." },
    { number: '02', title: 'Scalable', paragraph: "Node.js is designed to be lightweight, allowing it to handle a large number of concurrent connections with low memory overhead. It can efficiently handle many concurrent requests, making it suitable for applications that require high scalability, such as chat applications, real-time collaboration tools, or microservices architectures." },
    { number: '03', title: 'Module Ecosystem', paragraph: "Node.js has a rich ecosystem of modules and packages available through the npm (Node Package Manager) registry. These modules cover a wide range of functionalities, from web frameworks like Express.js and Koa.js to database connectors, authentication libraries, testing frameworks, and more."},
    { number: '04', title: 'Cross-platform', paragraph: "Node.js is designed to be cross-platform, allowing developers to write server-side code that runs seamlessly on various operating systems, including Windows, macOS, and Linux." },
    { number: '05', title: 'Server-side Rendering', paragraph: "Node.js supports server-side rendering (SSR), which allows you to generate dynamic HTML on the server and send it to the client." },
    { number: '06', title: 'Community and Support', paragraph: "Node.js has a large and active community of developers, which means there is abundant support, tutorials, and resources available." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Node Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default NodeFeatures;
