// CardTemplate.js
import React from 'react';
import './endlc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TechnologiesCardComponent = ({ icon, title, paragraph, href}) => {
    const IconComponent = icon;
  return (
    <a className="endlc-card" href={href} >
    <div className='flex'>
    <div className="featured-icon flex items-center justify-center">
    <FontAwesomeIcon
        icon={IconComponent}
        className="h-4 w-4 mainicon2 text-white fill-white bg-gradient-to-br from-teal-400 via-indigo-600 to-purple-700 p-2 rounded-full"
        aria-hidden="true"
    />
    </div>
      <div className="endlc-card-body">
        <h2 className='endlc-title1 text-center flex justify-center items-center'>{title}</h2>
        {/* <p className='endlc-para'>{paragraph}</p> */}
      </div>
    </div>
    </a>
  );
};

export default TechnologiesCardComponent;
