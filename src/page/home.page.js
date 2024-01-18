import React from 'react'
import Navbar from '../components/Navbar';
import MainTitle from '../components/MainTitle';
import AboutusComponent from '../components/aboutus.component';
import EndToEndComponent from '../components/Endtoendproducts.component';
import TeamAgumentation from '../components/Teamagumentation';
import CounterComponent from '../components/Counter.component';
import OurProjectComponent from '../components/OurProject.component';
import CompaniesSlider from '../components/Companiesslider';
import Footer from '../components/Footer.component';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <MainTitle />
    <AboutusComponent />
    <br></br>
    <br></br>
    <EndToEndComponent />
    <br></br>
    <br></br>
    <TeamAgumentation />
    <br></br>
    <br></br>
    <CounterComponent />
    <br></br>
    <br></br>
    <OurProjectComponent />
    <br></br>
    <br></br>
    <CompaniesSlider />
    <br></br>
    <Footer />
    </>
  )
}

export default HomePage;