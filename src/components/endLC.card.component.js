// CardTemplate.js
import React from 'react';
import './endlc.css';
const EndLCCardComponent = ({ icon, title, paragraph, href}) => {
    const IconComponent = icon;
  return (
    <a className="endlc-card" href={href} >
    <div>
      <div className="featured-icon flex items-center">
        <i className='mainicon'> <IconComponent className="h-6 w-6 mainicon1 fill-white bg-gradient-to-br from-teal-400 via-indigo-600 to-purple-700 p-2  rounded-full" aria-hidden="true" /></i>
      </div>
      <div className="endlc-card-body">
        <h2 className='endlc-title'>{title}</h2>
        <p className='endlc-para'>{paragraph}</p>
      </div>
    </div>
    </a>
  );
};

export default EndLCCardComponent;
