import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import AngularMainTitle from "../components/angular.mainTitle";
import WhyAngular from "../components/angular.why";
import AngularCapabilities from "../components/angular.capabilities";
import AngularFeatures from "../components/angular.features";

const AngularPage = () => {
    return(
        <>
        <Navbar />
        <AngularMainTitle />
        <br></br>
        <WhyAngular />
        <br></br>
        <br></br>
        <AngularCapabilities />
        <br></br>
        <br></br>
        <AngularFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default AngularPage