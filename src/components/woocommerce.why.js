import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyWoocommerce = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Woocommerce integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">At Dreamz, we recognize that your e-commerce store is more than just a website; it's the heartbeat of your business. To fully leverage the power of WooCommerce, you require seamless integrations and customizations that resonate with your specific goals and requirements. That's where we step in – serving as your trusted partner in WooCommerce integration and customization. With our expertise and dedication, we ensure that your WooCommerce store is tailored precisely to your needs, empowering your business to thrive in the competitive digital landscape.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyWoocommerce