import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import FlutterMainTitle from "../components/flutter.maintitle";
import WhyFlutter from "../components/flutter.why";
import FlutterCapabilities from "../components/flutter.capabilities";
import FlutterFeature from "../components/flutter.features";

const FlutterPage = () => {
    return(
        <>
        <Navbar />
        <FlutterMainTitle />
        <br></br>
        <WhyFlutter />
        <br></br>
        <br></br>
        <FlutterCapabilities />
        <br></br>
        <br></br>
        <FlutterFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default FlutterPage