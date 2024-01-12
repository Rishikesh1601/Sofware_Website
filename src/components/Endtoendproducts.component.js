import React from 'react';
import Slider from 'react-slick';
import EndCarouselCard from './End.card.component';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';// Import Chevron icons from Heroicons
import './card.css'
const EndToEndComponent = () => {
  const items = [
    { title: 'Direct Access', icon: 'flaticon-social-media-marketing', description: 'See your authentic mission, and values come to life with a unique brand image.' },
    { title: 'Best Quality', icon: 'flaticon-pen-tablet', description: 'See your authentic mission, and values come to life with a unique brand image.' },
    { title: 'Manage Dataset', icon: 'flaticon-3d-model', description: 'See your authentic mission, and values come to life with a unique brand image.' },
    { title: 'Support Friendly', icon: 'flaticon-customer-service', description: 'See your authentic mission, and values come to life with a unique brand image.' },
    { title: 'Support Friendly', icon: 'flaticon-customer-service', description: 'See your authentic mission, and values come to life with a unique brand image.' },
    { title: 'Support Friendly', icon: 'flaticon-customer-service', description: 'See your authentic mission, and values come to life with a unique brand image.' },
    { title: 'Support Friendly', icon: 'flaticon-customer-service', description: 'See your authentic mission, and values come to life with a unique brand image.' },
  ];

  // ... (Previous code remains unchanged)

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true, // Enable center mode
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  

  return (
    <section className="pt-5">
        <div class="theme-title z-index-1">
          <h6 className='text-center'>A Comprehensive Suite of</h6>
          <h2 className='text-center'>End to End Engineering</h2>
        </div>
      <div className="container">
        <Slider {...settings}>
          {items.map((item, index) => (
            <EndCarouselCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <ChevronRightIcon className="h-6 w-6" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <ChevronLeftIcon className="h-6 w-6" />
    </div>
  );
};

export default EndToEndComponent;
