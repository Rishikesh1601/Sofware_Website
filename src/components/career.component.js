import React, { useState } from "react";
import "./CareerComponent.css"; // Import a separate CSS file for styling

const CareerComponent = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);

  const toggleAccordion = (accordionNumber) => {
    switch (accordionNumber) {
      case 1:
        setAccordion1(!accordion1);
        setAccordion2(false);
        setAccordion3(false);
        setAccordion4(false);
        break;
      case 2:
        setAccordion1(false);
        setAccordion2(!accordion2);
        setAccordion3(false);
        setAccordion4(false);
        break;
      case 3:
        setAccordion1(false);
        setAccordion2(false);
        setAccordion3(!accordion3);
        setAccordion4(false);
        break;
      case 4:
        setAccordion1(false);
        setAccordion2(false);
        setAccordion3(false);
        setAccordion4(!accordion4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="career-container">
      <div className={`accordionji ${accordion1 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(1)}>Job ID: DME001 Digital Marketing Executive</button>
        {accordion1 && (
          <div className="description">
            <p className="mb-2"><strong>Min. Qualification:</strong> Graduate</p>
            <p className="mb-2"><strong>Min. Experience:</strong> 3 years</p>
            <p className="mb-2"><strong>Salary:</strong> Negotiable</p>
            <p className="mb-2"><strong>Required Skills:</strong> Google Adwords, Other PPC Platform, Lead Generation.</p>

            <h4><strong>Responsibilities:</strong></h4>
            <ul className="makelist1">
              <li className="makelistlikealist">Plan and monitor the ongoing company presence on social media (Twitter, Facebook etc.)</li>
              <li className="makelistlikealist">Launch optimized online adverts through Google Adwords, Facebook etc. to increase company and brand awareness.</li>
              <li className="makelistlikealist">Be actively involved in SEO efforts (keyword, image optimization etc.)</li>
              <li className="makelistlikealist">Provide creative ideas for content marketing and update website</li>
              <li className="makelistlikealist">Collaborate with designers to improve user experience.</li>
              <li className="makelistlikealist">Measure performance of digital marketing efforts using a variety of Web analytics tools (Google Analytics, WebTrends etc.).</li>
              <li className="makelistlikealist">Excellent understanding of digital marketing concepts and best practices.</li>
              <li className="makelistlikealist">Experience with B2C social media, Google Adwords and email campaigns and SEO/SEM.</li>
            </ul>

            <p><strong>Skills and experience in:</strong> Creative content writing.</p>
          </div>
        )}
      </div>

      <div className={`accordionji ${accordion2 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(2)}>Job ID: BDM001 Business Development Manager</button>
        {accordion2 && <p className="description">Description for Job 2</p>}
      </div>

      <div className={`accordionji ${accordion3 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(3)}>Job ID: SWD001: Software Engineer (PHP Developer)</button>
        {accordion3 && <p className="description">Description for Job 3</p>}
      </div>

      <div className={`accordionji ${accordion4 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(4)}>Job ID: FLD001 Software Engineer (Flutter Developer) </button>
        {accordion4 && <p className="description">Description for Job 4</p>}
      </div>
    </div>
  );
};

export default CareerComponent;
