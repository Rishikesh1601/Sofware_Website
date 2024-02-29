import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyNode = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Node integration and customization</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Node.js is a powerful runtime environment that allows you to build scalable and efficient server-side applications using JavaScript. Node.js provides a vast ecosystem of modules and libraries that you can integrate into your applications to extend their functionality. Additionally, Node.js allows for extensive customization to tailor your application to specific requirements. Let’s explore Node.js integration and customization in more detail.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyNode