import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyBootStrap = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Bootstrap Web Designing</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">As Bootstrap specialists, our team boasts extensive expertise and hands-on experience with this powerful front-end framework. Bootstrap's robust capabilities guarantee responsive, mobile-friendly, and visually appealing websites, positioning you for success in today's digital landscape. Partner with us to leverage the full potential of Bootstrap and create stunning web experiences that resonate with your audience.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyBootStrap