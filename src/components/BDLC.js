// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const BDLC = () => {
  const cardData = [
    { number: '01', title: 'Best-fitting technologies for your project', paragraph: 'The best-fitting technology for your project depends on the specifics of the project. However, blockchain technology is often a good choice for projects that require secure and transparent data management. Blockchain technology enables the secure storage and transfer of data across a distributed ledger, and can help to ensure the security, privacy, and accuracy of transactions. Additionally, blockchain technology can provide a high level of scalability, and can be used to create automated and secure smart contracts.' },
    { number: '02', title: 'Established development process', paragraph: 'Blockchain is an established development technology that is used to create distributed digital ledgers. It is a secure, immutable, and decentralized system that allows for the sharing and recording of digital information without the need for a central authority. Blockchain has been used to create a variety of solutions in fields such as finance, healthcare, and supply chain management. It is also used to create digital tokens and cryptocurrencies, which are used for trading and investing.' },
    { number: '03', title: 'Transparent workflow and communication', paragraph: 'Transparent workflow and communication with blockchain technology can revolutionize how businesses communicate and keep track of their workflow. Blockchain provides a digital ledger that can be used to store information and track events in a secure and immutable way. This allows businesses to keep track of their workflow and ensure that all stakeholders are aware of what is happening. Additionally, blockchain technology can help to ensure that all data is secure and can’t be tampered with. Blockchain is also capable of providing a secure and automated system for managing payments, contracts, and other transactions.' },
    { number: '04', title: 'An efficient, secure', paragraph: 'Multi-signature addresses allow users to set up accounts that require multiple signers to approve a transaction. This adds an extra layer of security, as any malicious actors would need to gain access to multiple keys in order to execute a transaction. When transmitting data over the blockchain, users should use secure communication protocols such as TLS/SSL or end-to-end encryption. This ensures that any data sent is encrypted and can only be read by the intended parties.' },
    { number: '05', title: 'Implementation', paragraph: 'Blockchain implementation is the process of developing and deploying a blockchain-based application. This process involves setting up a distributed ledger, writing smart contracts, and creating an interface for users to interact with the application. The implementation process can also involve integrating existing systems into the blockchain network and configuring it for the desired use case. Additionally, the implementation process usually involves testing the application for security, scalability, and performance.' },
    { number: '06', title: 'Maintenance & Support', paragraph: 'Maintenance and support is the process of providing ongoing technical assistance and troubleshooting for a product or service. This includes services such as troubleshooting software and hardware problems, providing updates, and providing training and education on new features. Maintenance and support may be provided by either the manufacturer or a third–party provider.' },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Blockchain Development Analysis</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default BDLC;
