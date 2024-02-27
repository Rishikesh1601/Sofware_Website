import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyIonic = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Ionic integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Step into the realm of bespoke excellence in Ionic app development with Dreamz. We go beyond mere app construction; we create immersive experiences. Through our proficiency in Ionic Integration & Customization, we empower your app to seamlessly align with your distinct business requirements, all while delivering unparalleled performance and user satisfaction. Trust Dreamz to elevate your app to new heights of success.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyIonic