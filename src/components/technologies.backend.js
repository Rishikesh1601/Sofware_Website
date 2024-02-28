// CardCaller.js
import React from 'react';
// import EndLCCardComponent from './endLC.card.component';
import TechnologiesCardComponent from './technologies.card';
import './endlc.css';
// import { ArrowDownCircleIcon, CubeIcon} from '@heroicons/react/24/outline';
// import { BriefcaseIcon, CodeBracketSquareIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';
// import { CubeTransparentIcon } from '@heroicons/react/24/solid';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faDatabase, faDiagramProject, faFire, faLeaf, faServer } from '@fortawesome/free-solid-svg-icons';
import { faLaravel, faNode, faOpencart} from '@fortawesome/free-brands-svg-icons';
// import { CircleStackIcon } from '@heroicons/react/24/solid';
const BackendTechnologies = () => {
  const cardData = [
    { icon: faDiagramProject ,title: 'Dotnet',href:"/dotnet"},
    { icon: faFire ,title: 'Code Igniter',href:"/codeigniter" },
    { icon: faLaravel ,title: 'Laravel',href:"/laravel" },
    { icon: faLeaf,title: 'MongoDB', href:"/mongo" },  
    { icon: faDatabase ,title: 'MSSQL',href:"/mssql" },
    { icon: faCodeBranch ,title: 'MYSQL',href:"/mysql" },
    { icon: faNode ,title: 'Node',href:"/node" },
    { icon: faServer ,title: 'Oracle Database',href:"/oracle" },
    { icon: faOpencart ,title: 'Open Cart',href:"/opencart" },
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

export default BackendTechnologies;
