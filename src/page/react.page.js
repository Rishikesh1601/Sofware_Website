import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import ReactMainTitle from "../components/react.maintitle";
import WhyReact from "../components/react.why";
import ReactCapabilities from "../components/react.capabilities";
import ReactFeature from "../components/react.features";

const ReactPage = () => {
    return(
        <>
        <Navbar />
        <ReactMainTitle />
        <br></br>
        <WhyReact />
        <br></br>
        <br></br>
        <ReactCapabilities />
        <br></br>
        <br></br>
        <ReactFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default ReactPage