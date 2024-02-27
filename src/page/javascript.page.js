import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import WhyJavascript from "../components/javascript.why";
import JavascriptMainTitle from "../components/javascript.mainTitle";
import JavascriptFeature from "../components/javascript.features";

const JavascriptPage = () => {
    return(
        <>
        <Navbar />
        <JavascriptMainTitle />
        <br></br>
        <WhyJavascript />
        <br></br>
        <br></br>
        <JavascriptFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default JavascriptPage