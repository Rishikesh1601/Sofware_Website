import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyLaravel = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Laravel integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">At Dreamz, we offer a plethora of features to customize your Laravel application. Our arsenal includes a robust templating system, efficient routing mechanisms, advanced caching capabilities, secure authentication systems, and reliable database management tools. Additionally, we provide a diverse array of plugins and widgets to further tailor your application to your specific needs and preferences.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyLaravel