// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const JavascriptFeature = () => {
  const cardData = [
    { number: '01', title: 'Client-Side Scripting', paragraph: "JavaScript primarily functions as a client-side scripting language, executing within the user's web browser. This capability enables immediate feedback and dynamic user experiences, eliminating the need for server interactions with every action. As a result, JavaScript empowers developers to create interactive and responsive web applications that enhance user engagement and efficiency." },
    { number: '02', title: 'Versatility', paragraph: "JavaScript is a versatile language used for a wide range of applications, from simple website enhancements to complex web applications and even server-side development (Node.js)." },
    { number: '03', title: 'Interactivity', paragraph: "JavaScript facilitates interactivity on web pages by allowing them to respond to user actions, such as clicks, mouse movements, and form submissions. This capability enhances user engagement and usability, making websites more dynamic, interactive, and user-friendly."},
    { number: '04', title: 'DOM Manipulation', paragraph: "JavaScript empowers developers to manipulate the Document Object Model (DOM), enabling dynamic modification of the structure and content of web pages in real-time. This capability facilitates interactive and responsive user experiences, as web pages can be updated dynamically based on user actions or external events." },
    { number: '05', title: 'Asynchronous Programming', paragraph: "JavaScript supports asynchronous programming through features like callbacks, promises, and async/await, which are essential for handling tasks such as fetching data from servers and performing background operations without blocking the main thread." },
    { number: '06', title: 'Event Handling', paragraph: "JavaScript enables the creation of event-driven applications. Developers can attach event handlers to HTML elements, defining how the application should respond to various events like clicks, keyboard input, and mouse movements." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>JavaScript Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default JavascriptFeature;
