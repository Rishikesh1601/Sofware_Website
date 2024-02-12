import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as Whyitops } from '../assets/whyitops.svg';
import './card.css'
const WhyItOps = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <Whyitops className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>What does IT operations do?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Dreamz Systems provides an extensive suite of on-demand IT operations services, including infrastructure management, application security, data center management, and telecommunications. Our team of experts ensures that your business is running smoothly and efficiently, 24/7. We provides a platform for business and individual users to share and collaborate on workflows and tasks that need to be completed in order to run a business or individual. IT operations manages the day-to-day operations of the platform, from receiving new requests to processing payments. They also ensure the reliability and security of the service, as well as the data of the users</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyItOps