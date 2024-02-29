import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import NodeMainTitle from "../components/node.maintitle";
import WhyNode from "../components/node.why";
import NodeCapabilities from "../components/node.capabilities";
import NodeFeatures from "../components/node.features";

const NodePage = () => {
    return(
        <>
        <Navbar />
        <NodeMainTitle />
        <br></br>
        <WhyNode />
        <br></br>
        <br></br>
        <NodeCapabilities />
        <br></br>
        <br></br>
        <NodeFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default NodePage