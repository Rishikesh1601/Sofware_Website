import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import APIDevelopmentMainTitle from "../components/apidevelopment.mainTitle.component";
import ReduceCost from "../components/reduceCost.component";
import CounterComponent from "../components/Counter.component";
import ApiCapabilities from "../components/api.capabilities.component";
import APIDLC from "../components/APIDLC";
import OurProjectComponent from "../components/OurProject.component";


const ApiDevelopmentPage = () => {
    return(
        <>
        <Navbar />
        <APIDevelopmentMainTitle />
        <br></br>
        <ReduceCost />
        <br></br>
        <br></br>
        <ApiCapabilities />
        <br></br>
        <br></br>
        <APIDLC />
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

export default ApiDevelopmentPage;