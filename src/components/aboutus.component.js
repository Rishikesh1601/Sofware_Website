import React from 'react'
import { ReactComponent as AboutUsPng } from '../assets/Images/about us.svg';
import './card.css'
function AboutusComponent() {
  return (
    // <!--about start-->

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <AboutUsPng className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>About Us</h6>
                <h2 className='aboutusSubTitle'>Unleashing Software Brilliance</h2>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">Dreamz: Your global IT partner for scalable solutions. With 40+ dedicated consultants across two centers, we bring 13+ years of experience and commitment to quality. Serving 800+ clients in 10+ countries, Dreamz excels in delivering innovative solutions for businesses of all sizes, from small ventures to Fortune 500. Our team stays ahead in evolving technologies, offering cutting-edge business solutions in custom software development, business intelligence, and scalable applications. Elevate your digital presence with Dreamz – where innovation meets excellence.</p>
                <a class="themeht-btn" href="/aboutUs">Explore More</a>
            </div>
            </div>
        </div>
        </section>

  )
}

export default AboutusComponent