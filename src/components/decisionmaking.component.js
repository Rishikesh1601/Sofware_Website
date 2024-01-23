import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as DecisionMake } from '../assets/decisionMaking.svg';
import './card.css'
const DecisionMaking = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <DecisionMake className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Drive faster and better decision-making</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">Dreamz Artificial Intelligence for IT Operations Drive faster and better decision-making with AI-driven IT operations. Dreamz AI helps IT teams make better decisions by utilizing AI-driven insights to automate and optimize IT operations. Our solutions provide IT teams with real-time visibility into their IT environment, enabling them to make faster, more informed decisions. Additionally, our predictive analytics capabilities can help anticipate and prevent IT incidents before they occur, enabling IT teams to proactively address IT issues.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default DecisionMaking;