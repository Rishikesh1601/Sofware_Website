import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyAngular = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Angular integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Integration plays a pivotal role in crafting robust web applications. Dreamz, a leading Angular Development Company, specializes in seamless integration of Angular applications with diverse systems. This includes back-end databases and APIs, ensuring fluid functionality and enhanced user experiences. Moreover, Dreamz excels in integrating Angular apps with third-party tools like payment gateways and social media platforms, thereby expanding application capabilities and enriching user interactions. Trust Dreamz for comprehensive integration solutions that elevate your web application's performance and user satisfaction.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyAngular