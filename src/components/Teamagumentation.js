import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import {ReactComponent as TeamAug} from '../assets/teamAug.svg'
import './card.css'
function TeamAgumentation() {
  return (
    // <!--about start-->

        <section className='mx-5 mt-11 teamAugComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center teamAugFlex">
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Team Augmentation</h6>
                <h2 className='aboutusSubTitle'>Unlock Efficiency, Embrace Development</h2>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">Elevate your projects with Dreamz's dedicated development team. Hire skilled developers, designers, and testers to swiftly design, build, deliver, and scale your idea. Tailor your team to meet the changing needs of your enterprise IT or bring your unique concept to life from scratch. Save costs, accelerate app time-to-market, and streamline hiring with our qualified and experienced professionals. Stop recruitment hassles and start developing with Dreamz's dedicated teams.</p>
            </div>
            <div class="lg:w-1/2 md:w-full mobilewaliTeamAugImage">
                <TeamAug className='w-full h-96'/>
            </div>
            
            </div>
        </div>
        </section>

  )
}

export default TeamAgumentation