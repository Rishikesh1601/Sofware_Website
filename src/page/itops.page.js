import React from "react";
import Navbar from "../components/Navbar";
import OurProjectComponent from "../components/OurProject.component";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import ITopsMainTitle from "../components/itops.mainTitle.component";
import WhyItOps from "../components/whyitops.component";
import ItOpsCapabilities from "../components/itops.capabilities.component";
import ITLC from "../components/ITLC";

const ItopsPage = () => {
    return (
        <>
        <Navbar />
        <ITopsMainTitle />
        <br></br>
        <WhyItOps />
        <br></br>
        <br></br>
        {/* <AIopsCapabilities /> */}
        <ItOpsCapabilities />
        <br></br>
        <br></br>
        <ITLC />
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

export default ItopsPage