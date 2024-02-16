import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import SoftwareTestingMainTitle from "../components/softwaretesting.mainTitle.component";
import WhySoftwareTesting from "../components/whysoftwaretesting.component";
import SoftwareTestingCapabilities from "../components/softwaretesting.capabilities.component";
import STLC from "../components/STLC";
import OurProjectComponent from "../components/OurProject.component";

const SoftwareTestingPage = () => {
    return (
        <>
        <Navbar />
        <SoftwareTestingMainTitle />
        <br></br>
        <WhySoftwareTesting />
        <br></br>
        <br></br>
        <SoftwareTestingCapabilities />
        <br></br>
        <br></br>
        <STLC />
        {/* <br></br>
        <br></br>
        <OurProjectComponent /> */}
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default SoftwareTestingPage;