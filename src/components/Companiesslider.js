import React, { Component } from "react";
import Slider from "react-slick";
import './card.css'
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import IOF from "../assets/clients/Indian-Ordance.jpg";
import Bul from "../assets/clients/Buldhana-Police.jpg";
import Tata from "../assets/clients/Tata-AutoCorp.jpg";
import Vivo from "../assets/clients/Vivo.jpg";
import John from "../assets/clients/John-Dee.jpg";
import Soft from "../assets/clients/Soft-tech.jpg";
import Cian from "../assets/clients/CIAN.jpg";
import Max from "../assets/clients/Max-Heal.jpg";
class CompaniesSlider extends Component {
  render() {
    // const NextArrow = (props) => {
    //   const { onClick } = props;
    //   return (
    //     <div className="arrow next" onClick={onClick}>
    //       <ChevronRightIcon className="h-6 w-6" />
    //     </div>
    //   );
    // };

    // const PrevArrow = (props) => {
    //   const { onClick } = props;
    //   return (
    //     <div className="arrow prev" onClick={onClick}>
    //      <ChevronLeftIcon className="h-6 w-6" /> 
    //     </div>
    //   );
    // };

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
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
        <Slider {...settings} className="sliderComponentForMobile flex gap-4">
          <div className="image-container">
            <img src={IOF} alt="" className="grayscale" />
          </div>
          <div className="image-container">
            <img src={Bul} alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src={Tata} alt="" className="grayscale" />
          </div>
          <div className="image-container">
            <img src={Vivo} alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src={John} alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src={Soft} alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src={Cian} alt="" className="grayscale"/>
          </div>
          <div className="image-container">
            <img src={Max} alt="" className="grayscale"/>
          </div>
          {/* Add more slide items as needed */}
        </Slider>
      </div>
    );
  }
}

export default CompaniesSlider;
