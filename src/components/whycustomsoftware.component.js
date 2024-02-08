import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/WhyCustomSoftware.svg';
import './card.css'
const WhyCustomSoftware = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Custom Software Development ?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Custom software development is the process of creating software tailored to the individual needs of a given business or organization. It involves assessing the organization’s specific needs and then devising a software solution to meet those needs. The end result is a custom–made program that is tailored to the organization’s specific goals and objectives. We understand that custom software development is not a one-size-fits-all solution. That’s why we take the time to get to know your business and its specific needs in order to create a tailored software solution. We also take the time to make sure that the software is reliable, secure, and user-friendly so that it meets the highest standards. When you work with Dreamz, you can be sure that you are getting a comprehensive, custom-made software solution that is tailored to your unique needs. Our team of developers is committed to delivering. As one of the top custom software development company in Pune, we can transform your business with powerful digital and scalable solutions.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyCustomSoftware