import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import IonicMainTitle from "../components/ionic.maintitle";
import WhyIonic from "../components/ionic.why";
import IonicCapabilities from "../components/ionic.capabilities";
import IonicFeature from "../components/ionic.feature";

const IonicPage = () => {
    return(
        <>
        <Navbar />
        <IonicMainTitle />
        <br></br>
        <WhyIonic />
        <br></br>
        <br></br>
        <IonicCapabilities />
        <br></br>
        <br></br>
        <IonicFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default IonicPage;