// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const CodeIgniterFeature = () => {
  const cardData = [
    { number: '01', title: 'High Performance', paragraph: "CodeIgniter's exceptional speed and performance stem from its lightweight design and finely-tuned codebase. Its optimized structure allows developers to create fast and efficient web applications effortlessly." },
    { number: '02', title: 'Modular Structure', paragraph: "The framework empowers developers to craft reusable modules and libraries, fostering code reusability and enhancing development efficiency." },
    { number: '03', title: 'Database Abstraction', paragraph: "CodeIgniter offers a robust database abstraction layer, facilitating seamless interactions with multiple database systems and simplifying database operations for developers."},
    { number: '04', title: 'Security Features', paragraph: "CodeIgniter comes equipped with built-in security measures, encompassing input validation, output escaping, and safeguards against CSRF (Cross-Site Request Forgery) attacks, ensuring enhanced protection for web applications." },
    { number: '05', title: 'Error Handling', paragraph: "CodeIgniter provides developers with robust error handling and logging capabilities, enabling swift identification and resolution of issues, thereby ensuring smooth operation of web applications." },
    { number: '06', title: 'Flexible Routing', paragraph: "CodeIgniter's customizable URL routing feature enables the creation of clean and search engine-friendly URLs, enhancing the accessibility and discoverability of web content." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Code Igniter Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default CodeIgniterFeature;
