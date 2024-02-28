import React, { useState } from 'react';
// import EndLC from './endLC';
// import IndustryComponent from './IndustryComponent';
// import TechnologiesComponent from './TechnologiesComponent';
import './accordian.css'
import FrontendTechnologies from './technologies.frontend';
import BackendTechnologies from './technologies.backend';
import MobileTechnologies from './technologies.mobile';
// import IndustryLC from './industryLC';
// import TechnologyLC from './technologyLC';

const TechnologiesAccordion = () => {
  const [servicesOpen, setServicesOpen] = useState(true); // Open by default
  const [industryOpen, setIndustryOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setIndustryOpen(false);
    setTechnologiesOpen(false);
  };

  const toggleIndustry = () => {
    setServicesOpen(false);
    setIndustryOpen(!industryOpen);
    setTechnologiesOpen(false);
  };

  const toggleTechnologies = () => {
    setServicesOpen(false);
    setIndustryOpen(false);
    setTechnologiesOpen(!technologiesOpen);
  };

  return (
    <>
    <div className='theme-title  ms-5 flex items-center justify-center'>
        <h6 className='aboutusTitle offers'>Technologies we work on</h6>
    </div>
    <div className="accordion-container">
      <div className="accordion-buttons">
      <button className={servicesOpen ? 'active' : ''} onClick={toggleServices}>Frontend</button>
        <button className={industryOpen ? 'active' : ''} onClick={toggleIndustry}>Backend</button>
        <button className={technologiesOpen ? 'active' : ''} onClick={toggleTechnologies}>Mobile</button>
      </div>
      <div className="accordion-components">
        {servicesOpen && <FrontendTechnologies />}
        {industryOpen && <BackendTechnologies />}
        {technologiesOpen && <MobileTechnologies />}
      </div>
    </div>
    </>
  );
};

export default TechnologiesAccordion;
