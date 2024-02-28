// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const DotNetFeature = () => {
  const cardData = [
    { number: '01', title: 'Discovery', paragraph: "The .NET Discovery feature offered by Dreamz is a comprehensive service that helps clients identify the best solutions for their .NET development needs. The service includes a thorough analysis of clients’ requirements, goals, and existing systems, as well as an assessment of the latest .NET technologies and tools that can be used to deliver a customized solution." },
    { number: '02', title: 'Design', paragraph: "The .NET Design feature offered by Dreamz is a service that helps clients design and develop customized .NET applications that meet their specific business needs. This service includes a comprehensive analysis of the client’s requirements and goals, as well as a detailed plan for developing a solution that is tailored to their unique needs." },
    { number: '03', title: 'Development', paragraph: "The .NET Development feature offered by Dreamz is a comprehensive service that involves the development of customized .NET applications for clients. This service includes the use of the latest .NET frameworks and technologies to develop high-quality solutions that meet clients’ specific business needs."},
    { number: '04', title: 'Testing', paragraph: "The .NET Testing feature offered by Dreamz is a service that helps clients ensure the quality and reliability of their .NET applications. This service includes a comprehensive range of testing services, including functional testing, performance testing, security testing, and user acceptance testing." },
    { number: '05', title: 'Deployment', paragraph: "The .NET Deployment feature offered by Dreamz is a service that helps clients deploy their .NET applications to production environments. This service includes a comprehensive range of deployment services, including configuring servers, setting up database connections, and deploying the application to the target environment." },
    { number: '06', title: 'Maintenance And Support', paragraph: "The .NET Maintenance and Support feature offered by Dreamz is a service that helps clients ensure the ongoing reliability and performance of their .NET applications. This service includes a comprehensive range of maintenance and support services, including monitoring, troubleshooting, bug fixing, and performance optimization." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>DotNet Development Analysis</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default DotNetFeature;
