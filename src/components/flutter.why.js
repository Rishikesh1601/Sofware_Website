import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyFlutter = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Flutter integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">At Dreamz, we foster collaborative partnerships, working closely with you every step of the way through the integration and customization process. Our dedicated team ensures that your requirements are meticulously understood and fully met. With extensive experience across diverse industries, we offer valuable insights and suggestions to enhance your application, ensuring its success in the competitive market landscape. Trust Dreamz to be your trusted partner, committed to delivering exceptional results tailored to your unique needs.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyFlutter