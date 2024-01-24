// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const ITLC = () => {
  const cardData = [
    { number: '01', title: 'Integrate IT automation', paragraph: 'IT automation and process improvement can help to increase efficiency and accuracy in various areas of the IT department. Automated processes can reduce the time needed to perform tasks and improve the accuracy of data entry. Process improvement tools can help to identify areas of improvement and create plans to address them.' },
    { number: '02', title: 'Run hardware replacement cycles', paragraph: 'IT hardware ages fairly quickly, and older machines pose efficiency and security risks. Moreover, hardware patches are not usually available for devices older than five years. Couple that with slow processors and other hardware components like hard drives; running old hardware weighs IT operations down and affects the overall productivity.' },
    { number: '03', title: 'Improve communication and collaboration', paragraph: 'To ensure that communication and collaboration are on track, consider using communication tools like email, IM, and chat. Additionally, make sure everyone is familiar with the project timeline and objectives. This will ensure that everyone is aware of what needs to be done and when.' },
    { number: '04', title: 'Implement performance indicators', paragraph: 'Performance indicators in ITops allow administrators to measure key performance indicators for their IT infrastructure. By identifying and tracking performance metrics, administrators can identify areas of improvement and make informed decisions about how to improve system performance.' },
    { number: '05', title: 'Managed cloud infrastructure', paragraph: 'Managed cloud infrastructure (MCI) refers to an Infrastructure-as-a-Service offering that guarantees the provisioning, management, and delivery of cloud services on behalf of the customer. This assurance may include monitoring and managing cloud services, as well as incident response and restoration.' },
    { number: '06', title: 'Efficiency and improve ROI', paragraph: 'There is no one-size-fits-all answer to this question, as the optimal approach for optimizing ROI in IT ops will vary depending on the specific organization and its specific IT needs. However, some common strategies for optimizing ROI in IT ops include leveraging automation to optimize process and improve efficiency.' },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>ITOps best practices</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default ITLC;
