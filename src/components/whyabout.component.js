import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyAboutji } from '../assets/whyabout.svg';
import './card.css'
const WhyAbout = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyAboutji className='w-full h-96 z-10'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>14+ Years Of Delivering website Development & Software Solutions</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Dreamz is a global IT consulting & software solutions provider with 40+ software consultants working full time across 2 delivery centres. Dreamz is headquartered in Pune, India with offices in USA. Our commitment to quality and 14+ years of experience has made us serve over 800+ clients across 10+ countries with 85% client retention. Our objective is to deliver robust, scalable, innovative and quality solutions while adhering to strict deadlines, for small-medium businesses as well as Fortune 500 Companies. We encourage to our team to understand and improve the technology that  are evolving in business solution and make the perfect enterprises solution for the customers. We believe to make a transformation partner offering custom software development, business intelligence services, and mobile and web application development at scale.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyAbout