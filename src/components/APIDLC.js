// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const APIDLC = () => {
  const cardData = [
    { number: '01', title: 'API driven approach', paragraph: 'An API-driven approach means using an application programming interface (API) to interact with an application, platform, or service. This approach allows developers to build applications without having to manage the underlying infrastructure. APIs provide a layer of abstraction between the application and the underlying platform, making it easier to integrate new features and capabilities.' },
    { number: '02', title: 'REST API Development', paragraph: 'REST API Development is the process of creating an interface that allows applications to communicate with one another over the Internet using web services. This type of interface allows for the exchange of data between applications in a structured and consistent way. The development of a RESTful API requires a deep understanding of the system being developed and the technologies used to create it. It also requires an understanding of the data structure, authentication and authorization methods, and the communication protocols used by the system.' },
    { number: '03', title: 'Simple Access Object Protocol', paragraph: 'The Simple Access Object Protocol (SOAP) is an XML-based protocol that enables computers to communicate with each other over the internet. SOAP is used to provide web services, which allow applications to communicate with each other over the internet. SOAP messages are sent using the HTTP protocol or other protocols such as SMTP. SOAP messages are typically used to request or provide data from a web service. SOAP is designed to be platform-independent, meaning that it can be used on any operating system or programming language.' },
    { number: '04', title: 'XML-RPC', paragraph: 'XML-RPC is a remote procedure call protocol that uses XML to encode its calls and HTTP as a transport mechanism. It is a very simple protocol that defines how a client can call a remote server procedure. XML-RPC is platform independent, language independent and can be used in combination with most programming languages and environments.' },
    { number: '05', title: 'SJSON- RPC', paragraph: 'JSON-RPC is a remote procedure call protocol encoded in JSON. It is a light-weight protocol designed for making remote procedure calls over the internet. The protocol defines a way for a client to call a procedure on a server and receive a response. JSON-RPC is used to make requests from a client to a server and is typically used in web-based application development, where the client and server are separated by a web server.' },
    { number: '06', title: 'Maintenance & Support', paragraph: 'Maintenance and support is the process of providing ongoing technical assistance and troubleshooting for a product or service. This includes services such as troubleshooting software and hardware problems, providing updates, and providing training and education on new features. Maintenance and support may be provided by either the manufacturer or a third–party provider.' },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>API Integration Development Life Cycle (APIDLC)</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default APIDLC;
