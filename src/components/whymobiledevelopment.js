import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/WhyCustomSoftware.svg';
import './card.css'
const WhyMobileDevelopment = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Mobile App Development ?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">Mobile app development is becoming increasingly popular as more and more people are using mobile devices to access the internet. Mobile apps provide businesses with the opportunity to reach a larger audience, regardless of location. Mobile apps also make it easier for businesses to interact with customers, provide them with helpful information, and offer services or products. Additionally, the use of mobile apps can help enhance customer experience and loyalty, improve customer engagement, and drive sales.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyMobileDevelopment;