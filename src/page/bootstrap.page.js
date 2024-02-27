import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import BootstrapMainTitle from "../components/bootstrap.maintitle";
import WhyBootStrap from "../components/bootstrap.why";
import BootstrapFeature from "../components/bootstrap.features";

const BootstrapPage = () => {
    return (
        <>
        <Navbar />
        <BootstrapMainTitle />
        <br></br>
        <WhyBootStrap />
        <br></br>
        <br></br>
        <BootstrapFeature />
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default BootstrapPage;