import React from 'react';
import Slider from 'react-slick';
// import EndCarouselCard from './End.card.component';
import OurProjectCard from './Ourproject.card';
import Vcard from "../assets/Our Projects/vcard.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VehicleImage from "../assets/Our Projects/Vehicle Management System.png"
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid';// Import Chevron icons from Heroicons
import './card.css'
const OurProjectComponent = () => {
  const items = [
    { title: 'Hospital Management System',img: 'https://dreamztechnology.com/wp-content/uploads/2023/09/Hospital-Management-System-1536x648-1.webp'},
    { title: 'Vehicle Management System',img:VehicleImage},
    { title: 'Business and Organization',img:'https://dreamztechnology.com/wp-content/uploads/2023/09/Organization-Management-1536x648-1.webp'},
    { title: 'Business and Organization',img:'https://dreamztechnology.com/wp-content/uploads/2023/09/ecommerce-solutions-1536x648-1.webp'},
    {title: 'Vcard System', img:Vcard}
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
          <h6 className='text-center'>Best Software Solutions Developed by Dreamz</h6>
        </div>
      <div className="container mt-11 reactSliderEdit">
        <Slider {...settings}>
          {items.map((item, index) => (
            <OurProjectCard key={index} {...item} />
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

export default OurProjectComponent;
