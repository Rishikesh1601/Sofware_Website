// CardCaller.js
import React from 'react';
import EndLCCardComponent from './endLC.card.component';
import './endlc.css';
// import { ArrowDownCircleIcon, CubeIcon} from '@heroicons/react/24/outline';
import { CodeBracketSquareIcon, Cog6ToothIcon, CubeTransparentIcon, DevicePhoneMobileIcon,ShoppingCartIcon, WindowIcon } from '@heroicons/react/20/solid';
// import { CubeTransparentIcon } from '@heroicons/react/24/solid';
const TechnologyLC = () => {
  const cardData = [
    { icon:DevicePhoneMobileIcon ,title: 'Mobility', paragraph: 'Unlock enterprise mobility with scalable, flexible, and interconnected app solutions, fostering a connected environment for enhanced productivity and growth.'},
    { icon:WindowIcon ,title: 'Frontend', paragraph: 'Craft dynamic web and mobile applications leveraging JavaScript and full-stack technologies for a seamless user experience and robust functionality.' },
    { icon:CodeBracketSquareIcon ,title: 'Backend', paragraph: "We engineer scalable, secure, and interactive web and mobile applications to meet your digital needs with precision and reliability." },
    { icon:CubeTransparentIcon,title: 'Blockchain', paragraph: "Create your desired blockchain product promptly with our seasoned team, employing a transparent and efficient design methodology." },
    { icon:ShoppingCartIcon ,title: 'eCommerce CMS', paragraph: 'Craft tailor-made features and functionalities to deliver optimal customer experiences with our eCommerce CMS solutions.' },
    { icon:Cog6ToothIcon ,title: 'Third Party Integration', paragraph: 'Seamlessly integrate third-party solutions to optimize key processes and functionalities securely.' },
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

export default TechnologyLC;
