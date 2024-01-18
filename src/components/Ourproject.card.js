import React from 'react';
import './card.css'

const OurProjectCard = ({ title, img}) => {
//   const ImgComponent = img; // Store the icon component in a variable
  return (
    <div className="featured-item style-3 text-center mx-5 mb-4">
      <div className="featured-img">
        <img src={img} alt='our_project' className='h-30 w-full' />
      </div>
      <div className="featured-desc">
        <div className="featured-title">
          <h5 className='text-xl font-bold pt-5'>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default OurProjectCard;
