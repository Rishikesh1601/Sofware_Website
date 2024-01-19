// CardTemplate.js
import React from 'react';
import './sdlc.css';
const SDLCCardTemplate = ({ number, title, paragraph }) => {
  return (
    <div className="sdlc-card">
      <div className="sdlc-card-header">{number}</div>
      <div className="sdlc-card-body">
        <h2 className='sdlc-title'>{title}</h2>
        <p className='sdlc-para'>{paragraph}</p>
      </div>
    </div>
  );
};

export default SDLCCardTemplate;
