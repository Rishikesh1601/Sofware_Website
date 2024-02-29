// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const MYsqlFeatures = () => {
  const cardData = [
    { number: '01', title: 'Data Modelling', paragraph: "Dreamz's MySQL development services natively support entity-relationship diagrams (ERDs) and database modeling, empowering developers to visualize and accelerate the development process." },
    { number: '02', title: 'Indexing and Views', paragraph: "Dreamz's MySQL development services provide a diverse range of index types for swift data retrieval from tables, along with robust support for creating views, facilitating effortless data extraction and analysis." },
    { number: '03', title: 'Stored Procedures', paragraph: "Dreamz's MySQL development services empower developers to enhance application performance by writing stored procedures and functions directly within MySQL."},
    { number: '04', title: 'Triggers and Events', paragraph: "Dreamz's MySQL development services support triggers and events, enabling automated reactions to data changes, as well as scheduled tasks and procedures for efficient database management." },
    { number: '05', title: 'Backup & Replication', paragraph: "Dreamz's MySQL development services provide robust support for data replication, backup, and log archiving, ensuring redundancy and scalability of your database infrastructure." },
    { number: '06', title: 'Security', paragraph: "Dreamz's MySQL development services offer comprehensive security measures, encompassing authentication, authorization, firewalls, and encryption to safeguard your database infrastructure." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>MY SQL Database Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default MYsqlFeatures;
