import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyReact = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>React integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">With React's flexible and extensible nature, developers can seamlessly integrate third-party libraries, APIs, and tools to enhance functionality and streamline development processes. Additionally, React's modular architecture facilitates easy customization, enabling developers to create bespoke solutions that align perfectly with project requirements. Whether it's integrating with existing systems or building from scratch, React offers endless possibilities for creating innovative and scalable applications.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyReact