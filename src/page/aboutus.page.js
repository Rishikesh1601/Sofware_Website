import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import CounterComponent from "../components/Counter.component";
import TeamAgumentation from "../components/Teamagumentation";
import AboutUsMainTitle from "../components/aboutus.mainTitle.component";
import WhyAbout from "../components/whyabout.component";
import AboutLC from "../components/aboutLC";
// import AboutCapabilities from "../components/about.capabilities";

const AboutUsPage = () => {
    return (
        <>
        <Navbar />
        <AboutUsMainTitle />
        <br></br>
        <WhyAbout />
        <br></br>
        <br></br>
        {/* <AboutCapabilities /> */}
        <AboutLC />
        <br></br>
        <br></br>
        <TeamAgumentation />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default AboutUsPage