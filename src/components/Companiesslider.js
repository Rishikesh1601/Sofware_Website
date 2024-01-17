import React, { Component } from "react";
import Slider from "react-slick";
import './card.css'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
class CompaniesSlider extends Component {
  render() {
    const NextArrow = (props) => {
      const { onClick } = props;
      return (
        <div className="arrow next" onClick={onClick}>
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      );
    };

    const PrevArrow = (props) => {
      const { onClick } = props;
      return (
        <div className="arrow prev" onClick={onClick}>
         <ChevronLeftIcon className="h-6 w-6" /> 
        </div>
      );
    };

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div class="theme-title z-index-1 pt-7">
          <h6 className='text-center'>Our Clients</h6>
        </div>
        <Slider {...settings}>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/IOF.jpg" alt="" className="grayscale" />
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/Buldhana-Police-Logo.jpg" alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/Tata-AutoCorp-1.jpg" alt="" className="grayscale" />
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/Vivo-Logo.jpg" alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/John-Deere-Logo.jpg" alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/Softtech-Logo.jpg" alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/Cian-Logo.jpg" alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src="https://dreamztechnology.com/wp-content/uploads/2023/10/Max-heal-Logo.jpg" alt="" className="grayscale"/>
          </div>
          {/* Add more slide items as needed */}
        </Slider>
      </div>
    );
  }
}

export default CompaniesSlider;
