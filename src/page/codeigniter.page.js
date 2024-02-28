import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import CodeIgniterMainTitle from "../components/codeigniter.maintitle";
import WhyCodeIgniter from "../components/codeigniter.why";
import CodeIgniterCapabilities from "../components/codeigniter.capabilities";
import CodeIgniterFeature from "../components/codeigniter.features";

const CodeIgniterPage = () => {
    return (
        <>
        <Navbar />
        <CodeIgniterMainTitle />
        <br></br>
        <WhyCodeIgniter />
        <br></br>
        <br></br>
        <CodeIgniterCapabilities />
        <br></br>
        <br></br>
        <CodeIgniterFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default CodeIgniterPage