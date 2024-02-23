import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './testimonial.card'; // Assuming you have a TestimonialCard component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import './testimonialCard.css';// Import CSS file for styling
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
const TestimonialComponent = () => {
  // Assuming you have an array of testimonial objects with quote, avatar, and name properties
  const testimonials = [
    { quote: "Dreamz Technology, led by Gaurav, offers seamless website development. With creative solutions tailored to your needs and personalized training for easy editing, they're your go-to team. Friendly, approachable, and efficient, Dreamz Technology ensures a hassle-free experience.", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWqN7aSif2yReoeeuSZ5xL_AFkn8hBr50IbX6qGGiUUDcI=w75-h75-p-rp-mo-br100", name: "Liza Bulsara" },
    { quote: "The team working at Dreamz is really enthusiastic and having solutions to all business problems and challenges to take you to next level. They have good customer base over the years and gained the expertise. Quick response and timely execution is the key to their success seems to be. All the very best to your future success.", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWFZVI316ujCEEON1EJCz5iaeRFg1cpcOwJxTIGsKrnXw8=w75-h75-p-rp-mo-ba7-br100", name: "Ganesh Paisole" },
    { quote: "I am very happy with services and supports provided by Mr. Gaurav Gattani & his team. I have taken services for Web and Mobile App design & development. I am hopeful for continuous support from him in future as well. Thank You!!", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWgp8Xfz25qVklL0nmQN73sR9QsjAA1cFCFa3rq976LpPU=w75-h75-p-rp-mo-ba2-br100", name: "Jagdish Jha" },
    { quote: "Dreamz Software delivers quality work and the team offers innovative solutions to meet their client needs. They also manage the project exceptionally and their ability to understand the business purpose and need is noteworthy.", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWqaTZ9NxOT5T-7acNvceJFxINnN9z3VK8z4Aze2l8UpAE=w75-h75-p-rp-mo-br100", name: "Rahool Patil" },
    { quote: "Exceptional service with a commitment to on-time project delivery. The Dreamz team showcases exceptional technical prowess and a cooperative spirit, ensuring smooth collaboration throughout the project lifecycle.", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJtttrD9F1-8qoh7nhMwkhFJwS-g4s7_QCe_wNgQdFj=w75-h75-p-rp-mo-ba3-br100", name: "Sumit Nahata" },
    // Add more testimonial objects as needed
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className="testimonial-section">
      <div class="theme-title z-index-1">
          <h6 className='text-center'>Client Success Stories: Discover What Our Customers Have to Says</h6>
      </div>
      <div className="container mt-11 mb-7 reactSliderEdit">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
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

export default TestimonialComponent;
