// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const OracleFeature = () => {
  const cardData = [
    { number: '01', title: 'Database Performance', paragraph: "Oracle Database Performance Tuning is the process of optimizing the performance of an Oracle database by making changes to the parameters, configuration settings, database structure, and/or code. This involves analyzing and improving the database architecture, query tuning, and application and system design." },
    { number: '02', title: 'Database Security', paragraph: "Oracle Database Security consists of techniques for protecting the data stored in the database from unauthorized use and malicious adversaries. This includes authentication methods, encryption, and various security measures such as database auditing, user access control policies, and the granting of database privileges." },
    { number: '03', title: 'Database Administration', paragraph: "Oracle Database Administration is the process of managing and maintaining an Oracle database. This includes installing Oracle software, applying patches and upgrades, configuring Oracle components, creating databases and objects, managing memory and storage allocation, performing database backups and recovery, and monitoring database performance."},
    { number: '04', title: 'Database Design', paragraph: "Oracle Database Design is the process of conceptualizing, designing, and implementing a database solution that meets the technical, performance, and reliability requirements of a specific application. This involves understanding and analyzing data requirements, designing entity-relationship models, and defining table structures, indexes, and other database objects." },
    { number: '05', title: 'maintenance and support', paragraph: "Oracle maintenance and support includes numerous activities such as troubleshooting, database upgrades, patching, performance tuning, and security and compliance maintenance. Support activities may include installing Oracle Database patches, applying security updates, and configuring database parameters to improve performance. Oracle supports may also provide assistance in the areas of database deployment, support, and monitoring." },
    { number: '06', title: 'Enterprise Solutions', paragraph: "Oracle offers highly sustainable solutions for the enterprise, including enterprise resource planning (ERP) systems, cloud platforms, database systems, and analytics tools. These solutions are designed to provide maximum efficiency with minimum environmental impact, helping companies reduce energy consumption, lower their carbon footprint, and maximize their corporate sustainability efforts. Oracle’s ERP systems help companies manage their production, warehousing, inventory, supply chain, and supply chain risk management." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Oracle Database Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default OracleFeature;
