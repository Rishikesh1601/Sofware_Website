import React from 'react';
import './card.css'

const EndCarouselCard = ({ title, icon, description }) => {
  const IconComponent = icon; // Store the icon component in a variable
  return (
    <div className="featured-item style-3 text-center mx-5 mb-4">
      <div className="featured-icon">
        <i className='mainicon'> <IconComponent className="h-6 w-6 mainicon1" aria-hidden="true" /></i>
      </div>
      <div className="featured-desc">
        <div className="featured-title">
          <h5 className='text-xl font-bold'>{title}</h5>
        </div>
        <p className='text-justify'>{description}</p>
      </div>
    </div>
  );
};

export default EndCarouselCard;
