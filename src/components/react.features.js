// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const ReactFeature = () => {
  const cardData = [
    { number: '01', title: 'Component Architecture', paragraph: "React adopts a component-based approach, dividing the user interface into reusable and self-contained components, facilitating modular development and code reusability." },
    { number: '02', title: 'Virtual DOM', paragraph: "React utilizes a virtual DOM (Document Object Model) to efficiently update and render the user interface. The virtual DOM is a lightweight representation of the actual DOM, which allows React to perform efficient diffing and minimal updates to the real DOM." },
    { number: '03', title: 'JSX Syntax', paragraph: "React uses JSX (JavaScript XML), an extension to JavaScript that allows you to write HTML-like code within JavaScript. JSX provides a concise and expressive way to define components and their structure."},
    { number: '04', title: 'One-Way Data Flow', paragraph: "React follows a unidirectional data flow, where data flows from parent components to child components. This promotes a predictable data flow and makes it easier to understand how data changes propagate through the application." },
    { number: '05', title: 'Declarative Syntax', paragraph: "React uses a declarative syntax, meaning you describe what you want the UI to look like based on the current state. React automatically updates the UI to match the desired state." },
    { number: '06', title: 'React Hooks', paragraph: "Introduced in React 16.8, hooks are functions that allow you to add state and lifecycle functionalities to functional components. With hooks, you can manage state, perform side effects, and tap into lifecycle events without using class components." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>React Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default ReactFeature;
