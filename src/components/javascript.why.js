import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyJavascript = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Javascript Web Designing</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">At Dreamz JavaScript Web Designing Company, our dedicated team of JavaScript experts possesses a deep understanding of this versatile programming language, enabling us to push the boundaries of what's possible on the web. What sets us apart is our commitment to delivering more than just websites—we create dynamic, user-centric experiences. Whether it's building interactive web applications, crafting responsive interfaces, or enhancing user engagement through animations and real-time features, Dreamz is your trusted partner in bringing your digital vision to life.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyJavascript