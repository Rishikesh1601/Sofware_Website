// CardCaller.js
import React from 'react';
// import EndLCCardComponent from './endLC.card.component';
import TechnologiesCardComponent from './technologies.card';
import './endlc.css';
// import { ArrowDownCircleIcon, CubeIcon} from '@heroicons/react/24/outline';
// import { BriefcaseIcon, CodeBracketSquareIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';
// import { CubeTransparentIcon } from '@heroicons/react/24/solid';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleNotch, faCodeBranch, faDatabase, faDiagramProject, faFire, faLeaf, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faLaravel, faNode, faOpencart, faReact} from '@fortawesome/free-brands-svg-icons';
// import { CircleStackIcon } from '@heroicons/react/24/solid';
const MobileTechnologies = () => {
  const cardData = [
    { icon: faAngular ,title: 'Angular',href:"/angular"},
    { icon: faMobile ,title: 'Flutter',href:"/flutter" },
    { icon: faCircleNotch ,title: 'Ionic',href:"/ionic" },
    { icon: faReact,title: 'React', href:"/react" },  
    { icon: faNode ,title: 'Node',href:"/node" },
    { icon: faLaravel ,title: 'Laravel',href:"/laravel" },
    { icon: faDiagramProject ,title: 'Dotnet',href:"/dotnet"},
    { icon: faFire ,title: 'Code Igniter',href:"/codeigniter" },
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

export default MobileTechnologies;
