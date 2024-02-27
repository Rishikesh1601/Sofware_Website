import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyWordPress = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>WordPress is the most popular CMS based</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">WordPress reigns as the most widely used content management system (CMS) globally, empowering over 34% of all websites on the internet. As a free and open-source platform, WordPress facilitates effortless website and blog creation and management. Embraced by businesses of all scales, it boasts a diverse array of features, rendering it an ideal choice for building a website or blog. WordPress's high level of customization enables users to fashion a unique online presence suited precisely to their requirements. Additionally, its user-friendly interface makes it accessible to beginners, further cementing its status as a premier CMS in the digital landscape.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyWordPress