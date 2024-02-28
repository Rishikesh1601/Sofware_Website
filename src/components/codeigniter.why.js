import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyCodeIgniter = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Code Igniter integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Welcome to Dreamz, where innovation intertwines with customization, paving the path for limitless possibilities. As a premier CodeIgniter Integration and Customization Company, we excel in seamlessly integrating and customizing CodeIgniter solutions to align with your distinctive business goals and objectives. Experience tailored excellence with Dreamz, where your vision meets reality.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyCodeIgniter