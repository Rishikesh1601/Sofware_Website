import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why software testing.svg';
import './card.css'
const WhySoftwareTesting = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-24 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why is Quality Assurance Important?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Software Quality Assurance (SQA) plays a crucial role in the software development process by ensuring that all developed software adheres to predefined standards and achieves the highest quality. SQA serves as a preventative measure against costly errors that could compromise software functionality and usability. It offers assurance that the software meets user specifications and maintains reliability, security, and excellence. Additionally, SQA aids in detecting potential issues before software release, mitigating the risk of expensive post-release corrections.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhySoftwareTesting;