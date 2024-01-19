import React from 'react'
import Navbar from '../components/Navbar'
import WebsiteDevelopmentMainTitle from '../components/WebsiteDevelopment.mainTitle.component'
import WhyWebDevelopment from '../components/whywebdevelopment'
import WebDevCapabilities from '../components/ourwebsitecapabilities.component'
import SDLC from '../components/SDLC.component'
import OurProjectComponent from '../components/OurProject.component'
import CounterComponent from '../components/Counter.component'
import Footer from '../components/Footer.component'

const WebsiteDevelopment = () => {
  return (
    <>
    <Navbar />
    <WebsiteDevelopmentMainTitle/>
    <WhyWebDevelopment />
    <br></br>
    <br></br>
    <WebDevCapabilities />
    <br></br>
    <br></br>
    <SDLC />
    <br></br>
    <br></br>
    <OurProjectComponent />
    <br></br>
    <br></br>
    <CounterComponent />
    <br></br>
    <Footer />
    </>
  )
}

export default WebsiteDevelopment