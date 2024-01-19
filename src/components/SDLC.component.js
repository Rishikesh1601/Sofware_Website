// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const SDLC = () => {
  const cardData = [
    { number: '01', title: 'Requirement Analysis', paragraph: 'Our business development manager and client meet and discuss their requirement on paper and  presentation. We collect all the required information and analyze client business model and their  requirements. We start validating client’s idea and provide the suggestion list scenario to meet feasible solutions In this phase, we find optimal solutions by conducting thorough research, estimation, risk analysis, and requirement elicitations.' },
    { number: '02', title: 'Detailed Design Analysis', paragraph: 'The process typically involves examining the design in detail, identifying potential risks or problems, and proposing solutions to address those risks or problems. This kind of analysis is typically used in engineering and manufacturing processes, but can also be used in any project or process that requires a detailed design. The analysis helps to ensure that the design meets the requirements of the customer or user, as well as any applicable standards or regulations. ' },
    { number: '03', title: 'Development & Programming', paragraph: 'It involves a series of steps and activities that are used to conceptualize, design, build, test, and deploy an application, system, or other type of product. Programming is the process of writing, testing, and maintaining codes that are executed by computers. Programmers use programming languages to write code that instructs a computer to perform certain tasks. Development is the process where all logical, mathematical operations perform. ' },
    { number: '04', title: 'Quality Assurance & testing', paragraph: 'Quality Assurance (QA) is a process used to ensure that a product or service meets certain standards of quality. It involves the testing of a product or service to ensure that it meets specific requirements or specifications, and can include testing of processes, procedures, and materials. Quality Assurance testing is the process of testing a product or service to ensure that it is working as intended and meets the requirements of the customer or user.' },
    { number: '05', title: 'Deployment', paragraph: 'Deployment on server is the process of deploying an application or web page from a local development environment to a live server. It involves setting up the server, configuring the application for the environment, uploading the necessary files and databases, and running any necessary setup scripts. Deployment on server is an important part of the development process, as it ensures that the application or web page is properly configured and functioning correctly in the live environment.' },
    { number: '06', title: 'Maintenance & Support', paragraph: 'Maintenance and support is the process of providing ongoing technical assistance and troubleshooting for a product or service. This includes services such as troubleshooting software and hardware problems, providing updates, and providing training and education on new features. Maintenance and support may be provided by either the manufacturer or a third–party provider.' },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Software Development Life Cycle (SDLC)</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default SDLC;
