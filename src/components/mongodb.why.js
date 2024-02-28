import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/Images/why.svg';
import './card.css'
const WhyMongoDB = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Oracle Database Administration</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Dreamz utilizes best practices and industry standards in its database development. The company also offers custom training and certification courses for MongoDB. With its skilled and experienced team, Dreamz is able to provide tailored support solutions and scalable solutions for its customers. Dreamz is an analytics platform that provides powerful insights and data analysis capabilities to help businesses make informed decisions. Dreamz uses MongoDB as its database to store and retrieve data quickly and efficiently. MongoDB is a document-oriented NoSQL database that utilizes JSON-like documents with schema to store data. Overall, MongoDB is a great choice for Dreamz and provides the platform with the features and performance it needs to help businesses make informed decisions. It is a powerful database technology that is reliable, fast, and secure.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyMongoDB