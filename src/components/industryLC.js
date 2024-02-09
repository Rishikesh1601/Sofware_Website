// CardCaller.js
import React from 'react';
import EndLCCardComponent from './endLC.card.component';
import './endlc.css';
// import { ArrowDownCircleIcon, CubeIcon} from '@heroicons/react/24/outline';
import { BriefcaseIcon, BuildingOffice2Icon, CurrencyRupeeIcon, GlobeEuropeAfricaIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/20/solid';
// import { CubeTransparentIcon } from '@heroicons/react/24/solid';
const IndustryLC = () => {
  const cardData = [
    { icon:HeartIcon ,title: 'Healthcare', paragraph: 'Empower the healthcare sector with intuitive applications, facilitating seamless interactions and enhancing patient-doctor communication for improved healthcare outcomes.'},
    { icon:BriefcaseIcon ,title: 'Education & Elearning', paragraph: 'Empower the realm of education and e-learning through innovative application solutions, revolutionizing the learning landscape, and fostering academic success while embracing modern educational methodologies.' },
    { icon:BuildingOffice2Icon ,title: 'Real Estate', paragraph: "Elevate your real estate ventures with our dedicated software development team. Harness niche skills and deep expertise to innovate and excel in the dynamic real estate market." },
    { icon:ShoppingCartIcon,title: 'Retail & ECommerce', paragraph: "Experience retail redefined through our cutting-edge e-commerce solutions. Transform customer engagement, streamline operations, and drive growth with innovative digital strategies tailored to your retail needs." },
    { icon:GlobeEuropeAfricaIcon ,title: 'Travel & Hospitality', paragraph: 'Elevate your travel and hospitality business with our innovative application solutions. From seamless booking experiences to personalized guest services, we empower you to exceed expectations and thrive in the digital age.' },
    { icon:CurrencyRupeeIcon ,title: 'Manufacturing & Business', paragraph: 'Revolutionize your manufacturing business with state-of-the-art enterprise solutions tailored to your needs. Streamline operations, optimize efficiency, and stay ahead of the competition with our cutting-edge technology' },
    // Add more data as needed
  ];

  return (
    <div>
        
    <div className="sdlc-card-container ms-7 me-7">
      {cardData.map((card, index) => (
        <EndLCCardComponent key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default IndustryLC;
