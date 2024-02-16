import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import CounterComponent from "../components/Counter.component";
import OurProjectComponent from "../components/OurProject.component";
import AIopsMainTitle from "../components/aiops.mainTitle.component";
import DecisionMaking from "../components/decisionmaking.component";
import AIopsCapabilities from "../components/aiops.capabilities.component";

const AiopsPage = () => {
    return(
        <>
        <Navbar />
        <AIopsMainTitle />
        <br></br>
        <DecisionMaking />
        <br></br>
        <br></br>
        <AIopsCapabilities />
        {/* <br></br>
        <br></br>
        <OurProjectComponent /> */}
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default AiopsPage;