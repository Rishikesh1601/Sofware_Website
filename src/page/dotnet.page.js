import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import DotNetMainTitle from "../components/dotnet.maintitle";
import WhyDotNet from "../components/dotnet.why";
import DotNetCapabilities from "../components/dotnet.capabilities";
import DotNetFeature from "../components/dotnet.features";

const DotnetPage = () => {
    return(
        <>
        <Navbar />
        <DotNetMainTitle />
        <br></br>
        <WhyDotNet />
        <br></br>
        <br></br>
        <DotNetCapabilities />
        <br></br>
        <br></br>
        <DotNetFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default DotnetPage