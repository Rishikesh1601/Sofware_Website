import React from 'react';
import Slider from 'react-slick';
import EndCarouselCard from './End.card.component';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BriefcaseIcon, ChevronLeftIcon, ChevronRightIcon, CodeBracketSquareIcon, CpuChipIcon, CubeTransparentIcon, DevicePhoneMobileIcon, RectangleGroupIcon } from '@heroicons/react/24/solid';// Import Chevron icons from Heroicons
import './card.css'
const EndToEndComponent = () => {
  const items = [
    { title: 'Custom Software Development', icon: RectangleGroupIcon, description: 'Software development services allow you to outsource support and software engineering to get reliable, robust, secure, and valuable software at the lowest cost.' },
    { title: 'Mobile App Development', icon: DevicePhoneMobileIcon, description: 'Software development services allow you to outsource support and software engineering to get reliable, robust, secure, and valuable software at the lowest cost.' },
    { title: 'Business & Enterprise Solutions', icon: BriefcaseIcon, description: 'Software development services allow you to outsource support and software engineering to get reliable, robust, secure, and valuable software at the lowest cost.' },
    { title: 'DevOps Development', icon: CodeBracketSquareIcon, description: 'Dreamz software development lifecycle results in a competitive advantage for businesses and their customers. Organizations use a combination of culture and technology to pursue this goal.' },
    { title: 'AI/ML Development', icon: CpuChipIcon, description: 'Artificial Intelligence and Machine Learning are two new technology trends. Dreamz is a popular AI and ML provider to offer top-quality solutions. We provide data-driven and intelligent.' },
    { title: 'Block Chain App Development', icon: CubeTransparentIcon, description: 'Today, Blockchain is a prevalent issue in many industries, especially IT Field. The technology has provided the payment system with a secure and completely new one.' },
  ];

  // ... (Previous code remains unchanged)

const settings = {
    // dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  

  

  return (
    <section className="pt-5">
        <div class="theme-title z-index-1">
          <h6 className='text-center'>A Comprehensive Suite of</h6>
          <h2 className='text-center aboutusSubTitle'>End to End Engineering</h2>
        </div>
      <div className="container mt-11">
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

  const handlePrevClick = () => {
    console.log('Previous Arrow Clicked');
    onClick();
  };
  return (
    <div className="arrow prev" onClick={handlePrevClick}>
      <ChevronLeftIcon className="h-6 w-6" />
    </div>
  );
};

export default EndToEndComponent;
