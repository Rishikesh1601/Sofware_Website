import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyOpenCart = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Open Cart ecommerce CMS</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">OpenCart is an open source eCommerce platform that provides a robust and reliable shopping cart solution for online stores. It is easy to use, feature-rich and has a wide range of customization options. OpenCart also offers excellent customer support and a large community of developers who are constantly working on improving the platform. OpenCart allows store owners to quickly set up their online store with minimal effort, while still offering powerful features that will help them grow their business.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyOpenCart