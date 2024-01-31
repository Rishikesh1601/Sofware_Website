// CardCaller.js
import React from 'react';
import EndLCCardComponent from './endLC.card.component';
import './endlc.css';
// import { ArrowDownCircleIcon, CubeIcon} from '@heroicons/react/24/outline';
import { BriefcaseIcon, CodeBracketSquareIcon, CpuChipIcon, DevicePhoneMobileIcon, RectangleGroupIcon } from '@heroicons/react/20/solid';
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
const EndLC = () => {
  const cardData = [
    { icon:RectangleGroupIcon ,title: 'Custom Software Development', paragraph: 'Software development services allow you to outsource support and software engineering to get reliable, robust, secure, and valuable software at the lowest cost.',href:"/custom software development"},
    { icon:DevicePhoneMobileIcon ,title: 'Mobile App Development', paragraph: 'Software development services allow you to outsource support and software engineering to get reliable, robust, secure, and valuable software at the lowest cost.',href:"/mobile development" },
    { icon:BriefcaseIcon ,title: 'Business & Enterprise Solutions', paragraph: 'Software development services allow you to outsource support and software engineering to get reliable, robust, secure, and valuable software at the lowest cost.',href:"#!" },
    { icon:CodeBracketSquareIcon,title: 'DevOps Development', paragraph: 'Dreamz software development lifecycle results in a competitive advantage for businesses and their customers. Organizations use a combination of culture and technology to pursue this goal.',href:"/devops" },
    { icon:CpuChipIcon ,title: 'AI/ML Development', paragraph: 'Artificial Intelligence and Machine Learning are two new technology trends. Dreamz is a popular AI and ML provider to offer top-quality solutions. We provide data-driven and intelligent.',href:"/aiops" },
    { icon:CubeTransparentIcon ,title: 'Block Chain App Development', paragraph: 'Today, Blockchain is a prevalent issue in many industries, especially IT Field. The technology has provided the payment system with a secure and completely new one.',href:"/blockchain" },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5 flex items-center justify-center">
            <h6 className='aboutusTitle'>A COMPREHENSIVE SUITE OF End to End Engineering</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <EndLCCardComponent key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default EndLC;
