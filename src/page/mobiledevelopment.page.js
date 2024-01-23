import React from "react";
import Navbar from "../components/Navbar";
import MobileDevelopmentMainTitle from "../components/mobiledevelopment.mainTitle.component";
import WhyMobileDevelopment from "../components/whymobiledevelopment";
import MobileAppCapabilities from "../components/mobileappcapabilities.component";

const MobileDevelopmentPage = () => {
    return(
        <>
        <Navbar />
        <MobileDevelopmentMainTitle />
        <WhyMobileDevelopment />
        <br></br>
        <br></br>
        <MobileAppCapabilities />
        </>
    )
}

export default MobileDevelopmentPage;