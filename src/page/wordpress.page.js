import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import WordPressMainTitle from "../components/wordpress.maintitle";
import WhyWordPress from "../components/wordpress.why";
import WordPressCapabilities from "../components/wordpress.capabilities";
import WordPressFeature from "../components/wordpress.features";

const WordpressPage = () => {
    return (
        <>
        <Navbar />
        <WordPressMainTitle />
        <br></br>
        <WhyWordPress />
        <br></br>
        <br></br>
        <WordPressCapabilities />
        <br></br>
        <br></br>
        <WordPressFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default WordpressPage