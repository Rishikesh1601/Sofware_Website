// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const FlutterFeature = () => {
  const cardData = [
    { number: '01', title: 'Cross-Platform Development', paragraph: "Flutter allows you to build high-quality, native-like applications for multiple platforms using a single codebase. With Flutter, you can develop apps for both Android and iOS platforms, saving time and effort while ensuring consistency across different devices." },
    { number: '02', title: 'Fast Development', paragraph: "Flutter’s hot reload feature enables developers to see the changes in real-time as they code, eliminating the need for time-consuming recompilations. This feature significantly speeds up the development process and allows for rapid iteration and experimentation." },
    { number: '03', title: 'Customizable Widgets', paragraph: "Flutter provides a rich set of pre-built widgets that offer a wide range of functionality and customizable options. These widgets can be combined, customized, and extended to create unique user interfaces and interactive elements, saving development time and effort."},
    { number: '04', title: 'High Performance', paragraph: "Flutter applications are known for their excellent performance. The framework utilizes Dart, a compiled language, which allows Flutter apps to run at near-native speeds. Additionally, Flutter’s rendering engine enables smooth animations and transitions, resulting in a seamless user experience." },
    { number: '05', title: 'Beautiful and Responsive UI', paragraph: "Flutter enables the creation of visually stunning user interfaces. It offers a flexible and customizable design system that allows designers and developers to create pixel-perfect layouts and engaging animations. Flutter’s UI is responsive and adapts to various screen sizes and orientations." },
    { number: '06', title: 'Access to Native Features', paragraph: "Flutter provides direct access to platform-specific APIs and services, allowing developers to utilize device features such as camera, sensors, geolocation, and more. This ensures that Flutter applications can leverage native capabilities, providing a native-like experience to users." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Flutter Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default FlutterFeature;
