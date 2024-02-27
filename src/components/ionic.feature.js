// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const IonicFeature = () => {
  const cardData = [
    { number: '01', title: 'Cross-Platform Excellence', paragraph: "Our expertise lies in cross-platform app development, harnessing the power of the Ionic framework to craft applications that operate seamlessly across iOS, Android, and web platforms, all from a unified codebase." },
    { number: '02', title: 'Customized Solutions', paragraph: "Recognizing the uniqueness of every business, our team collaborates closely with clients to customize mobile app solutions that precisely align with their distinct goals and requirements." },
    { number: '03', title: 'UI/UX Brilliance', paragraph: "Our design experts specialize in crafting visually stunning and user-friendly interfaces, ensuring that your app captivates and delights users, ultimately enhancing user engagement and satisfaction."},
    { number: '04', title: 'Plugin Integration', paragraph: "We specialize in customizing and integrating plugins to incorporate unique features and functionalities into your Ionic app, thereby enhancing its capabilities and providing a tailored solution that meets your specific needs." },
    { number: '05', title: 'Performance Optimization', paragraph: "We meticulously optimize app performance to ensure speed, responsiveness, and efficient resource usage, delivering users a seamless and enjoyable experience that exceeds expectations." },
    { number: '06', title: 'Quality Assurance', paragraph: "We adhere to rigorous testing and quality assurance processes to meticulously identify and resolve bugs, guaranteeing a reliable and error-free app that meets the highest standards of performance and reliability." },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Flutter Features</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default IonicFeature;
