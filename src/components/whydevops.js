import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/WhyCustomSoftware.svg';
import './card.css'
const WhyDevops = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why DevOps Services?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">DevOps is a practice of bringing together Development and Operations teams to collaboratively work towards faster development, deployment and operation of business applications. DevOps helps organizations to reduce costs and improve customer satisfaction by enabling faster and more frequent software releases. DevOps also helps organizations to improve their security posture and make more informed decisions about their IT infrastructure. DevOps enables organizations to rapidly and reliably deliver software applications and infrastructure changes. It also helps to ensure that systems and applications remain secure and available to meet customer demands. By automating processes, DevOps helps to reduce errors and improve the speed of service delivery.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyDevops