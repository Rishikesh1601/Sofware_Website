// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const MSsqlFeatures = () => {
  const cardData = [
    { number: '01', title: 'Indexing', paragraph: "Dreamz MS SQL Database Engine facilitates rapid data retrieval, minimizing disk I/O and enhancing database performance." },
    { number: '02', title: 'Query Optimization', paragraph: "Dreamz MS SQL Database Engine automatically optimizes queries and operations, reducing the server load for enhanced performance." },
    { number: '03', title: 'Security', paragraph: "Dreamz MS SQL Database Engine ensures comprehensive data security through authentication, authorization, and encryption mechanisms, safeguarding your data with precision."},
    { number: '04', title: 'Replication', paragraph: "Dreamz MS SQL Database Engine enables seamless replication and distribution of data across multiple systems, ensuring scalability, availability, and redundancy." },
    { number: '05', title: 'Quality of Service', paragraph: "Dreamz MS SQL Database Engine ensures fast and reliable query execution without compromising performance." },
    { number: '06', title: 'Tuning Advisor', paragraph: "Dreamz MS SQL Database Engine automatically identifies and resolves performance and optimization issues, ensuring seamless operation." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>MS SQL Database Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default MSsqlFeatures;
