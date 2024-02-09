import React from "react";
import Navbar from "../components/Navbar";
import MobileDevelopmentMainTitle from "../components/mobiledevelopment.mainTitle.component";
import WhyMobileDevelopment from "../components/whymobiledevelopment";
import MobileAppCapabilities from "../components/mobileappcapabilities.component";
import MDLC from "../components/MDLC.component";
import OurProjectComponent from "../components/OurProject.component";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";

const MobileDevelopmentPage = () => {
    return(
        <>
        <Navbar />
        <MobileDevelopmentMainTitle />
        <br></br>
        <WhyMobileDevelopment />
        <br></br>
        <br></br>
        <MobileAppCapabilities />
        <br></br>
        <br></br>
        <MDLC />
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

export default MobileDevelopmentPage;