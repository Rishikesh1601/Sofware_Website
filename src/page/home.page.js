import React from 'react'
import Navbar from '../components/Navbar';
import MainTitle from '../components/MainTitle';
import AboutusComponent from '../components/aboutus.component';
// import EndToEndComponent from '../components/Endtoendproducts.component';
import TeamAgumentation from '../components/Teamagumentation';
import CounterComponent from '../components/Counter.component';
import OurProjectComponent from '../components/OurProject.component';
import CompaniesSlider from '../components/Companiesslider';
import Footer from '../components/Footer.component';
// import EndLC from '../components/endLC';
import Accordion from '../components/mainPage.accordian';
import Testimonial from '../components/testimonials.component';
import TestimonialComponent from '../components/testimonials.component';
import TechnologiesAccordion from '../components/technologies.accordian';
// import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
    <Navbar />
    <MainTitle />
    <br></br>
    <AboutusComponent />
    <br></br>
    <br></br>
    {/* <EndToEndComponent /> */}
    {/* <EndLC /> */}
    <Accordion />
    <br></br>
    <br></br>
    <TeamAgumentation />
    <br></br>
    <br></br>
    <CounterComponent />
    {/* <br></br>
    <br></br>
    <OurProjectComponent /> */}
    <br></br>
    <br></br>
    <TechnologiesAccordion />
    <br></br>
    <br></br>
    <CompaniesSlider />
    <br></br>
    <br></br>
    <TestimonialComponent />
    <br></br>
    <Footer />
    </>
  )
}

export default HomePage;