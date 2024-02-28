// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const MongoDBFeatures = () => {
  const cardData = [
    { number: '01', title: 'High Performance', paragraph: "MongoDB is meticulously crafted to support exceptional performance, boasting rapid write operations and scalability to accommodate surging read operations seamlessly." },
    { number: '02', title: 'Documented Data Model', paragraph: "MongoDB's document-based data storage empowers users with unparalleled flexibility, allowing for the creation of diverse data models tailored to meet the unique requirements of various applications." },
    { number: '03', title: 'Strong Community Support', paragraph: "MongoDB boasts a vibrant community of dedicated users and developers who actively contribute to helping newcomers learn the ins and outs of MongoDB and readily offer assistance to address any queries or concerns."},
    { number: '04', title: 'Scalability', paragraph: "MongoDB excels in scalability, effortlessly accommodating large data sets with ease, making it a versatile choice for handling growing data requirements." },
    { number: '05', title: 'High Availability', paragraph: "MongoDB offers seamless failover and node replication capabilities, ensuring continuous availability and safeguarding data integrity with built-in support for robust failover mechanisms." },
    { number: '06', title: 'Query Language', paragraph: "MongoDB boasts a powerful query language that empowers developers to swiftly and efficiently retrieve data, facilitating seamless data access and manipulation." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Mongo Database Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default MongoDBFeatures;
