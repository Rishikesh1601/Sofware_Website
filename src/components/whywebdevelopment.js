import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyWebDevelopment = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Choose Web Development?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify sm:text-justify md:text-justify">Web development enables you to establish a robust online presence for your business, expanding your reach to a broader audience. Through your website, you can effectively showcase your services or products, offering customers a seamless way to explore and learn about them. Additionally, it provides a platform for customer interaction and feedback, fostering engagement and enhancing satisfaction.<br></br>Moreover, having a website contributes to establishing credibility and professionalism with potential customers and partners. It serves as a digital storefront, reflecting the integrity and reliability of your brand.<br></br>Furthermore, website development empowers you to build and execute an effective marketing strategy. With tools for tracking and measuring campaign success, you can refine your approach to maximize results and achieve your business objectives.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyWebDevelopment;