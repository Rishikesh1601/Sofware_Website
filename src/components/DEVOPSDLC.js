// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const DevopstoDeliver = () => {
  const cardData = [
    { number: '01', title: 'Fully Automation', paragraph: 'DevOps is a set of practices and tools that enable automation of processes associated with software development, testing, deployment, and infrastructure management. Through automation, DevOps practices aim to accelerate the development process, reduce errors, and improve the overall quality of the software. Automation tools can include scripting languages, configuration management tools, continuous integration tools, and container technologies.' },
    { number: '02', title: 'Fast and Effortless Execution', paragraph: 'DevOps also encourages collaboration between development and operations teams, which reduces time to market and improves customer experience. DevOps tools, such as automation and orchestration, reduce manual effort and enable developers to quickly iterate on code and deploy updates. In addition, DevOps allows teams to monitor and measure software performance in real time, giving organizations the insights they need to continuously improve their software.' },
    { number: '03', title: 'Less Human Interaction', paragraph: 'DevOps reduces human interaction is through the use of configuration management tools. These tools automate the process of configuring and maintaining software systems, meaning that the teams do not need to manually make changes to the system. This allows for faster and more efficient deployments, as well as improved scalability. DevOps encourages collaboration between teams. This is done through communication platforms such as wikis and chatrooms' },
    { number: '04', title: 'Decrease the Error', paragraph: 'DevOps is an approach to software development that emphasizes collaboration between development and operations teams to improve the speed, reliability, and efficiency of the software deployment process. To reduce the error in a DevOps environment. Automating processes can help reduce human errors and speed up the development process. This can be done by using tools such as Continuous Integration/Continuous Delivery (CI/CD) pipelines, automated testing, and Infrastructure-as-Code (IaC)' },
    { number: '05', title: 'Optimization of the Resources', paragraph: 'Monitoring is essential to ensure that the DevOps environment is running smoothly. Monitoring can help identify any issues that need to be addressed and can be used to track performance and resource utilization. Collaboration is key in DevOps, as it allows for teams to work together and share information. This helps reduce the amount of time spent on repetitive tasks and enables teams to focus on more strategic activities' },
    { number: '06', title: 'Enhanced Security', paragraph: 'Secure DevOps is a branch of DevOps that focuses on the security of the development process. It is an approach to software development that combines security best practices with development and operations teams to ensure the security of applications and systems. Secure DevOps practices include secure coding, automated testing, and continuous monitoring and auditing of systems, applications, and data. It also includes secure version control and secure deployment processes.' },
    // Add more data as needed
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>DevOps to Deliver</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default DevopstoDeliver;
