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
                <h2 className='aboutusSubTitle'>Stop Recruitment, Start Developing</h2>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus">Hire a dedicated development team from Dreamz to design, build, deliver, and scale your idea. Hire highly trained skill experts developers, designer & tester and set up your dedicated development team quickly and easily. Meet changing needs of your enterprise IT team or work on your unique idea from scratch by hiring qualified and experienced developers. Hiring a dedicated development team saves cost, speeds up the time-to-market of apps, and makes hiring much easier and faster with access to top talents worldwide.</p>
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