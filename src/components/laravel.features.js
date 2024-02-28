// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const LaravelFeatures = () => {
  const cardData = [
    { number: '01', title: 'Highly Secure', paragraph: "Laravel is considered to be a highly secure web application framework due to its strong focus on security. Laravel includes a number of built-in security features, such as authentication and authorization, password hashing, CSRF protection, encryption, and security updates." },
    { number: '02', title: 'MVC Architecture', paragraph: "Laravel follows the Model-View-Controller (MVC) architecture pattern, which is a design pattern commonly used in web development. The MVC architecture pattern separates an application into three interconnected components: Model, View, and Controller." },
    { number: '03', title: 'Traffic-Handling', paragraph: "One of the key features that Laravel provides for traffic handling is caching. Laravel allows developers to cache data, views, and routes to reduce the amount of time it takes to retrieve data and generate views. This can significantly improve the application’s performance, especially under high levels of traffic."},
    { number: '04', title: 'Flexible', paragraph: "Laravel is a flexible web application framework that allows developers to build web applications using a wide range of tools and technologies. It is designed to be modular and adaptable, which means that it can be customized to meet the unique needs of different projects." },
    { number: '05', title: 'Third-Party Integrations', paragraph: "Laravel makes it easy to integrate third-party tools and services into web applications. This is because Laravel supports a wide range of APIs and libraries, which can be used to integrate various third-party services and tools." },
    { number: '06', title: 'Easy Unit Testing', paragraph: "Laravel makes it easy to perform unit testing on web applications. The framework provides a built-in testing suite called PHPUnit, which allows developers to write and execute unit tests on their code." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Laravel Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default LaravelFeatures;
