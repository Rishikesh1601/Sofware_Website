import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyHtml = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why HTML & CSS Web Designing</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Dreamz HTML and CSS Web Designing Company is your premier choice for web design and development, and for good reason. Our dedicated team of experts boasts unparalleled proficiency in HTML and CSS, ensuring that every website we create is visually captivating and functionally flawless. What truly sets us apart is our unwavering commitment to customization. We understand that every project is unique, and we tailor our approach to meet your specific needs and goals. Trust Dreamz to bring your vision to life with creativity, expertise, and unparalleled attention to detail.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyHtml