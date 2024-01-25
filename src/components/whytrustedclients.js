import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/ourclient.svg';
import './card.css'
const WhyTrustedClients = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>500+ Fortune Companies trusted on us</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">We believe in building lasting relationships with our clients. We have a long track record of success, working with some of the world‘s most respected companies and organizations. Our clients come from a variety of industries, including Fortune 500 companies, government agencies, educational institutions, and non–profits. Each has its own unique set of needs and objectives, and we strive to meet those needs with our innovative solutions. Our clients trust us to provide high-quality products and services that exceed their expectations. We take pride in the fact that our clients have come back to us time and again for their technology solutions. We understand the importance of building strong relationships, and we work hard to ensure that our clients get the best results from our solutions.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyTrustedClients;