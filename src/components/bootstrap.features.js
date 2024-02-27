// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const BootstrapFeature = () => {
  const cardData = [
    { number: '01', title: 'Responsive Grid System', paragraph: "Bootstrap's grid system forms the foundation of its responsive design prowess, enabling developers to craft flexible and adaptive layouts that seamlessly adapt to various screen sizes and devices. This versatile grid system empowers developers to create visually appealing and user-friendly interfaces across desktops, tablets, and mobile devices, ensuring an optimal viewing experience for all users." },
    { number: '02', title: 'Pre-Designed CSS', paragraph: "Bootstrap provides an extensive library of pre-designed CSS components, including buttons, forms, navigation bars, and more. These components are highly customizable and can be effortlessly integrated into your project, saving valuable development time and ensuring consistency in design and functionality across your website or application. With Bootstrap's modular approach, you can quickly prototype and build stunning user interfaces that meet your specific requirements." },
    { number: '03', title: 'Mobile-First Approach', paragraph: "Bootstrap adopts a mobile-first design approach, prioritizing mobile devices in its default styles before scaling up for larger screens. This ensures a seamless user experience across all devices, catering to the diverse needs of users accessing the website or application."},
    { number: '04', title: 'Extensive Documentation', paragraph: "AngularJS supports triggers and events, allowing developers to react to data changes efficiently. Additionally, it facilitates scheduled tasks and procedures, enhancing the overall functionality and responsiveness of web applications." },
    { number: '05', title: 'CSS Flexbox and Grid Support', paragraph: "Bootstrap harnesses modern CSS features such as Flexbox and Grid layout to construct intricate and flexible web designs. This enables developers to create visually appealing and responsive layouts that adapt seamlessly to various screen sizes and devices." },
    { number: '06', title: 'Responsive Typography', paragraph: "Bootstrap incorporates typography styles that are carefully crafted for optimal legibility and readability on diverse devices. This ensures that your content maintains a polished appearance across screens, enhancing the overall user experience." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Bootstrap Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default BootstrapFeature;
