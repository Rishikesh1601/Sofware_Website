import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import CounterComponent from "../components/Counter.component";
import OurProjectComponent from "../components/OurProject.component";
import DevOpsMainTitle from "../components/devops.mainTitle.component";
import WhyDevops from "../components/whydevops";
import DevOpsCapabilities from "../components/devops.capabilities.component";
import DevopstoDeliver from "../components/DEVOPSDLC";

const DevOpsPage = () => {
    return (
        <>
        <Navbar />
        <DevOpsMainTitle />
        <br></br>
        <WhyDevops />
        <br></br>
        <br></br>
        <DevOpsCapabilities />
        <br></br>
        <br></br>
        <DevopstoDeliver />
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

export default DevOpsPage