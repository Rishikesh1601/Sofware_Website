// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const AboutLC = () => {
  const cardData = [
    { number: '01', title: 'Highly skilled people', paragraph: 'Dreamz is recognized for its highly talented, top-of-the-line team in its field and technology. We take great care when it comes to selecting our team members. We only employ people in line with our strict standards of quality and our company’s culture. We also focus on investing in our staff and keeping them current with the most recent skills and latest trends. Therefore, working with Dreamz means you’re working alongside the most talented professionals in the field.' },
    { number: '02', title: 'Proven and tested process', paragraph: 'With the help of hundreds of projects completed over the past decade, We have refined and tested our method to maximize effectiveness. We will ensure that you receive speedy delivery, flexibility, predictability, and tangible outcomes. Overall the product development process will be managed to maximize the benefits.' },
    { number: '03', title: 'Unmatched ROI', paragraph: 'It is well known that product development is a significant investment. However, if you’re doing it right and with the right partner for development, the rewards you earn are more substantial. At Dreamz, we’re dedicated to helping you achieve this. We offer unbeatable quality knowledge and knowledge to each of our clients to maximize ROI.' },
    
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5 text-center">
            <h6 className='aboutusTitle'>What are you going to get from us?</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default AboutLC;
