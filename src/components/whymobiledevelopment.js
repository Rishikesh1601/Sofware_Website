import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyMobileDevelopment = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-11 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Choose Mobile App Development?</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">The popularity of mobile app development is on the rise, fueled by the growing number of users accessing the internet through mobile devices. Mobile apps offer businesses a platform to expand their reach to a wider audience, irrespective of geographical boundaries. They facilitate seamless interaction with customers, providing valuable information and delivering services or products conveniently.<br></br>Moreover, mobile apps play a pivotal role in enhancing customer experience and fostering loyalty. By offering a personalized and user-friendly interface, businesses can improve engagement levels and drive sales effectively.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyMobileDevelopment;