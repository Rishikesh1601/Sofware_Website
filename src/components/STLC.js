// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const STLC = () => {
  const cardData = [
    { number: '01', title: 'Test Planning', paragraph: 'In this phase, the initial activities related to the testing process are defined. This includes the selection of test tools, estimation of the time and resources required for the testing process, and the development of a test plan.' },
    { number: '02', title: 'Test Analysis', paragraph: 'In this phase, the testing requirements are analyzed in detail to identify the test scenarios and the test data needed to carry out the testing process' },
    { number: '03', title: 'Test Design and Development', paragraph: 'In this phase, the test cases are designed, developed and documented based on the test requirements identified in the Test Analysis phase.' },
    { number: '04', title: 'Test Execution', paragraph: 'In this phase, the actual execution of the test cases is carried out. This includes running the test cases, logging the results and reporting any defects found.' },
    { number: '05', title: 'Test Closure', paragraph: 'In this phase, the testing process is formally closed. This includes documenting the test results, releasing the test environment and archiving the test data.' },
    { number: '06', title: 'Planning & Improvement', paragraph: 'Planning and improvement involve the steps taken to ensure that a business or organization is operating efficiently and effectively. This may involve the development of strategies, the implementation of systems and processes' },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>Software Testing Life Cycle (SWTLC)</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default STLC;
