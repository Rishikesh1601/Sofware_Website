import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyBlockChainji } from '../assets/Images/why crypto.svg';
import './card.css'
const WhyBlockChain = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyBlockChainji className='w-full h-96 z-10'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Fuel your business with blockchain technology</h6>
                </div>
                <p class="mb-5 text-lg text-justify text-gray-400 paraAboutus">Blockchain technology can be used to fuel businesses in a variety of ways. Some of the most common applications. Blockchain technology can be used to reduce the costs and complexity of financial transactions, allowing businesses to quickly and securely transfer money and digital assets. Enhancing supply chain management Companies can leverage blockchain technology to increase transparency and security in the supply chain, providing better visibility and traceability of goods throughout the process. Creating digital identities Organizations can create digital identities on the blockchain, allowing customers to securely access services and data. Enabling smart contracts Smart contracts can be used to automate the execution of contracts, reducing the time and cost associated with manual processes.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyBlockChain