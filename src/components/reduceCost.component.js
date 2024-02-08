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
                <p class="mb-5 text-lg text-gray-400 paraAboutus  text-justify">API development is crucial for companies seeking to reduce costs and expedite development. APIs facilitate seamless data and service sharing among applications and users, fostering efficient communication. They enable organized and secure interaction and data exchange between different applications and services. Additionally, APIs streamline the development process by granting developers rapid and convenient access to necessary resources.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default ReduceCost