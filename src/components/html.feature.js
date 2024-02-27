// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const HTMLFeature = () => {
  const cardData = [
    { number: '01', title: 'Semantic Structure', paragraph: "HTML employs semantic tags such as <header>, <nav>, <section>, and <footer> to imbue content with meaning, enhancing accessibility for both users and search engines. By utilizing these semantic elements, developers can structure web documents in a meaningful way, improving readability and search engine optimization (SEO) while ensuring a more inclusive experience for all users." },
    { number: '02', title: 'Hyperlinks', paragraph: "HTML provides the capability to create hyperlinks, also known as anchor tags, which enable linking to other web pages, resources, or files. This feature allows for seamless navigation and connectivity across different parts of a website or between various online resources." },
    { number: '03', title: 'Forms', paragraph: "HTML forms play a crucial role in facilitating user interaction by providing a variety of input elements such as text fields, checkboxes, radio buttons, and more. These forms are essential for tasks such as data collection, user feedback, and various types of user input, enhancing the functionality and interactivity of web pages."},
    { number: '04', title: 'Selective Styling', paragraph: "CSS empowers you to selectively style HTML elements using selectors, providing fine-grained control over the appearance of web content. This flexibility allows for precise customization, ensuring that elements are visually appealing and aligned with your design preferences." },
    { number: '05', title: 'Box Model', paragraph: "CSS models elements as boxes, providing precise control over dimensions, margins, padding, and borders. This box model enables developers to accurately define the layout and spacing of elements on a webpage, ensuring consistency and enhancing the overall design aesthetic." },
    { number: '06', title: 'Layout Control', paragraph: "CSS offers a range of layout techniques, including floats, flexbox, and grid, allowing developers to arrange elements on a web page with flexibility and precision. These layout options empower designers to create responsive and visually appealing designs that adapt seamlessly to different screen sizes and devices." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>HTML & CSS Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default HTMLFeature;
