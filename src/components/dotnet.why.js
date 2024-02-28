import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyDotNet = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>DotNet Integration Service</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Dreamz offers comprehensive .NET integration services aimed at seamlessly integrating clients' existing systems and applications with cutting-edge .NET technologies. Our solutions encompass integration with third-party tools and services, as well as seamless integration with various platforms and frameworks. Trust Dreamz to streamline your business processes with expert .NET integration solutions tailored to your specific needs.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyDotNet