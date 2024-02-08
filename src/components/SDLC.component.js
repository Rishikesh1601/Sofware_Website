// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const SDLC = () => {
  const cardData = [
    { number: '01', title: 'Requirement Analysis', paragraph: "During this phase, our business development manager collaborates with the client to meticulously outline their requirements through detailed discussions, documentation, and presentations. We gather all necessary information and conduct a comprehensive analysis of the client's business model and needs. Our process involves validating the client's ideas and offering a scenario-based suggestion list to ensure viable solutions are identified." },
    { number: '02', title: 'Detailed Design Analysis', paragraph: 'Detailed Design Analysis involves a thorough examination of the design, identifying risks or issues, and proposing solutions. Commonly used in engineering and manufacturing, it ensures the design meets customer/user requirements and standards. This scrutiny ensures functionality, safety, and compliance are upheld, benefiting any project or process requiring a refined design.' },
    { number: '03', title: 'Development & Programming', paragraph: 'Development & Programming comprise a sequence of steps and activities utilized in conceptualizing, designing, building, testing, and deploying applications, systems, or other products. Programming encompasses the creation, testing, and maintenance of codes executed by computers. Programmers employ programming languages to write code directing computers to execute specific tasks. Development encompasses all logical and mathematical operations within this process.' },
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
