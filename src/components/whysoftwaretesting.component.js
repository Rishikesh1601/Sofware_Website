import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/WhyCustomSoftware.svg';
import './card.css'
const WhySoftwareTesting = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Quality Assurance Important?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">Software Quality Assurance (SQA) is an important part of the software development process. It ensures that all software developed meets predetermined standards and is of the highest quality. SQA helps to prevent costly mistakes that could affect the functionality of the software and its usability. This process provides assurance that the software meets user requirements and is reliable, secure, and of high quality. SQA also helps to identify any potential issues with the software before it is released, helping to reduce the risk of costly post-release fixes.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhySoftwareTesting;