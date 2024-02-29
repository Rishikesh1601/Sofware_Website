import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyMSsql = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Microsoft SQL Server</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Dreamz MS SQL Database Engine is a cloud-based relational database engine built on the Microsoft SQL Server platform. It offers enhanced scalability, security, and reliability for managing large datasets. With support for the latest SQL Server version, it ensures high-performance query processing and accurate data storage. Ideal for applications requiring distributed data management, Dreamz MS SQL Database Engine provides secure storage and efficient query processing for seamless performance.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyMSsql