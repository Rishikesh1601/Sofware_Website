// CarouselItem.js
import React from 'react';
import './card.css'
const EndCarouselCard = ({ title, icon, description }) => {
  return (
    <div className="featured-item style-3 text-center mx-5 mb-4">
      <div className="featured-icon">
        <i className={`flaticon ${icon}`}></i>
      </div>
      <div className="featured-desc">
        <div className="featured-title">
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EndCarouselCard;
