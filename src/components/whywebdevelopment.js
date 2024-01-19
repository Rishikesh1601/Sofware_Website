import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/WhyCustomSoftware.svg';
import './card.css'
const WhyWebDevelopment = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Web Development ?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">It allows you to create an online presence for your business and reach a wider audience. You can showcase your services or products, and provide customers with an easy way to learn about them. You can also create a platform for customer interaction and feedback. Having a website also helps to establish credibility and professionalism with potential customers and partners. Finally, website development can help you to build an effective marketing strategy, as well as track and measure the success of your campaigns.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyWebDevelopment;