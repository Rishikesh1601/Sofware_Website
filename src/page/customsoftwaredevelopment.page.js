import React from 'react'
import Navbar from '../components/Navbar'
import CustomSoftwareDevelopmentMainTitle from '../components/customsoftwaredevelopment.maintitle.component'
import WhyCustomSoftware from '../components/whycustomsoftware.component'
import CounterComponent from '../components/Counter.component'
import Footer from '../components/Footer.component'
import OurProjectComponent from '../components/OurProject.component'
import SDLC from '../components/SDLC.component'
import OurCapabilities from '../components/ourcapabilities.component'

function CustomSoftwareDevelopmentPage() {
  return (
    <>
    <Navbar />
    <CustomSoftwareDevelopmentMainTitle />
    <br></br>
    <br></br>
    <WhyCustomSoftware />
    <br></br>
    <br></br>
    <OurCapabilities />

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

export default CustomSoftwareDevelopmentPage