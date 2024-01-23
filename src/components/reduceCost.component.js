import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as RedCost } from '../assets/reduceCost.svg';
import './card.css'
const ReduceCost = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <RedCost className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Reduce Cost Build Faster</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">API development is important because it enables companies to share data and services with other applications and users. APIs are essential for efficient and effective communication between different applications and services, allowing them to interact and exchange data in an organized and secure manner. They also help to streamline the development process by allowing developers to quickly and easily access the resources they need.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default ReduceCost