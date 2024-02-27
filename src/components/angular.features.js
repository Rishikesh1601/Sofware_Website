// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const AngularFeatures = () => {
  const cardData = [
    { number: '01', title: 'Modular Architecture', paragraph: "Angular's modular architecture facilitates application management and scalability by enabling developers to partition their codebase into distinct modules. This modular approach enhances maintainability and facilitates seamless scalability, as individual modules can be modified, expanded, or replaced without affecting the entire application." },
    { number: '02', title: 'Two-Way Data Binding', paragraph: "Angular's support for two-way data binding streamlines development by automatically synchronizing changes between the user interface (UI) and the underlying data model. This bidirectional data flow ensures that modifications made in the UI are immediately reflected in the data model and vice versa, eliminating the cumbersome task of manual data syncing and enhancing developer productivity." },
    { number: '03', title: 'Directives', paragraph: "Angular offers a comprehensive suite of built-in directives that empower developers to manipulate the Document Object Model (DOM), apply conditional logic, and iterate through lists effortlessly. These directives provide powerful tools for enhancing the functionality and interactivity of Angular applications, streamlining development and boosting productivity."},
    { number: '04', title: 'Template System', paragraph: "Angular boasts a robust template system that empowers developers to craft dynamic and interactive views with ease. Leveraging Angular's template syntax, developers can seamlessly bind data, apply conditional logic, and create reusable components, resulting in rich and engaging user experiences." },
    { number: '05', title: 'RxJS', paragraph: "Angular harnesses the power of RxJS, a robust library for reactive programming, enabling developers to leverage event-driven, asynchronous programming paradigms seamlessly. With RxJS, Angular applications can handle complex asynchronous operations with ease, leading to more responsive and scalable user experiences." },
    { number: '06', title: 'Testing Framework', paragraph: "Angular includes a comprehensive testing framework that empowers developers to write both unit tests and end-to-end tests for their applications. This built-in testing support ensures that Angular applications are thoroughly tested for functionality, reliability, and performance, leading to higher quality code and improved user experiences." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Angular Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default AngularFeatures;
