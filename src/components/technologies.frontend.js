// CardCaller.js
import React from 'react';
// import EndLCCardComponent from './endLC.card.component';
import TechnologiesCardComponent from './technologies.card';
import './endlc.css';
// import { ArrowDownCircleIcon, CubeIcon} from '@heroicons/react/24/outline';
// import { BriefcaseIcon, CodeBracketSquareIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';
// import { CubeTransparentIcon } from '@heroicons/react/24/solid';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleNotch, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faHtml5, faJs, faReact, faShopify, faWordpress } from '@fortawesome/free-brands-svg-icons';
const FrontendTechnologies = () => {
  const cardData = [
    { icon: faAngular ,title: 'Angular',href:"/angular"},
    { icon: faBootstrap ,title: 'Bootstrap',href:"/bootstrap" },
    { icon: faMobile ,title: 'Flutter',href:"/flutter" },
    { icon: faHtml5,title: 'Html Css', href:"/html" },  
    { icon: faCircleNotch ,title: 'Ionic',href:"/ionic" },
    { icon: faJs ,title: 'Javascript',href:"/javascript" },
    { icon: faReact ,title: 'React',href:"/react" },
    { icon: faShopify ,title: 'Shopify',href:"/shopify" },
    { icon: faWordpress ,title: 'Wordpress',href:"/wordpress" },
    { icon: faCartShopping ,title: 'WooCommerce',href:"/woocommerce" },
  ];

  return (
    <div>
        
    <div className="sdlc-card-container ms-7 me-7">
      {cardData.map((card, index) => (
        <TechnologiesCardComponent key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default FrontendTechnologies;
