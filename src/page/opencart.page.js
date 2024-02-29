import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import OpenCartMainTitle from "../components/opencart.maintitle";
import WhyOpenCart from "../components/opencart.why";
import OpenCartCapabilities from "../components/opencart.capabilities";
import OpenCartFeatures from "../components/opencart.features";

const OpenCartPage = () => {
    return (
        <>
        <Navbar />
        <OpenCartMainTitle />
        <br></br>
        <WhyOpenCart />
        <br></br>
        <br></br>
        <OpenCartCapabilities />
        <br></br>
        <br></br>
        <OpenCartFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default OpenCartPage