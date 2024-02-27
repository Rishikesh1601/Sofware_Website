import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import HTMLMainTitle from "../components/html.maintitle";
import WhyHtml from "../components/html.why";
import HTMLFeature from "../components/html.feature";

const HtmlPage = () => {
    return (
        <>
        <Navbar />
        <HTMLMainTitle />
        <br></br>
        <WhyHtml />
        <br></br>
        <br></br>
        <HTMLFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default HtmlPage